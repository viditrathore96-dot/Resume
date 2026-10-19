import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal, ChevronRight, Github, Mail } from 'lucide-react';
import { AccentColor } from '../types';

interface NavbarProps {
  currentAccent: AccentColor;
  onSelectAccent: (accent: AccentColor) => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const ACCENT_OPTIONS: { id: AccentColor; label: string; color: string; ring: string }[] = [
  { id: 'sky', label: 'Electric Blue', color: 'bg-sky-400', ring: 'ring-sky-400' },
  { id: 'emerald', label: 'Vibrant Green', color: 'bg-emerald-400', ring: 'ring-emerald-400' },
  { id: 'purple', label: 'Neon Purple', color: 'bg-purple-400', ring: 'ring-purple-400' },
  { id: 'amber', label: 'Warm Amber', color: 'bg-amber-400', ring: 'ring-amber-400' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentAccent, onSelectAccent, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white hover:opacity-90 transition"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[var(--accent)] font-mono-code text-sm font-bold shadow-inner group-hover:border-[var(--accent)] transition-colors">
            &lt;V/&gt;
          </div>
          <span className="flex items-center gap-1.5">
            <span>Vidit</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-800 text-[var(--accent)] shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme Accent Picker + Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Accent Color Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-full border border-slate-800/80" title="Change accent theme color">
            <span className="text-xs text-slate-400 font-mono-code mr-1">accent:</span>
            {ACCENT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => onSelectAccent(opt.id)}
                aria-label={`Set theme to ${opt.label}`}
                className={`w-4 h-4 rounded-full ${opt.color} transition-transform hover:scale-125 focus:outline-none ${
                  currentAccent === opt.id ? `ring-2 ${opt.ring} scale-110` : 'opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700/80 border border-slate-700 transition duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4 text-[var(--accent)]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0f172a] border-b border-slate-800 px-5 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono-code text-slate-400">Accent Theme:</span>
            <div className="flex items-center gap-3">
              {ACCENT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onSelectAccent(opt.id)}
                  className={`w-5 h-5 rounded-full ${opt.color} ${
                    currentAccent === opt.id ? `ring-2 ${opt.ring} scale-110` : 'opacity-60'
                  }`}
                  aria-label={opt.label}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-slate-800 text-[var(--accent)] font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-white font-medium text-sm border border-slate-700"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Download Resume</span>
            </button>
            <a
              href="mailto:viditnandsaroj@gmail.com"
              className="px-3.5 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
