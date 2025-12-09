import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone } from 'lucide-react';

const References = () => {
    return (
        <section className="relative">
            <h2 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Users size={24} className="text-violet-400" />
                </span>
                References
            </h2>

            <div className="grid gap-4">
                {[
                    { name: "Jackson C. Salas", role: "SHS Faculty Member", contact: "09750320407" },
                    { name: "Katrina Shaine D. Suñga", role: "Accounting Clerk, Golden Advance", contact: "09618353048" }
                ].map((ref, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-5 bg-white/5 border border-white/5 rounded-xl hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all cursor-default group"
                    >
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{ref.name}</h3>
                        <p className="text-sm text-cyan-500/80 mb-2">{ref.role}</p>
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                            <Phone size={12} />
                            <span>{ref.contact}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default References;
