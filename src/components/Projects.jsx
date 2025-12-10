import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Briefcase, X, MessageSquare } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

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
            tech: ["React", "PHP", "MySQL", "MapBox"],
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
        <section id="projects" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 relative">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-lime-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-lime-500/10"
                            >
                                {/* Top Accent Bar on Hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
                                            {project.category}
                                        </span>
                                        <div className="bg-slate-800 p-2 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                                            <Briefcase size={20} />
                                        </div>
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

                                    <div className="pt-6 border-t border-white/5 mt-auto">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="w-full py-4 bg-slate-800 hover:bg-lime-500 hover:text-black text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                                        >
                                            View Project
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                            />

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-lime-500/10 text-lime-400 rounded-full flex items-center justify-center mb-6 border border-lime-500/20">
                                        <MessageSquare size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">Want to see it in action?</h3>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        I'd love to show you the live demo or full output of <b>{selectedProject.title}</b>. Send me a DM and let's chat!
                                    </p>

                                    <div className="flex gap-4 text-sm font-mono text-slate-500 mb-8">
                                        <span>Email</span>
                                        <span>•</span>
                                        <span>Messenger</span>
                                        <span>•</span>
                                        <span>Discord</span>
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
