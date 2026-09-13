import React from 'react';
import { Shield, Award, BookOpen, Building, CheckCircle2, User } from 'lucide-react';
import { SOCIETY_INFO } from '../../data.js';

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Shield className="w-3.5 h-3.5" />
          <span>About SHIELD Society</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Cybersecurity Excellence at <span className="text-cyber-cyan">NIT Hamirpur</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Founded in 2021 under the Department of Computer Science & Engineering, SHIELD serves as NIT Hamirpur's dedicated hub for ethical hacking, reverse engineering, binary exploitation, and cybersecurity research.
        </p>
      </div>

      {/* Mission & Department Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="cyber-card p-8 rounded-2xl border border-cyber-cardBorder space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Our Mission & Core Objectives</h2>
          <ul className="space-y-3 text-xs font-mono text-cyber-muted">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
              <span>Train university students in competitive Capture The Flag (CTF) challenges and ethical hacking.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
              <span>Promote responsible vulnerability disclosure and zero-day research across web & IoT systems.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
              <span>Bridge academic computer science with industry security standards and bug bounty hunting.</span>
            </li>
          </ul>
        </div>

        <div className="cyber-card p-8 rounded-2xl border border-cyber-cardBorder space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyber-teal/10 border border-cyber-teal/40 flex items-center justify-center text-cyber-teal">
            <Building className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Department Alignment</h2>
          <p className="text-xs text-cyber-muted leading-relaxed font-sans">
            Operating under the guidance of the <strong>Department of Computer Science & Engineering (DoCSE)</strong> at NIT Hamirpur, SHIELD integrates hands-on security labs into the academic environment.
          </p>
          <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-cardBorder text-xs font-mono text-cyber-teal">
            📍 <strong>Location:</strong> CSE Department Labs, NIT Hamirpur, HP 177005
          </div>
        </div>
      </div>

      {/* Faculty Advisor Card */}
      <div className="cyber-card p-8 rounded-2xl border border-cyber-cyan/40 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <img
          src={SOCIETY_INFO.facultyAdvisor.image}
          alt={SOCIETY_INFO.facultyAdvisor.name}
          className="w-32 h-32 rounded-2xl object-cover border-2 border-cyber-cyan shrink-0 shadow-neon-cyan"
        />
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono text-cyber-cyan font-bold uppercase">Faculty Advisor</span>
          <h3 className="text-2xl font-bold font-display text-white">{SOCIETY_INFO.facultyAdvisor.name}</h3>
          <p className="text-xs font-mono text-cyber-teal">{SOCIETY_INFO.facultyAdvisor.role}</p>
          <p className="text-xs text-cyber-muted leading-relaxed font-sans pt-2">
            "{SOCIETY_INFO.facultyAdvisor.bio}"
          </p>
        </div>
      </div>
    </div>
  );
}
