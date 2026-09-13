import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data.js';

export default function GallerySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
          <Camera className="w-3.5 h-3.5" />
          <span>Moments & Highlights</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
          Society <span className="text-cyber-cyan">Gallery</span>
        </h1>
        <p className="text-sm text-cyber-muted font-sans leading-relaxed">
          Snapshots from our hands-on workshops, hardware teardowns, university hackathons, and CTF victory podiums.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="cyber-card rounded-2xl overflow-hidden border border-cyber-cardBorder group hover:border-cyber-cyan/50 transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-cyber-cyan border border-cyber-cyan/40">
                {item.category}
              </span>
            </div>
            <div className="p-4 space-y-1 bg-cyber-bg/90">
              <h3 className="text-sm font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">{item.title}</h3>
              <p className="text-xs font-mono text-cyber-muted">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
