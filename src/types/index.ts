export interface Project {
  id: string;
  title: string;
  category: 'Systems' | 'Python & Backend' | 'Game Dev & C#' | 'Java' | 'Web';
  summary: string;
  description: string;
  techStack: string[];
  features: string[];
  architecture: string;
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  highlightCode?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Tools & Core';
  level: number; // 0 - 100
  levelLabel: 'Advanced' | 'Proficient' | 'Intermediate';
  experienceYears: string;
  description: string;
  iconName: string;
  codeSnippet?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export type AccentColor = 'sky' | 'emerald' | 'purple' | 'amber';
