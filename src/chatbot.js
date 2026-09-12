// ============================================================
// SHIELD NITH — Groq AI + Live Web Search Powered Cyber Assistant (CyberBot)
// Real-time Web Search (Wikipedia/DuckDuckGo) + Groq Cloud (Llama-3.3-70b-versatile)
// Full ChatGPT & Gemini Interactive Features: Streaming, Action Bar, Speech, Export
// ============================================================

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
- You have access to real-time live web search results. Synthesize search context cleanly into authoritative, step-by-step explanations without raw clutter.

Context & Facts about SHIELD NITH:
- Official Cybersecurity Society under Department of CSE, NIT Hamirpur (Founded 2021).
- Faculty Advisor: Dr. Rakesh Kumar (Associate Professor, DoCSE).
- President: Aarav Sharma (Kernel Pwn & Browser Exploitation lead).
- Key Stats: 500+ Members, 34 National CTF Podiums (2nd at CyberCon 2026), ₹2.4M+ Bug Bounties Won, 50+ Bootcamps Hosted, 15+ CVE Disclosures.
- Website Sections: Learning Hub (#learning with 24 Security Domains & 21-node Roadmap), Our Work (#work), Team, Events, Projects, Blog, Gallery, Sponsors, Membership FAQ, Contact.
- Safety Rule: Always emphasize authorized lab environments (localhost, Docker, CTFs, OWASP Juice Shop) for any security testing.`;

const SHIELD_KB = {
  howAreYou: {
    patterns: ['how are you', 'how do you feel', 'how are you doing', 'hows it going', "how's it going", 'what is up', 'whats up', 'how are u', 'how r u'],
    response: `I'm feeling **absolutely fantastic and energized** to assist you today! 🚀

Energetic, curious, and passionate about cybersecurity as always! 🛡️ 

How are *you* doing today? Is there a challenge, topic, or question on your mind? I'm here to listen, support, and help you succeed! 💚`
  },

  feelingGood: {
    patterns: ['i am good', "i'm good", 'i am fine', "i'm fine", 'doing well', 'great', 'awesome', 'feeling good', 'all good', 'im ok', 'im fine'],
    response: `That brings a huge smile to my digital face! 😊✨

I'm super glad to hear you're having a good day! Ready to learn some awesome security concepts or check out what SHIELD is up to at NIT Hamirpur?

Let me know what you'd like to explore! 🔐`
  },

  feelingStressed: {
    patterns: ['stressed', 'confused', 'hard', 'difficult', 'overwhelmed', 'scared', 'i am stuck', 'dont understand', "can't understand", 'too complex'],
    response: `Take a deep, calm breath! 💙 Cyber security can definitely feel overwhelming at first with all the CLI commands, protocols, and technical terms.

**Remember:** Every top hacker and security researcher started right where you are today! Step-by-step is the secret.

🌟 **My recommendation for you:**
• Check out our **Learning Hub** (click *Learning* in the top menu)
• Start with **Level 1 Foundations**
• Ask me any specific term or concept you're stuck on!

You've got this, and I'm right here in your corner! 🛡️✨`
  },

  whoCreatedYou: {
    patterns: ['who made you', 'who created you', 'who built you', 'who developed you', 'who is your creator'],
    response: `I was built with lots of passion and coffee by the student security researchers at **SHIELD Cybersecurity Society (NIT Hamirpur)** and integrated with **Groq Llama 3 AI** & **Live Web Search**! 💻💙

My mission is to be your friendly, encouraging guide for ethical hacking, CTFs, society events, and learning pathways. 🚀`
  },

  greetings: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon', 'greetings', 'yo', 'sup'],
    response: `Hello there, cyber explorer! 👋☀️

Welcome to **SHIELD NITH**! I'm **CyberBot**, your warm, supportive AI assistant powered by **Groq AI** and **Live Web Search**. 

Whether you want to learn ethical hacking, join our society, prepare for CTFs, or ask ANY security question across the web — I'm thrilled to assist you! What shall we dive into today? 🛡️✨`
  },

  thanks: {
    patterns: ['thank you', 'thanks', 'thx', 'thank u', 'appreciate it', 'you helped a lot', 'helpful'],
    response: `Aww, you are so very welcome! 🥰 It's a genuine pleasure helping you!

Stay curious, keep learning, and remember: *ethical hackers make the digital world safer for everyone!* 🔐 

Feel free to ask me anything else anytime! 💖`
  },

  praise: {
    patterns: ['you are awesome', 'cool', 'great bot', 'i love you', 'you are great', 'nice', 'amazing', 'superb'],
    response: `You just totally made my digital day! 💖✨

Thank you so much for the kind words! You're awesome for taking the time to build your cybersecurity skills with SHIELD NITH. Keep shining! 🚀`
  },

  joke: {
    patterns: ['joke', 'tell me a joke', 'funny', 'cyber joke', 'make me laugh'],
    response: `Here is a special cybersecurity joke for you! 😄

**Q:** Why do hackers love nature walks?
**A:** Because they love finding *fresh logs* and *rooting* around! 🌳💻

Hope that brought a smile to your face! 🛡️`
  },

  society: {
    patterns: ['what is shield','about shield','tell me about shield','shield nith','who are you','what do you do','shield society'],
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
  },

  join: {
    patterns: ['how to join','become member','join shield','apply','membership','induction','recruit','how can i join','admission to shield'],
    response: `We would **LOVE** to have you join SHIELD NITH! 🎉

📋 **Eligibility:** Open to ALL current NIT Hamirpur students across all branches and years!

**How to Apply:**
1. Click the **"Join SHIELD"** button at the top of the website
2. Fill out your details and domain interest
3. Attend our welcoming induction drive & interactive mini-challenge`
  }
};

