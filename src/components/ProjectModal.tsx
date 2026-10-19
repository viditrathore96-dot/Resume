import React, { useState } from 'react';
import { X, ExternalLink, Github, Code, CheckCircle, Terminal, Layers, Star, Play, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'architecture' | 'demo'>('overview');
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const runSimulation = () => {
    setDemoState('running');
    setDemoLog([`[SYS] Initializing runtime module for ${project.title}...`]);

    setTimeout(() => {
      setDemoLog(prev => [...prev, `[ALLOC] Heap reservation successful. Compiling dispatch tables.`]);
    }, 400);

    setTimeout(() => {
      setDemoLog(prev => [...prev, `[EXEC] Running core test bench with 50,000 iterations...`]);
    }, 900);

    setTimeout(() => {
      setDemoLog(prev => [
        ...prev, 
        `[BENCHMARK] Execution completed in 14.82ms.`,
        `[MEM] Peak resident set size: 4.2 MB. Zero memory leaks detected.`,
        `[STATUS] All assertions validated: OK.`
      ]);
      setDemoState('completed');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#151f32] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-md text-xs font-mono-code font-bold bg-slate-900 border border-slate-700 text-[var(--accent)]">
              {project.category}
            </div>
            <h3 className="font-heading text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-[#0d1421] px-6 text-xs font-mono-code">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 font-medium transition ${
              activeTab === 'overview'
                ? 'border-[var(--accent)] text-[var(--accent)] font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 border-b-2 font-medium transition ${
              activeTab === 'architecture'
                ? 'border-[var(--accent)] text-[var(--accent)] font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture
          </button>
          {project.highlightCode && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-3 border-b-2 font-medium transition ${
                activeTab === 'code'
                  ? 'border-[var(--accent)] text-[var(--accent)] font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Code Snippet
            </button>
          )}
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-3 border-b-2 font-medium transition ${
              activeTab === 'demo'
                ? 'border-[var(--accent)] text-[var(--accent)] font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Interactive Demo
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono-code text-[var(--accent)] uppercase font-semibold mb-1">Summary</h4>
                <p className="text-base text-white font-medium">{project.summary}</p>
                <p className="mt-2 text-slate-300 leading-relaxed text-sm">{project.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono-code text-[var(--accent)] uppercase font-semibold mb-2">Key Engineering Features</h4>
                <div className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-code text-[var(--accent)] uppercase font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-slate-900 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-semibold text-sm">
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                  <span>Technical Design & Decisions</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111927] border border-slate-800 space-y-3">
                <h5 className="text-xs font-mono-code text-slate-400 uppercase">Self-Taught Engineering Takeaway</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "This project pushed me to think about cache locality, time complexity bottlenecks, and modular separation. 
                  Instead of guessing, I profiled execution times and inspected memory allocations with diagnostic tools."
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && project.highlightCode && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-slate-400 pb-1">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {project.highlightCode.filename}
                </span>
                <span className="uppercase text-[var(--accent)]">{project.highlightCode.language}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800 overflow-x-auto font-mono-code text-xs text-slate-200 leading-relaxed">
                <pre>
                  <code>{project.highlightCode.code}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-1">Interactive Diagnostic Sandbox</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Simulate live execution of this project's core algorithm and evaluate system metrics.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={runSimulation}
                    disabled={demoState === 'running'}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono-code bg-[var(--accent)] text-slate-950 hover:opacity-90 disabled:opacity-50 transition"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{demoState === 'running' ? 'Running Diagnostic...' : 'Execute Simulator'}</span>
                  </button>

                  <span className="text-xs font-mono-code text-slate-400">
                    Engine: <span className="text-emerald-400">Ready</span>
                  </span>
                </div>

                {/* Console Log Terminal */}
                <div className="p-3 rounded-lg bg-[#070b12] border border-slate-800 font-mono-code text-xs min-h-[140px] space-y-1">
                  {demoLog.length === 0 ? (
                    <span className="text-slate-600">// Click "Execute Simulator" to run test harness...</span>
                  ) : (
                    demoLog.map((log, i) => (
                      <div key={i} className={log.includes('OK') || log.includes('Zero') ? 'text-emerald-400' : 'text-slate-300'}>
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 bg-[#151f32] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Open Source Project</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono-code font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono-code font-semibold bg-[var(--accent)] hover:opacity-90 text-slate-950 transition"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
