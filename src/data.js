// Realistic Content Data for SHIELD Cybersecurity Society (NIT Hamirpur)

export const SOCIETY_INFO = {
  name: "SHIELD Cybersecurity Society",
  shortName: "SHIELD NITH",
  tagline: "Defending the Byte. Securing the Future.",
  institution: "National Institute of Technology Hamirpur (NIT Hamirpur)",
  location: "Department of Computer Science & Engineering, NIT Hamirpur, Himachal Pradesh, 177005",
  email: "shield@nith.ac.in",
  discord: "https://discord.gg/shield-nith-mock",
  slack: "https://shield-nith.slack.com-mock",
  github: "https://github.com/shield-nith",
  linkedin: "https://linkedin.com/company/shield-nith",
  twitter: "https://x.com/shield_nith",
  telegram: "https://t.me/shield_nith",
  gaTrackingId: "G-SHIELDNITH2026",
  facultyAdvisor: {
    name: "Dr. Rakesh Kumar",
    role: "Faculty Advisor & Associate Professor, DoCSE",
    bio: "Pioneer in Network Security and Applied Cryptography research at NIT Hamirpur. Guiding SHIELD since its inception in 2021.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  }
};

export const KEY_STATS = [
  { label: "Active Members", value: "500+", icon: "users" },
  { label: "National CTF Podiums", value: "34", icon: "trophy" },
  { label: "Workshops & Bootcamps", value: "50+", icon: "terminal" },
  { label: "Bug Bounties Won", value: "₹2.4M+", icon: "shield-check" }
];

export const DOMAINS = [
  {
    id: "pwn",
    title: "Binary Exploitation & Pwn",
    description: "Memory corruption vulnerabilities, buffer overflows, ROP chains, kernel exploitation, and shellcoding.",
    icon: "cpu",
    badgeColor: "cyber-badge-red"
  },
  {
    id: "websec",
    title: "Web & Cloud Security",
    description: "OWASP Top 10 vulnerabilities, API security, OAuth bypasses, server-side exploitation, and AWS/Azure hardening.",
    icon: "globe",
    badgeColor: "cyber-badge-cyan"
  },
  {
    id: "re",
    title: "Reverse Engineering",
    description: "Decompiling malware binaries, disassembly with Ghidra & IDA Pro, anti-analysis evasion, and firmware analysis.",
    icon: "binary",
    badgeColor: "cyber-badge-teal"
  },
  {
    id: "crypto",
    title: "Cryptography & Math",
    description: "RSA attacks, elliptic curve cryptography, lattice reduction, post-quantum ciphers, and zero-knowledge proofs.",
    icon: "key-round",
    badgeColor: "cyber-badge-purple"
  },
  {
    id: "forensics",
    title: "Digital Forensics & Incident Response",
    description: "Memory dumps, PCAP network analysis, steganography, disk forensics, and threat hunting techniques.",
    icon: "file-search",
    badgeColor: "cyber-badge-cyan"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "t1",
    name: "Aarav Sharma",
    role: "President & Team Captain",
    domain: "Core",
    batch: "Dual Degree CSE '26",
    bio: "Ranked Top 5 in InCTF 2025. Specialized in Linux Kernel Pwn and Browser Exploitation. Published CVE-2024-XXXX.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/aarav-pwn",
    linkedin: "https://linkedin.com/in/aarav-sharma-nith",
    twitter: "https://x.com/aarav_pwn"
  },
  {
    id: "t2",
    name: "Ananya Verma",
    role: "Vice President & Web Sec Lead",
    domain: "WebSec",
    batch: "B.Tech CSE '26",
    bio: "Bug bounty researcher with hall of fame mentions at Google, Meta, and RedHat. Passionate about GraphQL & SSRF.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/ananya-websec",
    linkedin: "https://linkedin.com/in/ananya-verma",
    twitter: "https://x.com/ananya_sec"
  },
  {
    id: "t3",
    name: "Rohan Thakur",
    role: "Reverse Engineering Lead",
    domain: "Reverse Engineering",
    batch: "B.Tech ECE '26",
    bio: "Ghidra plugin author and malware analyst. Focused on IoT firmware extraction and ARM assembly analysis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/rohan-rev",
    linkedin: "https://linkedin.com/in/rohan-thakur",
    twitter: "https://x.com/rohan_asm"
  },
  {
    id: "t4",
    name: "Sneha Patel",
    role: "Cryptography & Math Lead",
    domain: "Cryptography",
    batch: "B.Tech CSE '27",
    bio: "Math enthusiast solving lattice-based cryptography challenges. 1st Place in Crypton 2025 CTF.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/sneha-crypto",
    linkedin: "https://linkedin.com/in/sneha-patel",
    twitter: "https://x.com/sneha_crypto"
  },
  {
    id: "t5",
    name: "Vikramaditya Singh",
    role: "Forensics & IR Lead",
    domain: "Forensics",
    batch: "B.Tech Dual CSE '27",
    bio: "Network forensics nerd and Volatility contributor. Organizes NITH Cyber Hunt & DFIR workshops.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/vikram-dfir",
    linkedin: "https://linkedin.com/in/vikramaditya-s",
    twitter: "https://x.com/vikram_dfir"
  },
  {
    id: "t6",
    name: "Dr. Rakesh Kumar",
    role: "Faculty Advisor",
    domain: "Advisors",
    batch: "Faculty, DoCSE",
    bio: "Associate Professor at NIT Hamirpur. Expertise in Wireless Sensor Networks & Cryptographic Protocols.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com/rakesh-nith",
    linkedin: "https://linkedin.com/in/rakesh-kumar-nith",
    twitter: "https://x.com/rakesh_nith"
  }
];

export const EVENTS = [
  {
    id: "e1",
    title: "SHIELD CTF 2026: National Hackathon",
    category: "CTF",
    type: "Upcoming",
    date: "2026-10-15T10:00:00+05:30",
    displayDate: "October 15-17, 2026",
    venue: "Main Auditorium & Online (Hybrid)",
    location: "NIT Hamirpur Campus",
    description: "48-hour national jeopardy-style CTF hosted by SHIELD NITH. Categories include Pwn, Web, Crypto, Rev, and Forensics with prize pool of ₹1,50,000.",
    prizes: "₹1,50,000 Total Cash Prizes + Swag + HTB Vouchers",
    speaker: "SHIELD Core Team & Guest Judges",
    status: "Registration Open",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "SHIELD CTF 2026: National Hackathon",
      "startDate": "2026-10-15T10:00:00+05:30",
      "endDate": "2026-10-17T10:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "NIT Hamirpur Main Auditorium",
        "address": "NIT Hamirpur, HP, 177005"
      },
      "description": "48-hour national jeopardy-style CTF hosted by SHIELD NITH."
    }
  },
  {
    id: "e2",
    title: "Hands-on Kernel Exploitation Workshop",
    category: "Workshop",
    type: "Upcoming",
    date: "2026-09-28T14:00:00+05:30",
    displayDate: "September 28, 2026",
    venue: "Lab 3, Department of CSE",
    location: "DoCSE, NIT Hamirpur",
    description: "Deep dive into Linux kernel internals, slab allocators, privilege escalation techniques, and writing custom Kernel ROP payloads.",
    prizes: "Certificate of Completion + Lab Access",
    speaker: "Aarav Sharma (SHIELD Captain)",
    status: "Limited Seats",
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Hands-on Kernel Exploitation Workshop",
      "startDate": "2026-09-28T14:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Lab 3, Department of CSE, NIT Hamirpur"
      }
    }
  },
  {
    id: "e3",
    title: "Bug Bounty Hunting 101: Web App Security",
    category: "Workshop",
    type: "Past",
    date: "2026-08-10T11:00:00+05:30",
    displayDate: "August 10, 2026",
    venue: "Mini Auditorium, NITH",
    location: "NIT Hamirpur Campus",
    description: "Interactive session on reconnaissance, Burp Suite Pro tips, IDOR exploitation, and writing impactful vulnerability reports.",
    prizes: "PortSwigger Academy Subscriptions",
    speaker: "Ananya Verma (Bug Bounty Hunter)",
    status: "Completed (250+ Attendees)",
    schemaJson: null
  },
  {
    id: "e4",
    title: "CyberSec Career & Industry AMA",
    category: "Seminar",
    type: "Past",
    date: "2026-07-20T16:00:00+05:30",
    displayDate: "July 20, 2026",
    venue: "Online Google Meet",
    location: "Virtual",
    description: "Industry insights from NITH alumni currently working at CrowdStrike, Google Security, and Palo Alto Networks.",
    prizes: "1-on-1 Resume Reviews",
    speaker: "NITH Cyber Alumni Panel",
    status: "Completed (300+ Viewers)",
    schemaJson: null
  }
];

