import React from 'react';
import { Shield, Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const handleNav = (id) => {
    setActiveSection(id);
    window.location.hash = `#${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyber-cardBorder bg-[#04060d] text-cyber-muted pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold font-display text-white tracking-wider">
                SHIELD <span className="text-cyber-cyan font-mono text-sm">NITH</span>
              </span>
            </div>
            <p className="text-xs text-cyber-muted/80 leading-relaxed font-sans">
              Official Cybersecurity Society of National Institute of Technology Hamirpur (Department of CSE). Defending the byte, securing the future.
            </p>
            <div className="flex space-x-3 text-cyber-muted">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cyber-card hover:text-cyber-cyan hover:border-cyber-cyan/50 border border-cyber-cardBorder transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cyber-card hover:text-cyber-cyan hover:border-cyber-cyan/50 border border-cyber-cardBorder transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cyber-card hover:text-cyber-cyan hover:border-cyber-cyan/50 border border-cyber-cardBorder transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-cyber-cyan pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><button onClick={() => handleNav('home')} className="hover:text-cyber-cyan transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-cyber-cyan transition-colors">Our Work & Impact</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-cyber-cyan transition-colors">About SHIELD</button></li>
              <li><button onClick={() => handleNav('team')} className="hover:text-cyber-cyan transition-colors">Executive Team</button></li>
              <li><button onClick={() => handleNav('events')} className="hover:text-cyber-cyan transition-colors">Events & Bootcamps</button></li>
              <li><button onClick={() => handleNav('projects')} className="hover:text-cyber-cyan transition-colors">Open Source Projects</button></li>
            </ul>
          </div>

          {/* Learning & Resources */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-cyber-teal pl-2">
              Learning Hub
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><button onClick={() => handleNav('learning')} className="hover:text-cyber-teal transition-colors">24 Security Domains</button></li>
              <li><button onClick={() => handleNav('learning')} className="hover:text-cyber-teal transition-colors">21-Node Roadmap</button></li>
              <li><button onClick={() => handleNav('learning')} className="hover:text-cyber-teal transition-colors">CLI Command Reference</button></li>
              <li><button onClick={() => handleNav('blog')} className="hover:text-cyber-teal transition-colors">CTF Writeups & Blog</button></li>
              <li><button onClick={() => handleNav('faq')} className="hover:text-cyber-teal transition-colors">Membership FAQ</button></li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-cyber-purple pl-2">
              Department HQ
            </h4>
            <ul className="space-y-2.5 text-xs text-cyber-muted">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                <span>Department of CSE, NIT Hamirpur, HP 177005</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyber-teal shrink-0" />
                <a href="mailto:shield@nith.ac.in" className="hover:text-white transition-colors font-mono">shield@nith.ac.in</a>
              </li>
              <li className="pt-2">
                <a href="https://nith.ac.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-cyber-cyan hover:underline font-mono text-[11px]">
                  <span>Official NITH Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-cardBorder/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-cyber-muted font-mono">
          <p>© {new Date().getFullYear()} SHIELD Cybersecurity Society (DoCSE, NIT Hamirpur). All rights reserved.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-cyber-red fill-cyber-red animate-pulse" />
            <span>by SHIELD Tech Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
