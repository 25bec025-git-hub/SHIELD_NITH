import React, { useState } from 'react';
import { ShieldAlert, Trophy, Terminal, Bug, Code2, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { WORK_PILLARS, CASE_STUDIES } from '../../data/workData.js';

export default function WorkSection({ onOpenCaseStudy }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const getPillarIcon = (icon) => {
    switch (icon) {
      case 'shield-alert': return <ShieldAlert className="w-6 h-6 text-cyber-red" />;
      case 'trophy': return <Trophy className="w-6 h-6 text-cyber-cyan" />;
      case 'terminal': return <Terminal className="w-6 h-6 text-cyber-teal" />;
      case 'bug': return <Bug className="w-6 h-6 text-cyber-purple" />;
      case 'code-2': return <Code2 className="w-6 h-6 text-cyber-cyan" />;
      default: return <Lock className="w-6 h-6 text-cyber-teal" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Work & Society Impact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          What We Do at <span className="text-cyber-cyan">SHIELD NITH</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Explore our six core operational pillars—from vulnerability research and national CTF victories to free campus bootcamps, bug bounty achievements, and open-source tooling.
        </p>
      </div>

      {/* 6 Core Work Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORK_PILLARS.map((pillar) => (
          <div key={pillar.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyber-bg border border-cyber-cardBorder flex items-center justify-center">
                  {getPillarIcon(pillar.icon)}
                </div>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${pillar.badgeColor}`}>
                  {pillar.keyMetrics}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-cyber-teal uppercase tracking-wider">{pillar.category}</span>
                <h3 className="text-lg font-bold font-display text-white mt-1">{pillar.title}</h3>
                <p className="text-xs text-cyber-muted mt-2 leading-relaxed">{pillar.summary}</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-cyber-cardBorder/60">
                <div className="text-[11px] font-mono text-white font-bold">Key Accomplishments:</div>
                <ul className="space-y-1">
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx} className="text-[11px] text-cyber-muted flex items-start space-x-1.5">
                      <span className="text-cyber-cyan">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Case Studies */}
      <div className="space-y-6 pt-8 border-t border-cyber-cardBorder">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold font-display text-white">Featured Impact Case Studies</h2>
          <p className="text-xs font-mono text-cyber-teal">Real-world research disclosures, competition podiums, and tool builds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyber-muted">
                  <span className="text-cyber-cyan font-bold">{cs.category}</span>
                  <span>{cs.date}</span>
                </div>
                <h3 className="text-base font-bold font-display text-white">{cs.title}</h3>
                <p className="text-xs text-cyber-muted leading-relaxed">{cs.summary}</p>
                <div className="p-3 rounded-lg bg-cyber-bg border border-cyber-cardBorder text-xs font-mono text-cyber-teal">
                  <strong>Impact:</strong> {cs.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cs.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
