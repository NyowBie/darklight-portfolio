import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                <GraduationCap size={20} className="text-violet-500" />
                Education
            </h2>

            <div className="space-y-8">
                {/* Tertiary */}
                <div className="relative group">
                    {/* Hover Glow */}
                    <div className="absolute -left-4 -top-2 -bottom-2 w-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <h3 className="text-sm font-bold text-white">Pamantasan ng Lungsod ng Maynila</h3>
                    <p className="text-xs text-slate-500 mb-1">Intramuros, Manila</p>
                    <p className="text-sm font-semibold text-cyan-400">BS Information Technology</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">2021 – Present</p>
                </div>

                {/* Secondary */}
                <div className="group relative">
                    <h3 className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">AMA Computer Learning Center</h3>
                    <p className="text-xs text-slate-500 mb-1">Northbay Campus</p>
                    <p className="text-sm font-medium text-slate-400">ICT Strand</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">2022</p>
                </div>

                {/* High School */}
                <div>
                    <h3 className="text-sm font-bold text-slate-300">Dr. Juan G. Nolasco High School</h3>
                    <p className="text-xs text-slate-500 mb-1">Secondary Education</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Class of 2020</p>
                </div>

                {/* Primary */}
                <div>
                    <h3 className="text-sm font-bold text-slate-300">Teodoro R. Yangco Elem.</h3>
                    <p className="text-xs text-slate-500 mb-1">Primary Education</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Graduated 2013</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
