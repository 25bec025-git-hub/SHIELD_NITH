import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, BarChart3, ChevronRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenAnalytics, onOpenJoinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'events', label: 'Events' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning', label: 'Learning Hub' },
    { id: 'blog', label: 'Blog' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    window.location.hash = `#${id}`;
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-cardBorder py-3 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan group-hover:scale-105 group-hover:border-cyber-cyan transition-all shadow-neon-cyan/50">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-lg font-bold font-display tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                SHIELD <span className="text-cyber-cyan font-mono text-sm">NITH</span>
              </span>
              <span className="block text-[10px] font-mono text-cyber-teal uppercase tracking-widest">
                DoCSE • NIT Hamirpur
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.slice(0, 8).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 shadow-neon-cyan/30'
                      : 'text-cyber-muted hover:text-white hover:bg-cyber-card'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* More Dropdown Menu */}
            <div className="relative group">
              <button className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyber-muted hover:text-white hover:bg-cyber-card flex items-center gap-1">
                More ▾
              </button>
              <div className="absolute right-0 top-full mt-1 w-40 rounded-xl bg-cyber-card/95 border border-cyber-cardBorder backdrop-blur-xl p-2 shadow-2xl hidden group-hover:block space-y-1">
                {navLinks.slice(8).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                      activeSection === link.id
                        ? 'bg-cyber-cyan/20 text-cyber-cyan font-bold'
                        : 'text-cyber-muted hover:text-white hover:bg-cyber-bg'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenAnalytics}
              title="View Live Analytics & Metrics"
              className="p-2 rounded-lg bg-cyber-card border border-cyber-cardBorder text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all text-xs font-mono flex items-center space-x-1.5"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden xl:inline">Analytics</span>
            </button>

            <button
              onClick={onOpenJoinModal}
              className="btn-cyber-primary text-xs px-4 py-2 flex items-center space-x-1.5"
            >
              <span>Join SHIELD</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAnalytics}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-cardBorder text-cyber-cyan"
            >
              <BarChart3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-cardBorder text-white hover:text-cyber-cyan"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyber-cardBorder bg-cyber-bg/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeSection === link.id
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                    : 'text-cyber-muted hover:text-white bg-cyber-card/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-cyber-cardBorder flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full btn-cyber-primary text-xs py-2.5 justify-center"
            >
              Join SHIELD Society 🚀
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
