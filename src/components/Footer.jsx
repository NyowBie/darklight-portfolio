import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-xs font-mono text-slate-500">
                <p>&copy; 2025 Cedric M. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <span className="hover:text-cyan-400 transition-colors cursor-pointer">React</span>
                    <span className="hover:text-violet-400 transition-colors cursor-pointer">Tailwind</span>
                    <span className="hover:text-fuchsia-400 transition-colors cursor-pointer">Framer</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
