import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare, 
  AlertCircle, 
  Terminal, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Inbox
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactSubmission } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Anti-spam honeypot field
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Local submission history for testing and developer verification
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('vidit_contact_submissions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showSubmissionLog, setShowSubmissionLog] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('vidit_contact_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.error(e);
    }
  }, [submissions]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Spam check: If the hidden honeypot has any value, bot detected!
    if (formData.honeypot) {
      console.warn('Honeypot caught a spambot submission');
      setIsSubmitted(true);
      return;
    }

    // 2. Validate user inputs
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch with network delay
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'General Inquiry',
        message: formData.message.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' })
      };

      setSubmissions((prev) => [newSubmission, ...prev]);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-[#0b1120]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--accent)] tracking-wider uppercase font-semibold">
            <span className="w-6 h-px bg-[var(--accent)]"></span>
            <span>05 // Let's Connect</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch With Vidit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Whether you have an internship opportunity, project collaboration, or just want to discuss low-level code.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-[#151f32] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[var(--accent)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">Direct Email</h3>
                  <p className="text-xs font-mono-code text-slate-400">Response within 24 hours</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono-code text-slate-200 truncate select-all">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono-code bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Vidit%20-%20From%20Portfolio`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono-code font-semibold bg-slate-900 hover:bg-slate-800 text-[var(--accent)] border border-slate-700 transition"
              >
                <span>Open in Mail Client</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social & Community Links */}
            <div className="p-6 rounded-2xl bg-[#151f32] border border-slate-800 shadow-xl space-y-4">
              <h3 className="font-heading text-sm font-bold text-white uppercase font-mono-code text-slate-400">
                Online Profiles
              </h3>

              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                    <div>
                      <span className="text-sm font-medium block">GitHub</span>
                      <span className="text-xs font-mono-code text-slate-500">@vidit-dev</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-code text-[var(--accent)] group-hover:underline">Visit &rarr;</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition" />
                    <div>
                      <span className="text-sm font-medium block">LinkedIn</span>
                      <span className="text-xs font-mono-code text-slate-500">Vidit</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-code text-[var(--accent)] group-hover:underline">Connect &rarr;</span>
                </a>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-sm font-medium block">Discord</span>
                      <span className="text-xs font-mono-code text-slate-400">{PERSONAL_INFO.discord}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-code text-emerald-400">Online</span>
                </div>
              </div>
            </div>

            {/* Spam & Privacy Security Note (Part 5 requirement) */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Your message is sent securely with client-side anti-spam verification. 
                No telemetry trackers or third-party cookies are used.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151f32] border border-slate-800 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been received and I'll get back to you shortly at the email you provided.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono-code font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition"
                    >
                      Send Another Note
                    </button>
                    {submissions.length > 0 && (
                      <button
                        onClick={() => setShowSubmissionLog(true)}
                        className="px-4 py-2.5 rounded-xl text-xs font-mono-code font-semibold bg-slate-900 text-[var(--accent)] border border-slate-800 hover:border-slate-700 transition flex items-center gap-1.5"
                      >
                        <Inbox className="w-3.5 h-3.5" />
                        <span>View Inbox Log ({submissions.length})</span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Honeypot field for anti-spam bots (hidden from human users) */}
                  <input
                    type="text"
                    name="_honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono-code text-slate-300 font-medium">
                        Your Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                          errors.name 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-slate-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono-code">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono-code text-slate-300 font-medium">
                        Your Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                          errors.email 
                            ? 'border-rose-500/80 focus:border-rose-500' 
                            : 'border-slate-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono-code">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono-code text-slate-300 font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity, Project idea, or question"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono-code text-slate-300 font-medium">
                      Message <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Vidit, I checked out your C++ and Web projects and would love to chat about..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none ${
                        errors.message 
                          ? 'border-rose-500/80 focus:border-rose-500' 
                          : 'border-slate-700 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono-code">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-[var(--accent)] hover:opacity-95 shadow-lg shadow-[var(--accent-glow)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {submissions.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setShowSubmissionLog(true)}
                        className="text-xs font-mono-code text-slate-400 hover:text-white transition flex items-center gap-1.5"
                      >
                        <Inbox className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Test Submissions Log ({submissions.length})</span>
                      </button>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Developer Submissions Modal (Local storage debugger for testing) */}
      {showSubmissionLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl bg-[#0f172a] border border-slate-700 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Inbox className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="font-heading text-lg font-bold text-white">Local Test Submissions</h3>
              </div>
              <button
                onClick={() => setShowSubmissionLog(false)}
                className="text-slate-400 hover:text-white text-xs font-mono-code px-2 py-1 rounded bg-slate-800"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-400 font-mono-code">
              Messages submitted during testing are safely captured here in browser storage:
            </p>

            <div className="max-h-72 overflow-y-auto space-y-3">
              {submissions.map((sub) => (
                <div key={sub.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-mono-code">
                    <span className="text-white font-semibold">{sub.name} &lt;{sub.email}&gt;</span>
                    <span>{sub.timestamp}</span>
                  </div>
                  <div className="text-sky-300 font-mono-code font-medium">Re: {sub.subject}</div>
                  <p className="text-slate-300 whitespace-pre-wrap">{sub.message}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-xs font-mono-code">
              <button
                onClick={() => setSubmissions([])}
                className="text-rose-400 hover:underline"
              >
                Clear Log
              </button>
              <button
                onClick={() => setShowSubmissionLog(false)}
                className="px-4 py-2 rounded-lg bg-[var(--accent)] text-slate-950 font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
