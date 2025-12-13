import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left: Info */}
                    <div>
                        <h2 className="text-lime-400 font-mono font-medium mb-4 tracking-wide">Get in Touch</h2>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Let's Work Together</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-12">
                            I'm currently looking for internship opportunities or entry-level web development roles.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:theprodigee06@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Email Me</p>
                                    <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">theprodigee06@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:09062278962" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lime-400 group-hover:border-lime-500/50 group-hover:bg-lime-500/10 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Call Me</p>
                                    <p className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors">0906-227-8962</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-violet-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-lg font-bold text-white">Manila, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 shadow-xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-lime-500 text-slate-950 font-bold rounded-lg hover:bg-lime-400 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