class CyberBot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.container = null;
    this.isTyping = false;
    this.isStreaming = false;
    this.typingStatusText = 'Thinking...';
    this.apiKeyStorageKey = 'shield_groq_api_key';
    this.groqApiKey = this.getStoredApiKey();
    this.isSpeaking = false;
  }

  getStoredApiKey() {
    try {
      return localStorage.getItem(this.apiKeyStorageKey) || '';
    } catch {
      return '';
    }
  }

  saveApiKey(key) {
    this.groqApiKey = key.trim();
    try {
      localStorage.setItem(this.apiKeyStorageKey, this.groqApiKey);
    } catch (e) {
      console.warn('Could not save Groq API key:', e);
    }
  }

  init() {
    if (document.getElementById('cyberbot-root')) return;
    this.injectHTML();
    this.bindEvents();
    
    const initialText = this.groqApiKey
      ? `Hello! 👋 I'm **CyberBot** 🤖, your friendly AI guide powered by **Groq Cloud AI (Llama 3)** & **Live Web Search** 🌐.

Ask me ANY cybersecurity question in the world, how to join SHIELD NITH, or learning paths! How are you feeling today? 😊`
      : `Hello! 👋 I'm **CyberBot** 🤖, your friendly AI guide for **SHIELD NITH** with **Live Web Search** 🌐.

💡 *Tip: Click 🔑 **Groq Key** to add your free Groq API Key (\`gsk_...\`) for ultra-fast Llama 3 AI web synthesis!*

Ask me any cybersecurity question or say hi! 😊`;

    this.messages.push({
      role: 'bot',
      text: initialText,
      time: this.getTime()
    });
    this.renderMessages();
  }

  getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // ─── LIVE WEB SEARCH ENGINE (WIKIPEDIA & DUCKDUCKGO APIS) ─────────────────
  async searchLiveWeb(query) {
    let snippets = [];

    // 1. Fetch Wikipedia Live Cyber Articles
    try {
      const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' cybersecurity')}&format=json&origin=*`;
      const wikiRes = await fetch(wikiUrl);
      if (wikiRes.ok) {
        const wikiData = await wikiRes.json();
        if (wikiData.query && wikiData.query.search && wikiData.query.search.length > 0) {
          wikiData.query.search.slice(0, 3).forEach(item => {
            const cleanSnippet = item.snippet.replace(/<[^>]+>/g, '').trim();
            snippets.push(`🌐 **Wikipedia (${item.title})**: ${cleanSnippet}`);
          });
        }
      }
    } catch (err) {
      console.warn('[Wikipedia Web Search Error]', err);
    }

    // 2. Fetch DuckDuckGo Instant Answers
    try {
      const ddgUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
      const ddgRes = await fetch(ddgUrl);
      if (ddgRes.ok) {
        const ddgData = await ddgRes.json();
        if (ddgData.AbstractText) {
          snippets.push(`🔍 **DuckDuckGo Context**: ${ddgData.AbstractText}`);
        }
        if (ddgData.RelatedTopics && ddgData.RelatedTopics.length > 0) {
          ddgData.RelatedTopics.slice(0, 2).forEach(topic => {
            if (topic.Text) snippets.push(`📌 **Related Reference**: ${topic.Text}`);
          });
        }
      }
    } catch (err) {
      console.warn('[DuckDuckGo Web Search Error]', err);
    }

    return snippets.join('\n\n');
  }

  async fetchGroqCompletion(userMessage, webContext) {
    if (!this.groqApiKey) return null;

    try {
      const history = this.messages.slice(-6).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const systemPromptWithWeb = webContext
        ? `${GROQ_SYSTEM_PROMPT}\n\n[LIVE WEB SEARCH CONTEXT FOR USER QUERY]:\n${webContext}\n\nUse the above live web search context to give a thorough, accurate, friendly answer.`
        : GROQ_SYSTEM_PROMPT;

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.groqApiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPromptWithWeb },
            ...history,
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 850
        })
      });

      if (!response.ok) return null;
      const data = await response.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      }
      return null;
    } catch (err) {
      console.warn('[Groq Network Error]', err);
      return null;
    }
  }

  findLocalFallbackResponse(userText) {
    const input = userText.toLowerCase().trim();

    for (const [, entry] of Object.entries(SHIELD_KB)) {
      if (!entry.patterns) continue;
      if (entry.patterns.some(p => input.includes(p))) {
        return entry.response;
      }
    }

    if (input.includes('hack') || input.includes('ctf')) return `### 🚩 What is Capture The Flag (CTF)?

