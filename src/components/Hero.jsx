import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <header className="relative z-10 px-8 py-12 md:p-16 border-b border-white/10 bg-white/5">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                {/* Name & Role */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-2">
                        CEDRIC <span className="text-cyan-400">MOAJE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium tracking-wide font-mono">
                        <span className="text-violet-400">&lt;</span> Aspiring Web Developer <span className="text-violet-400">/&gt;</span>
                    </p>
                    <p className="mt-6 text-slate-400 max-w-xl leading-relaxed">
                        Aspiring IT professional with hands-on experience in building web applications using React, PHP, Firebase, and modern JavaScript tools. Dedicated to creating clean, efficient, and user-centric digital solutions.
                    </p>
                </div>

                {/* Contact Info Widget */}
                <div className="flex flex-col gap-3 min-w-[240px]">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:text-cyan-300"><Phone size={18} /></div>
                        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">0991-656-6215</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:text-cyan-300"><Mail size={18} /></div>
                        <a href="mailto:cedricmoaje0@gmail.com" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">cedricmoaje0@gmail.com</a>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                        <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:text-cyan-300"><MapPin size={18} /></div>
                        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Tondo, Manila</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
