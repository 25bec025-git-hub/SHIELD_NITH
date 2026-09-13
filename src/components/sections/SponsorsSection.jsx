import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { SPONSORS } from '../../data.js';

export default function SponsorsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>Industry Partners & Supporters</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Sponsors & <span className="text-cyber-cyan">Partners</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Supported by leading technology companies, cloud providers, and security organizations advancing student cyber research.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPONSORS.map((sponsor, idx) => (
          <div key={idx} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 text-center hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 inline-block uppercase tracking-wider">
                {sponsor.tier}
              </span>
              <div className="h-16 flex items-center justify-center font-mono font-extrabold text-xl tracking-wider text-white border border-cyber-cardBorder rounded-xl bg-cyber-bg">
                {sponsor.logoText || sponsor.name}
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">{sponsor.name}</h3>
                <p className="text-xs text-cyber-teal font-mono mt-1">{sponsor.type}</p>
                <p className="text-xs text-cyber-muted mt-2 font-sans">{sponsor.perks}</p>
              </div>
            </div>

            <a
              href={sponsor.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 text-xs font-mono text-cyber-cyan hover:text-white pt-4 border-t border-cyber-cardBorder/60"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
