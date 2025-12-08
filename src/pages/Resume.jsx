import React from 'react';
import { Download, Printer, ArrowLeft, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative print:p-0 print:bg-white print:text-black">
            {/* Navigation for Screen */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} /> Back to Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
                >
                    <Printer size={18} /> Print / Save PDF
                </button>
            </div>

            {/* Resume Container */}
            <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl print:shadow-none print:border-none print:bg-white print:p-0 print:text-black print:rounded-none">

                {/* Header */}
                <header className="border-b border-slate-700/50 pb-8 mb-8 print:border-slate-300 print:mb-6 print:pb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 print:text-black print:text-3xl">CEDRIC U. MOAJE</h1>
                    <div className="flex flex-wrap gap-4 text-slate-300 print:text-gray-700 print:text-sm print:gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-indigo-400 print:hidden" />
                            <span>0991-656-6215</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-indigo-400 print:hidden" />
                            <a href="mailto:cedricmoaje0@gmail.com" className="hover:text-indigo-400">cedricmoaje0@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-indigo-400 print:hidden" />
                            <span>Tondo, Manila</span>
                        </div>
                    </div>
                </header>

                {/* Career Objective */}
                <section className="mb-8 print:mb-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black print:text-lg print:uppercase print:border-b print:border-black print:pb-1">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full print:hidden"></span>
                        CAREER OBJECTIVE
                    </h2>
                    <p className="text-slate-300 leading-relaxed print:text-gray-800">
                        An aspiring IT professional with experience in building web applications using React, PHP, Firebase, and etc. I am eager to apply my skills in real projects, contribute to a development team, and gain industry experience through an internship or entry-level role. I am committed to learning fast and delivering clean, user-friendly interfaces.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-8 print:mb-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black print:text-lg print:uppercase print:border-b print:border-black print:pb-1">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full print:hidden"></span>
                        TECHNICAL SKILLS
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
                        <div>
                            <h3 className="font-semibold text-indigo-400 mb-2 print:text-black print:font-bold">Frontend Development</h3>
                            <p className="text-slate-300 text-sm print:text-gray-800">React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Vite, Tailwind CSS, Responsive Web Design</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-indigo-400 mb-2 print:text-black print:font-bold">Backend & API</h3>
                            <p className="text-slate-300 text-sm print:text-gray-800">PHP (basic CRUD, MySQL integration), Node.js (basic REST APIs), Firebase Authentication & Firestore</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-indigo-400 mb-2 print:text-black print:font-bold">Tools & Platforms</h3>
                            <p className="text-slate-300 text-sm print:text-gray-800">Git & GitHub, Firebase Hosting, Vercel, VS Code, NPM</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-indigo-400 mb-2 print:text-black print:font-bold">Other Skills</h3>
                            <p className="text-slate-300 text-sm print:text-gray-800">UI/UX Principles, Debugging, Basic Hardware Troubleshooting</p>
                        </div>
                    </div>
                </section>

                {/* Project Experience */}
                <section className="mb-8 print:mb-6">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 print:text-black print:text-lg print:uppercase print:border-b print:border-black print:pb-1">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full print:hidden"></span>
                        PROJECT EXPERIENCE
                    </h2>

                    <div className="space-y-6 print:space-y-4">
                        {/* Project 1 */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-white print:text-black">KeyDeck – Multi-Layout Keyboard Tester</h3>
                                <span className="text-sm text-indigo-400 font-mono print:text-gray-600">2025</span>
                            </div>
                            <p className="text-indigo-300 text-sm mb-2 font-medium print:text-gray-700">Role: Frontend Developer</p>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 print:text-gray-800">
                                <li>Built a full keyboard-testing web app using React, Vite, and Tailwind CSS.</li>
                                <li>Implemented key detection, event listeners, animations, and a responsive UI.</li>
                                <li>Created multiple keyboard layouts (60%, 65%, 68%, 75%, TKL, Full-size).</li>
                                <li>Published online using Firebase Hosting with a free domain.</li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-white print:text-black">DarkLight – Personal Portfolio</h3>
                                <span className="text-sm text-indigo-400 font-mono print:text-gray-600">2025</span>
                            </div>
                            <p className="text-indigo-300 text-sm mb-2 font-medium print:text-gray-700">Role: Web Designer & Developer</p>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 print:text-gray-800">
                                <li>Built a modern portfolio using React and Tailwind CSS with Galaxy theme.</li>
                                <li>Added an animated galaxy background and smooth scrolling.</li>
                                <li>Deployed using GitHub Pages / Vercel.</li>
                            </ul>
                        </div>

                        {/* Project 3 */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-white print:text-black">ALERTO MNL – Crime & Incident Reporting</h3>
                                <span className="text-sm text-indigo-400 font-mono print:text-gray-600">2025</span>
                            </div>
                            <p className="text-indigo-300 text-sm mb-2 font-medium print:text-gray-700">Role: Frontend & Backend Developer</p>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 print:text-gray-800">
                                <li>Developed a platform where residents and police can report and track incidents.</li>
                                <li>Built frontend using React and backend using PHP + MySQL.</li>
                                <li>Implemented login, validation, and reporting features.</li>
                            </ul>
                        </div>

                        {/* Project 4 */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-white print:text-black">PLM Online Document Request System</h3>
                                <span className="text-sm text-indigo-400 font-mono print:text-gray-600">2023</span>
                            </div>
                            <p className="text-indigo-300 text-sm mb-2 font-medium print:text-gray-700">Role: Student Developer</p>
                            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 print:text-gray-800">
                                <li>Built a simple online request system for students needing school documents.</li>
                                <li>Created CRUD operations using PHP, MySQL, and basic UI styling.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8 print:mb-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black print:text-lg print:uppercase print:border-b print:border-black print:pb-1">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full print:hidden"></span>
                        EDUCATION
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-white print:text-black">Pamantasan ng Lungsod ng Maynila</h3>
                            <p className="text-slate-300 print:text-gray-800">Bachelor of Science in Information Technology</p>
                            <p className="text-sm text-indigo-400 print:text-gray-600">2025 – Present</p>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-white print:text-black">AMA Computer Learning Center – Northbay Campus</h3>
                            <p className="text-slate-300 text-sm print:text-gray-800">Strand: Information and Communication Technology</p>
                            <p className="text-sm text-indigo-400 print:text-gray-600">2022</p>
                        </div>
                    </div>
                </section>

                {/* References */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black print:text-lg print:uppercase print:border-b print:border-black print:pb-1">
                        <span className="w-8 h-1 bg-indigo-500 rounded-full print:hidden"></span>
                        REFERENCES
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6 print:grid-cols-2">
                        <div>
                            <h3 className="font-bold text-white print:text-black">Jackson C. Salas</h3>
                            <p className="text-indigo-300 text-sm print:text-gray-700">SHS Faculty Member</p>
                            <p className="text-slate-400 text-sm print:text-gray-800">09750324047</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white print:text-black">Katrina Shaine D. Suñiga</h3>
                            <p className="text-indigo-300 text-sm print:text-gray-700">Accounting Clerk, Golden Advance Marketing</p>
                            <p className="text-slate-400 text-sm print:text-gray-800">09618553048</p>
                        </div>
                    </div>
                </section>

                {/* Footer for Screen only */}
                <div className="mt-12 text-center text-slate-500 text-sm print:hidden">
                    <p>© 2025 Cedric U. Moaje · Built with React & Tailwind</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
