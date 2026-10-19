import React from 'react';
import { ArrowUp, Github, Mail, Linkedin, Terminal, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d1a] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[var(--accent)] font-mono-code font-bold text-xs">
              &lt;V/&gt;
            </div>
            <div>
              <span className="font-heading font-bold text-white text-base">Vidit</span>
              <span className="text-xs font-mono-code text-slate-400 block">
                Self-Taught Software Developer • 3 Years of Building
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button (per Part 4 #8) */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono-code text-slate-300 hover:text-white transition"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[var(--accent)]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Checklist Affirmation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <p>© {new Date().getFullYear()} Vidit. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with semantic HTML, Tailwind & React</span>
            <span>•</span>
            <span className="text-[var(--accent)]">100% Self-Taught</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
