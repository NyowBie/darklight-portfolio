import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Briefcase } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "KeyDeck",
            category: "Web Apps",
            desc: "A progressive web app for testing custom keyboard layouts. Features switch modeling, keycode detection, and layout visualization.",
            tech: ["React", "Vite", "TailwindCSS"],
            year: "2025",
            links: { live: "#", repo: "#" }
        },
        {
            title: "ALERTO MNL",
            category: "Systems",
            desc: "A comprehensive crime and incident reporting system designed for Manila. Includes real-time mapping, user reporting, and admin dashboard.",
            tech: ["React", "Firebase", "Leaflet"],
            year: "2025",
            links: { live: "#", repo: "#" }
        },
        {
            title: "Online Document Request",
            category: "Systems",
            desc: "Automated student document request system aimed at reducing queue times and improving Registrar office efficiency.",
            tech: ["PHP", "MySQL", "Bootstrap"],
            year: "2023",
            links: { live: "#", repo: "#" }
        },
        {
            title: "GABAY SIM",
            category: "Games",
            desc: "An educational Roblox simulation game focused on disaster preparedness and survival during earthquakes and fires.",
            tech: ["Lua", "Roblox Studio"],
            year: "2025",
            links: { live: "#", repo: "#" }
        }
    ];

    const filters = ['All', 'Web Apps', 'Systems', 'Games'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-lime-400 font-mono font-medium mb-4 tracking-wide">Selected Works</h2>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Featured Projects</h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800">
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${filter === f
                                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-white/10'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-colors flex flex-col h-full"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-slate-800 p-3 rounded-lg text-cyan-400 group-hover:text-lime-400 transition-colors">
                                            <Briefcase size={24} />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                                            {project.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs text-cyan-300 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-lime-400 transition-colors">
                                            View Project <ArrowRight size={16} />
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-colors ml-auto">
                                            <Github size={16} /> Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
