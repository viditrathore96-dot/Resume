import React, { useState } from 'react';
import { 
  FileCode, 
  Terminal, 
  Coffee, 
  Code, 
  Layout, 
  FileJson, 
  Atom, 
  Palette, 
  GitBranch, 
  Cpu, 
  Network, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Languages' | 'Web Technologies' | 'Tools & Core'>('All');
  const [expandedCodeSkill, setExpandedCodeSkill] = useState<string | null>('C++');

  const categories = ['All', 'Languages', 'Web Technologies', 'Tools & Core'] as const;

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'FileJson': return <FileJson className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--accent)] tracking-wider uppercase font-semibold">
              <span className="w-6 h-px bg-[var(--accent)]"></span>
              <span>02 // Technical Skills</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Languages, Runtimes & Frameworks
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Grouped by domain: C#, C++, Java, and Python alongside modern frontend tools.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono-code transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-[var(--accent)] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => {
            const isCodeOpen = expandedCodeSkill === skill.name;
            return (
              <div
                key={skill.name}
                className="group p-5 rounded-xl bg-[#151f32] border border-slate-800 hover:border-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                        <span>{skill.name}</span>
                        <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/50">
                          {skill.category}
                        </span>
                      </h3>
                      <p className="text-xs font-mono-code text-slate-400">{skill.experienceYears} experience</p>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <span className="text-xs font-mono-code font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-sky-400">
                    {skill.levelLabel} ({skill.level}%)
                  </span>
                </div>

                {/* Animated Fill Bar (per Part 3) */}
                <div className="space-y-1 mb-3">
                  <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: 'var(--accent)',
                        boxShadow: '0 0 8px var(--accent-glow)'
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {skill.description}
                </p>

                {/* Expandable Code Snippet Button if available */}
                {skill.codeSnippet && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => setExpandedCodeSkill(isCodeOpen ? null : skill.name)}
                      className="w-full flex items-center justify-between text-xs font-mono-code text-slate-400 hover:text-[var(--accent)] transition"
                    >
                      <span className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>{isCodeOpen ? 'Hide code snippet' : 'View code implementation'}</span>
                      </span>
                      {isCodeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isCodeOpen && (
                      <div className="mt-2.5 p-3 rounded-lg bg-[#0d1421] border border-slate-800 overflow-x-auto animate-in fade-in duration-200">
                        <pre className="font-mono-code text-[11px] leading-relaxed text-slate-300">
                          <code>{skill.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Skills Callout */}
        <div className="mt-10 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Continuous Expansion:</strong> Actively exploring WebAssembly compilation pipelines, C++20 concurrency modules, and full-stack API architecture.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 text-xs font-mono-code text-[var(--accent)] hover:underline flex items-center gap-1"
          >
            <span>See practical code in projects</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
