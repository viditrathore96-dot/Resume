import React from 'react';
import { X, Printer, Download, Mail, Github, Globe, CheckCircle2, Code2, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
VIDIT - SELF-TAUGHT SOFTWARE DEVELOPER
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY
Self-taught software developer with 3+ years of intense, daily self-directed programming.
Skilled in systems programming with C++ and C#, OOP design with Java, rapid backend development with Python, and modern web applications with React and TypeScript.

CORE SKILLS
- Languages: C++, C#, Java, Python, TypeScript, JavaScript, HTML5, CSS3, SQL
- Frameworks & Libs: React, Tailwind CSS, .NET, JavaFX, Flask, POSIX Syscalls, WebAssembly
- Developer Tools: Git, Linux/Bash, CMake, Make, VS Code, GDB/Valgrind profiling concepts
- Foundations: Data Structures, Algorithms (A*, Dijkstra, Sorting), Big-O Analysis, Memory Management

FEATURED PROJECTS
1. Algorhythm - Interactive Algorithm Visualizer (C++, WebAssembly, React)
   - Dual-layer graph traversal and sorting visualizer with C++ compiled to WASM.
   - Interactive maze generation and memory cycle analysis.
2. PyPulse - System Resource & Network Daemon (Python, Flask, WebSockets)
   - Lightweight telemetry daemon sampling CPU cores, RAM, and sockets with live dashboard.
3. AeroQuest 2D - Physics Platformer Engine (C#, .NET, Raylib)
   - Custom 2D game engine with AABB collision resolution, coyote time, and tilemaps.
4. OmniVault - AES-256 Encrypted Secrets Vault (Java, JavaFX, SQLite)
   - Zero-knowledge credentials manager with PBKDF2 key derivation and auto-clear timer.
5. DevCraft CLI - Process & Memory Profiler (C++17, Linux Syscalls)
   - CLI wrapper measuring peak RSS, kernel/user time, and memory leak warnings.

EDUCATION & CONTINUOUS LEARNING
- Self-Taught Computer Science Curriculum (2023 - Present)
- 120+ Algorithmic Challenges solved on LeetCode & Codeforces
- Deep study of Computer Systems: A Programmer's Perspective (CS:APP) & C++ Primer
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vidit_Developer_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="px-6 py-3.5 bg-[#151f32] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-heading font-bold text-sm text-white">Vidit - Developer Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold bg-[var(--accent)] text-slate-950 hover:opacity-90 transition"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-200 bg-[#0c1322] print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-heading text-3xl font-extrabold text-white">VIDIT</h1>
              <span className="text-sm font-mono-code text-[var(--accent)] font-semibold">
                Self-Taught Software Developer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-[var(--accent)]" />
                github.com/vidit-dev
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
                3+ Years Self-Directed Practice
              </span>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono-code text-[var(--accent)] uppercase font-bold tracking-wider">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Relentless self-taught software developer with 3 years of daily coding discipline. Strong foundations in C++, C#, Java, and Python with hands-on experience building low-level algorithmic utilities, 2D game loops, telemetry daemons, and modern responsive web applications. Deeply motivated by algorithmic efficiency, clean architecture, and systems engineering.
            </p>
          </div>

          {/* Technical Arsenal */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-code text-[var(--accent)] uppercase font-bold tracking-wider">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">Languages:</span>
                <span className="text-slate-300 font-mono-code">C++, C#, Java, Python, TypeScript, JavaScript, HTML5/CSS3</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">Web & UI:</span>
                <span className="text-slate-300 font-mono-code">React, Tailwind CSS, Responsive Design, WebSockets, REST APIs</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">Systems & Tools:</span>
                <span className="text-slate-300 font-mono-code">Linux/Bash CLI, Git/GitHub, CMake, POSIX Syscalls, WebAssembly</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-white block mb-0.5">Core Concepts:</span>
                <span className="text-slate-300 font-mono-code">Data Structures, Algorithms (A*, BFS/DFS), Memory Management, OOP</span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono-code text-[var(--accent)] uppercase font-bold tracking-wider">
              Featured Software Projects
            </h2>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">Algorhythm - Interactive Algorithm Visualizer</span>
                  <span className="text-slate-400 font-mono-code">C++, WASM, React, TS</span>
                </div>
                <p className="text-slate-300 leading-normal mb-1">
                  Built pathfinding simulation (A*, Dijkstra) and sorting algorithms with core search logic compiled from C++ to WebAssembly for sub-16ms real-time execution.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">PyPulse - System Telemetry Daemon</span>
                  <span className="text-slate-400 font-mono-code">Python, Flask, psutil, Sockets</span>
                </div>
                <p className="text-slate-300 leading-normal mb-1">
                  Engineered non-blocking background daemon sampling CPU, RAM, and network metrics with real-time browser dashboard and configurable alert triggers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-white text-sm">AeroQuest 2D - Physics Platformer Engine</span>
                  <span className="text-slate-400 font-mono-code">C#, .NET, Raylib</span>
                </div>
                <p className="text-slate-300 leading-normal mb-1">
                  Created custom 2D platformer engine from scratch with continuous AABB collision resolution, coyote time jump physics, and decoupled event messaging.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Background */}
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h2 className="text-xs font-mono-code text-[var(--accent)] uppercase font-bold tracking-wider">
              Self-Directed Education & Milestones
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <p>• <strong>Independent Computer Science Studies (2023 - Present):</strong> Rigorous self-study covering systems programming, object-oriented software engineering, and web architectures.</p>
              <p>• <strong>Algorithmic Mastery:</strong> Solved 120+ data structures & algorithms problems (arrays, trees, graphs, dynamic programming).</p>
              <p>• <strong>Availability:</strong> Ready for software engineering internships, junior developer roles, and open-source collaborations.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
