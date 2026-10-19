import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  Layers, 
  Star,
  Activity,
  Cpu,
  Gamepad2,
  Lock,
  Compass
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Systems' | 'Python & Backend' | 'Game Dev & C#' | 'Java'>('All');

  const filterOptions = ['All', 'Systems', 'Python & Backend', 'Game Dev & C#', 'Java'] as const;

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Helper for visual project mockups / cards
  const getProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'algorhythm':
        return (
          <div className="h-44 bg-gradient-to-br from-[#0c1424] to-[#122038] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono-code text-sky-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> A* Pathfinding Visualizer</span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30">C++ / WASM</span>
            </div>
            {/* Visual simulation grid preview */}
            <div className="grid grid-cols-12 gap-1 my-auto opacity-75">
              {Array.from({ length: 36 }).map((_, i) => {
                const isWall = i === 14 || i === 15 || i === 16 || i === 22 || i === 28;
                const isPath = i === 3 || i === 4 || i === 5 || i === 17 || i === 29 || i === 30 || i === 31;
                const isStart = i === 2;
                const isTarget = i === 32;
                return (
                  <div
                    key={i}
                    className={`h-3 rounded-xs transition-colors duration-500 ${
                      isStart ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50' :
                      isTarget ? 'bg-rose-400 shadow-sm shadow-rose-400/50' :
                      isPath ? 'bg-sky-400/80 shadow-sm shadow-sky-400/40' :
                      isWall ? 'bg-slate-700' : 'bg-slate-800/50'
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span>Cycles: 4,120</span>
              <span className="text-emerald-400">Path Found (38 steps)</span>
            </div>
          </div>
        );

      case 'pypulse':
        return (
          <div className="h-44 bg-gradient-to-br from-[#0d1620] to-[#132532] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono-code text-emerald-400">
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> System Resource Monitor</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Python / Daemon</span>
            </div>
            {/* Telemetry wave visual */}
            <div className="flex items-end gap-1.5 h-16 my-auto px-2">
              {[35, 48, 62, 54, 88, 72, 45, 60, 78, 64, 52, 90, 84, 68, 55, 42].map((val, idx) => (
                <div 
                  key={idx}
                  className="flex-1 rounded-t bg-emerald-400/70 hover:bg-emerald-300 transition-all duration-300"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span>CPU: 18.4%</span>
              <span>RAM: 3.8 / 16 GB</span>
              <span className="text-emerald-400">Socket: Live</span>
            </div>
          </div>
        );

      case 'aeroquest':
        return (
          <div className="h-44 bg-gradient-to-br from-[#1c1229] to-[#12142d] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono-code text-purple-400">
              <span className="flex items-center gap-1.5"><Gamepad2 className="w-3.5 h-3.5" /> 2D Physics Platformer</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">C# / .NET</span>
            </div>
            {/* Retro 2D Tilemap preview */}
            <div className="relative h-16 my-auto border-b-2 border-purple-500/60 flex items-center justify-around">
              <div className="w-5 h-5 rounded bg-purple-400 shadow-md shadow-purple-500/50 animate-bounce flex items-center justify-center text-[10px] text-slate-950 font-bold">
                ▲
              </div>
              <div className="w-12 h-3 rounded bg-slate-700 border border-slate-600"></div>
              <div className="w-4 h-4 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/60" />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span>Physics: AABB</span>
              <span>Delta: 16.6ms</span>
              <span className="text-purple-400">60 FPS Locked</span>
            </div>
          </div>
        );

      case 'omnivault':
        return (
          <div className="h-44 bg-gradient-to-br from-[#191910] to-[#252013] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono-code text-amber-400">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> AES-256 Secrets Vault</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">Java / JavaFX</span>
            </div>
            {/* Cipher visual */}
            <div className="p-2.5 rounded bg-black/40 border border-amber-500/20 font-mono-code text-[11px] text-amber-300/80 my-auto truncate">
              $ enc_gcm_tag: 0x9f8c...4e2a [PBKDF2-SHA512]
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span>Auto-Clear: 20s</span>
              <span className="text-amber-400">Zero-Knowledge</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-44 bg-gradient-to-br from-[#0a1122] to-[#121c32] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono-code text-sky-400">
              <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> Memory & Syscall Profiler</span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30">C++17 / POSIX</span>
            </div>
            <div className="p-2 rounded bg-black/50 font-mono-code text-[11px] text-slate-300 space-y-0.5 my-auto">
              <div>&gt; fork() -&gt; execvp() [PID 4892]</div>
              <div className="text-emerald-400">&gt; Peak RSS: 4,096 KB (0 Leaks)</div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
              <span>rusage: Accurate</span>
              <span className="text-sky-400">Benchmark Ready</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-[#0f172a]/30">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--accent)] tracking-wider uppercase font-semibold">
              <span className="w-6 h-px bg-[var(--accent)]"></span>
              <span>03 // Featured Projects</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Practical Engineering & Built Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Quality over quantity. Each project solves a real technical challenge across C++, C#, Java, Python, and the Web.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono-code transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-slate-800 text-[var(--accent)] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#151f32] border border-slate-800 hover:border-slate-700 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Visual Mockup Header */}
              {getProjectVisual(project)}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono-code">
                    <span className="text-[var(--accent)] font-semibold">{project.category}</span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[11px]"
                    >
                      <Code className="w-3 h-3 text-[var(--accent)]" />
                      <span>Details</span>
                    </button>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {project.title.split(' - ')[0]}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-slate-900 text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons (per Part 4 #5: 'Live' and 'GitHub' buttons) */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono-code font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition"
                  >
                    <span>Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-mono-code font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.liveUrl && (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-mono-code font-semibold bg-[var(--accent)] hover:opacity-90 text-slate-950 transition"
                      title="Launch Live Demo / Simulator"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono-code">
            More experimental scripts and competitive problem solutions are available on{' '}
            <a 
              href="https://github.com/vidit-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--accent)] underline hover:text-white transition"
            >
              GitHub (@vidit-dev)
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
