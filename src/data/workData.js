// Work & Impact Data for SHIELD Cybersecurity Society (NIT Hamirpur)

export const WORK_PILLARS = [
  {
    id: "vuln-research",
    category: "Vulnerability Research",
    title: "Ethical Hacking & Zero-Day Research",
    icon: "shield-alert",
    badgeColor: "cyber-badge-red",
    summary: "Conducting responsible disclosure and vulnerability research on open-source software, IoT firmware, and web applications.",
    description: "Our members analyze binary software, API endpoints, and embedded systems to discover zero-day vulnerabilities, issuing CVE disclosures through official vendor security portals.",
    keyMetrics: "15+ CVEs Disclosed",
    highlights: [
      "Discovered unauthenticated RCE in popular Wi-Fi router firmware",
      "Responsible disclosure of GraphQL authorization bypass flaws",
      "Kernel memory safety audit on Linux driver components"
    ]
  },
  {
    id: "ctf-compete",
    category: "CTF Competitions",
    title: "Competitive CTF Training & National Podiums",
    icon: "trophy",
    badgeColor: "cyber-badge-cyan",
    summary: "Training competitive student teams for national and international Jeopardy and Attack-Defend Capture The Flag events.",
    description: "SHIELD organizes weekly training sprints, reverse engineering challenges, and binary exploitation bootcamps to prepare NIT Hamirpur teams for top national podium finishes.",
    keyMetrics: "34 National Podiums",
    highlights: [
      "2nd Place at CyberCon 2026 National CTF (₹75,000 Cash Prize)",
      "Top 5 Ranking in InCTF 2025 National Finals",
      "Regular podium finishes in HackTheBox University CTFs"
    ]
  },
  {
    id: "workshops-bootcamps",
    category: "Bootcamps & Training",
    title: "Cyber Bootcamps & Hands-on Workshops",
    icon: "terminal",
    badgeColor: "cyber-badge-teal",
    summary: "Hosting free, hands-on technical workshops for NIT Hamirpur students across all engineering branches.",
    description: "From Linux terminal basics to heap exploitation and web security auditing, we provide practical lab environments, Docker setups, and mentorship.",
    keyMetrics: "50+ Bootcamps Hosted",
    highlights: [
      "Hands-on Linux Kernel Exploitation Workshop (DoCSE Lab 3)",
      "Web Security & Bug Bounty 101 for 250+ NITH Students",
      "Hardware Router Teardown & UART Debugging Session"
    ]
  },
  {
    id: "bug-bounty",
    category: "Bug Bounty",
    title: "Bug Bounty Hunting & Security Auditing",
    icon: "bug",
    badgeColor: "cyber-badge-purple",
    summary: "Helping student researchers identify security flaws in global organizations and earn international bounty rewards.",
    description: "Members actively participate in bug bounty programs on Bugcrowd, HackerOne, and private VDPs, gaining Hall of Fame recognitions.",
    keyMetrics: "₹2.4M+ Bounties Won",
    highlights: [
      "Hall of Fame recognitions at Google, Meta, RedHat, and Microsoft",
      "Bounty rewards earned for SSRF, IDOR, and OAuth bypass flaws",
      "Mentorship sessions on writing high-impact vulnerability reports"
    ]
  },
  {
    id: "open-source",
    category: "Open Source",
    title: "Open-Source Tools & Security Utilities",
    icon: "code-2",
    badgeColor: "cyber-badge-cyan",
    summary: "Developing and maintaining open-source security scanners, CTF lab Docker setups, and exploitation cheatsheets.",
    description: "We build tools used by security enthusiasts worldwide, including asset discovery scanners, SageMath cryptographic solvers, and heap cheatsheets.",
    keyMetrics: "1,000+ GitHub Stars",
    highlights: [
      "ShieldScan: Subdomain & asset recon CLI tool",
      "NITH CTF Docker Lab: One-command environment with Ghidra & gdb",
      "Ultimate Heap Exploitation Cheatsheet for glibc malloc"
    ]
  },
  {
    id: "campus-security",
    category: "Security Audits",
    title: "Campus Security Infrastructure Audits",
    icon: "lock",
    badgeColor: "cyber-badge-teal",
    summary: "Assisting campus infrastructure with security assessments and vulnerability mitigation.",
    description: "In coordination with faculty advisors, SHIELD conducts authorized internal audits of campus networks and web portals to ensure robust cyber defense.",
    keyMetrics: "100% Authorized Audits",
    highlights: [
      "Internal network architecture reviews and firewall rule validation",
      "Password policy and multi-factor authentication recommendations",
      "Cyber hygiene workshops for university departments"
    ]
  }
];

export const CASE_STUDIES = [
  {
    id: "cs-1",
    title: "Case Study: Router Firmware RCE Zero-Day Disclosure",
    category: "Vulnerability Research",
    date: "August 2026",
    summary: "Extracted and decompiled MIPS router firmware using Binwalk & Ghidra, discovering an unauthenticated stack buffer overflow in the HTTP daemon.",
    impact: "Vendor issued firmware patch impacting 50,000+ deployed routers worldwide.",
    tags: ["Reverse Engineering", "MIPS", "Ghidra", "CVE"]
  },
  {
    id: "cs-2",
    title: "Case Study: CyberCon 2026 National CTF Victory",
    category: "CTF Competitions",
    date: "July 2026",
    summary: "Team NITH_ByteBusters solved complex pwn, lattice crypto, and web challenges in a 24-hour non-stop competition against 180+ university teams.",
    impact: "Secured 2nd place overall, winning ₹75,000 cash prize and national recognition for NIT Hamirpur.",
    tags: ["Pwn", "Lattice Crypto", "WebSec", "Podium"]
  },
  {
    id: "cs-3",
    title: "Case Study: ShieldScan Open-Source Security Tool",
    category: "Open Source",
    date: "May 2026",
    summary: "Built an automated Python CLI tool for multi-threaded subdomain discovery, port scanning, and CVE fingerprinting.",
    impact: "Accumulated 180+ GitHub stars and integrated into NITH security lab curriculum.",
    tags: ["Python", "Recon", "OSINT", "CLI"]
  }
];
