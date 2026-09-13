import React, { useState } from 'react';
import { X, Shield, CheckCircle2, User, Mail, Sparkles, BookOpen } from 'lucide-react';

export function RegistrationModal({ isOpen, onClose, eventTitle, onSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', rollNo: '', year: '1' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess?.();
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 overflow-y-auto">
      <div className="cyber-card w-full max-w-md rounded-2xl p-6 relative border border-cyber-cyan/40 bg-[#070a14]/95 backdrop-blur-2xl shadow-neon-cyan space-y-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-cyber-muted hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-cyber-cardBorder pb-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-display">Register for Event</h3>
            <p className="text-xs text-cyber-teal font-mono truncate max-w-[240px]">{eventTitle || 'SHIELD Bootcamp'}</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white font-display">Registration Confirmed!</h4>
            <p className="text-xs text-cyber-muted font-mono">Confirmation email and lab link sent to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
            <div>
              <label className="block text-cyber-muted mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aarav Sharma"
                className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-cyber-muted mb-1">Institutional Email (@nith.ac.in)</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="22cse@nith.ac.in"
                className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-cyber-muted mb-1">Roll Number</label>
                <input
                  type="text"
                  required
                  value={formData.rollNo}
                  onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                  placeholder="22DEC045"
                  className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-cyber-muted mb-1">Year of Study</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none"
                >
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full btn-cyber-primary py-2.5 justify-center mt-2">
              Confirm Event Seat 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function JoinModal({ isOpen, onClose, onSuccess }) {
  const [submitted, setSubmitted] = useState(false);
  const [domain, setDomain] = useState('Web Exploitation');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess?.();
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4 overflow-y-auto">
      <div className="cyber-card w-full max-w-md rounded-2xl p-6 relative border border-cyber-cyan/40 bg-[#070a14]/95 backdrop-blur-2xl shadow-neon-cyan space-y-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-cyber-muted hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-cyber-cardBorder pb-3">
          <div className="w-9 h-9 rounded-lg bg-cyber-teal/10 border border-cyber-teal/40 flex items-center justify-center text-cyber-teal">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-display">Join SHIELD Society</h3>
            <p className="text-xs text-cyber-teal font-mono">Department of CSE • NIT Hamirpur</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-cyber-teal mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white font-display">Application Received!</h4>
            <p className="text-xs text-cyber-muted font-mono">Check your email for Discord invite & orientation dates.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs font-mono">
            <div>
              <label className="block text-cyber-muted mb-1">Full Name</label>
              <input type="text" required placeholder="Aarav Sharma" className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none" />
            </div>

            <div>
              <label className="block text-cyber-muted mb-1">Email (@nith.ac.in)</label>
              <input type="email" required placeholder="22cse@nith.ac.in" className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none" />
            </div>

            <div>
              <label className="block text-cyber-muted mb-1">Primary Security Domain Interest</label>
              <select value={domain} onChange={(e) => setDomain(e.target.value)} className="w-full px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-white focus:border-cyber-cyan focus:outline-none">
                <option value="Web Exploitation">Web Exploitation (XSS, SQLi, SSRF)</option>
                <option value="Binary Exploitation">Binary Exploitation & Kernel Pwn</option>
                <option value="Reverse Engineering">Reverse Engineering & Malware</option>
                <option value="Cryptography">Cryptography & Quantum Defense</option>
                <option value="Digital Forensics">Digital Forensics & Incident Response</option>
                <option value="Cloud Security">Cloud & Infrastructure Defense</option>
              </select>
            </div>

            <button type="submit" className="w-full btn-cyber-primary py-2.5 justify-center mt-2">
              Submit Application 🛡️
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
