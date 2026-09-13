import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../../data.js';

export default function FaqSection({ onOpenJoinModal }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Membership & Society Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Frequently Asked <span className="text-cyber-cyan">Questions</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Everything you need to know about joining SHIELD NITH, attending workshops, and competing in CTFs.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.id || idx}
              className="cyber-card rounded-2xl border border-cyber-cardBorder overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between font-display font-bold text-sm sm:text-base text-white hover:text-cyber-cyan transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-cyber-cyan transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-cyber-muted font-sans leading-relaxed border-t border-cyber-cardBorder/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="cyber-card p-8 rounded-2xl border border-cyber-cyan/40 bg-cyber-bg/90 text-center space-y-4 max-w-xl mx-auto">
        <Sparkles className="w-8 h-8 text-cyber-cyan mx-auto animate-pulse" />
        <h3 className="text-lg font-bold font-display text-white">Have More Questions?</h3>
        <p className="text-xs font-mono text-cyber-muted">Join our community Discord or submit your membership application directly!</p>
        <button onClick={onOpenJoinModal} className="btn-cyber-primary text-xs px-6 py-3">
          Join SHIELD Society Now 🚀
        </button>
      </div>
    </div>
  );
}