**Capture The Flag (CTF)** is a competitive cybersecurity sport where hackers solve security challenges to find hidden secret strings called flags (e.g. \`SHIELD{h3ap_3xpl01t}\`).

| CTF Domain | Core Description | Common Tools |
| --- | --- | --- |
| **Web Exploitation** | XSS, SQLi, CSRF, SSRF | Burp Suite, OWASP ZAP |
| **Binary Exploitation (Pwn)** | Buffer Overflows, ROP Chains | GDB, Pwntools, radare2 |
| **Reverse Engineering** | Decompiling Binaries | Ghidra, IDA Pro, Cutter |
| **Cryptography** | Cracking Ciphers, RSA Attacks | CyberChef, SageMath |

- **How to Start:** Check out our **Learning Hub** (click *Learning* in the top bar) for step-by-step guides! 🚀`;

    if (input.includes('learn') || input.includes('start')) return `### 🚀 How to Start Cybersecurity at NIT Hamirpur

Welcome to the journey! Follow these 3 simple steps:

1. **Visit the Learning Hub:** Click **Learning** in the top navigation menu.
2. **Master Level 1 Foundations:** Study Linux CLI, Networking, and Python scripting.
3. **Join SHIELD CTF Practice:** Solve challenges with our senior mentors!

Ask me any specific concept (e.g. *Nmap*, *SQL Injection*, *Buffer Overflow*) and I'll explain it! 🔐`;

    if (input.includes('join') || input.includes('apply')) return `### 🛡️ How to Join SHIELD Cybersecurity Society

We would **LOVE** to have you in our team!

1. Click the **"Join SHIELD"** button at the top right of the page.
2. Fill in your details & cybersecurity interests.
3. Join our open community channel and attend our induction session! 🎉`;

    return null;
  }

  // Dynamic Follow-up Prompt Pills
  getDynamicFollowUps(userQuery, botResponse) {
    const combined = ((userQuery || '') + ' ' + (botResponse || '')).toLowerCase();
    const chips = [];

    if (combined.includes('nmap') || combined.includes('scan') || combined.includes('port')) {
      chips.push('🛠️ Show Nmap command examples', '🛡️ How do firewalls block Nmap?');
    } else if (combined.includes('sql') || combined.includes('sqli') || combined.includes('injection')) {
      chips.push('💉 Give SQLi payload example', '🛡️ Best defense: Prepared Statements');
    } else if (combined.includes('ctf') || combined.includes('flag')) {
      chips.push('🚩 Best beginner CTF platforms', '🏆 SHIELD NITH CTF achievements');
    } else if (combined.includes('python') || combined.includes('script') || combined.includes('code')) {
      chips.push('🐍 Python socket port scanner code', '🛠️ How to use Pwntools?');
    } else if (combined.includes('join') || combined.includes('shield')) {
      chips.push('📋 What domains can I learn?', '📅 Next workshop & bootcamp date');
    } else {
      chips.push('💡 Can you explain with a code example?', '🛡️ How to defend against this?');
    }

    return chips;
  }

  formatMessage(text) {
    if (!text) return '';

    // Step 1: Extract code blocks before HTML escaping
    const codeBlocks = [];
    let formatted = text.replace(/```([a-zA-Z0-9_\-\+\#]*)\n?([\s\S]*?)```/g, (match, lang, code) => {
      const id = `___CODE_BLOCK_${codeBlocks.length}___`;
      const cleanLang = (lang || 'code').toUpperCase();
      const escapedCode = this.escapeHtml(code.trim());
      
      const blockHtml = `
        <div class="chat-code-wrapper my-2.5 rounded-lg border border-slate-700/80 bg-[#060913] overflow-hidden shadow-lg">
          <div class="chat-code-header flex items-center justify-between px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 text-[10px] font-mono text-cyan-400">
            <span class="flex items-center gap-1.5 font-bold tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
              ${cleanLang}
            </span>
            <button class="chat-copy-btn text-slate-400 hover:text-white transition-colors duration-150 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] flex items-center gap-1 cursor-pointer">
              📋 Copy Code
            </button>
          </div>
          <pre class="p-3 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed select-text"><code>${escapedCode}</code></pre>
        </div>`;
      codeBlocks.push(blockHtml);
      return id;
    });

    // Step 2: Escape raw HTML outside code blocks
    formatted = this.escapeHtml(formatted);

    // Step 3: Markdown Tables (| Header | Header |\n| --- | --- |\n| Cell | Cell |)
    formatted = formatted.replace(/(?:\|.*(?:\|\r?\n)?)+/g, (match) => {
      const lines = match.trim().split('\n').filter(l => l.trim().startsWith('|'));
      if (lines.length < 2) return match;

      let tableHtml = '<div class="chat-table-wrapper"><table class="chat-table">';
      
      lines.forEach((line, idx) => {
        if (line.includes('---')) return;
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        if (idx === 0) {
          tableHtml += '<thead><tr>';
          cells.forEach(cell => { tableHtml += `<th>${cell}</th>`; });
          tableHtml += '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>';
          cells.forEach(cell => { tableHtml += `<td>${cell}</td>`; });
          tableHtml += '</tr>';
        }
      });

      tableHtml += '</tbody></table></div>';
      return tableHtml;
    });

    // Step 4: Markdown Headings
    formatted = formatted.replace(/^#### (.*$)/gim, '<h5 class="chat-h4">$1</h5>');
    formatted = formatted.replace(/^### (.*$)/gim, '<h4 class="chat-h3">$1</h4>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h3 class="chat-h2">$1</h3>');
    formatted = formatted.replace(/^# (.*$)/gim, '<h2 class="chat-h1">$1</h2>');

    // Step 5: Horizontal Rules (--- or ***)
    formatted = formatted.replace(/^---$/gim, '<hr class="chat-hr">');
    formatted = formatted.replace(/^\*\*\*$/gim, '<hr class="chat-hr">');

    // Step 6: Blockquotes (&gt; quote)
    formatted = formatted.replace(/^&gt;\s?(.*$)/gim, '<blockquote class="chat-quote">$1</blockquote>');

    // Step 7: Lists
    formatted = formatted.replace(/^[\-\*\•]\s+(.*$)/gim, '<li class="chat-li-disc">$1</li>');
    formatted = formatted.replace(/^(\d+)\.\s+(.*$)/gim, '<li class="chat-li-num" data-num="$1">$2</li>');

    formatted = formatted.replace(/(<li class="chat-li-disc">[\s\S]*?<\/li>\n?)+/g, '<ul class="chat-ul">$&</ul>');
    formatted = formatted.replace(/(<li class="chat-li-num"[\s\S]*?<\/li>\n?)+/g, '<ol class="chat-ol">$&</ol>');

    // Step 8: Inline Markdown
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    formatted = formatted.replace(/__(.*?)__/g, '<strong class="font-bold text-white">$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="italic text-cyan-200/90">$1</em>');
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="chat-code-inline">$1</code>');
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1 ↗</a>');

    // Step 9: Line breaks
    formatted = formatted.replace(/\n\n+/g, '<div class="my-1.5"></div>');
    formatted = formatted.replace(/\n/g, '<br>');

    // Step 10: Re-insert code blocks
    codeBlocks.forEach((block, idx) => {
      formatted = formatted.replace(`___CODE_BLOCK_${idx}___`, block);
    });

    return formatted;
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  addBotMessageStreaming(fullText, userQuery) {
    const msgId = 'msg-' + Date.now();
    const time = this.getTime();
    this.messages.push({ role: 'bot', text: fullText, time, id: msgId });

    const feed = document.getElementById('cyberbot-feed');
    if (!feed) return;

    // Create bot message element with typewriter cursor
    const botElement = document.createElement('div');
    botElement.className = 'chat-msg-bot';
    botElement.id = msgId;
    botElement.innerHTML = `
      <div class="chat-avatar-bot">🤖</div>
      <div class="chat-bubble-bot">
        <div class="bot-content chat-typing-cursor"></div>
        <div class="text-[9px] font-mono text-cyber-muted/60 text-right mt-1.5">${time}</div>
      </div>`;
    feed.appendChild(botElement);

    const contentDiv = botElement.querySelector('.bot-content');
    const words = fullText.split(' ');
    let currentIdx = 0;

    this.isStreaming = true;
    const interval = setInterval(() => {
      currentIdx += 2;
      const currentText = words.slice(0, currentIdx).join(' ');
      contentDiv.innerHTML = this.formatMessage(currentText);
      feed.scrollTop = feed.scrollHeight;

      if (currentIdx >= words.length) {
        clearInterval(interval);
        this.isStreaming = false;
        contentDiv.classList.remove('chat-typing-cursor');
        contentDiv.innerHTML = this.formatMessage(fullText);

        // Append ChatGPT/Gemini Action Bar & Follow-up Pills
        const bubble = botElement.querySelector('.chat-bubble-bot');
        if (bubble) {
          // Action Bar
          const actionBar = document.createElement('div');
          actionBar.className = 'chat-action-bar';
          actionBar.innerHTML = `
            <button class="chat-act-btn chat-act-copy" title="Copy answer">📋 Copy</button>
            <button class="chat-act-btn chat-act-speak" title="Read aloud">🔊 Read</button>
            <button class="chat-act-btn chat-act-regen" title="Regenerate">🔄 Retry</button>
            <button class="chat-act-btn chat-act-upvote" title="Good response">👍</button>
            <button class="chat-act-btn chat-act-downvote" title="Bad response">👎</button>
          `;
          bubble.appendChild(actionBar);

          // Follow-up Pills
          const followUps = this.getDynamicFollowUps(userQuery, fullText);
          if (followUps.length > 0) {
            const followupDiv = document.createElement('div');
            followupDiv.className = 'chat-followup-container';
            followupDiv.innerHTML = followUps.map(p => `<button class="chat-followup-pill" data-query="${this.escapeHtml(p)}">${p}</button>`).join('');
            bubble.appendChild(followupDiv);
          }
        }
        feed.scrollTop = feed.scrollHeight;
      }
    }, 25);
  }

  renderMessages() {
    const feed = document.getElementById('cyberbot-feed');
    if (!feed) return;

    let html = '';
    let lastUserMessage = '';

    this.messages.forEach((msg, idx) => {
      if (msg.role === 'user') {
        lastUserMessage = msg.text;
        html += `
          <div class="chat-msg-user">
            <div class="chat-bubble-user">
              <div>${this.escapeHtml(msg.text)}</div>
              <div class="text-[9px] font-mono text-cyber-cyan/60 text-right mt-1">${msg.time || ''}</div>
            </div>
          </div>`;
      } else {
        const followUps = idx > 0 ? this.getDynamicFollowUps(lastUserMessage, msg.text) : [];
        const followupHTML = followUps.length > 0
          ? `<div class="chat-followup-container">${followUps.map(p => `<button class="chat-followup-pill" data-query="${this.escapeHtml(p)}">${p}</button>`).join('')}</div>`
          : '';

        html += `
          <div class="chat-msg-bot" id="${msg.id || ('bot-msg-' + idx)}">
            <div class="chat-avatar-bot">🤖</div>
            <div class="chat-bubble-bot">
              <div>${this.formatMessage(msg.text)}</div>
              <div class="chat-action-bar">
                <button class="chat-act-btn chat-act-copy" title="Copy answer">📋 Copy</button>
                <button class="chat-act-btn chat-act-speak" title="Read aloud">🔊 Read</button>
                <button class="chat-act-btn chat-act-regen" title="Regenerate">🔄 Retry</button>
                <button class="chat-act-btn chat-act-upvote" title="Good response">👍</button>
                <button class="chat-act-btn chat-act-downvote" title="Bad response">👎</button>
              </div>
              ${followupHTML}
              <div class="text-[9px] font-mono text-cyber-muted/60 text-right mt-1.5">${msg.time || ''}</div>
            </div>
          </div>`;
      }
    });

    if (this.isTyping) {
      html += `
        <div class="chat-msg-bot">
          <div class="chat-avatar-bot">🤖</div>
          <div class="chat-bubble-bot space-y-1">
            <div class="chat-typing"><span></span><span></span><span></span></div>
            <div class="text-[10px] font-mono text-cyber-teal">${this.typingStatusText}</div>
          </div>
        </div>`;
    }

    feed.innerHTML = html;
    feed.scrollTop = feed.scrollHeight;
  }

  addUserMessage(text) {
    this.messages.push({ role: 'user', text, time: this.getTime() });
    this.renderMessages();
  }

  async processUserInput(input, isRegen = false) {
    if (!input.trim() || this.isStreaming) return;
    if (!isRegen) this.addUserMessage(input);

    this.isTyping = true;
    this.typingStatusText = '🌐 Searching live web & analyzing...';
    this.renderMessages();

    // 1. Fetch Live Web Search Snippets (Wikipedia & DuckDuckGo)
    const webContext = await this.searchLiveWeb(input);

    this.typingStatusText = '🤖 Synthesizing response...';
    this.renderMessages();

    // 2. Try Groq AI Cloud API with live web context
    let response = null;
    if (this.groqApiKey) {
      response = await this.fetchGroqCompletion(input, webContext);
    }

    // 3. Fallback to webContext + Local Knowledge if Groq Key is missing
    if (!response) {
      const localResp = this.findLocalFallbackResponse(input);
      if (localResp) {
        response = localResp;
      } else if (webContext) {
        response = `### 🌐 Live Web Search Results\n\n${webContext}\n\n---\n💡 *Tip: Click 🔑 **Groq Key** in the chat header to add your free Groq API key for ultra-fast Llama 3 AI response synthesis!*`;
      } else {
        response = `I searched the web and our knowledge base for **"${input}"**. 

Cybersecurity is vast! For detailed learning paths on this topic, check out our **Learning Hub** (#learning) or ask me to explain specific tools like Nmap, Wireshark, SQLi, or RSA encryption! 😊`;
      }
    }

    this.isTyping = false;
    this.addBotMessageStreaming(response, input);
  }

  speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in your browser.');
      return;
    }
    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]+>/g, '').replace(/[\*\_`#~]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 400));
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => { this.isSpeaking = false; };
    utterance.onerror = () => { this.isSpeaking = false; };
    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
  }

  regenerateLastResponse() {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      if (this.messages[i].role === 'user') {
        const lastQuery = this.messages[i].text;
        if (this.messages[this.messages.length - 1].role === 'bot') {
          this.messages.pop();
        }
        this.processUserInput(lastQuery, true);
        break;
      }
    }
  }

  exportChat() {
    if (this.messages.length === 0) return;
    const textLog = this.messages.map(m => `[${m.time || ''}] ${m.role.toUpperCase()}:\n${m.text}\n`).join('\n' + '='.repeat(50) + '\n\n');
    const blob = new Blob([textLog], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SHIELD_CyberBot_Chat_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  clearChat() {
    this.messages = [];
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    this.init();
  }

  openChat() {
    const panel = document.getElementById('cyberbot-panel');
    const fabIcon = document.querySelector('#cyberbot-fab .chat-fab-icon');
    if (!panel) return;
    this.isOpen = true;
    panel.style.display = 'flex';
    panel.style.visibility = 'visible';
    panel.style.opacity = '1';
    if (fabIcon) fabIcon.textContent = '✕';
    document.getElementById('cyberbot-input')?.focus();
  }

  closeChat() {
    const panel = document.getElementById('cyberbot-panel');
    const fabIcon = document.querySelector('#cyberbot-fab .chat-fab-icon');
    if (!panel) return;
    this.isOpen = false;
    panel.style.display = 'none';
    if (fabIcon) fabIcon.textContent = '🤖';
  }

  toggleChat() {
    if (this.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  bindEvents() {
    const fab = document.getElementById('cyberbot-fab');
    const closeBtn = document.getElementById('cyberbot-close');
    const clearBtn = document.getElementById('cyberbot-clear');
    const exportBtn = document.getElementById('cyberbot-export');
    const keyBtn = document.getElementById('cyberbot-key-btn');
    const keyDrawer = document.getElementById('cyberbot-key-drawer');
    const keySaveBtn = document.getElementById('cyberbot-key-save');
    const keyInput = document.getElementById('cyberbot-key-input');
    const input = document.getElementById('cyberbot-input');
    const sendBtn = document.getElementById('cyberbot-send');

    // Global Click Event Handler for Code Copy, Action Bar, and Follow-Up Pills
    document.addEventListener('click', (e) => {
      // 1. Copy Code Button
      const copyCodeBtn = e.target.closest('.chat-copy-btn');
      if (copyCodeBtn) {
        e.preventDefault();
        e.stopPropagation();
        const codeEl = copyCodeBtn.closest('.chat-code-wrapper')?.querySelector('code');
        if (codeEl) {
          const rawCode = codeEl.innerText || codeEl.textContent;
          navigator.clipboard.writeText(rawCode).then(() => {
            const orig = copyCodeBtn.innerHTML;
            copyCodeBtn.innerHTML = '✓ Copied!';
            copyCodeBtn.classList.add('text-emerald-400');
            setTimeout(() => {
              copyCodeBtn.innerHTML = orig;
              copyCodeBtn.classList.remove('text-emerald-400');
            }, 2000);
          });
        }
        return;
      }

      // 2. Action Bar - Copy Answer
      const actCopy = e.target.closest('.chat-act-copy');
      if (actCopy) {
        const bubble = actCopy.closest('.chat-bubble-bot');
        if (bubble) {
          const text = bubble.innerText.replace(/📋 Copy|🔊 Read|🔄 Retry|👍|👎/g, '').trim();
          navigator.clipboard.writeText(text).then(() => {
            actCopy.innerHTML = '✓ Copied!';
            setTimeout(() => { actCopy.innerHTML = '📋 Copy'; }, 2000);
          });
        }
        return;
      }

      // 3. Action Bar - Speak Answer
      const actSpeak = e.target.closest('.chat-act-speak');
      if (actSpeak) {
        const bubble = actSpeak.closest('.chat-bubble-bot');
        if (bubble) {
          const text = bubble.innerText;
          this.speakText(text);
          actSpeak.innerHTML = this.isSpeaking ? '⏹️ Stop' : '🔊 Read';
        }
        return;
      }

      // 4. Action Bar - Regenerate
      const actRegen = e.target.closest('.chat-act-regen');
      if (actRegen) {
        this.regenerateLastResponse();
        return;
      }

      // 5. Action Bar - Upvote / Downvote
      const actUp = e.target.closest('.chat-act-upvote');
      if (actUp) {
        actUp.innerHTML = '👍 Thanks!';
        actUp.classList.add('border-emerald-500', 'text-emerald-400');
        return;
      }

      const actDown = e.target.closest('.chat-act-downvote');
      if (actDown) {
        actDown.innerHTML = '👎 Noted!';
        return;
      }

      // 6. Follow-up Pills & Quick Chips
      const pill = e.target.closest('.chat-followup-pill, .chat-chip');
      if (pill) {
        e.preventDefault();
        const query = pill.getAttribute('data-query');
        if (query) this.processUserInput(query);
      }
    });

    if (fab) {
      fab.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleChat();
      };
    }

    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeChat();
      };
    }

    if (clearBtn) {
      clearBtn.onclick = (e) => {
        e.preventDefault();
        if (confirm('Clear chat history?')) this.clearChat();
      };
    }

    if (exportBtn) {
      exportBtn.onclick = (e) => {
        e.preventDefault();
        this.exportChat();
      };
    }

    if (keyBtn && keyDrawer) {
      keyBtn.onclick = (e) => {
        e.preventDefault();
        keyDrawer.classList.toggle('hidden');
      };
    }

    if (keySaveBtn && keyInput) {
      keySaveBtn.onclick = (e) => {
        e.preventDefault();
        const keyVal = keyInput.value.trim();
        this.saveApiKey(keyVal);
        keyDrawer?.classList.add('hidden');
        const badge = document.getElementById('groq-status-badge');
        if (badge) {
          badge.innerText = keyVal ? 'Groq Llama 3 Active' : 'Web Search Active';
        }
        this.addBotMessageStreaming(keyVal ? `✓ **Groq API Key saved!** CyberBot is using Groq Cloud Llama 3 + Live Web Search for real-time answers! 🚀` : `Groq Key cleared. CyberBot using Live Web Search + SHIELD Engine.`, 'Save Key');
      };
    }

    const submit = () => {
      const val = input?.value?.trim();
      if (val) {
        input.value = '';
        if (input) input.style.height = 'auto';
        this.processUserInput(val);
      }
    };

    if (input) {
      input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 110) + 'px';
      });

      input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          submit();
        }
      });
    }

    if (sendBtn) {
      sendBtn.onclick = (e) => {
        e.preventDefault();
        submit();
      };
    }
  }

  injectHTML() {
    const el = document.createElement('div');
    el.id = 'cyberbot-root';
    el.innerHTML = `
      <!-- Floating Action Button -->
      <button id="cyberbot-fab" aria-label="Open CyberBot"
        class="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-neon-cyan
               bg-gradient-to-br from-cyber-cyan to-cyber-teal text-black font-bold
               flex items-center justify-center text-2xl cursor-pointer
               hover:scale-110 active:scale-95 transition-all">
        <span class="chat-fab-icon pointer-events-none">🤖</span>
      </button>

      <!-- Chat Badge -->
      <span id="cyberbot-badge"
        class="fixed bottom-[4.8rem] right-5 z-[9999] bg-cyber-cyan text-black text-[10px]
               font-mono font-bold px-2 py-0.5 rounded-full shadow-neon-cyan pointer-events-none">
        AI + WEB
      </span>

      <!-- Chat Panel -->
      <div id="cyberbot-panel"
        style="display: none;"
        class="fixed bottom-24 right-4 z-[9998]
               w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] flex flex-col
               rounded-2xl border border-cyber-cyan/40 shadow-neon-cyan
               bg-[#070a14]/95 backdrop-blur-xl overflow-hidden">

        <!-- Header -->
        <div class="flex items-center justify-between px-3.5 py-2.5
                    bg-gradient-to-r from-cyber-cyan/15 via-cyber-teal/10 to-transparent
                    border-b border-cyber-cyan/20 shrink-0">
          <div class="flex items-center space-x-2.5">
            <div class="w-8 h-8 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50
                        flex items-center justify-center text-base shadow-sm">🤖</div>
            <div>
              <div class="text-xs font-bold text-white font-display flex items-center gap-1.5">
                <span>CyberBot AI</span>
                <span id="groq-status-badge" class="text-[9px] px-1.5 py-0.2 rounded bg-cyber-cyan/20 text-cyber-cyan font-mono">${this.groqApiKey ? 'Groq Llama 3 Active' : 'Web Search Active'}</span>
              </div>
              <div class="text-[9px] font-mono text-cyber-teal flex items-center space-x-1">
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-ping"></span>
                <span>SHIELD NITH • Live Web Connected 🌐</span>
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-1.5">
            <button id="cyberbot-export" title="Export Chat Log" class="p-1 text-xs text-cyber-muted hover:text-white rounded border border-slate-800 hover:border-cyber-cyan transition-colors">
              📥
            </button>
            <button id="cyberbot-clear" title="Clear Chat History" class="p-1 text-xs text-cyber-muted hover:text-red-400 rounded border border-slate-800 hover:border-red-500/50 transition-colors">
              🗑️
            </button>
            <button id="cyberbot-key-btn" title="Set Groq API Key" class="px-2 py-0.5 text-[10px] text-cyber-cyan hover:text-white rounded border border-cyber-cyan/30 hover:border-cyber-cyan transition-colors font-mono">
              🔑 Key
            </button>
            <button id="cyberbot-close"
              class="w-6 h-6 rounded-md flex items-center justify-center text-xs cursor-pointer
                     text-cyber-muted hover:text-white hover:bg-cyber-cardBorder transition-colors"
              aria-label="Close CyberBot">✕</button>
          </div>
        </div>

        <!-- Groq API Key Input Drawer (Collapsible) -->
        <div id="cyberbot-key-drawer" class="hidden p-3 bg-cyber-card border-b border-cyber-cyan/30 space-y-2 text-xs font-mono">
          <div class="text-cyber-cyan font-bold flex items-center justify-between">
            <span>Enter Groq Cloud API Key (gsk_...)</span>
            <a href="https://console.groq.com/keys" target="_blank" rel="noopener" class="text-cyber-teal hover:underline text-[10px]">Get Free Key ↗</a>
          </div>
          <div class="flex gap-2">
            <input type="password" id="cyberbot-key-input" value="${this.groqApiKey}" placeholder="gsk_..." class="flex-1 px-2.5 py-1.5 bg-cyber-bg border border-cyber-cardBorder rounded text-white focus:border-cyber-cyan focus:outline-none" />
            <button id="cyberbot-key-save" class="btn-cyber-primary text-[11px] px-3 py-1 shrink-0">Save Key</button>
          </div>
        </div>

        <!-- Quick Chips Bar (Horizontal Scrollable Pills) -->
        <div class="flex items-center gap-1.5 px-3 py-2 overflow-x-auto whitespace-nowrap no-scrollbar border-b border-cyber-cardBorder/60 shrink-0 bg-cyber-bg/40">
          <button class="chat-chip" data-query="How are you?">😊 How are you?</button>
          <button class="chat-chip" data-query="How do I join SHIELD?">🛡️ Join SHIELD</button>
          <button class="chat-chip" data-query="What is a CTF?">🚩 What is CTF?</button>
          <button class="chat-chip" data-query="How to start cybersecurity">🚀 Beginner Guide</button>
          <button class="chat-chip" data-query="Upcoming events">📅 Events</button>
          <button class="chat-chip" data-query="What tools do hackers use?">🛠️ Tools</button>
          <button class="chat-chip" data-query="Tell me a joke">😄 Cyber Joke</button>
        </div>

        <!-- Message Feed -->
        <div id="cyberbot-feed"
          class="flex-1 overflow-y-auto px-3 py-3 space-y-3 min-h-0">
        </div>

        <!-- Input Bar (Multi-line Auto-growing Textarea like ChatGPT) -->
        <div class="flex items-end gap-2 px-3 py-2.5
                    border-t border-cyber-cyan/20 bg-cyber-bg/95 shrink-0">
          <textarea id="cyberbot-input" rows="1"
            placeholder="Ask CyberBot ANY question... (Shift+Enter for line break)"
            maxlength="800"
            class="flex-1 px-3 py-2 bg-cyber-card border border-cyber-cardBorder rounded-xl
                   text-xs text-white font-sans placeholder:text-cyber-muted/60
                   focus:outline-none focus:border-cyber-cyan transition-colors resize-none max-h-[110px] leading-relaxed"></textarea>
          <button id="cyberbot-send"
            class="w-8 h-8 rounded-xl bg-cyber-cyan text-black flex items-center justify-center cursor-pointer
                   hover:bg-cyber-teal active:scale-90 transition-all font-bold text-xs shadow-neon-cyan shrink-0 mb-0.5"
            aria-label="Send message">→</button>
        </div>
      </div>
    `;
    document.body.appendChild(el);
    this.container = el;
  }
}

export const cyberBot = new CyberBot();
if (typeof window !== 'undefined') {
  window.cyberBot = cyberBot;
}
