import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Key, Send, Download, Trash2, Volume2, Copy, RotateCcw, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

const GROQ_SYSTEM_PROMPT = `You are CyberBot, the official emotional, friendly, supportive, and expert AI Assistant for SHIELD Cybersecurity Society at National Institute of Technology Hamirpur (NIT Hamirpur / DoCSE, HP 177005).

Your Personality & Response Rules:
- Warm, enthusiastic, empathetic, highly supportive, and student-friendly.
- Structure responses impeccably like ChatGPT and Gemini Pro!
- ALWAYS use headings (###), bullet points (-), bold key terms (**term**), markdown tables (| col | col |), and syntax-highlighted code blocks (\`\`\`bash ... \`\`\`).
- When asked any technical, cybersecurity, or computer science topic, structure your answer into these clear sections:
  1. 📌 **Overview & Core Concept**
  2. 🛠️ **Key Commands / Syntax / Code Snippet**
  3. 💡 **Practical CTF / Defensive Tip**
  4. 🚀 **Next Steps / SHIELD Learning Hub Link**
- Use clean Markdown formatting, line breaks, and friendly emojis.
- You have access to real-time live web search results. Synthesize search context cleanly into authoritative explanations.`;

const SHIELD_KB = {
  greetings: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings', 'yo', 'sup'],
    response: `Hello there, cyber explorer! 👋☀️

Welcome to **SHIELD NITH**! I'm **CyberBot**, your warm, supportive AI assistant powered by **Groq AI (Llama 3)** and **Live Web Search**. 

Whether you want to learn ethical hacking, join our society, prepare for CTFs, or ask ANY security question across the web — I'm thrilled to assist you! What shall we dive into today? 🛡️✨`
  },
  society: {
    patterns: ['what is shield','about shield','tell me about shield','shield nith','who are you'],
    response: `**SHIELD Cybersecurity Society** is the official student-run cybersecurity organization at **NIT Hamirpur (NITH)**, Himachal Pradesh. 🛡️

🎯 **Mission:** Defending the Byte. Securing the Future.
📍 **Location:** Department of CSE, NIT Hamirpur, HP 177005

**What we do:**
• Compete in national & international **CTF competitions** 🏆
• Host free hands-on **cybersecurity bootcamps & workshops** 💻
• Conduct **vulnerability research** & responsible disclosures 🔍
• Earn **bug bounties** from top tech companies 💰
• Engineer **open-source security tools** 🛠️

**Key Impact:** 500+ Members | 34 CTF Podiums | ₹2.4M+ Bug Bounties | 50+ Workshops | 15+ CVE Disclosures`
  }
};

