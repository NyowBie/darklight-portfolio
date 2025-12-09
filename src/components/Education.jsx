import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            school: "Pamantasan ng Lungsod ng Maynila",
            degree: "BS Information Technology",
            year: "2022 – Present",
            location: "Intramuros, Manila",
            status: "current"
        },
        {
            school: "AMA Computer Learning Center",
            degree: "ICT Strand",
            year: "2022",
            location: "Tondo, Philippines",
            status: "past"
        },
        {
            school: "Dr. Juan G. Nolasco High School",
            degree: "Secondary Education",
            year: "Class of 2020",
            location: "Tondo, Manila",
            status: "past"
        },
        {
            school: "Teodoro R. Yangco Elem.",
            degree: "Primary Education",
            year: "Graduated 2013",
            location: "Tondo, Philippines",
            status: "past"
        }
    ];

    return (
        <section id="education" className="relative">
            <h2 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <GraduationCap size={24} className="text-violet-400" />
                </span>
                Academic Journey
            </h2>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-slate-900 ${item.status === 'current' ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-slate-600'}`} />

                        <div className="group relative bg-white/5 border border-white/5 p-5 rounded-xl hover:border-cyan-500/30 transition-colors backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.school}</h3>
                            <p className="text-violet-400 font-medium mb-2">{item.degree}</p>

                            <div className="flex flex-col gap-1 text-xs text-slate-500 font-mono">
                                <div className="flex items-center gap-2">
                                    <Calendar size={12} />
                                    <span>{item.year}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={12} />
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
