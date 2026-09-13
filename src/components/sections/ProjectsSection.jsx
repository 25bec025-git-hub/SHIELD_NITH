import React from 'react';
import { Code2, Github, ExternalLink, Star } from 'lucide-react';
import { PROJECTS_RESOURCES } from '../../data.js';

export default function ProjectsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>Open Source Tooling & Research</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Security <span className="text-cyber-cyan">Projects</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Open-source security scanners, CTF lab Docker setups, SageMath crypto solvers, and memory auditing utilities engineered by SHIELD members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_RESOURCES.map((proj) => (
          <div key={proj.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  {proj.category}
                </span>
                <div className="flex items-center space-x-2 text-xs font-mono text-cyber-muted">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>{proj.stars || 145}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-white">{proj.title}</h3>
              <p className="text-xs text-cyber-muted leading-relaxed font-sans">{proj.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-bg text-cyber-teal border border-cyber-cardBorder">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t border-cyber-cardBorder/60">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-lg bg-cyber-card border border-cyber-cardBorder text-white text-xs font-mono flex items-center justify-center space-x-2 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
              {proj.docUrl && (
                <a
                  href={proj.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all text-xs"
                  title="Live Demo / Documentation"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
