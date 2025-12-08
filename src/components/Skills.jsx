import React from 'react';
import { Code, Server, Wrench, Terminal, Layers } from 'lucide-react';

const Skills = () => {
    return (
        <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                <Layers size={20} className="text-violet-500" />
                Skills
            </h2>

            <div className="space-y-8">
                {/* Frontend */}
                <div>
                    <h3 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-widest flex items-center gap-2 font-mono">
                        <Code size={14} /> Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Vite'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded border border-white/5 hover:border-cyan-500/30 hover:text-cyan-200 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <h3 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-widest flex items-center gap-2 font-mono">
                        <Server size={14} /> Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['PHP', 'MySQL', 'Node.js', 'Firebase', 'Firestore'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded border border-white/5 hover:border-cyan-500/30 hover:text-cyan-200 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-widest flex items-center gap-2 font-mono">
                        <Terminal size={14} /> Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Git & GitHub', 'VS Code', 'NPM', 'Vercel'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded border border-white/5 hover:border-cyan-500/30 hover:text-cyan-200 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
