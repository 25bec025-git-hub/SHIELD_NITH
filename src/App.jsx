import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CanvasBackground from './components/CanvasBackground.jsx';
import CyberBot from './components/CyberBot.jsx';
import AnalyticsModal from './components/AnalyticsModal.jsx';
import { RegistrationModal, JoinModal } from './components/Modals.jsx';

import HomeSection from './components/sections/HomeSection.jsx';
import WorkSection from './components/sections/WorkSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import TeamSection from './components/sections/TeamSection.jsx';
import EventsSection from './components/sections/EventsSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import LearningSection from './components/sections/LearningSection.jsx';
import BlogSection from './components/sections/BlogSection.jsx';
import GallerySection from './components/sections/GallerySection.jsx';
import SponsorsSection from './components/sections/SponsorsSection.jsx';
import FaqSection from './components/sections/FaqSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

export default function App() {
  const [routeState, setRouteState] = useState(() => {
    const rawHash = window.location.hash.replace('#', '');
    const parts = rawHash.split('/');
    return {
      main: parts[0] || 'home',
      sub: parts[1] || null,
    };
  });

  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [registerEventTitle, setRegisterEventTitle] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      const parts = rawHash.split('/');
      setRouteState({
        main: parts[0] || 'home',
        sub: parts[1] || null,
      });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateSection = (sectionId) => {
    window.location.hash = `#${sectionId}`;
  };

  const handleNavigateCourse = (courseSlug) => {
    if (courseSlug) {
      window.location.hash = `#learning/${courseSlug}`;
    } else {
      window.location.hash = '#learning';
    }
  };

  const handleOpenRegister = (eventTitle) => {
    setRegisterEventTitle(eventTitle || 'SHIELD Event');
    setRegistrationModalOpen(true);
  };

  const renderSection = () => {
    switch (routeState.main) {
      case 'work':
        return <WorkSection />;
      case 'about':
        return <AboutSection />;
      case 'team':
        return <TeamSection />;
      case 'events':
        return <EventsSection onRegister={handleOpenRegister} />;
      case 'projects':
        return <ProjectsSection />;
      case 'learning':
        return <LearningSection activeCourseSlug={routeState.sub} onNavigateCourse={handleNavigateCourse} />;
      case 'blog':
        return <BlogSection />;
      case 'gallery':
        return <GallerySection />;
      case 'sponsors':
        return <SponsorsSection />;
      case 'faq':
        return <FaqSection onOpenJoinModal={() => setJoinModalOpen(true)} />;
      case 'contact':
        return <ContactSection />;
      case 'home':
      default:
        return <HomeSection setActiveSection={handleNavigateSection} onOpenJoinModal={() => setJoinModalOpen(true)} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-cyber-bg text-cyber-text flex flex-col font-sans selection:bg-cyber-cyan selection:text-black">
      {/* Dynamic HTML5 Canvas particle background */}
      <CanvasBackground />

      {/* Header Navigation */}
      <Navbar
        activeSection={routeState.main}
        setActiveSection={handleNavigateSection}
        onOpenAnalytics={() => setAnalyticsOpen(true)}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* Main Page Body */}
      <main id="app-main" className="flex-grow pt-24 pb-16 relative z-10">
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer setActiveSection={handleNavigateSection} />

      {/* Groq AI + Live Web Search CyberBot */}
      <CyberBot />

      {/* Analytics Dashboard Modal */}
      <AnalyticsModal isOpen={analyticsOpen} onClose={() => setAnalyticsOpen(false)} />

      {/* Event Registration Modal */}
      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
        eventTitle={registerEventTitle}
      />

      {/* Join Society Modal */}
      <JoinModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
    </div>
  );
}
