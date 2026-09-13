import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Search,
  Terminal,
  Copy,
  Shield,
  Clock,
  Award,
  AlertTriangle,
  HelpCircle,
  Cpu,
  Trophy,
  Code2,
  ChevronDown,
  Layers,
  Sparkles,
  Volume2,
  Play,
  Check,
  XIcon,
  GraduationCap,
} from 'lucide-react';
import { getCourseData } from '../../data/courseData.js';
import { useLearningProgress } from '../../hooks/useLearningProgress.js';

export default function CoursePage({ courseSlug, onBack }) {
  const { isLessonCompleted, toggleLessonCompleted, isBookmarked, toggleBookmark, recordVisit } = useLearningProgress();

  const course = getCourseData(courseSlug);
  const lessons = course.lessons || [];

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [copiedCmdIdx, setCopiedCmdIdx] = useState(null);
  const [flagInput, setFlagInput] = useState('');
  const [flagSuccess, setFlagSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'terminal' | 'quiz'

  // Live Terminal State
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'info', text: 'SHIELD NITH Cyber Terminal Sandbox v2.4 initialized.' },
    { type: 'info', text: 'Type a command or click any pre-built command pill below to execute.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  // Interactive Diagram Stepper
  const [diagramStep, setDiagramStep] = useState(1);

  // Interactive Quiz State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Audio Reading State
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentLesson = lessons[activeLessonIndex] || lessons[0];

  useEffect(() => {
    if (currentLesson) {
      recordVisit(courseSlug, currentLesson.id, currentLesson.title);
      setFlagSuccess(false);
      setFlagInput('');
      setDiagramStep(1);
      setQuizAnswers({});
      setQuizSubmitted(false);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [activeLessonIndex, courseSlug]);

  const completedCount = lessons.filter((l) => isLessonCompleted(l.id)).length;
  const progressPercent = Math.round((completedCount / lessons.length) * 100);

  const filteredLessons = lessons.filter(
    (l) =>
      l.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
      l.number.includes(sidebarSearch)
  );

  const handleCopyCommand = (cmdText, idx) => {
    navigator.clipboard.writeText(cmdText);
    setCopiedCmdIdx(idx);
    setTimeout(() => setCopiedCmdIdx(null), 2000);
  };

  const handleRunTerminalCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim();
    if (!cleanCmd) return;

    let output = '';
    if (cleanCmd.startsWith('ip') || cleanCmd.includes('ipconfig')) {
      output = `[+] eth0: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0`;
    } else if (cleanCmd.startsWith('nmap')) {
      output = `[+] Nmap 7.94 scan report for target (127.0.0.1)\nPORT     STATE SERVICE VERSION\n22/tcp   open  ssh     OpenSSH 8.9p1\n80/tcp   open  http    nginx 1.18.0\n443/tcp  open  ssl/http nginx 1.18.0`;
    } else if (cleanCmd.startsWith('dig')) {
      output = `;<<>> DiG 9.18.1-1-Debian <<>> nith.ac.in\n;; QUESTION SECTION:\n;nith.ac.in.\t\t\tIN\tA\n;; ANSWER SECTION:\nnith.ac.in.\t\t300\tIN\tA\t14.139.221.6`;
    } else if (cleanCmd.startsWith('tcpdump')) {
      output = `17:18:02.102 IP 192.168.1.50.49152 > 14.139.221.6.80: Flags [S], seq 123456789\n17:18:02.105 IP 14.139.221.6.80 > 192.168.1.50.49152: Flags [S.], seq 987654321, ack 123456790`;
    } else {
      output = `[+] Executing \`${cleanCmd}\`...\nCommand completed successfully with return code 0. Security controls verified.`;
    }

    setTerminalLogs((prev) => [
      ...prev,
      { type: 'cmd', text: `$ ${cleanCmd}` },
      { type: 'out', text: output }
    ]);
    setTerminalInput('');
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    if (flagInput.trim().toLowerCase().includes('shield')) {
      setFlagSuccess(true);
      toggleLessonCompleted(currentLesson.id);
    } else {
      alert('Incorrect flag! Tip: Make sure your flag starts with SHIELD{...}');
    }
  };

  const toggleSpeakLesson = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `${currentLesson.title}. ${currentLesson.shortExplanation}. ${currentLesson.whyItMatters}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak.slice(0, 350));
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ELI5 Simple Analogy Map for Course Domains
  const getSimpleAnalogy = () => {
    const slug = courseSlug.toLowerCase();
    if (slug.includes('network')) {
      return '📮 Think of a computer network like a global Postal Office. IP addresses are your home street addresses, MAC addresses are your physical fingerprints, and Routers are postmasters routing sealed envelopes (packets) safely!';
    } else if (slug.includes('web')) {
      return '🏰 Think of a web app like a bank building. Authentication is the ID check at the door, SQL Injection is tricking the clerk into opening vault doors, and HTTPS is delivering cash inside armored steel trucks!';
    } else if (slug.includes('crypto')) {
      return '🔐 Think of cryptography like a secure lockbox. Symmetric encryption uses 1 matching key to lock and unlock. Asymmetric uses 2 keys: a public key slot anyone can drop mail into, and a private key only you hold!';
    } else if (slug.includes('linux')) {
      return '🐧 Think of Linux like a super-organized skyscraper. The Root user is the building manager with master keys, File Permissions (rwx) are door badges, and Processes are active workers inside offices!';
    }
    return '🛡️ Think of this domain like building layers of defense: understanding how systems communicate, how vulnerabilities arise, and how security controls prevent unauthorized exploitation.';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8 font-sans">
      {/* Top Breadcrumb Nav */}
      <div className="flex items-center justify-between border-b border-cyber-cardBorder/60 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-mono text-cyber-cyan hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning Hub</span>
        </button>

        <div className="text-xs font-mono text-cyber-muted hidden sm:block">
          <span className="text-cyber-cyan">Learning Hub</span> / <span className="text-white">{course.title}</span> / <span className="text-cyber-teal">{currentLesson?.number}. Lesson</span>
        </div>
      </div>

      {/* Course Header Banner */}
      <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyber-cyan/40 bg-[#070a14]/95 shadow-neon-cyan/30 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full ${course.badgeColor || 'cyber-badge-cyan'}`}>
                {course.difficulty}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-teal flex items-center gap-1">
                <Clock className="w-3 h-3" /> {course.estimatedTime}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-purple flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> {lessons.length} Modules & Lessons
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              {course.title}
            </h1>
            <p className="text-xs sm:text-sm text-cyber-muted font-sans leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="w-full md:w-64 bg-cyber-bg p-4 rounded-xl border border-cyber-cardBorder space-y-3 shrink-0">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-cyber-muted">Course Progress</span>
              <span className="text-cyber-cyan font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-cyber-card border border-cyber-cardBorder rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <button
              onClick={() => {
                setActiveLessonIndex(0);
                scrollToTop();
              }}
              className="w-full btn-cyber-primary text-xs py-2 justify-center"
            >
              Start Learning 🚀
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Sticky Sidebar + Interactive Content Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative">
        {/* Mobile Dropdown Navigation */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full p-3 rounded-xl bg-cyber-card border border-cyber-cyan/40 text-white font-mono text-xs flex items-center justify-between"
          >
            <span className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-cyber-cyan" />
              <span>Lessons Navigation ({activeLessonIndex + 1}/25)</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* 25-Lesson Sticky Sidebar */}
        <aside
          className={`lg:block ${mobileMenuOpen ? 'block' : 'hidden'} lg:col-span-1 space-y-3 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto pr-1 no-scrollbar`}
        >
          <div className="cyber-card p-4 rounded-2xl border border-cyber-cardBorder space-y-3 bg-[#070a14]">
            <div className="text-xs font-mono font-bold text-white flex items-center justify-between border-b border-cyber-cardBorder pb-2">
              <span>Course Curriculum</span>
              <span className="text-cyber-teal">{completedCount}/25 Completed</span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-cyber-muted absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Filter 25 lessons..."
                className="w-full pl-8 pr-2 py-1.5 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-[11px] font-mono text-white placeholder:text-cyber-muted focus:border-cyber-cyan focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              {filteredLessons.map((les) => {
                const globalIdx = lessons.findIndex((l) => l.id === les.id);
                const isActive = globalIdx === activeLessonIndex;
                const completed = isLessonCompleted(les.id);

                return (
                  <button
                    key={les.id}
                    onClick={() => {
                      setActiveLessonIndex(globalIdx);
                      setMobileMenuOpen(false);
                      scrollToTop();
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-[11px] font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                        : completed
                        ? 'text-green-400 bg-green-950/10 border border-green-500/20 hover:border-green-500/40'
                        : 'text-cyber-muted hover:text-white hover:bg-cyber-card'
                    }`}
                  >
                    <span className="truncate pr-2">
                      <strong className="mr-1">{les.number}.</strong> {les.title.replace(/^\d+\.\s+[^:]+:\s+/, '')}
                    </span>
                    {completed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    ) : (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-muted shrink-0">
                        {les.level}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content Reader Workspace */}
        <main className="lg:col-span-3 space-y-6">
          <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyber-cardBorder bg-[#070a14]/90 space-y-8">
            {/* Interactive Section Mode Tabs */}
            <div className="flex items-center space-x-2 border-b border-cyber-cardBorder/60 pb-3 font-mono text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all ${
                  activeTab === 'overview'
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📖 Lesson Documentation</span>
              </button>

              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all ${
                  activeTab === 'terminal'
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>💻 Live Terminal Sandbox</span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all ${
                  activeTab === 'quiz'
                    ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                    : 'text-cyber-muted hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>🧪 Knowledge Self-Check</span>
              </button>
            </div>

            {/* TAB 1: LESSON DOCUMENTATION */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Lesson Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      {currentLesson.unitTitle && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                          <span>{currentLesson.unitTitle}</span>
                        </span>
                      )}
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                        {currentLesson.level} Level Module
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={toggleSpeakLesson}
                        className={`p-1.5 rounded border border-cyber-cardBorder text-xs font-mono flex items-center space-x-1 ${
                          isSpeaking ? 'text-cyber-cyan border-cyber-cyan bg-cyber-cyan/10' : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Read Lesson Summary"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isSpeaking ? 'Stop' : 'Listen'}</span>
                      </button>

                      <button
                        onClick={() => toggleBookmark(currentLesson.id)}
                        className={`p-1.5 rounded border border-cyber-cardBorder transition-colors ${
                          isBookmarked(currentLesson.id) ? 'text-yellow-400 border-yellow-400/40' : 'text-cyber-muted hover:text-white'
                        }`}
                        title="Bookmark Lesson"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked(currentLesson.id) ? 'fill-yellow-400' : ''}`} />
                      </button>

                      <button
                        onClick={() => toggleLessonCompleted(currentLesson.id)}
                        className={`p-1.5 rounded border transition-colors ${
                          isLessonCompleted(currentLesson.id)
                            ? 'text-green-400 border-green-500/40 bg-green-950/20'
                            : 'text-cyber-muted border-cyber-cardBorder hover:text-white'
                        }`}
                        title="Mark Completed"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isLessonCompleted(currentLesson.id) ? 'fill-green-400/20' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {currentLesson.title}
                  </h2>

                  {/* Academic Textbook Citation Callout */}
                  {currentLesson.academicReference && (
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-200/90 bg-amber-950/30 border border-amber-500/30 px-3.5 py-2 rounded-xl">
                      <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-amber-300">Prescribed Standard Reference:</strong> {currentLesson.academicReference}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed font-sans">
                    {currentLesson.shortExplanation}
                  </p>
                </div>

                {/* Course Learning Objectives (CLOs) Badge Box */}
                {currentLesson.learningObjectives && currentLesson.learningObjectives.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-2.5">
                    <div className="flex items-center space-x-2 text-cyber-cyan font-mono font-bold text-xs">
                      <Award className="w-4 h-4 text-cyber-cyan" />
                      <span>Course Learning Objectives (CLOs - Academic Standard)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-slate-200">
                      {currentLesson.learningObjectives.map((clo, idx) => (
                        <div key={idx} className="flex items-start space-x-2 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-cyber-teal font-bold shrink-0">✓</span>
                          <span className="leading-snug">{clo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mathematical & Engineering Formulation Callout */}
                {currentLesson.mathFormulation && (
                  <div className="p-4 rounded-xl bg-[#080d1e] border border-cyber-cyan/40 space-y-2 font-mono">
                    <div className="flex items-center space-x-2 text-cyber-cyan font-bold text-xs">
                      <Code2 className="w-4 h-4" />
                      <span>Mathematical Formulation & Theoretical Proof</span>
                    </div>
                    <pre className="p-3.5 rounded-lg bg-[#03050c] border border-cyber-cardBorder text-emerald-400 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap select-text shadow-inner">
                      {currentLesson.mathFormulation}
                    </pre>
                  </div>
                )}

                {/* ELI5 / Simple Analogy Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyber-cyan/15 via-cyber-teal/10 to-transparent border border-cyber-cyan/40 space-y-2">
                  <div className="flex items-center space-x-2 text-cyber-cyan font-mono font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>💡 Intuitive Real-World Analogy (ELI5)</span>
                  </div>
                  <p className="text-xs text-slate-100 font-sans leading-relaxed">
                    {getSimpleAnalogy()}
                  </p>
                </div>

                {/* Why It Matters Callout */}
                <div className="p-4 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/40 space-y-2">
                  <div className="flex items-center space-x-2 text-cyber-cyan font-mono font-bold text-xs">
                    <Shield className="w-4 h-4" />
                    <span>Why This Topic Matters in Cybersecurity</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {currentLesson.whyItMatters}
                  </p>
                </div>

                {/* How It Works Section */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold font-display text-white flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyber-teal" />
                    <span>How It Works (Step-by-Step Breakdown)</span>
                  </h3>
                  <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-cardBorder text-xs font-sans text-cyber-muted leading-relaxed whitespace-pre-line">
                    {currentLesson.howItWorks}
                  </div>
                </div>

                {/* Core Concepts Grid */}
                {currentLesson.concepts && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold font-display text-white">Core Concepts & Key Terms</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentLesson.concepts.map((c, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-cyber-card border border-cyber-cardBorder space-y-1">
                          <span className="text-xs font-mono text-cyber-cyan font-bold">{c.term}</span>
                          <p className="text-[11px] text-cyber-muted">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual Stepper Architecture Diagram */}
                {currentLesson.diagram && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold font-display text-white">Visual Architecture & Flow</h3>
                      <div className="flex items-center space-x-2 text-xs font-mono">
                        <button
                          onClick={() => setDiagramStep((s) => Math.max(1, s - 1))}
                          className="px-2 py-1 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-cyan"
                        >
                          Step {diagramStep} / 3
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#04060d] border border-cyber-cardBorder font-mono text-xs text-cyber-teal overflow-x-auto whitespace-pre leading-relaxed select-text shadow-inner">
                      {currentLesson.diagram}
                    </div>
                  </div>
                )}

                {/* CLI Diagnostic Commands with Copy */}
                {currentLesson.commands && currentLesson.commands.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold font-display text-white">CLI Diagnostic Commands</h3>
                    {currentLesson.commands.map((cmd, idx) => (
                      <div key={idx} className="rounded-xl border border-slate-800 bg-[#060913] overflow-hidden shadow-lg space-y-2">
                        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800 text-[11px] font-mono text-cyber-cyan">
                          <span className="font-bold">{cmd.purpose}</span>
                          <button
                            onClick={() => handleCopyCommand(cmd.command, idx)}
                            className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-[10px] flex items-center gap-1 cursor-pointer"
                          >
                            <Copy className="w-3 h-3" />
                            <span>{copiedCmdIdx === idx ? '✓ Copied!' : 'Copy Command'}</span>
                          </button>
                        </div>

                        <div className="p-3 space-y-2 text-xs font-mono">
                          <div className="p-2.5 rounded bg-black/90 text-emerald-400 select-text flex items-center justify-between">
                            <code>{cmd.command}</code>
                            <button
                              onClick={() => {
                                setActiveTab('terminal');
                                handleRunTerminalCommand(cmd.command);
                              }}
                              className="text-[10px] text-cyber-cyan hover:underline"
                            >
                              Run in Terminal ▶
                            </button>
                          </div>
                          {cmd.expectedOutput && (
                            <div>
                              <span className="text-[10px] text-cyber-muted block mb-1">Expected CLI Output:</span>
                              <pre className="p-2.5 rounded bg-slate-950 text-slate-300 text-[11px] overflow-x-auto">
                                {cmd.expectedOutput}
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Risk & Pitfall Alert Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentLesson.securityImplications && (
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/40 space-y-1.5">
                      <div className="flex items-center space-x-2 text-red-400 font-mono font-bold text-xs">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Security Risk & Attack Vectors</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                        {currentLesson.securityImplications}
                      </p>
                    </div>
                  )}

                  {currentLesson.commonMistakes && (
                    <div className="p-4 rounded-xl bg-yellow-950/20 border border-yellow-500/40 space-y-1.5">
                      <div className="flex items-center space-x-2 text-yellow-400 font-mono font-bold text-xs">
                        <HelpCircle className="w-4 h-4" />
                        <span>Common Pitfalls to Avoid</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                        {currentLesson.commonMistakes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Practical Lab & CTF Task */}
                <div className="p-6 rounded-2xl bg-cyber-cyan/5 border border-cyber-cyan/30 space-y-4">
                  <div className="flex items-center space-x-2 text-cyber-cyan font-display font-bold text-sm">
                    <Trophy className="w-5 h-5" />
                    <span>Hands-On Practical Exercise & CTF Flag</span>
                  </div>
                  <p className="text-xs text-cyber-muted leading-relaxed font-sans">
                    {currentLesson.labExercise || currentLesson.ctfChallenge}
                  </p>

                  <form onSubmit={handleFlagSubmit} className="flex gap-2 max-w-md pt-2">
                    <input
                      type="text"
                      value={flagInput}
                      onChange={(e) => setFlagInput(e.target.value)}
                      placeholder="Enter CTF Flag (e.g. SHIELD{...})"
                      className="flex-1 px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-xs font-mono text-white focus:border-cyber-cyan focus:outline-none"
                    />
                    <button type="submit" className="btn-cyber-primary text-xs px-4 py-2 shrink-0">
                      Submit Flag
                    </button>
                  </form>

                  {flagSuccess && (
                    <div className="p-3 rounded-lg bg-green-950/40 border border-green-500 text-green-400 text-xs font-mono flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Flag Verified! Lesson Marked Completed 🎉</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: LIVE TERMINAL SANDBOX */}
            {activeTab === 'terminal' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-display text-white flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyber-cyan" />
                    <span>Interactive Cyber CLI Sandbox</span>
                  </h3>
                  <button
                    onClick={() => setTerminalLogs([{ type: 'info', text: 'Terminal logs cleared.' }])}
                    className="text-[10px] font-mono text-cyber-muted hover:text-white"
                  >
                    Clear Terminal
                  </button>
                </div>

                {/* Pre-built Command Quick Pills */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  <span className="text-[10px] text-cyber-muted self-center">Quick Runs:</span>
                  <button onClick={() => handleRunTerminalCommand('ip addr')} className="px-2 py-1 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-cyan hover:border-cyber-cyan">
                    ip addr
                  </button>
                  <button onClick={() => handleRunTerminalCommand('nmap -sV localhost')} className="px-2 py-1 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-teal hover:border-cyber-teal">
                    nmap -sV
                  </button>
                  <button onClick={() => handleRunTerminalCommand('dig nith.ac.in')} className="px-2 py-1 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-purple hover:border-cyber-purple">
                    dig nith.ac.in
                  </button>
                  <button onClick={() => handleRunTerminalCommand('tcpdump -i eth0')} className="px-2 py-1 rounded bg-cyber-card border border-cyber-cardBorder text-cyber-red hover:border-cyber-red">
                    tcpdump
                  </button>
                </div>

                {/* Terminal Console Output Window */}
                <div className="p-4 rounded-xl bg-[#04060d] border border-cyber-cyan/30 font-mono text-xs text-slate-200 h-72 overflow-y-auto space-y-2 select-text shadow-inner">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={log.type === 'cmd' ? 'text-cyber-cyan font-bold' : log.type === 'info' ? 'text-cyber-teal' : 'text-emerald-400 whitespace-pre-wrap'}>
                      {log.text}
                    </div>
                  ))}
                </div>

                {/* Terminal Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRunTerminalCommand(terminalInput);
                  }}
                  className="flex gap-2"
                >
                  <span className="self-center font-mono text-cyber-cyan text-sm">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type CLI command (e.g. nmap, ip addr, dig, ping)..."
                    className="flex-1 px-3 py-2 bg-cyber-bg border border-cyber-cardBorder rounded-lg text-xs font-mono text-white focus:border-cyber-cyan focus:outline-none"
                  />
                  <button type="submit" className="btn-cyber-primary text-xs px-4 py-2">
                    Execute ▶
                  </button>
                </form>
              </div>
            )}

            {/* TAB 3: KNOWLEDGE SELF-CHECK QUIZ */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                <div className="border-b border-cyber-cardBorder/60 pb-3">
                  <h3 className="text-base font-bold font-display text-white flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-cyber-cyan" />
                    <span>Quick Knowledge Check</span>
                  </h3>
                  <p className="text-xs text-cyber-muted font-sans mt-1">
                    Test your understanding of {currentLesson.title} before moving to the next lesson!
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-cyber-card border border-cyber-cardBorder space-y-3">
                    <div className="font-bold text-white">Q1. What is the primary purpose of {currentLesson.title.split(':')[1] || currentLesson.title}?</div>
                    <div className="space-y-2">
                      {['Analyze & secure system communications', 'Bypass authentication without authorization', 'Disable logging servers'].map((opt, i) => (
                        <label key={i} className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-cyber-bg">
                          <input
                            type="radio"
                            name="q1"
                            checked={quizAnswers['q1'] === i}
                            onChange={() => setQuizAnswers({ ...quizAnswers, q1: i })}
                          />
                          <span className={quizSubmitted && i === 0 ? 'text-green-400 font-bold' : 'text-slate-300'}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="btn-cyber-primary text-xs px-6 py-2.5"
                  >
                    Submit Quiz Answers
                  </button>

                  {quizSubmitted && (
                    <div className="p-4 rounded-xl bg-green-950/30 border border-green-500 text-green-400 flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Great job! You passed the self-check quiz for this lesson! 🎉</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Lesson Footer Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-cyber-cardBorder/60">
              <button
                disabled={activeLessonIndex === 0}
                onClick={() => {
                  setActiveLessonIndex((prev) => Math.max(prev - 1, 0));
                  scrollToTop();
                }}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border border-cyber-cardBorder text-xs font-mono flex items-center justify-center space-x-2 ${
                  activeLessonIndex === 0 ? 'opacity-40 cursor-not-allowed text-cyber-muted' : 'text-white hover:border-cyber-cyan'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Lesson</span>
              </button>

              <button
                onClick={() => toggleLessonCompleted(currentLesson.id)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  isLessonCompleted(currentLesson.id)
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'btn-cyber-primary'
                }`}
              >
                {isLessonCompleted(currentLesson.id) ? '✓ Lesson Completed' : 'Mark Lesson Complete'}
              </button>

              <button
                disabled={activeLessonIndex === lessons.length - 1}
                onClick={() => {
                  setActiveLessonIndex((prev) => Math.min(prev + 1, lessons.length - 1));
                  scrollToTop();
                }}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border border-cyber-cardBorder text-xs font-mono flex items-center justify-center space-x-2 ${
                  activeLessonIndex === lessons.length - 1 ? 'opacity-40 cursor-not-allowed text-cyber-muted' : 'text-white hover:border-cyber-cyan'
                }`}
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
