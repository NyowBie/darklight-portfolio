import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        // Configuration for Light Theme
        const STAR_COUNT = 300;
        const NEBULA_COUNT = 12;

        let stars = [];
        let nebulas = [];

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5,
                    opacity: Math.random() * 0.5, // Softer opacity for light theme
                    speed: Math.random() * 0.05 + 0.02,
                    color: Math.random() > 0.5 ? '#94a3b8' : '#cbd5e1' // Slate-400/300
                });
            }

            nebulas = [];
            for (let i = 0; i < NEBULA_COUNT; i++) {
                nebulas.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 400 + 300,
                    // Very subtle pastel gradients
                    color: i % 2 === 0
                        ? `hsla(${220 + Math.random() * 40}, 70%, 90%, 0.4)` // Very light Blue/Indigo
                        : `hsla(${260 + Math.random() * 40}, 70%, 90%, 0.4)`, // Very light Purple
                    dx: (Math.random() - 0.5) * 0.2,
                    dy: (Math.random() - 0.5) * 0.2
                });
            }
        };

        const render = () => {
            ctx.fillStyle = '#f8fafc'; // Slate-50 background
            ctx.fillRect(0, 0, width, height);

            // Draw Nebulas (Soft Clouds)
            nebulas.forEach(neb => {
                const gradient = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.radius);
                gradient.addColorStop(0, neb.color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(neb.x, neb.y, neb.radius, 0, Math.PI * 2);
                ctx.fill();

                // Move slightly
                neb.x += neb.dx;
                neb.y += neb.dy;

                // Bounce off edges gently
                if (neb.x < -neb.radius) neb.x = width + neb.radius;
                if (neb.x > width + neb.radius) neb.x = -neb.radius;
                if (neb.y < -neb.radius) neb.y = height + neb.radius;
                if (neb.y > height + neb.radius) neb.y = -neb.radius;
            });

            // Draw Stars (Particles)
            stars.forEach(star => {
                ctx.fillStyle = star.color;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        init();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-50 pointer-events-none"
        />
    );
};

export default GalaxyBackground;
