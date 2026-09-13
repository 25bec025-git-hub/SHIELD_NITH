import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { EVENTS } from '../../data.js';

export default function EventsSection({ onRegister }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Calendar className="w-3.5 h-3.5" />
          <span>Workshops & Competitions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Events & <span className="text-cyber-cyan">Bootcamps</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Hands-on security bootcamps, hardware teardowns, and national CTF hackathons hosted by SHIELD NITH.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENTS.map((event) => (
          <div key={event.id} className="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-4 hover:border-cyber-cyan/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  {event.type}
                </span>
                <span className="text-xs font-mono text-cyber-teal font-bold">{event.status}</span>
              </div>

              <h3 className="text-lg font-bold font-display text-white">{event.title}</h3>
              <p className="text-xs text-cyber-muted leading-relaxed font-sans">{event.description}</p>

              <div className="space-y-1.5 text-xs font-mono text-cyber-muted border-t border-cyber-cardBorder/60 pt-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-cyber-teal shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-cyber-purple shrink-0" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onRegister(event.title)}
              className="w-full btn-cyber-primary text-xs py-2.5 justify-center mt-4"
            >
              <span>Register for Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
