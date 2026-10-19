import React from 'react';
import { Clock, FolderGit2, Code2, Brain, Compass, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#0f172a]/50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--accent)] tracking-wider uppercase font-semibold">
            <span className="w-6 h-px bg-[var(--accent)]"></span>
            <span>01 // About Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The Journey of a Self-Taught Developer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate about writing clean, reliable code and demystifying computers from silicon to screen.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4-6 lines Bio + Focus Cards (per Part 4 #3) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The 4-6 Line Bio Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#151f32] border border-slate-800 shadow-xl space-y-4 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-[var(--accent)]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Who I Am</h3>
                  <p className="text-xs font-mono-code text-slate-400">17 Years Old • 3 Years Coding Streak</p>
                </div>
              </div>

              {/* 4 to 6 lines explicit bio */}
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm Vidit, a 17-year-old self-taught developer who has spent the last 3 years obsessively building software from scratch.
                </p>
                <p>
                  Without a traditional university degree, I relied on curiosity, official documentation, open-source codebases, and daily experimentation to master programming.
                </p>
                <p>
                  My journey began with basic Python automation, quickly evolving into deep exploration of systems engineering in C++, object-oriented architecture in Java and C#, and responsive web technologies.
                </p>
                <p>
                  I am driven by understanding how computers work under the hood—from memory pointers and CPU caches to full-stack web applications that solve real-world problems.
                </p>
                <p>
                  Today, I'm building open-source developer tooling and actively seeking software engineering internships where I can contribute high-impact code.
                </p>
              </div>
            </div>

            {/* Core Pillars / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PERSONAL_INFO.philosophy.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition duration-300 space-y-2 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-800 text-[var(--accent)] font-medium">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Key Stats & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-5 rounded-xl bg-[#151f32] border border-slate-800 hover:border-[var(--accent)]/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="font-heading text-3xl font-extrabold text-white group-hover:text-[var(--accent)] transition-colors">
                  3+ Years
                </div>
                <div className="text-xs text-slate-400 font-mono-code mt-1">Daily Self-Learning</div>
              </div>

              <div className="p-5 rounded-xl bg-[#151f32] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div className="font-heading text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  15+
                </div>
                <div className="text-xs text-slate-400 font-mono-code mt-1">Shipped Projects</div>
              </div>

              <div className="p-5 rounded-xl bg-[#151f32] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="font-heading text-3xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                  5 Core
                </div>
                <div className="text-xs text-slate-400 font-mono-code mt-1">Languages in Arsenal</div>
              </div>

              <div className="p-5 rounded-xl bg-[#151f32] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="font-heading text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  120+
                </div>
                <div className="text-xs text-slate-400 font-mono-code mt-1">Algorithmic Problems</div>
              </div>
            </div>

            {/* Verification / Trust Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold font-mono-code">
                <ShieldCheck className="w-4 h-4" />
                <span>SELF-TAUGHT ADVANTAGE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Learning to code independently teaches you how to read compiler errors, digest technical RFCs, 
                and debug without training wheels. It builds an instinct for persistent, autonomous problem solving."
              </p>
              <div className="pt-1 flex items-center justify-between text-xs font-mono-code text-slate-500">
                <span>Vidit • Self-Taught Dev</span>
                <span className="text-[var(--accent)]">2023 → Present</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
