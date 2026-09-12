// Main Application JS Controller for SHIELD Cybersecurity Society Website

import { createIcons, icons } from 'lucide';
import { 
  SOCIETY_INFO, 
  KEY_STATS, 
  DOMAINS, 
  TEAM_MEMBERS, 
  EVENTS, 
  PROJECTS_RESOURCES, 
  BLOG_POSTS, 
  GALLERY_ITEMS, 
  SPONSORS, 
  FAQS 
} from './data.js';

import {
  LEARNING_DOMAINS,
  ROADMAP_NODES,
  COMMAND_REFERENCES,
  SECURITY_TOOLS,
  GLOSSARY_ITEMS,
  CHEATSHEET_ITEMS,
  getDomainCurriculum
} from './data/learningData.js';

import { WORK_PILLARS, CASE_STUDIES } from './data/workData.js';
import { learningProgress } from './learningProgress.js';
import { initCyberCanvas } from './canvas.js';
import { analytics } from './analytics.js';
import { cyberBot } from './chatbot.js';

class ShieldApp {
  constructor() {
    this.currentSection = 'home';
    this.teamFilter = 'All';
    this.eventsFilter = 'All';
    this.eventsViewMode = 'list';
    this.projectsFilter = 'All';
    this.projectsSearch = '';
    this.blogFilter = 'All';
    this.galleryFilter = 'All';
    this.faqSearch = '';

    // Work Section State
    this.workFilter = 'All';

    // Learning Hub State
    this.learningSearch = '';
    this.learningDifficultyFilter = 'All';
    this.glossarySearch = '';
    this.selectedQuizAnswers = {};

    this.selectedEventForRegistration = null;
    this.activeArticle = null;
    this.lightboxIndex = 0;
  }

  init() {
    this.renderHeader();
    this.renderFooter();
    this.setupNavigation();
    this.initCanvas();

    // Initial Route Render
    this.handleRoute();

    this.setupGlobalEventListeners();
    this.injectGlobalSchema();
    this.refreshIcons();

    // Initialize AI CyberBot Floating Assistant
    cyberBot.init();

    analytics.track('pageview', 'Pageview', 'init');
  }

  refreshIcons() {
    setTimeout(() => {
      createIcons({ icons });
    }, 50);
  }

  initCanvas() {
    initCyberCanvas('cyber-canvas');
  }