export const PROJECTS_RESOURCES = [
  {
    id: "p1",
    title: "ShieldScan: Automated Subdomain & Asset Scanner",
    category: "Tools",
    domain: "WebSec",
    description: "Open-source Python CLI tool built by SHIELD for rapid subdomain discovery, port scanning, and CVE fingerprinting.",
    stars: 184,
    tags: ["Python", "Recon", "OSINT", "CLI"],
    link: "https://github.com/shield-nith/shieldscan-mock",
    docUrl: "#"
  },
  {
    id: "p2",
    title: "NITH CTF Lab Setup & Docker Environment",
    category: "Lab Setup",
    domain: "General",
    description: "One-command Docker environment pre-configured with Ghidra, gdb-pwndbg, Burp Suite, Volatility, and CyberChef.",
    stars: 240,
    tags: ["Docker", "Linux", "Pwn", "Lab"],
    link: "https://github.com/shield-nith/ctf-docker-environment-mock",
    docUrl: "#"
  },
  {
    id: "p3",
    title: "Ultimate Heap Exploitation Cheatsheet",
    category: "Cheatsheets",
    domain: "Pwn",
    description: "Comprehensive guide covering glibc malloc internals, fastbin dup, tcache poisoning, and house of force techniques.",
    stars: 310,
    tags: ["C", "Linux", "glibc", "Heap"],
    link: "https://github.com/shield-nith/heap-cheatsheet-mock",
    docUrl: "#"
  },
  {
    id: "p4",
    title: "InCTF 2025 Official SHIELD Writeups",
    category: "Writeups",
    domain: "All",
    description: "Detailed challenge solutions and exploits written by SHIELD members for InCTF 2025 national finals.",
    stars: 95,
    tags: ["CTF", "Writeups", "Crypto", "Rev"],
    link: "https://github.com/shield-nith/inctf-2025-writeups-mock",
    docUrl: "#"
  },
  {
    id: "p5",
    title: "CryptoTool: Lattice Reduction & RSA Solver",
    category: "Tools",
    domain: "Cryptography",
    description: "SageMath script library for solving Hastad broadcast attacks, Coppersmith theorem, and LLL reductions.",
    stars: 120,
    tags: ["SageMath", "Python", "RSA", "Lattice"],
    link: "https://github.com/shield-nith/cryptotool-mock",
    docUrl: "#"
  }
];

