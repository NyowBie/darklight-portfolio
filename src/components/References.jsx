import React from 'react';
import { Users } from 'lucide-react';

const References = () => {
    return (
        <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
                <Users size={20} className="text-violet-500" />
                References
            </h2>

            <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white">Jackson C. Salas</h3>
                    <p className="text-xs text-cyan-400 font-medium mb-1">SHS Faculty Member</p>
                    <p className="text-xs text-slate-500 font-mono">09750320407</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white">Katrina Shaine D. Suñga</h3>
                    <p className="text-xs text-cyan-400 font-medium mb-1">Accounting Clerk, Golden Advance</p>
                    <p className="text-xs text-slate-500 font-mono">09618353048</p>
                </div>
            </div>
        </section>
    );
};

export default References;
