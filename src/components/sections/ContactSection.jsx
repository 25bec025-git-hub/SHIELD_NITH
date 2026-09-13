import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { SOCIETY_INFO } from '../../data.js';


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Contact <span className="text-cyber-cyan">SHIELD NITH</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Have questions about research collaborations, workshops, or joining the society? Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyber-cardBorder space-y-6">
          <h2 className="text-xl font-bold font-display text-white flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-cyber-cyan" />
            <span>Send a Direct Message</span>
          </h2>

          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-cyber-bg/80 rounded-xl border border-green-500/40">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-white font-display">Message Delivered!</h3>
              <p className="text-xs text-cyber-muted font-mono">We will respond to your email within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cyber-muted mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Aarav Sharma"
                    className="w-full px-3.5 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-xl text-white focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-cyber-muted mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aarav@nith.ac.in"
                    className="w-full px-3.5 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-xl text-white focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cyber-muted mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Workshop Query / Sponsorship"
                  className="w-full px-3.5 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-xl text-white focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-cyber-muted mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your query or message here..."
                  className="w-full px-3.5 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-xl text-white focus:border-cyber-cyan focus:outline-none leading-relaxed"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-cyber-primary py-3 justify-center">
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          )}
        </div>

        {/* Location & Info Card */}
        <div className="space-y-6">
          <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyber-cardBorder space-y-4">
            <h2 className="text-xl font-bold font-display text-white flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyber-cyan" />
              <span>Campus Headquarters</span>
            </h2>

            <div className="space-y-3 text-xs text-cyber-muted font-sans leading-relaxed">
              <p className="p-4 rounded-xl bg-cyber-bg border border-cyber-cardBorder font-mono">
                <strong className="text-white">Department of Computer Science & Engineering</strong><br />
                National Institute of Technology Hamirpur (NITH)<br />
                Anu, Hamirpur, Himachal Pradesh — 177005
              </p>

              <div className="flex items-center space-x-3 text-xs font-mono pt-2">
                <Mail className="w-4 h-4 text-cyber-cyan" />
                <a href="mailto:shield@nith.ac.in" className="text-cyber-cyan hover:underline">shield@nith.ac.in</a>
              </div>
            </div>
          </div>

          <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyber-cardBorder space-y-4">
            <h3 className="text-base font-bold font-display text-white">Join Community Channels</h3>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <a href={SOCIETY_INFO.discord} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-cyber-bg border border-cyber-cardBorder text-cyber-cyan hover:border-cyber-cyan flex items-center justify-center space-x-2">
                <span>Discord Channel 💬</span>
              </a>
              <a href={SOCIETY_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-cyber-bg border border-cyber-cardBorder text-cyber-teal hover:border-cyber-teal flex items-center justify-center space-x-2">
                <span>GitHub Org 🛠️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
