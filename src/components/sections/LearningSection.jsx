import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Bookmark, Search, Terminal, Trophy, Shield, ArrowRight, Sparkles, Star } from 'lucide-react';
import { LEARNING_DOMAINS, ROADMAP_NODES } from '../../data/learningData.js';
import { useLearningProgress } from '../../hooks/useLearningProgress.js';

export default function LearningSection() {
  const { progress, isLessonCompleted, toggleLessonCompleted, isBookmarked, toggleBookmark } = useLearningProgress();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(null);

  const filteredDomains = LEARNING_DOMAINS.filter((domain) =>
    domain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Hero Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Interactive Cybersecurity Curriculum</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          SHIELD <span className="text-cyber-cyan">Learning Hub</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Master 24 comprehensive security domains, follow our 21-node interactive roadmap, track your local storage progress, and prepare for CTF competitions.
        </p>
      </div>

      {/* Progress Bar & Quick Stats */}
      <div className="cyber-card p-6 rounded-2xl border border-cyber-cyan/30 bg-cyber-bg/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-xs font-mono text-cyber-cyan font-bold uppercase">Your Learning Progress</span>
          <h3 className="text-lg font-bold text-white font-display">
            {progress.completedLessons.length} of 24 Domains Completed
          </h3>
          <p className="text-xs font-mono text-cyber-teal">
            Bookmarks: {progress.bookmarks.length} | Recently Active: {progress.lastActiveLesson?.domainSlug || 'None'}
          </p>
        </div>

        <div className="w-full md:w-64 bg-cyber-bg border border-cyber-cardBorder rounded-full h-4 overflow-hidden p-0.5">
          <div
            className="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(Math.round((progress.completedLessons.length / 24) * 100), 100)}%` }}
          ></div>
        </div>
      </div>

      {/* 21-Node Interactive Roadmap Header */}
      <div className="space-y-6 pt-4">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold font-display text-white">21-Node Cybersecurity Pathway</h2>
          <p className="text-xs font-mono text-cyber-teal">Step-by-step roadmap from Foundations to CTF Exploitation</p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {ROADMAP_NODES.map((node, idx) => (
            <div
              key={node.id}
              onClick={() => setSearchTerm(node.title)}
              className="flex items-center space-x-2 shrink-0 px-3.5 py-2 rounded-xl bg-cyber-card border border-cyber-cardBorder text-xs font-mono text-white hover:border-cyber-cyan cursor-pointer transition-all"
            >
              <span className="w-5 h-5 rounded-full bg-cyber-cyan/20 text-cyber-cyan flex items-center justify-center text-[10px] font-bold">
                {idx + 1}
              </span>
              <span>{node.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative">
        <Search className="w-4 h-4 text-cyber-muted absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search 24 security domains or concepts..."
          className="w-full pl-10 pr-4 py-2.5 bg-cyber-card border border-cyber-cardBorder rounded-xl text-xs text-white placeholder:text-cyber-muted focus:border-cyber-cyan focus:outline-none font-mono"
        />
      </div>

      {/* 24 Learning Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDomains.map((domain) => {
          const completed = isLessonCompleted(domain.id);
          const bookmarked = isBookmarked(domain.id);

          return (
            <div
              key={domain.id}
              className={`cyber-card p-6 rounded-2xl border space-y-4 transition-all flex flex-col justify-between ${
                completed ? 'border-green-500/50 bg-green-950/10' : 'border-cyber-cardBorder hover:border-cyber-cyan/50'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${domain.badgeColor}`}>
                    {domain.difficulty}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark(domain.id)}
                      className={`p-1 rounded transition-colors ${bookmarked ? 'text-yellow-400' : 'text-cyber-muted hover:text-white'}`}
                      title="Bookmark Domain"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-yellow-400' : ''}`} />
                    </button>
                    <button
                      onClick={() => toggleLessonCompleted(domain.id)}
                      className={`p-1 rounded transition-colors ${completed ? 'text-green-400' : 'text-cyber-muted hover:text-white'}`}
                      title="Mark Completed"
                    >
                      <CheckCircle2 className={`w-4 h-4 ${completed ? 'fill-green-400/20' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-display text-white">{domain.title}</h3>
                <p className="text-xs text-cyber-muted leading-relaxed font-sans">{domain.description}</p>
              </div>

              <div className="pt-4 border-t border-cyber-cardBorder/60 flex items-center justify-between text-xs font-mono">
                <span className="text-cyber-teal">{domain.estimatedTime}</span>
                <button
                  onClick={() => setSelectedDomain(domain)}
                  className="text-cyber-cyan hover:underline flex items-center space-x-1"
                >
                  <span>Start Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Domain Detail Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 overflow-y-auto">
          <div className="cyber-card w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative border border-cyber-cyan/40 bg-[#070a14]/95 backdrop-blur-2xl space-y-6">
            <button onClick={() => setSelectedDomain(null)} className="absolute top-4 right-4 text-cyber-muted hover:text-white">
              ✕
            </button>
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyber-cyan font-bold uppercase">{selectedDomain.difficulty} Track</span>
              <h2 className="text-2xl font-bold font-display text-white">{selectedDomain.title}</h2>
              <p className="text-xs font-sans text-cyber-muted leading-relaxed">{selectedDomain.description}</p>
            </div>

            <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-cardBorder space-y-3 font-mono text-xs">
              <div className="text-cyber-teal font-bold">Recommended Lab Setup & Tools:</div>
              <ul className="space-y-1.5 text-cyber-muted">
                <li>• Kali Linux / Ubuntu 24.04 LTS Docker Container</li>
                <li>• Burp Suite Community & OWASP ZAP</li>
                <li>• Wireshark, Nmap, and Metasploit Framework</li>
                <li>• Ghidra & GDB with Pwndbg extension</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  toggleLessonCompleted(selectedDomain.id);
                  setSelectedDomain(null);
                }}
                className="btn-cyber-primary text-xs px-4 py-2"
              >
                Mark Domain Completed ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