  injectGlobalSchema() {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": SOCIETY_INFO.name,
      "alternateName": SOCIETY_INFO.shortName,
      "url": window.location.href,
      "logo": "https://shield-nith.ac.in/logo.png",
      "description": SOCIETY_INFO.tagline,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hamirpur",
        "addressRegion": "Himachal Pradesh",
        "postalCode": "177005",
        "addressCountry": "IN"
      },
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": SOCIETY_INFO.institution
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(orgSchema);
    document.head.appendChild(script);
  }

  setupNavigation() {
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });
  }

  handleRoute() {
    const rawHash = window.location.hash.replace('#', '') || 'home';
    const parts = rawHash.split('/').filter(Boolean);
    const primarySection = parts[0] || 'home';
    const subRoute = parts.slice(1).join('/');

    this.navigateTo(primarySection, subRoute, false);
  }

  navigateTo(sectionId, subRoute = '', updateHash = true) {
    const validSections = ['home', 'work', 'about', 'team', 'events', 'projects', 'blog', 'gallery', 'sponsors', 'faq', 'contact', 'learning'];
    const target = validSections.includes(sectionId) ? sectionId : 'home';

    this.currentSection = target;

    // Update active navbar link
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '').split('/')[0];
      if (href === target) {
        link.classList.add('text-cyber-cyan', 'border-b-2', 'border-cyber-cyan');
        link.classList.remove('text-cyber-muted');
      } else {
        link.classList.remove('text-cyber-cyan', 'border-b-2', 'border-cyber-cyan');
        link.classList.add('text-cyber-muted');
      }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    }

    if (updateHash) {
      const fullHash = subRoute ? `${target}/${subRoute}` : target;
      window.location.hash = fullHash;
    }

    this.renderSection(target, subRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    analytics.track('pageview', 'Pageview', subRoute ? `${target}/${subRoute}` : target);
  }

  renderHeader() {
    const headerEl = document.getElementById('app-header');
    if (!headerEl) return;

    headerEl.innerHTML = `
      <header class="sticky top-0 z-40 w-full border-b border-cyber-cardBorder/60 bg-cyber-bg/90 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#home" class="flex items-center space-x-3 group cursor-pointer focus:outline-none" aria-label="SHIELD NITH Homepage">
            <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-neon-cyan transition-all duration-300">
              <i data-lucide="shield" class="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform"></i>
            </div>
            <div>
              <span class="font-display font-bold text-xl tracking-wide text-white group-hover:text-cyber-cyan transition-colors">SHIELD</span>
              <span class="block text-[10px] font-mono text-cyber-teal tracking-widest uppercase">NIT HAMIRPUR</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-5 text-sm font-medium" aria-label="Main Navigation">
            <a href="#home" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="home">Home</a>
            <a href="#work" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan text-cyber-cyan font-semibold flex items-center space-x-1" data-section="work">
              <i data-lucide="briefcase" class="w-4 h-4 text-cyber-cyan mr-1 inline"></i>
              <span>Our Work</span>
            </a>
            <a href="#about" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="about">About</a>
            <a href="#team" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="team">Team</a>
            <a href="#events" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="events">Events</a>
            <a href="#projects" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="projects">Projects</a>
            <a href="#learning" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan flex items-center space-x-1" data-section="learning">
              <i data-lucide="book-open" class="w-4 h-4 text-cyber-teal mr-1 inline"></i>
              <span>Learning</span>
            </a>
            <a href="#blog" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="blog">Blog</a>
            <a href="#gallery" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="gallery">Gallery</a>
            <a href="#faq" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="faq">FAQ</a>
            <a href="#contact" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="contact">Contact</a>
          </nav>

          <!-- CTAs & Analytics Trigger -->
          <div class="hidden lg:flex items-center space-x-3">
            <button id="open-analytics-btn" class="btn-cyber-outline text-xs px-3 py-1.5 flex items-center space-x-2" title="View Live Site Analytics Dashboard">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-cyber-cyan"></i>
              <span>Analytics</span>
            </button>
            <a href="#faq" id="join-header-btn" class="btn-cyber-primary text-xs px-4 py-2 flex items-center space-x-2">
              <i data-lucide="user-plus" class="w-4 h-4"></i>
              <span>Join SHIELD</span>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex md:hidden items-center space-x-3">
            <button id="open-analytics-mobile" class="p-2 text-cyber-cyan border border-cyber-cardBorder rounded-md" aria-label="Open Analytics">
              <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
            </button>
            <button id="mobile-menu-toggle" class="p-2 text-cyber-muted hover:text-white rounded-md border border-cyber-cardBorder focus:outline-none focus:ring-2 focus:ring-cyber-cyan" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation menu">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden border-b border-cyber-cardBorder bg-cyber-bg/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <a href="#home" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Home</a>
          <a href="#work" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-cyan font-bold">Our Work & Impact</a>
          <a href="#about" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">About</a>
          <a href="#team" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Team</a>
          <a href="#events" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Events</a>
          <a href="#projects" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Projects</a>
          <a href="#learning" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Learning Hub</a>
          <a href="#blog" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Blog</a>
          <a href="#gallery" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Gallery</a>
          <a href="#sponsors" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Sponsors</a>
          <a href="#faq" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Membership & FAQ</a>
          <a href="#contact" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Contact</a>
          <div class="pt-2">
            <a href="#faq" class="btn-cyber-primary w-full text-center py-2.5 text-xs">Join SHIELD Society</a>
          </div>
        </div>
      </header>
    `;

    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', (!isExpanded).toString());
        mobileMenu.classList.toggle('hidden');
      });
    }

    const openAnalyticsBtn = document.getElementById('open-analytics-btn');
    const openAnalyticsMobile = document.getElementById('open-analytics-mobile');
    if (openAnalyticsBtn) openAnalyticsBtn.addEventListener('click', () => this.openAnalyticsModal());
    if (openAnalyticsMobile) openAnalyticsMobile.addEventListener('click', () => this.openAnalyticsModal());
  }

  renderFooter() {
    const footerEl = document.getElementById('app-footer');
    if (!footerEl) return;

    footerEl.innerHTML = `
      <footer class="border-t border-cyber-cardBorder bg-cyber-bg text-cyber-muted pt-16 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            <!-- Col 1: Brand & Tagline -->
            <div class="space-y-4 md:col-span-1">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center">
                  <i data-lucide="shield" class="w-5 h-5 text-cyber-cyan"></i>
                </div>
                <span class="font-display font-bold text-lg text-white">SHIELD</span>
              </div>
              <p class="text-sm leading-relaxed text-cyber-muted">
                Official Cybersecurity Society of NIT Hamirpur. Empowering students with offensive and defensive security research, CTF training, and bug bounty skills.
              </p>
              <div class="flex items-center space-x-3 pt-2">
                <a href="${SOCIETY_INFO.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="GitHub">
                  <i data-lucide="github" class="w-4 h-4"></i>
                </a>
                <a href="${SOCIETY_INFO.discord}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="Discord">
                  <i data-lucide="message-square" class="w-4 h-4"></i>
                </a>
                <a href="${SOCIETY_INFO.linkedin}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="LinkedIn">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <a href="${SOCIETY_INFO.twitter}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="Twitter X">
                  <i data-lucide="twitter" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Col 2: Navigation Links -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#work" class="hover:text-cyber-cyan transition-colors text-cyber-cyan">Our Work & Impact</a></li>
                <li><a href="#about" class="hover:text-cyber-cyan transition-colors">About Us</a></li>
                <li><a href="#learning" class="hover:text-cyber-cyan transition-colors">Learning Hub</a></li>
                <li><a href="#team" class="hover:text-cyber-cyan transition-colors">Executive Team</a></li>
                <li><a href="#events" class="hover:text-cyber-cyan transition-colors">CTFs & Workshops</a></li>
                <li><a href="#projects" class="hover:text-cyber-cyan transition-colors">Lab Tools & Resources</a></li>
              </ul>
            </div>

            <!-- Col 3: Society Pillars -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Core Deliverables</h3>
              <ul class="space-y-2.5 text-sm">
                <li class="flex items-center space-x-2"><i data-lucide="shield-alert" class="w-3.5 h-3.5 text-cyber-red"></i><span>Vulnerability Research</span></li>
                <li class="flex items-center space-x-2"><i data-lucide="trophy" class="w-3.5 h-3.5 text-cyber-cyan"></i><span>National CTF Podium Wins</span></li>
                <li class="flex items-center space-x-2"><i data-lucide="terminal" class="w-3.5 h-3.5 text-cyber-teal"></i><span>Free Cyber Bootcamps</span></li>
                <li class="flex items-center space-x-2"><i data-lucide="bug" class="w-3.5 h-3.5 text-cyber-purple"></i><span>Bug Bounty Achievements</span></li>
                <li class="flex items-center space-x-2"><i data-lucide="code-2" class="w-3.5 h-3.5 text-cyber-cyan"></i><span>Open Source Security Tools</span></li>
              </ul>
            </div>

            <!-- Col 4: Campus Location -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Campus Location</h3>
              <address class="not-italic text-sm space-y-2 text-cyber-muted">
                <p class="flex items-start space-x-2">
                  <i data-lucide="map-pin" class="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"></i>
                  <span>${SOCIETY_INFO.location}</span>
                </p>
                <p class="flex items-center space-x-2">
                  <i data-lucide="mail" class="w-4 h-4 text-cyber-teal shrink-0"></i>
                  <a href="mailto:${SOCIETY_INFO.email}" class="hover:text-white">${SOCIETY_INFO.email}</a>
                </p>
              </address>
              <div class="mt-4 pt-4 border-t border-cyber-cardBorder">
                <span class="inline-flex items-center space-x-2 text-xs font-mono text-cyber-teal">
                  <span class="w-2 h-2 rounded-full bg-cyber-teal animate-ping"></span>
                  <span>NIT Hamirpur Recognized Society</span>
                </span>
              </div>
            </div>

          </div>

          <div class="mt-12 pt-6 border-t border-cyber-cardBorder/60 flex flex-col md:flex-row items-center justify-between text-xs text-cyber-muted">
            <p>© 2026 SHIELD Cybersecurity Society, NIT Hamirpur. All rights reserved.</p>
            <p class="mt-2 md:mt-0 font-mono">Designed for WCAG 2.1 AA Accessibility & Security</p>
          </div>
        </div>
      </footer>
    `;
  }

  renderSection(sectionId, subRoute = '') {
    const mainEl = document.getElementById('app-main');
    if (!mainEl) return;

    if (sectionId === 'learning') {
      this.renderLearningSection(mainEl, subRoute);
      this.refreshIcons();
      return;
    }

    switch (sectionId) {
      case 'home':
        mainEl.innerHTML = this.getHomeHTML();
        break;
      case 'work':
        mainEl.innerHTML = this.getWorkHTML();
        this.bindWorkListeners();
        break;
      case 'about':
        mainEl.innerHTML = this.getAboutHTML();
        break;
      case 'team':
        mainEl.innerHTML = this.getTeamHTML();
        this.bindTeamEvents();
        break;
      case 'events':
        mainEl.innerHTML = this.getEventsHTML();
        this.bindEventsListeners();
        break;
      case 'projects':
        mainEl.innerHTML = this.getProjectsHTML();
        this.bindProjectsListeners();
        break;
      case 'blog':
        mainEl.innerHTML = this.getBlogHTML();
        this.bindBlogListeners();
        break;
      case 'gallery':
        mainEl.innerHTML = this.getGalleryHTML();
        this.bindGalleryListeners();
        break;
      case 'sponsors':
        mainEl.innerHTML = this.getSponsorsHTML();
        this.bindSponsorsListeners();
        break;
      case 'faq':
        mainEl.innerHTML = this.getFAQHTML();
        this.bindFAQListeners();
        break;
      case 'contact':
        mainEl.innerHTML = this.getContactHTML();
        this.bindContactListeners();
        break;
      default:
        mainEl.innerHTML = this.getHomeHTML();
    }

    this.refreshIcons();
  }

  // --- OUR WORK SECTION RENDERERS ---

  getWorkHTML() {
    const categories = ['All', 'Vulnerability Research', 'CTF Competitions', 'Bootcamps & Training', 'Bug Bounty', 'Open Source', 'Security Audits'];
    
    let filteredPillars = WORK_PILLARS;
    if (this.workFilter !== 'All') {
      filteredPillars = WORK_PILLARS.filter(p => p.category === this.workFilter);
    }

    return `
      <div class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Hero Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <i data-lucide="briefcase" class="w-4 h-4"></i>
            <span>WHAT SHIELD CYBERSECURITY SOCIETY DOES</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Our Work, Mission & <span class="bg-gradient-to-r from-cyber-cyan to-cyber-teal bg-clip-text text-transparent">Real-World Impact</span>
          </h1>

          <p class="text-cyber-muted text-sm sm:text-base leading-relaxed">
            At NIT Hamirpur, SHIELD serves as the premier student hub for vulnerability research, competitive CTFs, practical cyber bootcamps, bug bounties, and open-source security tool engineering.
          </p>
        </div>

        <!-- Impact Statistics Banner -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-1">
            <i data-lucide="trophy" class="w-6 h-6 text-cyber-cyan mx-auto mb-1"></i>
            <div class="text-3xl font-mono font-bold text-white">34+</div>
            <div class="text-xs font-mono text-cyber-muted">National CTF Podiums</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-teal">₹2.4M+</div>
            <div class="text-xs font-mono text-cyber-muted">Bug Bounties Won</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-purple">50+</div>
            <div class="text-xs font-mono text-cyber-muted">Bootcamps & Bootlabs</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cardBorder space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-red">15+</div>
            <div class="text-xs font-mono text-cyber-muted">CVEs Disclosed</div>
          </div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          ${categories.map(cat => `
            <button class="work-filter-btn px-4 py-2 text-xs font-mono rounded-md border transition-all ${this.workFilter === cat ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-neon-cyan' : 'bg-cyber-card text-cyber-muted border-cyber-cardBorder hover:text-white'}" data-category="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Work Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredPillars.map(pillar => `
            <div class="cyber-card p-6 rounded-2xl space-y-5 flex flex-col justify-between border border-cyber-cardBorder hover:border-cyber-cyan/40 transition-all">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-cyber-cardBorder/60 flex items-center justify-center border border-cyber-cyan/30">
                    <i data-lucide="${pillar.icon}" class="w-6 h-6 text-cyber-cyan"></i>
                  </div>
                  <span class="cyber-badge ${pillar.badgeColor}">${pillar.keyMetrics}</span>
                </div>

                <h3 class="text-xl font-bold font-display text-white">${pillar.title}</h3>
                <p class="text-xs font-mono text-cyber-teal mt-1">${pillar.summary}</p>
                <p class="text-xs text-cyber-muted mt-3 leading-relaxed">${pillar.description}</p>
              </div>

              <div class="space-y-3 pt-4 border-t border-cyber-cardBorder/60">
                <span class="text-[11px] font-mono text-cyber-cyan uppercase font-bold tracking-wider block">KEY DELIVERABLES & HIGHLIGHTS:</span>
                <ul class="space-y-1.5 text-xs text-cyber-muted font-sans">
                  ${pillar.highlights.map(h => `
                    <li class="flex items-start space-x-2">
                      <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-cyber-teal shrink-0 mt-0.5"></i>
                      <span>${h}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Case Studies Showcase Section -->
        <div class="cyber-card p-8 rounded-2xl space-y-8 border border-cyber-cyan/30">
          <div class="border-b border-cyber-cardBorder pb-4">
            <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">REAL-WORLD EXAMPLES</span>
            <h2 class="text-2xl font-bold font-display text-white">Featured Case Studies & Milestones</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${CASE_STUDIES.map(cs => `
              <div class="p-5 rounded-xl border border-cyber-cardBorder bg-cyber-bg/70 space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono text-cyber-teal">
                    <span>${cs.category}</span>
                    <span>${cs.date}</span>
                  </div>
                  <h4 class="font-bold text-white text-base font-display">${cs.title}</h4>
                  <p class="text-xs text-cyber-muted leading-relaxed">${cs.summary}</p>
                </div>

                <div class="pt-3 border-t border-cyber-cardBorder/50 space-y-2">
                  <div class="text-[11px] font-mono text-cyber-cyan font-bold">IMPACT: ${cs.impact}</div>
                  <div class="flex flex-wrap gap-1">
                    ${cs.tags.map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-cardBorder text-cyber-muted">#${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Join / Participate CTA -->
        <div class="cyber-card p-8 rounded-2xl text-center space-y-4 border border-cyber-teal/30">
          <h3 class="text-2xl font-bold font-display text-white">Want to contribute or learn with SHIELD?</h3>
          <p class="text-sm text-cyber-muted max-w-xl mx-auto">
            Whether you want to start learning cybersecurity fundamentals or compete in national CTFs, SHIELD provides free mentorship and lab resources to all NIT Hamirpur students.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#learning" class="btn-cyber-primary text-xs px-6 py-3">
              <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
              <span>Explore Learning Hub</span>
            </a>
            <a href="#events" class="btn-cyber-secondary text-xs px-6 py-3">
              <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
              <span>Attend Next Workshop</span>
            </a>
          </div>
        </div>

      </div>
    `;
  }

  bindWorkListeners() {
    document.querySelectorAll('.work-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.workFilter = e.currentTarget.getAttribute('data-category');
        this.renderSection('work');
      });
    });
  }

  // --- LEARNING SECTION ROUTER & RENDERERS ---

  renderLearningSection(mainEl, subRoute) {
    if (!subRoute || subRoute === '' || subRoute === 'hub') {
      mainEl.innerHTML = this.getLearningHubHTML();
      this.bindLearningHubListeners();
      return;
    }

    if (subRoute === 'my-learning') {
      mainEl.innerHTML = this.getMyLearningHTML();
      this.bindMyLearningListeners();
      return;
    }

    if (subRoute === 'glossary') {
      mainEl.innerHTML = this.getGlossaryHTML();
      this.bindGlossaryListeners();
      return;
    }

    if (subRoute === 'cheatsheets') {
      mainEl.innerHTML = this.getCheatsheetsHTML();
      this.bindCheatsheetsListeners();
      return;
    }

    if (subRoute === 'tools') {
      mainEl.innerHTML = this.getToolsHTML();
      return;
    }

    if (subRoute === 'commands') {
      mainEl.innerHTML = this.getCommandsHTML();
      return;
    }

    const parts = subRoute.split('/');
    const domainSlug = parts[0];
    const lessonId = parts[1];

    if (lessonId) {
      mainEl.innerHTML = this.getLessonLayoutHTML(domainSlug, lessonId);
      this.bindLessonListeners(domainSlug, lessonId);
    } else {
      mainEl.innerHTML = this.getLearningDomainHTML(domainSlug);
      this.bindDomainPageListeners(domainSlug);
    }
  }

  getLearningHubHTML() {
    let filteredDomains = LEARNING_DOMAINS;

    if (this.learningDifficultyFilter !== 'All') {
      filteredDomains = filteredDomains.filter(d => d.difficulty.includes(this.learningDifficultyFilter));
    }

    if (this.learningSearch.trim() !== '') {
      const q = this.learningSearch.toLowerCase();
      filteredDomains = filteredDomains.filter(d => 
        d.title.toLowerCase().includes(q) || 
        d.description.toLowerCase().includes(q)
      );
    }

    return `
      <div class="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section class="text-center max-w-4xl mx-auto space-y-6">
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <i data-lucide="graduation-cap" class="w-4 h-4"></i>
            <span>STRUCTURED CYBERSECURITY EDUCATION PLATFORM</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            CYBERSECURITY<br />
            <span class="bg-gradient-to-r from-cyber-cyan via-cyber-teal to-blue-400 bg-clip-text text-transparent">
              LEARNING HUB
            </span>
          </h1>

          <p class="text-base sm:text-lg text-cyber-muted max-w-2xl mx-auto leading-relaxed">
            Learn cybersecurity from fundamentals to advanced security concepts through structured theory, practical labs, tools, and challenges.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#learning/network-security" class="btn-cyber-primary text-xs px-6 py-3">
              <i data-lucide="play" class="w-4 h-4 mr-2"></i>
              <span>Start Learning</span>
            </a>
            <a href="#roadmap-section" class="btn-cyber-secondary text-xs px-6 py-3">
              <i data-lucide="map" class="w-4 h-4 mr-2"></i>
              <span>Explore Roadmap</span>
            </a>
            <a href="#learning/my-learning" class="btn-cyber-outline text-xs px-6 py-3">
              <i data-lucide="bookmark" class="w-4 h-4 mr-2 text-cyber-cyan"></i>
              <span>My Learning</span>
            </a>
          </div>
        </section>

        <div class="flex flex-wrap items-center justify-center gap-3 py-3 px-4 cyber-card rounded-xl border border-cyber-cardBorder">
          <span class="text-xs font-mono text-cyber-muted mr-2">QUICK HUBS:</span>
          <a href="#learning/my-learning" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-cyan flex items-center">
            <i data-lucide="user-check" class="w-3.5 h-3.5 mr-1.5"></i> My Progress
          </a>
          <a href="#learning/glossary" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-teal flex items-center">
            <i data-lucide="book-marked" class="w-3.5 h-3.5 mr-1.5"></i> Glossary
          </a>
          <a href="#learning/cheatsheets" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-purple flex items-center">
            <i data-lucide="file-code" class="w-3.5 h-3.5 mr-1.5"></i> Cheatsheets
          </a>
          <a href="#learning/commands" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-red flex items-center">
            <i data-lucide="terminal" class="w-3.5 h-3.5 mr-1.5"></i> Commands Reference
          </a>
          <a href="#learning/tools" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-cyan flex items-center">
            <i data-lucide="wrench" class="w-3.5 h-3.5 mr-1.5"></i> Security Tools
          </a>
        </div>

        <section id="roadmap-section" class="cyber-card p-6 sm:p-8 rounded-2xl space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-4">
            <div>
              <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CURRICULUM PATHWAY</span>
              <h2 class="text-2xl font-bold font-display text-white">Interactive Cybersecurity Roadmap</h2>
            </div>
            <span class="text-xs font-mono text-cyber-teal">21 Sequential Progression Phases</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${ROADMAP_NODES.map((node, index) => `
              <a href="#learning/${node.domainSlug}" class="p-3.5 rounded-xl border border-cyber-cardBorder bg-cyber-bg/70 hover:border-cyber-cyan hover:bg-cyber-cardHover transition-all flex items-center space-x-3 group">
                <span class="w-7 h-7 rounded-lg bg-cyber-cyan/10 text-cyber-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-cyber-cyan group-hover:text-black">
                  ${index + 1}
                </span>
                <div class="truncate">
                  <span class="block text-xs font-mono text-white font-bold group-hover:text-cyber-cyan truncate">${node.title}</span>
                  <span class="text-[10px] text-cyber-muted font-mono">Explore Domain →</span>
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <section class="space-y-8">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
            <div>
              <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">LEARNING DOMAINS</span>
              <h2 class="text-2xl sm:text-3xl font-bold font-display text-white">Explore 24 Specialized Security Domains</h2>
              <p class="text-xs text-cyber-muted mt-1">Note: These represent general cybersecurity learning paths and educational topics.</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div class="relative flex-1 sm:w-64">
                <i data-lucide="search" class="w-4 h-4 absolute left-3 top-3 text-cyber-muted"></i>
                <input type="text" id="learning-search-input" value="${this.learningSearch}" placeholder="Search domains or topics..." class="w-full pl-9 pr-4 py-2 bg-cyber-card border border-cyber-cardBorder rounded-md text-xs text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <select id="learning-difficulty-filter" class="px-3 py-2 bg-cyber-card border border-cyber-cardBorder rounded-md text-xs text-white focus:border-cyber-cyan focus:outline-none font-mono">
                <option value="All" ${this.learningDifficultyFilter === 'All' ? 'selected' : ''}>All Difficulties</option>
                <option value="Beginner" ${this.learningDifficultyFilter === 'Beginner' ? 'selected' : ''}>Beginner</option>
                <option value="Intermediate" ${this.learningDifficultyFilter === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                <option value="Advanced" ${this.learningDifficultyFilter === 'Advanced' ? 'selected' : ''}>Advanced</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredDomains.map(domain => {
              const curriculum = getDomainCurriculum(domain.slug);
              let totalLessons = 0;
              curriculum.levels.forEach(lvl => {
                lvl.modules.forEach(mod => {
                  totalLessons += mod.lessons.length;
                });
              });

              let completedCount = 0;
              curriculum.levels.forEach(lvl => {
                lvl.modules.forEach(mod => {
                  mod.lessons.forEach(les => {
                    if (learningProgress.isLessonCompleted(les.id)) completedCount++;
                  });
                });
              });

              const percent = learningProgress.getDomainProgress(totalLessons, completedCount);

              return `
                <div class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between border border-cyber-cardBorder hover:border-cyber-cyan/40 transition-all">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                        <i data-lucide="${domain.icon}" class="w-5 h-5"></i>
                      </div>
                      <span class="cyber-badge ${domain.badgeColor}">${domain.difficulty}</span>
                    </div>

                    <h3 class="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                      ${domain.title}
                    </h3>
                    <p class="text-xs text-cyber-muted mt-2 leading-relaxed line-clamp-3">
                      ${domain.description}
                    </p>
                  </div>

                  <div class="space-y-4 pt-4 border-t border-cyber-cardBorder/60">
                    <div class="flex items-center justify-between text-xs font-mono text-cyber-muted">
                      <span><i data-lucide="layers" class="w-3.5 h-3.5 inline mr-1 text-cyber-cyan"></i>${domain.modulesCount} Modules</span>
                      <span><i data-lucide="clock" class="w-3.5 h-3.5 inline mr-1 text-cyber-teal"></i>${domain.estimatedTime}</span>
                    </div>

                    <div class="space-y-1">
                      <div class="flex justify-between text-[11px] font-mono text-cyber-muted">
                        <span>Progress</span>
                        <span class="text-cyber-cyan">${percent}%</span>
                      </div>
                      <div class="w-full bg-cyber-bg h-1.5 rounded-full overflow-hidden border border-cyber-cardBorder">
                        <div class="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full transition-all duration-300" style="width: ${percent}%;"></div>
                      </div>
                    </div>

                    <a href="#learning/${domain.slug}" class="btn-cyber-primary w-full text-xs py-2.5 justify-center">
                      <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
                      <span>Start Learning Domain</span>
                    </a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

      </div>
    `;
  }

  bindLearningHubListeners() {
    const searchInput = document.getElementById('learning-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.learningSearch = e.target.value;
        this.renderSection('learning', 'hub');
      });
    }

    const diffFilter = document.getElementById('learning-difficulty-filter');
    if (diffFilter) {
      diffFilter.addEventListener('change', (e) => {
        this.learningDifficultyFilter = e.target.value;
        this.renderSection('learning', 'hub');
      });
    }
  }

  getLearningDomainHTML(domainSlug) {
    const curriculum = getDomainCurriculum(domainSlug);
    const domainMeta = LEARNING_DOMAINS.find(d => d.slug === domainSlug) || {
      title: curriculum.title,
      description: curriculum.description,
      difficulty: 'All Levels',
      icon: 'shield'
    };

    let totalLessons = 0;
    let completedCount = 0;

    curriculum.levels.forEach(lvl => {
      lvl.modules.forEach(mod => {
        mod.lessons.forEach(les => {
          totalLessons++;
          if (learningProgress.isLessonCompleted(les.id)) completedCount++;
        });
      });
    });

    const progressPercent = learningProgress.getDomainProgress(totalLessons, completedCount);

    return `
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <nav class="flex items-center space-x-2 text-xs font-mono text-cyber-muted" aria-label="Breadcrumb">
          <a href="#learning" class="hover:text-cyber-cyan">Learning Hub</a>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          <span class="text-cyber-cyan font-bold">${curriculum.title}</span>
        </nav>

        <div class="cyber-card p-8 rounded-2xl border border-cyber-cyan/30 space-y-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-3 max-w-3xl">
              <div class="flex flex-wrap items-center gap-2">
                <span class="cyber-badge cyber-badge-cyan">${domainMeta.difficulty}</span>
                <span class="cyber-badge cyber-badge-teal">${totalLessons} Lessons Total</span>
              </div>
              <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-white">${curriculum.title}</h1>
              <p class="text-sm text-cyber-muted leading-relaxed">${curriculum.description}</p>
            </div>

            <div class="shrink-0 w-full md:w-64 p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder space-y-2">
              <div class="flex justify-between text-xs font-mono">
                <span class="text-cyber-muted">Domain Progress</span>
                <span class="text-cyber-cyan font-bold">${progressPercent}%</span>
              </div>
              <div class="w-full bg-cyber-card h-2 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full transition-all duration-300" style="width: ${progressPercent}%;"></div>
              </div>
              <p class="text-[11px] font-mono text-cyber-muted text-right">${completedCount} / ${totalLessons} Completed</p>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          ${curriculum.levels.map(level => `
            <div class="space-y-4">
              <div class="flex items-center space-x-3 border-b border-cyber-cardBorder pb-2">
                <span class="w-3 h-3 rounded-full bg-cyber-cyan"></span>
                <h2 class="text-lg font-bold font-mono text-white tracking-wide">${level.levelTitle}</h2>
              </div>

              <div class="space-y-4">
                ${level.modules.map(mod => `
                  <div class="cyber-card p-6 rounded-2xl space-y-4">
                    <h3 class="text-base font-bold font-display text-white flex items-center space-x-2">
                      <i data-lucide="folder-git-2" class="w-4 h-4 text-cyber-teal"></i>
                      <span>${mod.title}</span>
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      ${mod.lessons.map(les => {
                        const isDone = learningProgress.isLessonCompleted(les.id);
                        return `
                          <div class="p-4 rounded-xl border border-cyber-cardBorder bg-cyber-bg/60 hover:border-cyber-cyan/50 transition-all flex items-start justify-between gap-4">
                            <div class="space-y-1 max-w-sm">
                              <div class="flex items-center space-x-2">
                                ${isDone ? `<i data-lucide="check-circle-2" class="w-4 h-4 text-cyber-teal shrink-0"></i>` : `<i data-lucide="circle" class="w-4 h-4 text-cyber-muted shrink-0"></i>`}
                                <h4 class="font-bold text-white text-sm hover:text-cyber-cyan cursor-pointer leading-snug">
                                  <a href="#learning/${domainSlug}/${les.id}">${les.title}</a>
                                </h4>
                              </div>
                              <p class="text-xs text-cyber-muted line-clamp-2 pl-6">${les.shortExplanation}</p>
                            </div>

                            <a href="#learning/${domainSlug}/${les.id}" class="btn-cyber-secondary text-[11px] px-3 py-1.5 shrink-0 font-mono">
                              Study →
                            </a>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  }

  bindDomainPageListeners(domainSlug) {}

  getLessonLayoutHTML(domainSlug, lessonId) {
    const curriculum = getDomainCurriculum(domainSlug);
    let targetLesson = null;
    let targetModule = null;
    let allLessonsInDomain = [];

    curriculum.levels.forEach(lvl => {
      lvl.modules.forEach(mod => {
        mod.lessons.forEach(les => {
          allLessonsInDomain.push(les);
          if (les.id === lessonId) {
            targetLesson = les;
            targetModule = mod;
          }
        });
      });
    });

    if (!targetLesson && allLessonsInDomain.length > 0) {
      targetLesson = allLessonsInDomain[0];
    }

    if (!targetLesson) {
      return `<div class="p-12 text-center text-white font-mono">Lesson not found. <a href="#learning" class="text-cyber-cyan underline">Return to Learning Hub</a></div>`;
    }

    learningProgress.recordVisit(domainSlug, targetLesson.id, targetLesson.title);

    const isCompleted = learningProgress.isLessonCompleted(targetLesson.id);
    const isBookmarked = learningProgress.isBookmarked(targetLesson.id);

    const currentIdx = allLessonsInDomain.findIndex(l => l.id === targetLesson.id);
    const nextLesson = allLessonsInDomain[currentIdx + 1];

    return `
      <div class="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-4">
          <nav class="flex items-center space-x-2 text-xs font-mono text-cyber-muted truncate" aria-label="Breadcrumb">
            <a href="#learning" class="hover:text-cyber-cyan">Learning</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <a href="#learning/${domainSlug}" class="hover:text-cyber-cyan truncate">${curriculum.title}</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <span class="text-cyber-cyan font-bold truncate">${targetLesson.title}</span>
          </nav>

          <div class="flex items-center space-x-3">
            <button id="toggle-bookmark-btn" class="btn-cyber-outline text-xs px-3 py-1.5 flex items-center space-x-1.5 ${isBookmarked ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10' : ''}" data-id="${targetLesson.id}">
              <i data-lucide="bookmark" class="w-4 h-4"></i>
              <span>${isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button id="toggle-complete-btn" class="btn-cyber-primary text-xs px-4 py-1.5 flex items-center space-x-1.5 ${isCompleted ? 'bg-cyber-teal hover:bg-cyber-teal' : ''}" data-id="${targetLesson.id}">
              <i data-lucide="${isCompleted ? 'check-circle' : 'circle'}" class="w-4 h-4"></i>
              <span>${isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <aside class="lg:col-span-1 space-y-4">
            <div class="cyber-card p-4 rounded-xl space-y-3 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h3 class="text-xs font-mono text-cyber-cyan uppercase tracking-wider border-b border-cyber-cardBorder pb-2 flex items-center justify-between">
                <span>CURRICULUM LESSONS</span>
                <span class="text-[10px] text-cyber-teal font-bold">${allLessonsInDomain.length} Lessons</span>
              </h3>

              <div class="space-y-1">
                ${allLessonsInDomain.map(les => {
                  const done = learningProgress.isLessonCompleted(les.id);
                  const active = les.id === targetLesson.id;
                  return `
                    <a href="#learning/${domainSlug}/${les.id}" class="block p-2 rounded text-xs font-mono transition-all ${active ? 'bg-cyber-cyan/20 text-cyber-cyan font-bold border-l-2 border-cyber-cyan' : 'text-cyber-muted hover:bg-cyber-cardHover hover:text-white'} flex items-center justify-between">
                      <span class="truncate pr-2">${les.title}</span>
                      ${done ? `<i data-lucide="check" class="w-3.5 h-3.5 text-cyber-teal shrink-0"></i>` : ''}
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          </aside>

          <main class="lg:col-span-3 space-y-8">
            
            <div class="space-y-2">
              <span class="cyber-badge cyber-badge-cyan">${targetModule ? targetModule.title : 'Module'}</span>
              <h1 class="text-2xl sm:text-4xl font-display font-extrabold text-white">${targetLesson.title}</h1>
            </div>

            <div class="cyber-card p-6 rounded-2xl space-y-3 border-l-4 border-l-cyber-cyan">
              <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider">CONCEPT OVERVIEW</h3>
              <p class="text-sm sm:text-base text-cyber-text leading-relaxed">${targetLesson.shortExplanation}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="cyber-card p-6 rounded-2xl space-y-3 border-t-2 border-t-cyber-teal">
                <h3 class="text-xs font-mono text-cyber-teal uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="shield-check" class="w-4 h-4 mr-1.5"></i> WHY IT MATTERS
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${targetLesson.whyItMatters}</p>
              </div>

              <div class="cyber-card p-6 rounded-2xl space-y-3 border-t-2 border-t-cyber-purple">
                <h3 class="text-xs font-mono text-cyber-purple uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="cpu" class="w-4 h-4 mr-1.5"></i> HOW IT WORKS
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${targetLesson.howItWorks}</p>
              </div>
            </div>

            ${targetLesson.diagram ? `
              <div class="cyber-card p-6 rounded-2xl space-y-3">
                <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="git-branch" class="w-4 h-4 mr-1.5"></i> ARCHITECTURAL DIAGRAM
                </h3>
                <pre class="p-4 bg-cyber-bg border border-cyber-cardBorder rounded-xl font-mono text-xs text-cyber-teal overflow-x-auto leading-relaxed">${targetLesson.diagram}</pre>
              </div>
            ` : ''}

            ${targetLesson.realWorldExample ? `
              <div class="cyber-card p-6 rounded-2xl space-y-3 bg-cyber-bg/80">
                <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="globe" class="w-4 h-4 mr-1.5"></i> REAL-WORLD INCIDENT / SCENARIO
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${targetLesson.realWorldExample}</p>
              </div>
            ` : ''}

            ${targetLesson.commands && targetLesson.commands.length > 0 ? `
              <div class="space-y-4">
                <h3 class="text-base font-bold font-mono text-white flex items-center">
                  <i data-lucide="terminal" class="w-5 h-5 text-cyber-cyan mr-2"></i> COMMAND & SYNTAX REFERENCE
                </h3>

                ${targetLesson.commands.map(cmd => `
                  <div class="cyber-card p-6 rounded-2xl space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono text-cyber-cyan font-bold">${cmd.purpose}</span>
                      <button class="copy-cmd-btn text-[11px] font-mono text-cyber-muted hover:text-cyber-cyan" data-cmd="${cmd.command}">
                        Copy Command
                      </button>
                    </div>

                    <div class="p-3 bg-cyber-bg border border-cyber-cardBorder rounded-lg font-mono text-xs text-cyber-cyan overflow-x-auto">
                      <code>$ ${cmd.command}</code>
                    </div>

                    <p class="text-xs text-cyber-muted">${cmd.explanation}</p>

                    ${cmd.expectedOutput ? `
                      <div class="space-y-1">
                        <span class="text-[10px] font-mono text-cyber-teal">EXPECTED OUTPUT:</span>
                        <pre class="p-3 bg-cyber-bg/90 border border-cyber-cardBorder/60 rounded text-[11px] font-mono text-cyber-muted overflow-x-auto">${cmd.expectedOutput}</pre>
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${targetLesson.securityImplications ? `
                <div class="cyber-card p-6 rounded-2xl space-y-2 border-l-4 border-l-cyber-red">
                  <h4 class="text-xs font-mono text-cyber-red font-bold">SECURITY IMPLICATIONS</h4>
                  <p class="text-xs text-cyber-muted leading-relaxed">${targetLesson.securityImplications}</p>
                </div>
              ` : ''}

              ${targetLesson.commonMistakes ? `
                <div class="cyber-card p-6 rounded-2xl space-y-2 border-l-4 border-l-cyber-purple">
                  <h4 class="text-xs font-mono text-cyber-purple font-bold">COMMON PITFALLS & MISTAKES</h4>
                  <p class="text-xs text-cyber-muted leading-relaxed">${targetLesson.commonMistakes}</p>
                </div>
              ` : ''}
            </div>

            ${targetLesson.safeExercise ? `
              <div class="cyber-card p-6 rounded-2xl space-y-3 bg-cyber-cyan/5 border border-cyber-cyan/30">
                <div class="flex items-center space-x-2 text-cyber-cyan">
                  <i data-lucide="flask-conical" class="w-5 h-5"></i>
                  <h4 class="font-mono text-sm font-bold">SAFE HANDS-ON EXERCISE</h4>
                </div>
                <p class="text-xs text-cyber-text leading-relaxed">${targetLesson.safeExercise}</p>
                <div class="p-3 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red text-[11px] font-mono">
                  ⚠️ SAFETY NOTICE: Use only systems you own or have explicit authorization to test. Do not scan or exploit external targets.
                </div>
              </div>
            ` : ''}

            ${targetLesson.interviewQuestions && targetLesson.interviewQuestions.length > 0 ? `
              <div class="cyber-card p-6 rounded-2xl space-y-4">
                <h3 class="text-base font-bold font-mono text-white flex items-center">
                  <i data-lucide="help-circle" class="w-5 h-5 text-cyber-teal mr-2"></i> INTERVIEW PREPARATION
                </h3>

                <div class="space-y-3">
                  ${targetLesson.interviewQuestions.map(iq => `
                    <div class="p-4 rounded-xl border border-cyber-cardBorder bg-cyber-bg/60 space-y-2">
                      <div class="font-bold text-sm text-white font-display">Q: ${iq.q}</div>
                      <div class="text-xs text-cyber-cyan font-mono">A: ${iq.shortAnswer}</div>
                      ${iq.tip ? `<div class="text-[11px] text-cyber-teal font-mono">💡 Interview Tip: ${iq.tip}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="flex items-center justify-between pt-6 border-t border-cyber-cardBorder">
              <a href="#learning/${domainSlug}" class="btn-cyber-outline text-xs px-4 py-2">
                ← Back to Domain
              </a>

              ${nextLesson ? `
                <a href="#learning/${domainSlug}/${nextLesson.id}" class="btn-cyber-primary text-xs px-5 py-2">
                  <span>Next Lesson: ${nextLesson.title}</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-1.5"></i>
                </a>
              ` : `
                <a href="#learning" class="btn-cyber-primary text-xs px-5 py-2">
                  <span>Complete Domain →</span>
                </a>
              `}
            </div>

          </main>
        </div>

      </div>
    `;
  }

  bindLessonListeners(domainSlug, lessonId) {
    const bookmarkBtn = document.getElementById('toggle-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        learningProgress.toggleBookmark(id);
        this.renderSection('learning', `${domainSlug}/${lessonId}`);
      });
    }

    const completeBtn = document.getElementById('toggle-complete-btn');
    if (completeBtn) {
      completeBtn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        learningProgress.toggleLessonCompleted(id);
        this.renderSection('learning', `${domainSlug}/${lessonId}`);
      });
    }

    document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cmd = e.currentTarget.getAttribute('data-cmd');
        navigator.clipboard.writeText(cmd);
        e.currentTarget.innerText = 'Copied!';
        setTimeout(() => { e.currentTarget.innerText = 'Copy Command'; }, 2000);
      });
    });
  }

  getMyLearningHTML() {
    const stats = learningProgress.getOverallStats(LEARNING_DOMAINS);

    return `
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
          <div>
            <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">PERSONAL PROGRESS DASHBOARD</span>
            <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-white">My Learning Progress</h1>
          </div>

          <a href="#learning" class="btn-cyber-secondary text-xs px-4 py-2">
            ← Return to Learning Hub
          </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-cyan">${stats.completedCount}</div>
            <div class="text-xs font-mono text-cyber-muted">Completed Lessons</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-teal">${stats.bookmarkCount}</div>
            <div class="text-xs font-mono text-cyber-muted">Bookmarked Topics</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-purple">${stats.recentlyViewed.length}</div>
            <div class="text-xs font-mono text-cyber-muted">Recently Viewed</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-red">24</div>
            <div class="text-xs font-mono text-cyber-muted">Total Domains</div>
          </div>
        </div>

        ${stats.lastActive ? `
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cyan/40 space-y-3 bg-cyber-cyan/5">
            <span class="cyber-badge cyber-badge-cyan">CONTINUE LEARNING</span>
            <h3 class="text-xl font-bold font-display text-white">${stats.lastActive.lessonTitle}</h3>
            <div class="pt-2">
              <a href="#learning/${stats.lastActive.domainSlug}/${stats.lastActive.lessonId}" class="btn-cyber-primary text-xs px-5 py-2.5">
                Resume Lesson →
              </a>
            </div>
          </div>
        ` : ''}

        <div class="cyber-card p-6 rounded-2xl space-y-4">
          <h3 class="text-lg font-bold font-display text-white flex items-center">
            <i data-lucide="bookmark" class="w-5 h-5 text-cyber-cyan mr-2"></i> Bookmarked Lessons
          </h3>

          ${stats.bookmarkCount > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${learningProgress.data.bookmarks.map(bId => `
                <div class="p-3 rounded-lg border border-cyber-cardBorder bg-cyber-bg/70 flex items-center justify-between">
                  <span class="text-xs font-mono text-white truncate">${bId}</span>
                  <a href="#learning/network-security/${bId}" class="text-xs font-mono text-cyber-cyan hover:underline">Study →</a>
                </div>
              `).join('')}
            </div>
          ` : `
            <p class="text-xs font-mono text-cyber-muted">No lessons bookmarked yet. Click the bookmark button on any lesson page!</p>
          `}
        </div>

      </div>
    `;
  }

  bindMyLearningListeners() {}

  getGlossaryHTML() {
    const filtered = this.glossarySearch.trim() === ''
      ? GLOSSARY_ITEMS
      : GLOSSARY_ITEMS.filter(g => 
          g.term.toLowerCase().includes(this.glossarySearch.toLowerCase()) || 
          g.definition.toLowerCase().includes(this.glossarySearch.toLowerCase())
        );

    return `
      <div class="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CYBER DICTIONARY</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Cybersecurity Glossary</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Instant reference dictionary of essential security acronyms and terminology.</p>
        </div>

        <div class="relative max-w-md mx-auto">
          <i data-lucide="search" class="w-4 h-4 absolute left-3 top-3 text-cyber-muted"></i>
          <input type="text" id="glossary-search-input" value="${this.glossarySearch}" placeholder="Search term (e.g. XSS, TCP, TLS)..." class="w-full pl-9 pr-4 py-2.5 bg-cyber-card border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(item => `
            <div class="cyber-card p-5 rounded-xl space-y-2 border border-cyber-cardBorder">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold font-mono text-white">${item.term}</h3>
                <span class="cyber-badge cyber-badge-cyan text-[10px]">${item.category}</span>
              </div>
              <p class="text-xs text-cyber-muted leading-relaxed">${item.definition}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindGlossaryListeners() {
    const input = document.getElementById('glossary-search-input');
    if (input) {
      input.addEventListener('input', (e) => {
        this.glossarySearch = e.target.value;
        this.renderSection('learning', 'glossary');
      });
    }
  }

  getCheatsheetsHTML() {
    return `
      <div class="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">QUICK REFERENCE</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Security Cheatsheets</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Printable reference guides for Linux CLI, Nmap, Wireshark, and Web Security auditing.</p>
        </div>

        <div class="space-y-6">
          ${CHEATSHEET_ITEMS.map(cs => `
            <div class="cyber-card p-6 rounded-2xl space-y-4">
              <div class="flex items-center justify-between border-b border-cyber-cardBorder pb-3">
                <h3 class="text-lg font-bold font-mono text-white">${cs.title}</h3>
                <span class="cyber-badge cyber-badge-teal">${cs.category}</span>
              </div>
              <pre class="p-4 bg-cyber-bg border border-cyber-cardBorder rounded-xl font-mono text-xs text-cyber-cyan overflow-x-auto leading-relaxed">${cs.content.trim()}</pre>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindCheatsheetsListeners() {}

  getToolsHTML() {
    return `
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">TOOL DIRECTORY</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Essential Security Tools</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Core software utilities used by security professionals for analysis and auditing.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${SECURITY_TOOLS.map(tool => `
            <div class="cyber-card p-6 rounded-2xl space-y-4 border border-cyber-cardBorder">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold font-display text-white">${tool.name}</h3>
                <span class="cyber-badge cyber-badge-cyan">${tool.category}</span>
              </div>

              <p class="text-xs text-cyber-muted leading-relaxed">${tool.description}</p>
              
              <div class="space-y-2 text-xs font-mono">
                <div class="text-cyber-teal font-bold">Why Security Pros Use It:</div>
                <div class="text-cyber-muted">${tool.whySecurityProsUseIt}</div>

                <div class="text-cyber-teal font-bold pt-2">Installation Command:</div>
                <div class="p-2 bg-cyber-bg border border-cyber-cardBorder rounded text-cyber-cyan">${tool.installation}</div>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder">
                <a href="${tool.docUrl}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline text-xs w-full py-2 justify-center">
                  Official Documentation →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getCommandsHTML() {
    return `
      <div class="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">COMMAND REFERENCE</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Linux & Security Commands</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Comprehensive command syntax, expected output, and safe usage contexts.</p>
        </div>

        <div class="space-y-8">
          ${COMMAND_REFERENCES.map(cat => `
            <div class="space-y-4">
              <h2 class="text-xl font-bold font-mono text-cyber-cyan border-b border-cyber-cardBorder pb-2">${cat.category} Commands</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${cat.commands.map(cmd => `
                  <div class="cyber-card p-5 rounded-xl space-y-3 border border-cyber-cardBorder">
                    <div class="p-2.5 bg-cyber-bg border border-cyber-cardBorder rounded font-mono text-xs text-cyber-cyan font-bold">
                      <code>$ ${cmd.command}</code>
                    </div>
                    <p class="text-xs text-white font-bold">${cmd.purpose}</p>
                    <p class="text-xs text-cyber-muted">${cmd.explanation}</p>
                    <div class="text-[11px] font-mono text-cyber-teal">Safe Context: ${cmd.safeContext}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- EXISTING SECTIONS ---

  getHomeHTML() {
    return `
      <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
        <canvas id="cyber-canvas" class="absolute inset-0 w-full h-full pointer-events-auto z-0"></canvas>
        
        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono tracking-wide animate-pulse-slow">
            <span class="w-2 h-2 rounded-full bg-cyber-teal"></span>
            <span>NIT HAMIRPUR'S OFFICIAL CYBERSECURITY CLUB</span>
          </div>

          <h1 class="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            Defending the Byte.<br />
            <span class="bg-gradient-to-r from-cyber-cyan via-cyber-teal to-blue-400 bg-clip-text text-transparent glitch-hover">
              Securing the Future.
            </span>
          </h1>

          <p class="max-w-2xl mx-auto text-base sm:text-lg text-cyber-muted leading-relaxed font-sans">
            We are a student-led cybersecurity society at NIT Hamirpur dedicated to ethical hacking, reverse engineering, CTF competitions, and zero-day vulnerability research.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#work" class="btn-cyber-primary w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="briefcase" class="w-4 h-4 mr-2"></i>
              <span>Explore Our Work</span>
            </a>
            <a href="#learning" class="btn-cyber-secondary w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
              <span>Learning Hub</span>
            </a>
            <a href="${SOCIETY_INFO.discord}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="message-square" class="w-4 h-4 mr-2 text-cyber-cyan"></i>
              <span>Join Discord</span>
            </a>
          </div>

          <div class="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            ${KEY_STATS.map(stat => `
              <div class="cyber-card p-4 rounded-xl text-center">
                <i data-lucide="${stat.icon}" class="w-6 h-6 text-cyber-cyan mx-auto mb-2"></i>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-white">${stat.value}</div>
                <div class="text-xs text-cyber-muted mt-1 font-sans">${stat.label}</div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <section class="py-20 border-t border-cyber-cardBorder bg-cyber-bg/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">WHAT WE DO</h2>
            <p class="text-3xl sm:text-4xl font-display font-bold text-white">Specialized Security Domains</p>
            <p class="text-cyber-muted text-sm sm:text-base">Mastering cutting-edge offensive and defensive cybersecurity subfields.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${DOMAINS.map(domain => `
              <div class="cyber-card p-6 rounded-xl space-y-4 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-lg bg-cyber-cardBorder/60 flex items-center justify-center border border-cyber-cyan/30">
                      <i data-lucide="${domain.icon}" class="w-6 h-6 text-cyber-cyan"></i>
                    </div>
                    <span class="cyber-badge ${domain.badgeColor}">${domain.id.toUpperCase()}</span>
                  </div>
                  <h3 class="text-lg font-bold text-white font-display">${domain.title}</h3>
                  <p class="text-sm text-cyber-muted mt-2 leading-relaxed">${domain.description}</p>
                </div>
                <div class="pt-4 border-t border-cyber-cardBorder/40">
                  <a href="#learning/${domain.id === 'pwn' ? 'binary-exploitation' : domain.id === 'websec' ? 'web-security' : domain.id === 're' ? 'reverse-engineering' : domain.id === 'crypto' ? 'cryptography' : 'digital-forensics'}" class="inline-flex items-center text-xs font-mono text-cyber-cyan hover:underline">
                    <span>Study Domain Curriculum</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="py-16 bg-cyber-card/40 border-y border-cyber-cardBorder">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <div class="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-cyber-red/10 border border-cyber-red/40 text-cyber-red text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-cyber-red animate-ping"></span>
              <span>FLAGSHIP EVENT ANNOUNCEMENT</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-display font-bold text-white">${EVENTS[0].title}</h3>
            <p class="text-sm text-cyber-muted">${EVENTS[0].description}</p>
            <div class="flex flex-wrap gap-4 text-xs font-mono text-cyber-teal pt-1">
              <span class="flex items-center"><i data-lucide="calendar" class="w-4 h-4 mr-1"></i>${EVENTS[0].displayDate}</span>
              <span class="flex items-center"><i data-lucide="map-pin" class="w-4 h-4 mr-1"></i>${EVENTS[0].venue}</span>
              <span class="flex items-center text-cyber-cyan"><i data-lucide="trophy" class="w-4 h-4 mr-1"></i>${EVENTS[0].prizes}</span>
            </div>
          </div>
          <div class="shrink-0 w-full lg:w-auto">
            <a href="#events" class="btn-cyber-primary w-full lg:w-auto text-sm px-8 py-4">
              <i data-lucide="ticket" class="w-5 h-5 mr-2"></i>
              <span>Register For Flagship CTF</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  getAboutHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">ABOUT SHIELD</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Empowering NIT Hamirpur's Cyber Security Pioneers</h1>
          <p class="text-cyber-muted text-base">Founded in 2021 under the Department of Computer Science & Engineering, SHIELD bridges academic computer science with real-world security research.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="cyber-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyber-cyan">
            <div class="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <h2 class="text-2xl font-bold text-white font-display">Our Mission</h2>
            <p class="text-cyber-muted text-sm leading-relaxed">
              To cultivate a vibrant security culture at NIT Hamirpur where students master ethical hacking, binary analysis, cryptography, and defense methodologies. We aim to produce world-class security researchers, bug hunters, and industry professionals.
            </p>
          </div>

          <div class="cyber-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyber-teal">
            <div class="w-12 h-12 rounded-xl bg-cyber-teal/10 flex items-center justify-center text-cyber-teal">
              <i data-lucide="eye" class="w-6 h-6"></i>
            </div>
            <h2 class="text-2xl font-bold text-white font-display">Our Vision</h2>
            <p class="text-cyber-muted text-sm leading-relaxed">
              To establish NIT Hamirpur as a national hub for cybersecurity excellence, competing at top-tier global CTF hackathons, contributing to open-source security tools, and collaborating with global security researchers.
            </p>
          </div>
        </div>

        <div class="cyber-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-cyber-cyan/20">
          <img src="${SOCIETY_INFO.facultyAdvisor.image}" alt="${SOCIETY_INFO.facultyAdvisor.name}" class="w-32 h-32 rounded-full object-cover border-2 border-cyber-cyan shadow-neon-cyan" />
          <div class="space-y-3 text-center md:text-left">
            <span class="cyber-badge cyber-badge-cyan">FACULTY ADVISOR SPOTLIGHT</span>
            <h3 class="text-2xl font-bold text-white font-display">${SOCIETY_INFO.facultyAdvisor.name}</h3>
            <p class="text-xs font-mono text-cyber-teal">${SOCIETY_INFO.facultyAdvisor.role}</p>
            <p class="text-sm text-cyber-muted leading-relaxed">${SOCIETY_INFO.facultyAdvisor.bio}</p>
          </div>
        </div>
      </section>
    `;
  }

  getTeamHTML() {
    const categories = ['All', 'Core', 'WebSec', 'Reverse Engineering', 'Cryptography', 'Forensics', 'Advisors'];
    const filteredMembers = this.teamFilter === 'All' ? TEAM_MEMBERS : TEAM_MEMBERS.filter(m => m.domain === this.teamFilter);

    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">SOCIETY LEADERSHIP</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Meet Team SHIELD</h1>
          <p class="text-cyber-muted text-sm sm:text-base">The passionate minds leading offensive research, CTFs, and security workshops at NIT Hamirpur.</p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
          ${categories.map(cat => `
            <button class="team-filter-btn px-4 py-2 text-xs font-mono rounded-md border transition-all ${this.teamFilter === cat ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-neon-cyan' : 'bg-cyber-card text-cyber-muted border-cyber-cardBorder hover:text-white'}" data-category="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredMembers.map(member => `
            <div class="cyber-card rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div>
                <div class="relative mb-4">
                  <img src="${member.image}" alt="${member.name}" class="w-full h-56 object-cover rounded-xl border border-cyber-cardBorder" />
                  <span class="absolute top-3 right-3 cyber-badge cyber-badge-cyan">${member.batch}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white">${member.name}</h3>
                <p class="text-xs font-mono text-cyber-teal mt-0.5">${member.role}</p>
                <p class="text-xs text-cyber-muted mt-3 leading-relaxed">${member.bio}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between">
                <div class="flex items-center space-x-3 text-cyber-muted">
                  ${member.github ? `<a href="${member.github}" target="_blank" rel="noopener noreferrer" class="hover:text-cyber-cyan" aria-label="${member.name}'s GitHub"><i data-lucide="github" class="w-4 h-4"></i></a>` : ''}
                  ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-cyber-cyan" aria-label="${member.name}'s LinkedIn"><i data-lucide="linkedin" class="w-4 h-4"></i></a>` : ''}
                </div>
                <button class="view-member-modal text-xs font-mono text-cyber-cyan hover:underline" data-id="${member.id}">
                  Profile Bio →
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindTeamEvents() {
    document.querySelectorAll('.team-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.teamFilter = e.currentTarget.getAttribute('data-category');
        this.renderSection('team');
      });
    });

    document.querySelectorAll('.view-member-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const member = TEAM_MEMBERS.find(m => m.id === id);
        if (member) this.openMemberModal(member);
      });
    });
  }

  getEventsHTML() {
    const categories = ['All', 'CTF', 'Workshop', 'Seminar'];
    const filteredEvents = this.eventsFilter === 'All' ? EVENTS : EVENTS.filter(e => e.category === this.eventsFilter);

    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CALENDAR & EVENTS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Workshops, Bootcamps & CTFs</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Participate in hands-on cybersecurity sessions hosted on campus and online.</p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
          <div class="flex flex-wrap items-center gap-2">
            ${categories.map(cat => `
              <button class="event-filter-btn px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${this.eventsFilter === cat ? 'bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-neon-cyan' : 'bg-cyber-card text-cyber-muted border-cyber-cardBorder hover:text-white'}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="space-y-6">
          ${filteredEvents.map(evt => `
            <div class="cyber-card p-6 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-l-4 ${evt.type === 'Upcoming' ? 'border-l-cyber-cyan' : 'border-l-cyber-muted'}">
              <div class="space-y-2 max-w-3xl">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="cyber-badge ${evt.type === 'Upcoming' ? 'cyber-badge-cyan' : 'cyber-badge-teal'}">${evt.type.toUpperCase()}</span>
                  <span class="cyber-badge cyber-badge-purple">${evt.category}</span>
                  <span class="text-xs font-mono text-cyber-muted">${evt.displayDate}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white">${evt.title}</h3>
                <p class="text-sm text-cyber-muted">${evt.description}</p>
                <div class="flex flex-wrap gap-4 text-xs font-mono text-cyber-teal pt-1">
                  <span>${evt.venue}</span>
                  <span class="text-cyber-cyan">${evt.prizes}</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                ${evt.type === 'Upcoming' ? `
                  <button class="register-event-btn btn-cyber-primary text-xs px-5 py-2.5" data-id="${evt.id}">
                    Register Now
                  </button>
                ` : `
                  <span class="px-4 py-2 rounded border border-cyber-cardBorder text-xs font-mono text-cyber-muted bg-cyber-card">
                    Event Concluded
                  </span>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindEventsListeners() {
    document.querySelectorAll('.event-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.eventsFilter = e.currentTarget.getAttribute('data-category');
        this.renderSection('events');
      });
    });

    document.querySelectorAll('.register-event-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const evt = EVENTS.find(x => x.id === id);
        if (evt) this.openRegistrationModal(evt);
      });
    });
  }

  getProjectsHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">OPEN-SOURCE & LABS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Projects & Lab Tools</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Explore custom security tools, CTF writeups, and lab setup scripts built by SHIELD.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${PROJECTS_RESOURCES.map(proj => `
            <div class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="cyber-badge cyber-badge-cyan">${proj.category}</span>
                  <span class="text-xs font-mono text-cyber-teal">★ ${proj.stars}</span>
                </div>
                <h3 class="text-lg font-bold font-display text-white">${proj.title}</h3>
                <p class="text-xs text-cyber-muted mt-2 leading-relaxed">${proj.description}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between">
                <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-cyber-cyan hover:underline flex items-center">
                  <i data-lucide="github" class="w-4 h-4 mr-1.5"></i>
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindProjectsListeners() {}

  getBlogHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CYBER DIGEST</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">News & Technical Blog</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Technical writeups, security advisories, and society competition recaps.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${BLOG_POSTS.map(post => `
            <article class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between text-xs font-mono text-cyber-muted mb-2">
                  <span class="cyber-badge cyber-badge-cyan">${post.category}</span>
                  <span>${post.readTime}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white hover:text-cyber-cyan cursor-pointer read-article-btn" data-id="${post.id}">
                  ${post.title}
                </h3>
                <p class="text-xs text-cyber-muted mt-2 leading-relaxed">${post.excerpt}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between text-xs">
                <span class="text-cyber-teal font-mono">By ${post.author}</span>
                <button class="read-article-btn font-mono text-cyber-cyan hover:underline" data-id="${post.id}">
                  Read Full Article →
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindBlogListeners() {
    document.querySelectorAll('.read-article-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const article = BLOG_POSTS.find(b => b.id === id);
        if (article) this.openArticleModal(article);
      });
    });
  }

  getGalleryHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">MEMORIES</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">SHIELD Photo Gallery</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Highlights from workshops, hackathons, and national CTF podiums.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${GALLERY_ITEMS.map((item, index) => `
            <div class="gallery-card-item cyber-card rounded-2xl overflow-hidden group cursor-pointer" data-index="${index}">
              <div class="relative overflow-hidden aspect-video">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 space-y-1">
                <h3 class="font-bold text-white text-base">${item.title}</h3>
                <p class="text-xs text-cyber-muted">${item.caption}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindGalleryListeners() {
    document.querySelectorAll('.gallery-card-item').forEach(card => {
      card.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        this.openLightbox(idx);
      });
    });
  }

  getSponsorsHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">PARTNERS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Sponsors & Industry Partners</h1>
          <p class="text-cyber-muted text-sm sm:text-base">We collaborate with world-leading security platforms to empower NIT Hamirpur security talent.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${SPONSORS.map(sp => `
            <div class="cyber-card p-6 rounded-2xl text-center space-y-4 flex flex-col justify-between">
              <div>
                <span class="cyber-badge cyber-badge-cyan mb-4">${sp.tier}</span>
                <div class="h-20 flex items-center justify-center my-2 bg-cyber-bg rounded-xl border border-cyber-cardBorder">
                  <span class="font-display font-black text-xl text-white tracking-widest">${sp.logoText}</span>
                </div>
                <h3 class="text-lg font-bold text-white">${sp.name}</h3>
                <p class="text-xs text-cyber-muted mt-2">${sp.perks}</p>
              </div>

              <a href="${sp.website}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline text-xs w-full py-2">
                Visit Partner Site
              </a>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindSponsorsListeners() {}

  getFAQHTML() {
    return `
      <section class="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">MEMBERSHIP & FAQ</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Frequently Asked Questions</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Everything you need to know about joining SHIELD and attending our events.</p>
        </div>

        <div class="space-y-4">
          ${FAQS.map((faq, idx) => `
            <div class="cyber-card p-5 rounded-xl space-y-2">
              <h3 class="font-bold text-white text-base flex items-center justify-between">
                <span>${faq.question}</span>
                <span class="cyber-badge cyber-badge-cyan text-[10px]">${faq.category}</span>
              </h3>
              <p class="text-sm text-cyber-muted leading-relaxed">${faq.answer}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  bindFAQListeners() {}

  getContactHTML() {
    return `
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">GET IN TOUCH</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Contact & Connect</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Have questions, feedback, or sponsorship inquiries? Reach out to the SHIELD team.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="cyber-card p-8 rounded-2xl space-y-6">
            <h3 class="text-2xl font-bold font-display text-white">Send Us A Message</h3>
            
            <form id="contact-form" class="space-y-4">
              <div>
                <label for="contact-name" class="block text-xs font-mono text-cyber-muted mb-1">Full Name *</label>
                <input type="text" id="contact-name" required placeholder="e.g. Rahul Verma" class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <div>
                <label for="contact-email" class="block text-xs font-mono text-cyber-muted mb-1">Email Address *</label>
                <input type="email" id="contact-email" required placeholder="name@nith.ac.in" class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <div>
                <label for="contact-message" class="block text-xs font-mono text-cyber-muted mb-1">Message *</label>
                <textarea id="contact-message" rows="4" required placeholder="Your message details..." class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none"></textarea>
              </div>

              <button type="submit" class="btn-cyber-primary w-full py-3 text-xs">
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div class="cyber-card p-6 rounded-2xl space-y-4">
            <h3 class="text-xl font-bold font-display text-white">Society Headquarters</h3>
            <p class="text-sm text-cyber-muted">${SOCIETY_INFO.location}</p>
            <p class="text-sm text-cyber-teal font-mono">Email: ${SOCIETY_INFO.email}</p>
          </div>
        </div>
      </section>
    `;
  }

  bindContactListeners() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✓ Message submitted successfully!');
        contactForm.reset();
      });
    }
  }

  // --- MODAL CONTROLLERS ---

  openAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const stats = analytics.getStats();
    document.getElementById('stat-total-events').innerText = stats.totalEvents;
    document.getElementById('stat-pageviews').innerText = stats.pageviews;
    document.getElementById('stat-registrations').innerText = stats.eventRegistrations;
    document.getElementById('stat-downloads').innerText = stats.resourceDownloads;

    const canvas = document.getElementById('analytics-chart-canvas');
    analytics.renderChart(canvas);
  }

  closeAnalyticsModal() {
    const modal = document.getElementById('analytics-modal');
    if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
  }

  openMemberModal(member) {
    const modal = document.getElementById('member-modal');
    if (!modal) return;
    document.getElementById('member-modal-img').src = member.image;
    document.getElementById('member-modal-name').innerText = member.name;
    document.getElementById('member-modal-role').innerText = member.role;
    document.getElementById('member-modal-batch').innerText = member.batch;
    document.getElementById('member-modal-bio').innerText = member.bio;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeMemberModal() {
    const modal = document.getElementById('member-modal');
    if (modal) modal.classList.add('hidden');
  }

  openRegistrationModal(evt) {
    this.selectedEventForRegistration = evt;
    const modal = document.getElementById('registration-modal');
    if (!modal) return;
    document.getElementById('reg-modal-event-title').innerText = evt.title;
    document.getElementById('reg-modal-event-date').innerText = evt.displayDate + ' • ' + evt.venue;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeRegistrationModal() {
    const modal = document.getElementById('registration-modal');
    if (modal) modal.classList.add('hidden');
  }

  openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    if (!modal) return;
    document.getElementById('art-modal-title').innerText = article.title;
    document.getElementById('art-modal-meta').innerText = `By ${article.author} • ${article.date} • ${article.readTime}`;
    document.getElementById('art-modal-body').innerHTML = article.content.replace(/\n/g, '<br/>');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal) modal.classList.add('hidden');
  }

  openLightbox(index) {
    this.lightboxIndex = index;
    const item = GALLERY_ITEMS[index];
    if (!item) return;
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    document.getElementById('lightbox-img').src = item.image;
    document.getElementById('lightbox-title').innerText = item.title;
    document.getElementById('lightbox-caption').innerText = item.caption;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('hidden');
  }

  setupGlobalEventListeners() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAnalyticsModal();
        this.closeMemberModal();
        this.closeRegistrationModal();
        this.closeArticleModal();
        this.closeLightbox();
      }
    });

    document.getElementById('close-analytics-modal')?.addEventListener('click', () => this.closeAnalyticsModal());
    document.getElementById('close-member-modal')?.addEventListener('click', () => this.closeMemberModal());
    document.getElementById('close-registration-modal')?.addEventListener('click', () => this.closeRegistrationModal());
    document.getElementById('close-article-modal')?.addEventListener('click', () => this.closeArticleModal());
    document.getElementById('close-lightbox-modal')?.addEventListener('click', () => this.closeLightbox());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new ShieldApp();
  app.init();
});
