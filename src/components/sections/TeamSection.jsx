import React from 'react';
import { Users, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data.js';

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Users className="w-3.5 h-3.5" />
          <span>Executive Board & Core Leads</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Meet the <span className="text-cyber-cyan">SHIELD Team</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Student leaders, researchers, and CTF captains driving cybersecurity excellence at NIT Hamirpur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all group">
            <div className="flex items-center space-x-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-xl object-cover border border-cyber-cardBorder group-hover:border-cyber-cyan transition-colors shrink-0"
              />
              <div>
                <h3 className="text-base font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-cyber-teal">{member.role}</p>
                <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  {member.batch}
                </span>
              </div>
            </div>

            <p className="text-xs text-cyber-muted leading-relaxed font-sans border-t border-cyber-cardBorder/60 pt-3">
              {member.bio}
            </p>

            <div className="flex space-x-2 pt-2 border-t border-cyber-cardBorder/60">
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-cyber-bg border border-cyber-cardBorder text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-colors text-xs">
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-cyber-bg border border-cyber-cardBorder text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-colors text-xs">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-cyber-bg border border-cyber-cardBorder text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-colors text-xs">
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
