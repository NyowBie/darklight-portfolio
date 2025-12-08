import React, { useEffect, useState, useRef } from 'react';
import { Briefcase } from 'lucide-react';

// Raw data
const rawProjects = [
    {
        title: "KeyDeck",
        subtitle: "Multi-Layout Keyboard Tester",
        role: "Frontend Developer",
        desc: "A comprehensive web application for testing mechanical keyboards. Features real-time key detection, sound detections, and support for multiple layouts (60%, 65%, TKL, etc.).",
        tech: ["React", "Vite", "Tailwind CSS", "Firebase"],
        year: "2025"
    },
    {
        title: "ALERTO MNL",
        subtitle: "Crime & Incident Reporting System",
        role: "Full Stack Developer",
        desc: "A community safety platform allowing residents to report incidents to local authorities. Includes a dashboard for police to track and respond to reports in real-time.",
        tech: ["React", "PHP", "MySQL", "AwardSpace"],
        year: "2025"
    },
    {
        title: "Online Document Request",
        subtitle: "PLM Student Services",
        role: "Backend Developer",
        desc: "Automated the manual document request process for students. Built a CRUD system for admins to manage and process requests efficiently.",
        tech: ["PHP", "MySQL", "Bootstrap"],
        year: "2024"
    },
    {
        title: "GABAY SIM",
        subtitle: "Disaster Preparedness Simulator",
        role: "Scripting Logic",
        desc: "An educational Roblox game simulation teaching students proper disaster response protocols through interactive gameplay scenarios.",
        tech: ["Lua", "Roblox Studio"],
        year: "2024"
    }
];

const projects = rawProjects.sort((a, b) => a.title.localeCompare(b.title));

const Projects = () => {

    const [activeProject, setActiveProject] = useState(0);
    const projectRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Focus on the center of the screen
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveProject(index);
                }
            });
        }, observerOptions);

        projectRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                <Briefcase size={24} className="text-cyan-400" />
                Project Experience
            </h2>

            <div className="space-y-12">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        ref={el => projectRefs.current[idx] = el}
                        data-index={idx}
                        onMouseEnter={() => setActiveProject(idx)}
                        className={`group relative pl-8 border-l transition-all duration-500 ease-out py-2 ${activeProject === idx
                                ? 'border-cyan-500 opacity-100 scale-[1.02]'
                                : 'border-white/10 opacity-50 hover:opacity-100 hover:border-cyan-500/50'
                            }`}
                    >
                        {/* Timeline Dot (The "Pin") */}
                        <div className={`absolute -left-[5px] top-6 w-[9px] h-[9px] rounded-full transition-all duration-500 ${activeProject === idx
                                ? 'bg-cyan-400 border-none shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-125'
                                : 'bg-slate-900 border-2 border-slate-600 group-hover:border-cyan-400 group-hover:scale-110'
                            }`}></div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${activeProject === idx ? 'text-cyan-400' : 'text-slate-100 group-hover:text-cyan-200'
                                }`}>
                                {p.title}
                            </h3>
                            <span className={`text-xs font-bold font-mono px-2 py-1 rounded border transition-colors ${activeProject === idx
                                    ? 'text-cyan-400 bg-cyan-950/40 border-cyan-500/40'
                                    : 'text-slate-500 bg-transparent border-transparent group-hover:text-cyan-400/70'
                                }`}>
                                {p.year}
                            </span>
                        </div>

                        <p className={`font-medium text-sm mb-3 transition-colors ${activeProject === idx ? 'text-violet-400' : 'text-slate-500 group-hover:text-violet-400/80'
                            }`}>
                            {p.subtitle} <span className="opacity-50 mx-2">//</span> {p.role}
                        </p>

                        <p className={`leading-relaxed mb-4 text-sm md:text-base transition-colors ${activeProject === idx ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-400'
                            }`}>
                            {p.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {p.tech.map(t => (
                                <span key={t} className={`text-xs font-medium font-mono px-2 py-1 rounded transition-colors ${activeProject === idx
                                        ? 'text-cyan-300 bg-cyan-950/30'
                                        : 'text-slate-600 bg-transparent group-hover:text-slate-400'
                                    }`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