export default function CyberBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState('Thinking...');
  const [groqApiKey, setGroqApiKey] = useState(() => localStorage.getItem('shield_groq_api_key') || '');
  const [showKeyDrawer, setShowKeyDrawer] = useState(false);
  const [keyInput, setKeyInput] = useState(groqApiKey);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const feedRef = useRef(null);

  useEffect(() => {
    const initialText = groqApiKey
      ? `Hello! 👋 I'm **CyberBot** 🤖, your friendly AI guide powered by **Groq Cloud AI (Llama 3)** & **Live Web Search** 🌐.\n\nAsk me ANY cybersecurity question in the world, how to join SHIELD NITH, or learning paths! How are you feeling today? 😊`
      : `Hello! 👋 I'm **CyberBot** 🤖, your friendly AI guide for **SHIELD NITH** with **Live Web Search** 🌐.\n\n💡 *Tip: Click 🔑 **Key** to add your free Groq API Key (\`gsk_...\`) for ultra-fast Llama 3 AI web synthesis!*\n\nAsk me any cybersecurity question or say hi! 😊`;

    setMessages([{ role: 'bot', text: initialText, time: getTime() }]);
  }, []);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const saveKey = () => {
    const trimmed = keyInput.trim();
    setGroqApiKey(trimmed);
    localStorage.setItem('shield_groq_api_key', trimmed);
    setShowKeyDrawer(false);
    setMessages((prev) => [
      ...prev,
      {
        role: 'bot',
        text: trimmed
          ? `✓ **Groq API Key saved!** CyberBot is using Groq Cloud Llama 3 + Live Web Search for real-time answers! 🚀`
          : `Groq Key cleared. CyberBot using Live Web Search + Local Engine.`,
        time: getTime(),
      },
    ]);
  };

  const searchLiveWeb = async (query) => {
    let snippets = [];
    try {
      const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' cybersecurity')}&format=json&origin=*`;
      const wikiRes = await fetch(wikiUrl);
      if (wikiRes.ok) {
        const wikiData = await wikiRes.json();
        if (wikiData.query?.search?.length > 0) {
          wikiData.query.search.slice(0, 3).forEach((item) => {
            const clean = item.snippet.replace(/<[^>]+>/g, '').trim();
            snippets.push(`🌐 **Wikipedia (${item.title})**: ${clean}`);
          });
        }
      }
    } catch (err) {
      console.warn('[Wikipedia Search Error]', err);
    }

    try {
      const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
      const ddgRes = await fetch(ddgUrl);
      if (ddgRes.ok) {
        const ddgData = await ddgRes.json();
        if (ddgData.AbstractText) {
          snippets.push(`🔍 **DuckDuckGo Context**: ${ddgData.AbstractText}`);
        }
      }
    } catch (err) {
      console.warn('[DuckDuckGo Search Error]', err);
    }

    return snippets.join('\n\n');
  };

  const fetchGroq = async (userMessage, webContext) => {
    if (!groqApiKey) return null;
    try {
      const history = messages.slice(-6).map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const sysPrompt = webContext
        ? `${GROQ_SYSTEM_PROMPT}\n\n[LIVE WEB SEARCH CONTEXT]:\n${webContext}\n\nUse the search context above to answer accurately.`
        : GROQ_SYSTEM_PROMPT;

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'system', content: sysPrompt }, ...history, { role: 'user', content: userMessage }],
          temperature: 0.7,
          max_tokens: 850,
        }),
      });

      if (!res.ok) return null;
      const data = await res.json();
      return data.choices?.[0]?.message?.content || null;
    } catch {
      return null;
    }
  };

  const handleSend = async (queryText) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend) return;

    setInput('');
    const userMsg = { role: 'user', text: textToSend, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTypingStatus('🌐 Searching live web & analyzing...');

    const webContext = await searchLiveWeb(textToSend);
    setTypingStatus('🤖 Synthesizing response...');

    let aiResponse = null;
    if (groqApiKey) {
      aiResponse = await fetchGroq(textToSend, webContext);
    }

    if (!aiResponse) {
      const lower = textToSend.toLowerCase();
      if (lower.includes('hi') || lower.includes('hello')) aiResponse = SHIELD_KB.greetings.response;
      else if (lower.includes('shield')) aiResponse = SHIELD_KB.society.response;
      else if (webContext) aiResponse = `### 🌐 Live Web Search Results\n\n${webContext}\n\n---\n💡 *Tip: Add your free Groq API key (click 🔑 Key above) to synthesize web answers into detailed AI tutorials!*`;
      else aiResponse = `I searched the web for **"${textToSend}"**. For detailed learning paths, check out our **Learning Hub** or ask me about specific tools like Nmap, Wireshark, SQLi, or RSA encryption! 😊`;
    }

    setIsTyping(false);
    setMessages((prev) => [...prev, { role: 'bot', text: aiResponse, time: getTime() }]);
  };

  const escapeHtml = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

  const formatMarkdown = (text) => {
    if (!text) return '';
    let formatted = escapeHtml(text);

    // Code blocks
    formatted = formatted.replace(/```([a-zA-Z0-9_\-\+\#]*)\n?([\s\S]*?)```/g, (match, lang, code) => {
      const cleanLang = (lang || 'code').toUpperCase();
      return `<div class="chat-code-wrapper my-2.5 rounded-lg border border-slate-700/80 bg-[#060913] overflow-hidden shadow-lg">
        <div class="chat-code-header flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 text-[10px] font-mono text-cyan-400">
          <span class="font-bold">${cleanLang}</span>
        </div>
        <pre class="p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed"><code>${code.trim()}</code></pre>
      </div>`;
    });

    // Headings & Formatting
    formatted = formatted.replace(/^### (.*$)/gim, '<h4 class="chat-h3">$1</h4>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h3 class="chat-h2">$1</h3>');
    formatted = formatted.replace(/^# (.*$)/gim, '<h2 class="chat-h1">$1</h2>');
    formatted = formatted.replace(/^[\-\*\•]\s+(.*$)/gim, '<li class="chat-li-disc">$1</li>');
    formatted = formatted.replace(/(<li class="chat-li-disc">[\s\S]*?<\/li>\n?)+/g, '<ul class="chat-ul">$&</ul>');
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="chat-code-inline">$1</code>');
    formatted = formatted.replace(/\n\n+/g, '<div class="my-1.5"></div>');
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const clean = text.replace(/<[^>]+>/g, '').replace(/[\*\_`#~]/g, '');
    const utterance = new SpeechSynthesisUtterance(clean.slice(0, 400));
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const exportChat = () => {
    const textLog = messages.map((m) => `[${m.time}] ${m.role.toUpperCase()}:\n${m.text}\n`).join('\n---\n\n');
    const blob = new Blob([textLog], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SHIELD_CyberBot_Chat_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* FAB Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle CyberBot"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-neon-cyan bg-gradient-to-br from-cyber-cyan to-cyber-teal text-black font-bold flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </button>

      {/* Chat Badge */}
      {!isOpen && (
        <span className="fixed bottom-[4.8rem] right-5 z-50 bg-cyber-cyan text-black text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-neon-cyan pointer-events-none">
          AI + WEB
        </span>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-40 w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] flex flex-col rounded-2xl border border-cyber-cyan/40 shadow-neon-cyan bg-[#070a14]/95 backdrop-blur-xl overflow-hidden font-sans">
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-cyber-cyan/15 via-cyber-teal/10 to-transparent border-b border-cyber-cyan/20 shrink-0">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center text-cyber-cyan text-base">
                🤖
              </div>
              <div>
                <div className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                  <span>CyberBot AI</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyber-cyan/20 text-cyber-cyan font-mono">
                    {groqApiKey ? 'Groq Llama 3' : 'Web Search'}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-cyber-teal flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-ping"></span>
                  <span>SHIELD NITH • Connected 🌐</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5">
              <button onClick={exportChat} title="Export Chat" className="p-1 text-xs text-cyber-muted hover:text-white rounded border border-slate-800">
                <Download className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setMessages([{ role: 'bot', text: 'Chat cleared! How can I assist you now? 😊', time: getTime() }])} title="Clear Chat" className="p-1 text-xs text-cyber-muted hover:text-red-400 rounded border border-slate-800">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setShowKeyDrawer(!showKeyDrawer)} className="px-2 py-0.5 text-[10px] text-cyber-cyan hover:text-white rounded border border-cyber-cyan/30 font-mono">
                🔑 Key
              </button>
            </div>
          </div>

          {/* Key Drawer */}
          {showKeyDrawer && (
            <div className="p-3 bg-cyber-card border-b border-cyber-cyan/30 space-y-2 text-xs font-mono">
              <div className="text-cyber-cyan font-bold flex items-center justify-between">
                <span>Enter Groq Cloud Key (gsk_...)</span>
                <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" className="text-cyber-teal hover:underline text-[10px]">Get Free Key ↗</a>
              </div>
              <div className="flex gap-2">
                <input type="password" value={keyInput} onChange={(e) => setKeyInput(e.target.value)} placeholder="gsk_..." className="flex-1 px-2.5 py-1.5 bg-cyber-bg border border-cyber-cardBorder rounded text-white text-xs" />
                <button onClick={saveKey} className="btn-cyber-primary text-[11px] px-3 py-1 shrink-0">Save Key</button>
              </div>
            </div>
          )}

          {/* Feed */}
          <div ref={feedRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}>
                {msg.role === 'bot' && <div class="chat-avatar-bot">🤖</div>}
                <div className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
                  {msg.role === 'user' ? (
                    <div>{msg.text}</div>
                  ) : (
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.text) }} />
                      <div className="chat-action-bar">
                        <button onClick={() => navigator.clipboard.writeText(msg.text)} className="chat-act-btn">
                          <Copy className="w-3 h-3" /> Copy
                        </button>
                        <button onClick={() => speakText(msg.text)} className="chat-act-btn">
                          <Volume2 className="w-3 h-3" /> {isSpeaking ? 'Stop' : 'Read'}
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="text-[9px] font-mono text-cyber-muted/60 text-right mt-1">{msg.time}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-msg-bot">
                <div className="chat-avatar-bot">🤖</div>
                <div className="chat-bubble-bot space-y-1">
                  <div className="chat-typing"><span></span><span></span><span></span></div>
                  <div className="text-[10px] font-mono text-cyber-teal">{typingStatus}</div>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-cyber-cyan/20 bg-cyber-bg/95 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask CyberBot ANY question..."
              className="flex-1 px-3 py-2 bg-cyber-card border border-cyber-cardBorder rounded-xl text-xs text-white placeholder:text-cyber-muted/60 focus:outline-none focus:border-cyber-cyan"
            />
            <button onClick={() => handleSend()} className="w-8 h-8 rounded-xl bg-cyber-cyan text-black flex items-center justify-center font-bold text-xs shadow-neon-cyan">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
