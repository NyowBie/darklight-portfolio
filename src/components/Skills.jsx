import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Terminal, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const skillCategories = [
        {
            title: "Hardware & IT Support",
            icon: Layers,
            skills: [
                { name: "PC Assembly & Upgrades", level: "Intermediate" },
                { name: "Basic Hardware Troubleshooting", level: "Beginner" },
                { name: "OS Installation & Reformatting", level: "Intermediate" },
                { name: "Basic Network Setup", level: "Beginner" },
            ]
        },
        {
            title: "Frontend Development",
            icon: Code,
            skills: [
                { name: "React", level: "Intermediate" },
                { name: "HTML & CSS", level: "Intermediate" },
                { name: "TailwindCSS", level: "Beginner" },
                { name: "JavaScript", level: "Beginner" },
                { name: "Framer Motion", level: "Beginner" },
            ]
        },
        {
            title: "Backend Development",
            icon: Server,
            skills: [
                { name: "PHP", level: "Intermediate" },
                { name: "MySQL", level: "Intermediate" },
                { name: "Firebase", level: "Intermediate" },
                { name: "Node.js", level: "Beginner" },
                { name: "Express", level: "Beginner" },
            ]
        },
        {
            title: "Tools & Others",
            icon: Terminal,
            skills: [
                { name: "Git", level: "Intermediate" },
                { name: "GitHub", level: "Intermediate" },
                { name: "Postman", level: "Beginner" },
                { name: "Vercel", level: "Intermediate" },
                { name: "Figma", level: "Beginner" },
                { name: "VS Code", level: "Beginner" },
            ]
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    };

    const getWidth = (level) => {
        switch (level) {
            case 'Expert': return 'w-full';
            case 'Advanced': return 'w-3/4';
            case 'Intermediate': return 'w-1/2';
            case 'Beginner': return 'w-1/4';
            default: return 'w-1/2';
        }
    };

    return (
        <section id="skills" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-lime-400 font-mono font-medium mb-4 tracking-wide">My Expertise</h2>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Technical Skills</h2>
                </div>

                {/* Carousel Container */}
                <div className="relative h-[500px] flex items-center justify-center">

                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 lg:left-10 z-30 p-3 rounded-full bg-slate-800/80 text-white hover:bg-lime-500 hover:text-black transition-all border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 lg:right-10 z-30 p-3 rounded-full bg-slate-800/80 text-white hover:bg-lime-500 hover:text-black transition-all border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards */}
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {skillCategories.map((category, index) => {
                                // Calculate position relative to active index
                                let offset = index - activeIndex;
                                // Handle cyclic wrap for infinite feeling visually (optional, but requested layout implies visible sides)
                                // Standard Carousel Logic: Just show 3 items: Prev, Active, Next.

                                // Simplified approach: Render all, but animate based on 'active'. 
                                // Actually, standard AnimatePresence is better for entering/exiting specific keys.
                                // For "PSP Style" (fixed center, sliding list), we need to render the whole list relative to center.

                                // Let's try 3D transformation based on offset
                                const isCenter = index === activeIndex;
                                const isPrev = index === (activeIndex - 1 + skillCategories.length) % skillCategories.length;
                                const isNext = index === (activeIndex + 1) % skillCategories.length;

                                // Only render if relevant (prev, center, next)
                                // or render all but heavily hidden?
                                // Let's just render all to allow smooth circular movement if we want, or simple conditional.
                                // "Side cards are only partially visible".

                                if (!isCenter && !isPrev && !isNext) return null;

                                let xOffset = '0%';
                                let scale = 1;
                                let opacity = 1;
                                let zIndex = 0;
                                let blur = '0px';

                                if (isCenter) {
                                    xOffset = '0%';
                                    scale = 1.05;
                                    opacity = 1;
                                    zIndex = 20;
                                    blur = '0px';
                                } else if (isPrev) {
                                    xOffset = '-105%'; // Move to left
                                    scale = 0.85;
                                    opacity = 0.5;
                                    zIndex = 10;
                                    blur = '4px';
                                } else if (isNext) {
                                    xOffset = '105%'; // Move to right
                                    scale = 0.85;
                                    opacity = 0.5;
                                    zIndex = 10;
                                    blur = '4px';
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ x: index > activeIndex ? '100%' : '-100%', opacity: 0 }}
                                        animate={{ x: xOffset, scale, opacity, filter: `blur(${blur})` }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ zIndex, position: 'absolute', width: '100%', maxWidth: '350px' }}
                                        className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = offset.x;
                                            if (swipe < -100) nextSlide();
                                            else if (swipe > 100) prevSlide();
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                                            <category.icon className="text-cyan-400" size={24} />
                                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                        </div>

                                        <div className="space-y-6">
                                            {category.skills.map((skill, sIdx) => (
                                                <div key={sIdx}>
                                                    <div className="flex justify-between items-end mb-2">
                                                        <span className="text-slate-300 font-medium">{skill.name}</span>
                                                        <span className="text-xs text-cyan-500 font-mono">{skill.level}</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all duration-1000 ${skill.level === 'Expert' ? 'bg-lime-500' : 'bg-cyan-500'}`}
                                                            style={{ width: getWidth(skill.level).replace('w-', '').replace('/', '%') === 'full' ? '100%' : (skill.level === 'Advanced' ? '75%' : (skill.level === 'Intermediate' ? '50%' : '25%')) }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-0 flex gap-2">
                        {skillCategories.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-lime-500' : 'bg-slate-700 hover:bg-slate-500'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
