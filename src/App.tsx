/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, AccentColor } from './types';

export default function App() {
  const [accent, setAccent] = useState<AccentColor>(() => {
    try {
      const saved = localStorage.getItem('vidit_accent_theme');
      return (saved as AccentColor) || 'sky';
    } catch {
      return 'sky';
    }
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Apply dataset attribute for CSS variables
    const root = document.documentElement;
    if (accent === 'sky') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', accent);
    }
    try {
      localStorage.setItem('vidit_accent_theme', accent);
    } catch (e) {
      console.error(e);
    }
  }, [accent]);

  return (
    <div className="min-h-screen bg-[#0b1120] text-[#e2e8f0] flex flex-col selection:bg-[var(--accent)] selection:text-slate-950">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentAccent={accent}
        onSelectAccent={setAccent}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections (Semantic structure per Part 4 checklist) */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture & Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
