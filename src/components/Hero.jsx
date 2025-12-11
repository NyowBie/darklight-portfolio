import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/CedricM.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-violet-600/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT: Image Portal */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative order-1 lg:order-1 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 lg:w-[28rem] lg:h-[28rem] group">

                        {/* Rotating Portal Ring */}
                        <div className="absolute inset-0 rounded-full border border-white/10 border-t-cyan-500/50 border-r-violet-500/50 w-full h-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-2 rounded-full border border-white/5 border-b-cyan-500/30 border-l-violet-500/30 w-[calc(100%-1rem)] h-[calc(100%-1rem)] animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                        {/* Image Wrappers */}
                        <div className="relative w-full h-full rounded-full p-2 backdrop-blur-sm bg-white/5 border border-white/10 ring-1 ring-white/5 shadow-2xl overflow-hidden">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative z-10">
                                <img
                                    src={profileImg}
                                    alt="Cedric Moaje"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Floating "Chat Me" Orb */}
                        <motion.a
                            href="https://www.facebook.com/FloodControl03/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-4 right-4 lg:bottom-8 lg:right-0 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-2xl flex items-center gap-3 shadow-lg hover:shadow-cyan-500/20 group/orb cursor-pointer z-20"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold font-mono text-cyan-400 tracking-wider">
                                CHAT ME
                            </span>
                            <ExternalLink size={14} className="text-white opacity-0 -ml-2 group-hover/orb:opacity-100 group-hover/orb:ml-0 transition-all duration-300" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT: HUD Interface */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="order-2 lg:order-2 text-center lg:text-left"
                >
                    {/* Status Badge */}
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-800/50 backdrop-blur-sm mb-8 hover:bg-cyan-900/40 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-bold font-mono text-cyan-400 tracking-wider">
                            LOOKING FOR INTERNSHIP
                        </span>
                    </div>

                    {/* Name Typography */}
                    {/* Name Typography */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight mb-4">
                        Cedric Moaje
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-slate-400 mb-2">
                        <span className="text-lime-400">&lt;</span> Aspiring Web Developer <span className="text-lime-400">/&gt;</span>
                    </h2>
                    <p className="text-lime-400 font-mono text-base md:text-lg mb-8 tracking-wide">
                        BSIT Student @ Pamantasan ng Lungsod ng Maynila
                    </p>

                    {/* Glass Bio Card */}
                    <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 mb-10 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <p className="font-sans text-slate-300 text-lg leading-relaxed text-justify">
                            I am a student at <b className="text-white font-semibold">Pamantasan ng Lungsod ng Maynila</b> pursuing a <b className="text-white font-semibold">Bachelor of Science in Information Technology</b>.
                            I am excited to apply my knowledge and skills as an intern while gaining hands-on industry experience.
                            I&apos;m also eager to work with others and grow professionally in a dynamic work environment.
                        </p>
                    </div>

                    {/* Action Array */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
                        <motion.a
                            href="mailto:theprodigee06@gmail.com"
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all group"
                        >
                            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="text-slate-200 font-medium font-outfit">Email Me</span>
                        </motion.a>

                        <motion.a
                            href="tel:09916566215"
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all group"
                        >
                            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <span className="text-slate-200 font-medium font-outfit">Call Me</span>
                        </motion.a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
