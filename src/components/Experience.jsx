import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const timeline = [
        {
            title: "Bachelor of Science in Information Technology",
            institution: "Pamantasan ng Lungsod ng Maynila",
            date: "2022 – Present",
            type: "education",
            desc: "Currently a 4th-year student specializing in web, systems development and hardware support."
        },
        {
            title: "ICT Strand (TVL Track)",
            institution: "AMA Computer Learning Center",
            date: "2020 – 2022",
            type: "education",
            desc: "Graduated with Honors. Focused on programming fundamentals."
        },
        {
            title: "Secondary Education",
            institution: "Dr. Juan G. Nolasco High School",
            date: "2016 – 2020",
            type: "education",
            desc: "Active student."
        },
        {
            title: "Primary",
            institution: "Teodoro R. Yangco Elementary School",
            date: "2013-2016",
            type: "education",
            desc: "Active Student."
        },
    ];

    return (
        <section id="experience" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="mb-16 text-center">
                    <h2 className="text-lime-400 font-mono font-medium mb-4 tracking-wide">My Journey</h2>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Experience & Education</h2>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12 pl-8 md:pl-12 py-4">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Dot Indicator */}
                            <div className={`absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full border-4 border-slate-950 ${item.type === 'work' ? 'bg-lime-500' : 'bg-cyan-500'} shadow-[0_0_0_4px_rgba(15,23,42,1)]`}></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <span className="text-sm font-mono text-slate-500 flex items-center gap-2 mt-1 sm:mt-0">
                                    <Calendar size={14} />
                                    {item.date}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-cyan-400 mb-4 flex items-center gap-2">
                                {item.type === 'education' ? <GraduationCap size={18} /> : <Briefcase size={18} />}
                                {item.institution}
                            </h4>

                            <p className="text-slate-400 leading-relaxed text-base max-w-2xl bg-slate-900/50 p-6 rounded-xl border border-white/5">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