export const BLOG_POSTS = [
  {
    id: "b1",
    title: "Uncovering Zero-Day Flaws in IoT Firmware: A Case Study",
    author: "Rohan Thakur",
    date: "Sep 05, 2026",
    readTime: "6 min read",
    category: "Reverse Engineering",
    excerpt: "How we unpacked a router firmware binary using Binwalk and Ghidra to discover an unauthenticated remote code execution vulnerability.",
    content: `
### Introduction
During our weekend research sprint at SHIELD NITH, we analyzed a popular Wi-Fi router firmware image. Our goal was to understand the vendor's HTTP daemon implementation and identify potential memory safety bugs.

### Unpacking with Binwalk
We started by extracting the file system using \`binwalk -e firmware.bin\`. The command carved out the SquashFS filesystem, giving us direct access to the binary targets in \`/bin\` and \`/usr/sbin\`.

### Ghidra Analysis
Loading \`httpd\` into Ghidra with MIPS big-endian architecture, we located the custom CGI handler. The application used an unsanitized \`strcpy()\` buffer when parsing the HTTP \`Authorization\` header string.

\`\`\`c
void handle_auth(char *header) {
    char username_buf[64];
    // Vulnerable unchecked copy into stack buffer
    strcpy(username_buf, header);
}
\`\`\`

### Impact & Remediation
We reported the issue responsibly through the vendor's security portal. This case highlights why automated static analysis and memory-safe code practices are vital for embedded devices.
    `
  },
  {
    title: "SHIELD NITH Places 2nd at National CyberCon CTF",
    id: "b2",
    author: "SHIELD Media Team",
    date: "Aug 28, 2026",
    readTime: "3 min read",
    category: "Society News",
    excerpt: "SHIELD's competitive team 'NITH_ByteBusters' secured 2nd place among 180+ university teams at CyberCon 2026 in New Delhi.",
    content: `
We are thrilled to announce that team **NITH_ByteBusters**, representing SHIELD Cybersecurity Society, secured 2nd position overall at the prestigious CyberCon 2026 CTF held in New Delhi!

The 24-hour non-stop competition tested skills in web exploitation, binary pwn, lattice cryptography, and forensic analysis. Huge congratulations to team members Aarav, Ananya, Rohan, and Sneha for bringing home the trophy and a cash prize of ₹75,000!
    `
  },
  {
    title: "Demystifying OAuth 2.0 State Parameter Bypass Attacks",
    id: "b3",
    author: "Ananya Verma",
    date: "Aug 14, 2026",
    readTime: "8 min read",
    category: "Web Security",
    excerpt: "An in-depth guide on Cross-Site Request Forgery (CSRF) vulnerabilities in OAuth authentication flows and how to mitigate them.",
    content: `
OAuth 2.0 is the standard protocol for authorization, but missing or misconfigured \`state\` parameter validation can lead to account takeover via CSRF.

### The Mechanics of OAuth CSRF
When an application initiates an OAuth flow, it sends the user to an authorization server. Without a cryptographic, unpredictable \`state\` parameter tied to the user's session:

1. Attacker initiates OAuth flow and intercepts authorization code from provider.
2. Attacker tricks victim into completing the OAuth flow using the attacker's authorization code.
3. Victim's local application account is linked to attacker's social provider credentials.

### Prevention Best Practices
Always generate a strong cryptographically random \`state\` token stored in HTTPOnly cookies or server session prior to redirection.
    `
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "SHIELD Hackathon 2025 Winners",
    category: "Hackathons",
    date: "2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    caption: "Prize distribution ceremony at NIT Hamirpur Auditorium with Director and HOD DoCSE."
  },
  {
    id: "g2",
    title: "Kernel Pwn Hands-on Workshop",
    category: "Workshops",
    date: "2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "Students solving custom kernel exploitation challenges in CSE Lab 2."
  },
  {
    id: "g3",
    title: "CyberCon 2026 Podium Moment",
    category: "CTF",
    date: "2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    caption: "Team NITH_ByteBusters celebrating their 2nd place win at CyberCon 2026."
  },
  {
    id: "g4",
    title: "Bug Bounty Awareness Seminar",
    category: "Workshops",
    date: "2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    caption: "Over 250+ NIT Hamirpur students attending the Web Security seminar."
  },
  {
    id: "g5",
    title: "SHIELD Annual Team Outing",
    category: "Socials",
    date: "2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    caption: "Society core members and domain leads in Hamirpur hills."
  },
  {
    id: "g6",
    title: "Hardware Hacking & Router Teardown Lab",
    category: "Workshops",
    date: "2026",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    caption: "Analyzing UART pins and dumping flash memory from embedded routers."
  }
];

