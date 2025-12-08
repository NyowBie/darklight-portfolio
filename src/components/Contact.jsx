import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent! (Demo only)');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work together.</h2>
                        <p className="text-slate-400 text-lg mb-8">
                            I'm currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:contact@cedricureta.com" className="block text-indigo-400 hover:text-indigo-300 hover:underline text-lg">
                                contact@cedricureta.com
                            </a>
                            <div className="flex gap-6 text-slate-400">
                                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-white/5 border border-white/5">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                            <input type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                            <input type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                            <textarea required rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20">
                            Send Message
                        </button>
                        {status && <p className="text-center text-green-400 text-sm mt-2">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
