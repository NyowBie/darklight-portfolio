import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                        <p>
                            I am a passionate developer driven by the challenge of creating efficient, scalable, and visually appealing web applications. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
                        </p>
                        <p>
                            My philosophy is simple: **Keep it clean, make it fast, and handle errors gracefully.**
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="relative pl-8 border-l border-slate-800">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950"></div>
                            <span className="text-sm text-indigo-400 font-mono">Present</span>
                            <h3 className="text-xl font-semibold text-white mt-1">Senior Frontend Engineer</h3>
                            <p className="text-slate-500 text-sm">TechCorp Inc.</p>
                        </div>
                        <div className="relative pl-8 border-l border-slate-800">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950"></div>
                            <span className="text-sm text-slate-500 font-mono">2021 - 2023</span>
                            <h3 className="text-xl font-semibold text-white mt-1">Freelance Developer</h3>
                            <p className="text-slate-500 text-sm">Self-Employed</p>
                        </div>
                        <div className="relative pl-8 border-l border-slate-800">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950"></div>
                            <span className="text-sm text-slate-500 font-mono">2020</span>
                            <h3 className="text-xl font-semibold text-white mt-1">BS Computer Science</h3>
                            <p className="text-slate-500 text-sm">University of Technology</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
