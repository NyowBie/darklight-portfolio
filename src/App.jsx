import React, { useEffect } from 'react';
import MeshBackground from './components/MeshBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import References from './components/References';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.05 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen text-slate-300 bg-slate-950 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-50 overflow-x-hidden py-8 md:py-16 px-4">
      <MeshBackground />

      {/* Dark Glass Sheet */}
      <main className="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden relative">

        {/* Header Section */}
        <Hero />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Sidebar (Left) */}
          <aside className="lg:col-span-4 bg-black/20 border-r border-white/5 p-8 md:p-10 space-y-12">
            <div id="skills" className="fade-in-section">
              <Skills />
            </div>
            <div id="education" className="fade-in-section">
              <Education />
            </div>
            <div id="references" className="fade-in-section">
              <References />
            </div>
          </aside>

          {/* Main Content (Right) */}
          <div className="lg:col-span-8 p-8 md:p-12 space-y-16 bg-white/5">
            <div id="projects" className="fade-in-section">
              <Projects />
            </div>

            <Footer />
          </div>

        </div>
      </main>

      {/* Floating Status Badge */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hidden md:block">
        <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs font-mono font-bold rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-md">
          ● OPEN TO WORK
        </span>
      </div>

    </div>
  );
}

export default App;
