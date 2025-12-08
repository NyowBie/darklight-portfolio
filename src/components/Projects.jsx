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
        year: "2023"
    },
    {
        title: "GABAY SIM",
        subtitle: "Disaster Preparedness Simulator",
        role: "Scripting Logic",
        desc: "An educational Roblox game simulation teaching students proper disaster response protocols through interactive gameplay scenarios.",
        tech: ["Lua", "Roblox Studio"],
        year: "2025"
    }
];

const projects = rawProjects.sort((a, b) => a.title.localeCompare(b.title));

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
                <div className="p-3 rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <Briefcase size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Experience</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setHoveredProject(idx)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 overflow-hidden active:scale-[0.98]
                            ${hoveredProject === idx
                                ? 'bg-white/10 border-cyan-500/50 shadow-[0_0_50px_rgba(34,211,238,0.15)] scale-[1.02] z-10'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                            } backdrop-blur-xl`}
                    >
                        {/* Gradient Glow Effect on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-500 ${hoveredProject === idx ? 'opacity-100' : ''}`}></div>

                        {/* Decorative Top Right Corner */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl transition-opacity duration-500 ${hoveredProject === idx ? 'opacity-100' : 'opacity-0'}`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-1 transition-colors duration-300 ${hoveredProject === idx ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white' : 'text-slate-100'}`}>
                                        {p.title}
                                    </h3>
                                    <p className={`text-sm font-medium transition-colors duration-300 ${hoveredProject === idx ? 'text-cyan-200' : 'text-slate-400'}`}>
                                        {p.subtitle}
                                    </p>
                                </div>
                                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full border border-white/10 bg-slate-900/50 text-slate-400">
                                    {p.year}
                                </span>
                            </div>

                            <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
                                <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider ${hoveredProject === idx ? 'bg-violet-500/20 text-violet-300' : 'bg-slate-800 text-slate-500'}`}>
                                    {p.role}
                                </span>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tech.map((t, tIdx) => (
                                    <span key={tIdx} className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-300 ${hoveredProject === idx
                                        ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30'
                                        : 'bg-slate-800/50 text-slate-500 border-white/5'
                                        }`}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
