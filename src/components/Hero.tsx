import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Download, 
  Github, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Code2, 
  Cpu, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typing effect implementation letter-by-letter
  const phrases = [
    "Hi, I'm Vidit, a self-taught developer.",
    "Building fast systems in C++, C# and Python.",
    "Crafting clean, responsive web applications.",
    "3 years of relentless self-directed engineering."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedTerminal, setCopiedTerminal] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 55);
      } else {
        // Pause at complete phrase
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const copyBashCommand = () => {
    navigator.clipboard.writeText('curl -s https://vidit.dev/whoami.json');
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Subtle tech grid background with radial fade */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Ambient gradient glow behind hero */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[120px] pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              <span className="text-xs font-mono-code text-slate-300">
                17 y/o • 3 Years Self-Taught • Ready to Build
              </span>
            </div>

            {/* Main Title & Typewriter */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[var(--accent)]">{PERSONAL_INFO.name}</span>
              </h1>
              
              {/* Typewriter container with fixed min-height to prevent jitter */}
              <div className="h-14 sm:h-12 flex items-center">
                <p className="font-mono-code text-base sm:text-lg text-[var(--accent)] font-medium">
                  &gt; {currentText}
                  <span className="inline-block w-2 h-4 ml-1 bg-[var(--accent)] animate-pulse align-middle" />
                </p>
              </div>
            </div>

            {/* Value Proposition Description (Concise & Clear) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Passionate about understanding software from first principles. I build high-performance tools, 
              game prototypes, and full-stack web applications using <strong className="text-white font-semibold">C++</strong>, <strong className="text-white font-semibold">C#</strong>, <strong className="text-white font-semibold">Python</strong>, and modern web frameworks.
            </p>

            {/* Two Primary Buttons + Resume (per Part 2 & 4 instructions) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-[var(--accent)] hover:opacity-95 shadow-lg shadow-[var(--accent-glow)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 transition duration-300 hover:-translate-y-1"
                title="View and download printable developer resume"
              >
                <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Skills Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-code text-slate-400 mr-1">Core Arsenal:</span>
              {['C++', 'C#', 'Java', 'Python', 'TypeScript', 'React', 'Git'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal / Code Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle back card glow */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-30 group-hover:opacity-60 transition duration-500 blur-lg"
                style={{ background: 'var(--accent-glow)' }}
              />

              <div className="relative rounded-2xl bg-[#111927] border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
                
                {/* Terminal Window Header Bar */}
                <div className="px-4 py-3 bg-[#0d1421] border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      vidit@dev-station:~
                    </span>
                  </div>

                  {/* Copy command button */}
                  <button
                    onClick={copyBashCommand}
                    className="flex items-center gap-1 text-[11px] font-mono-code text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/60 hover:bg-slate-800 transition"
                    title="Copy shell snippet"
                  >
                    {copiedTerminal ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>curl</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tab Switcher */}
                <div className="flex border-b border-slate-800/60 bg-[#0d1421]/50 px-3 text-xs font-mono-code">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-2 border-b-2 font-medium transition ${
                      activeTab === 'profile'
                        ? 'border-[var(--accent)] text-[var(--accent)]'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    profile.json
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-3 py-2 border-b-2 font-medium transition ${
                      activeTab === 'stack'
                        ? 'border-[var(--accent)] text-[var(--accent)]'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    stack.config
                  </button>
                  <button
                    onClick={() => setActiveTab('status')}
                    className={`px-3 py-2 border-b-2 font-medium transition ${
                      activeTab === 'status'
                        ? 'border-[var(--accent)] text-[var(--accent)]'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    metrics.sh
                  </button>
                </div>

                {/* Terminal Content Body */}
                <div className="p-4 sm:p-5 font-mono-code text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[260px] text-slate-300">
                  {activeTab === 'profile' && (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Vidit Developer Manifesto</p>
                      <p><span className="text-purple-400">const</span> developer = &#123;</p>
                      <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,</p>
                      <p className="pl-4"><span className="text-sky-300">age</span>: <span className="text-amber-300">{PERSONAL_INFO.age}</span>,</p>
                      <p className="pl-4"><span className="text-sky-300">discipline</span>: <span className="text-emerald-300">"Self-Taught (3 Years Daily)"</span>,</p>
                      <p className="pl-4"><span className="text-sky-300">focus</span>: [</p>
                      <p className="pl-8 text-emerald-300">"Systems & Low-Level Architecture",</p>
                      <p className="pl-8 text-emerald-300">"Algorithmic Problem Solving",</p>
                      <p className="pl-8 text-emerald-300">"Full-Stack Web Engineering"</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-sky-300">openFor</span>: <span className="text-emerald-300">"Internships & Collaborative Projects"</span></p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-1.5">
                      <p className="text-slate-500"># Core Toolchains & Environment</p>
                      <p className="text-sky-400 font-semibold">[languages]</p>
                      <p>primary   = <span className="text-emerald-300">"C++20", "C# .NET", "Python 3"</span></p>
                      <p>web       = <span className="text-emerald-300">"TypeScript", "React", "HTML5/CSS3"</span></p>
                      <p>legacy    = <span className="text-emerald-300">"Java (OOP & Collections)"</span></p>
                      <p className="text-sky-400 font-semibold pt-2">[environment]</p>
                      <p>os        = <span className="text-amber-300">"Linux (Ubuntu) / Windows"</span></p>
                      <p>editor    = <span className="text-amber-300">"VS Code + Neovim motions"</span></p>
                      <p>vcs       = <span className="text-amber-300">"Git (CLI only)"</span></p>
                    </div>
                  )}

                  {activeTab === 'status' && (
                    <div className="space-y-2">
                      <p className="text-slate-500">$ ./inspect_stats.sh --verbose</p>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block">Self-Taught Streak</span>
                          <span className="text-base font-bold text-[var(--accent)]">3+ Years</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block">Independent Projects</span>
                          <span className="text-base font-bold text-emerald-400">15+ Built</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block">Languages Mastered</span>
                          <span className="text-base font-bold text-purple-400">5 Languages</span>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="text-[11px] text-slate-400 block">Status</span>
                          <span className="text-base font-bold text-sky-400">Available</span>
                        </div>
                      </div>
                      <p className="text-emerald-400 text-xs pt-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> All integrity checks passed. Ready for review.
                      </p>
                    </div>
                  )}
                </div>

                {/* Terminal Footer */}
                <div className="px-4 py-2.5 bg-[#0d1421] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono-code">
                  <span>UTF-8 • LF • 2 Spaces</span>
                  <span className="text-[var(--accent)]">status: active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