export const SPONSORS = [
  {
    name: "HackTheBox",
    tier: "Gold Partner",
    logoText: "HACKTHEBOX",
    type: "Platform & Labs Partner",
    perks: "VIP+ Lab Access & Exclusive CTF Hosting Support",
    website: "https://hackthebox.com"
  },
  {
    name: "TryHackMe",
    tier: "Gold Partner",
    logoText: "TRYHACKME",
    type: "Education Partner",
    perks: "Student Vouchers & Custom Learning Rooms",
    website: "https://tryhackme.com"
  },
  {
    name: "PortSwigger",
    tier: "Silver Partner",
    logoText: "PORTSWIGGER",
    type: "Web Security Partner",
    perks: "Burp Suite Certified Practitioner Sponsorship",
    website: "https://portswigger.net"
  },
  {
    name: "GitHub Education",
    tier: "Educational Partner",
    logoText: "GITHUB",
    type: "Infrastructure Partner",
    perks: "GitHub Student Developer Pack & Copilot Grants",
    website: "https://education.github.com"
  }
];

export const FAQS = [
  {
    id: "faq1",
    category: "Membership",
    question: "Who is eligible to join SHIELD Cybersecurity Society?",
    answer: "Any registered student (B.Tech, Dual Degree, M.Tech, Ph.D.) at NIT Hamirpur across any branch can join. Prior cybersecurity experience is NOT required for general membership; we hold beginner bootcamps every semester!"
  },
  {
    id: "faq2",
    category: "Membership",
    question: "How do I become a core member of the CTF competitive team?",
    answer: "You can apply during our annual induction drive held in September/October or by performing well in our internal monthly CTF competitions hosted on the SHIELD platform."
  },
  {
    id: "faq3",
    category: "Events & CTFs",
    question: "Are SHIELD workshops and hackathons free for NITH students?",
    answer: "Yes, 100% free! All internal workshops, guest lectures, CTF lab access, and bootcamps organized by SHIELD are completely free for all NIT Hamirpur students."
  },
  {
    id: "faq4",
    category: "Sponsorship",
    question: "How can companies sponsor SHIELD events or recruit NITH cyber talent?",
    answer: "Industry partners can reach out via our contact form or directly email shield@nith.ac.in. We offer customized sponsorship tiers (Gold, Silver, CTF Prize partner) with direct access to top-ranking student security researchers."
  },
  {
    id: "faq5",
    category: "Resources",
    question: "Where can I find beginner-friendly security tutorials?",
    answer: "Check our Projects/Resources tab on this website! We provide curated cheatsheets, recommended TryHackMe/HackTheBox pathways, and custom Docker environments for Linux kernel and web security labs."
  }
];
