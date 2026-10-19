import React from 'react';
import { Sparkles, Cpu, Gamepad2, Globe, Rocket, CheckCircle2, Calendar } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-4 h-4 text-purple-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Rocket': return <Rocket className="w-4 h-4 text-[var(--accent)]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--accent)] tracking-wider uppercase font-semibold">
            <span className="w-6 h-px bg-[var(--accent)]"></span>
            <span>04 // Coding Journey</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            3 Years of Self-Directed Growth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            From the very first Python print statement to low-level systems programming and full-stack architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-12 ml-2 sm:ml-6">
          
          {TIMELINE_DATA.map((milestone, idx) => (
            <div key={milestone.year} className="relative group">
              
              {/* Dot Icon Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-[var(--accent)] transition-colors duration-300">
                {getTimelineIcon(milestone.icon)}
              </div>

              {/* Milestone Content Card */}
              <div className="p-6 rounded-2xl bg-[#151f32] border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3">
                
                {/* Year & Tagline */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-bold bg-slate-900 border border-slate-700 text-[var(--accent)]">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400">
                    Step 0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-300 italic">
                  "{milestone.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono-code text-slate-500 mr-1">Milestone Stack:</span>
                  {milestone.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
