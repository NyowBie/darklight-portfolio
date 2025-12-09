import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, MapPin } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Award, value: "2025", label: "Graduating Class", sub: "BS Info Tech", color: "text-cyan-400", border: "group-hover:border-cyan-500/50", bg: "group-hover:bg-cyan-500/10" },
        { icon: BookOpen, value: "3+", label: "Major Projects", sub: "Completed", color: "text-violet-400", border: "group-hover:border-violet-500/50", bg: "group-hover:bg-violet-500/10" },
        { icon: Heart, value: "100%", label: "Dedication", sub: "To Learning", color: "text-pink-400", border: "group-hover:border-pink-500/50", bg: "group-hover:bg-pink-500/10" },
        { icon: MapPin, value: "PH", label: "Based in", sub: "Manila", color: "text-emerald-400", border: "group-hover:border-emerald-500/50", bg: "group-hover:bg-emerald-500/10" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg leading-relaxed text-slate-300 font-sans"
                    >
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm shadow-xl">
                            <p className="mb-4">
                                I am a passionate developer driven by the challenge of creating efficient, scalable, and visually appealing web applications. With a background in both design and engineering, I bridge the gap between <span className="text-cyan-400 font-bold">aesthetics</span> and <span className="text-violet-400 font-bold">functionality</span>.
                            </p>
                            <p className="font-mono text-sm text-slate-400 border-l-2 border-cyan-500/50 pl-4 py-1 bg-cyan-950/20 rounded-r-lg">
                                // My Philosophy <br />
                                <span className="text-slate-200">"Keep it clean, make it fast, and handle errors gracefully."</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Holographic Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                whileHover={{ y: -5 }}
                                className={`group p-5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md transition-all duration-300 ${stat.border}`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-white/5 transition-colors ${stat.bg}`}>
                                    <stat.icon size={20} className={stat.color} />
                                </div>
                                <span className={`text-3xl font-bold block mb-1 ${stat.color}`}>{stat.value}</span>
                                <p className="text-slate-200 font-medium text-sm">{stat.label}</p>
                                <p className="text-slate-500 text-xs font-mono">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
