import React from 'react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data.js';

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research Writeups & CTF Logs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Security <span className="text-cyber-cyan">Blog & Writeups</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Technical deep dives, vulnerability analysis, and CTF challenge solutions authored by SHIELD NITH researchers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-cyber-muted">
                <span className="text-cyber-cyan font-bold">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white">{post.title}</h3>
              <p className="text-xs text-cyber-muted leading-relaxed font-sans">{post.summary}</p>
              <div className="flex items-center justify-between text-[11px] font-mono text-cyber-teal pt-2 border-t border-cyber-cardBorder/60">
                <span className="flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>{post.author}</span>
                </span>
                <span>{post.date}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Reading post: "${post.title}"`)}
              className="w-full py-2.5 rounded-xl border border-cyber-cyan/40 bg-cyber-bg text-cyber-cyan hover:bg-cyber-cyan/10 transition-all text-xs font-mono flex items-center justify-center space-x-1.5 mt-4"
            >
              <span>Read Full Writeup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
