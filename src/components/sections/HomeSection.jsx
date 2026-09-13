import React from 'react';
import { Shield, ChevronRight, Terminal, Trophy, Users, Award, Lock, Cpu, Globe, Binary, KeyRound, FileSearch } from 'lucide-react';
import { SOCIETY_INFO, KEY_STATS, DOMAINS } from '../../data.js';

export default function HomeSection({ setActiveSection, onOpenJoinModal }) {
  const getDomainIcon = (icon) => {
    switch (icon) {
      case 'cpu': return <Cpu className="w-5 h-5 text-cyber-red" />;
      case 'globe': return <Globe className="w-5 h-5 text-cyber-cyan" />;
      case 'binary': return <Binary className="w-5 h-5 text-cyber-teal" />;
      case 'key-round': return <KeyRound className="w-5 h-5 text-cyber-purple" />;
      default: return <FileSearch className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <div className="space-y-20 py-8">
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 text-center max-w-5xl mx-auto space-y-8 px-4">
        {/* Glow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono shadow-neon-cyan/40">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
          <span>Department of CSE • NIT Hamirpur (HP 177005)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-none">
          DEFENDING THE BYTE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-teal to-cyber-purple">
            SECURING THE FUTURE.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-cyber-muted max-w-3xl mx-auto leading-relaxed font-sans">
          The premier student-run cybersecurity society at <strong>NIT Hamirpur</strong>. Empowering the next generation of ethical hackers, vulnerability researchers, and CTF champions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              setActiveSection('learning');
              window.location.hash = '#learning';
            }}
            className="btn-cyber-primary text-sm px-6 py-3.5 shadow-neon-cyan"
          >
            <span>Explore Learning Hub</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3.5 rounded-xl border border-cyber-cyan/40 bg-cyber-card text-white hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all font-mono text-sm"
          >
            Join Society 🛡️
          </button>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_STATS.map((stat, idx) => (
            <div key={idx} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyber-cyan">{stat.value}</div>
              <div className="text-xs font-mono text-cyber-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Domains Preview */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Our Core Specialization Domains</h2>
          <p className="text-xs font-mono text-cyber-teal">Hands-on offensive and defensive cybersecurity tracks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAINS.map((domain) => (
            <div key={domain.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/60 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyber-bg border border-cyber-cardBorder flex items-center justify-center group-hover:border-cyber-cyan transition-colors">
                  {getDomainIcon(domain.icon)}
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${domain.badgeColor}`}>
                  {domain.id.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white font-display group-hover:text-cyber-cyan transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs text-cyber-muted mt-2 leading-relaxed font-sans">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
