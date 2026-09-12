// Comprehensive Structured Data Store for SHIELD NITH Learning Hub

export const ROADMAP_NODES = [
  { id: 'foundations', title: 'FOUNDATIONS', domainSlug: 'cybersecurity-fundamentals', icon: 'shield' },
  { id: 'networking', title: 'NETWORKING', domainSlug: 'network-security', icon: 'network' },
  { id: 'linux', title: 'LINUX & SYSTEMS', domainSlug: 'linux-security', icon: 'terminal' },
  { id: 'websec', title: 'WEB SECURITY', domainSlug: 'web-security', icon: 'globe' },
  { id: 'crypto', title: 'CRYPTOGRAPHY', domainSlug: 'cryptography', icon: 'key-round' },
  { id: 'forensics', title: 'DIGITAL FORENSICS', domainSlug: 'digital-forensics', icon: 'file-search' },
  { id: 'osint', title: 'OSINT', domainSlug: 'osint', icon: 'search' },
  { id: 'ethical-hacking', title: 'ETHICAL HACKING', domainSlug: 'ethical-hacking', icon: 'zap' },
  { id: 'vuln-assessment', title: 'VULNERABILITY ASSESSMENT', domainSlug: 'vulnerability-assessment', icon: 'search-code' },
  { id: 'pen-testing', title: 'PENETRATION TESTING', domainSlug: 'penetration-testing', icon: 'target' },
  { id: 'reverse-engineering', title: 'REVERSE ENGINEERING', domainSlug: 'reverse-engineering', icon: 'cpu' },
  { id: 'binary-exploitation', title: 'BINARY EXPLOITATION', domainSlug: 'binary-exploitation', icon: 'binary' },
  { id: 'malware-analysis', title: 'MALWARE ANALYSIS', domainSlug: 'malware-analysis', icon: 'bug' },
  { id: 'soc', title: 'SOC & DEFENSIVE SECURITY', domainSlug: 'soc-security', icon: 'shield-alert' },
  { id: 'incident-response', title: 'INCIDENT RESPONSE', domainSlug: 'incident-response', icon: 'siren' },
  { id: 'cloud-security', title: 'CLOUD SECURITY', domainSlug: 'cloud-security', icon: 'cloud-lightning' },
  { id: 'mobile-security', title: 'MOBILE SECURITY', domainSlug: 'mobile-security', icon: 'smartphone' },
  { id: 'wireless-security', title: 'WIRELESS SECURITY', domainSlug: 'wireless-security', icon: 'wifi' },
  { id: 'iot-security', title: 'IoT SECURITY', domainSlug: 'iot-security', icon: 'radio' },
  { id: 'devsecops', title: 'DEVSECOPS', domainSlug: 'devsecops', icon: 'git-branch' },
  { id: 'ctf', title: 'CTF / PRACTICAL SECURITY', domainSlug: 'ctf-practical-security', icon: 'trophy' }
];

export const LEARNING_DOMAINS = [
  {
    id: 'cybersecurity-fundamentals',
    slug: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Core concepts of information security, CIA triad, threat models, security architecture, and ethics.',
    icon: 'shield',
    difficulty: 'Beginner',
    modulesCount: 4,
    estimatedTime: '6 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'network-security',
    slug: 'network-security',
    title: 'Networking & Network Security',
    description: 'OSI model, TCP/IP, packet analysis with Wireshark, firewalls, IDS/IPS, VPNs, and network architecture.',
    icon: 'network',
    difficulty: 'Beginner to Advanced',
    modulesCount: 6,
    estimatedTime: '14 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'linux-security',
    slug: 'linux-security',
    title: 'Linux & System Security',
    description: 'Linux CLI mastery, permissions, process isolation, hardening, system logging, and privilege escalation basics.',
    icon: 'terminal',
    difficulty: 'Beginner to Intermediate',
    modulesCount: 5,
    estimatedTime: '10 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'web-security',
    slug: 'web-security',
    title: 'Web Security',
    description: 'HTTP/HTTPS protocols, OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR), Burp Suite, and API security.',
    icon: 'globe',
    difficulty: 'Beginner to Advanced',
    modulesCount: 6,
    estimatedTime: '16 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'cryptography',
    slug: 'cryptography',
    title: 'Cryptography',
    description: 'Symmetric & asymmetric encryption (AES, RSA, ECC), hash functions (SHA-256), TLS/SSL, PKI, and HMAC.',
    icon: 'key-round',
    difficulty: 'Intermediate',
    modulesCount: 5,
    estimatedTime: '12 Hours',
    badgeColor: 'cyber-badge-purple'
  },
  {
    id: 'digital-forensics',
    slug: 'digital-forensics',
    title: 'Digital Forensics',
    description: 'Memory dumps, disk analysis, timeline creation, PCAP network forensics, Volatility, and Autopsy.',
    icon: 'file-search',
    difficulty: 'Intermediate',
    modulesCount: 5,
    estimatedTime: '11 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'osint',
    slug: 'osint',
    title: 'OSINT (Open Source Intelligence)',
    description: 'Reconnaissance methodology, domain enumeration, metadata analysis, search operators, and threat intelligence.',
    icon: 'search',
    difficulty: 'Beginner',
    modulesCount: 4,
    estimatedTime: '7 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'ethical-hacking',
    slug: 'ethical-hacking',
    title: 'Ethical Hacking',
    description: 'Methodologies, scope of engagement, foot-printing, scanning, exploitation principles, and reporting.',
    icon: 'zap',
    difficulty: 'Intermediate',
    modulesCount: 5,
    estimatedTime: '12 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'vulnerability-assessment',
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    description: 'Asset discovery, CVE databases, CVSS scoring, automated scanning, and vulnerability prioritization.',
    icon: 'search-code',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '8 Hours',
    badgeColor: 'cyber-badge-purple'
  },
  {
    id: 'penetration-testing',
    slug: 'penetration-testing',
    title: 'Penetration Testing Concepts',
    description: 'Rules of engagement, PTES framework, post-exploitation, pivoting, lateral movement, and remediation.',
    icon: 'target',
    difficulty: 'Advanced',
    modulesCount: 5,
    estimatedTime: '15 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'reverse-engineering',
    slug: 'reverse-engineering',
    title: 'Reverse Engineering',
    description: 'x86/x64 assembly, Ghidra decompilation, GDB debugging, ELF/PE file structures, and anti-analysis evasion.',
    icon: 'cpu',
    difficulty: 'Advanced',
    modulesCount: 5,
    estimatedTime: '18 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'binary-exploitation',
    slug: 'binary-exploitation',
    title: 'Binary Exploitation',
    description: 'Stack buffer overflows, ROP chains, heap exploitation (tcache, fastbin), shellcoding, and ASLR/NX bypasses.',
    icon: 'binary',
    difficulty: 'Advanced',
    modulesCount: 5,
    estimatedTime: '20 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'malware-analysis',
    slug: 'malware-analysis',
    title: 'Malware Analysis',
    description: 'Static & dynamic analysis in isolated sandboxes, unpackers, behavior analysis, and IOC extraction.',
    icon: 'bug',
    difficulty: 'Advanced',
    modulesCount: 5,
    estimatedTime: '14 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'soc-security',
    slug: 'soc-security',
    title: 'Security Operations / SOC',
    description: 'SIEM platforms, log aggregation, rule writing (Sigma/YARA), threat hunting, and security monitoring.',
    icon: 'shield-alert',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '10 Hours',
    badgeColor: 'cyber-badge-purple'
  },
  {
    id: 'incident-response',
    slug: 'incident-response',
    title: 'Incident Response',
    description: 'NIST/SANS IR frameworks, containment, eradication, recovery, forensic evidence preservation, and post-mortems.',
    icon: 'siren',
    difficulty: 'Intermediate to Advanced',
    modulesCount: 4,
    estimatedTime: '9 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'cloud-security',
    slug: 'cloud-security',
    title: 'Cloud Security',
    description: 'AWS/Azure identity security, S3 bucket permissions, IAM policies, Kubernetes hardening, and cloud misconfigurations.',
    icon: 'cloud-lightning',
    difficulty: 'Intermediate',
    modulesCount: 5,
    estimatedTime: '12 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'mobile-security',
    slug: 'mobile-security',
    title: 'Mobile Security',
    description: 'Android APK decompilation with JADX, iOS binary analysis, Frida dynamic instrumentation, and OWASP Mobile Top 10.',
    icon: 'smartphone',
    difficulty: 'Intermediate to Advanced',
    modulesCount: 4,
    estimatedTime: '11 Hours',
    badgeColor: 'cyber-badge-purple'
  },
  {
    id: 'wireless-security',
    slug: 'wireless-security',
    title: 'Wireless Security',
    description: '802.11 standards, WPA2/WPA3 enterprise protocols, rogue AP detection, handshake captures, and BLE security.',
    icon: 'wifi',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '8 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'iot-security',
    slug: 'iot-security',
    title: 'IoT Security',
    description: 'Hardware interfaces (UART, JTAG), firmware extraction, embedded Linux security, and MQTT protocol security.',
    icon: 'radio',
    difficulty: 'Advanced',
    modulesCount: 4,
    estimatedTime: '13 Hours',
    badgeColor: 'cyber-badge-red'
  },
  {
    id: 'devsecops',
    slug: 'devsecops',
    title: 'DevSecOps',
    description: 'CI/CD pipeline security, SAST/DAST integration, secrets management, software supply chain security, and SCA.',
    icon: 'git-branch',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '10 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'iam-security',
    slug: 'iam-security',
    title: 'Identity & Access Management',
    description: 'Authentication protocols, SSO, SAML, OAuth 2.0, OpenID Connect, RBAC, ABAC, and privilege management.',
    icon: 'user-check',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '8 Hours',
    badgeColor: 'cyber-badge-purple'
  },
  {
    id: 'application-security',
    slug: 'application-security',
    title: 'Application Security',
    description: 'Secure coding practices, input validation, output encoding, threat modeling (STRIDE), and code reviews.',
    icon: 'code-2',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '10 Hours',
    badgeColor: 'cyber-badge-teal'
  },
  {
    id: 'security-automation',
    slug: 'security-automation',
    title: 'Security Automation',
    description: 'Python scripting for security, SOAR platforms, API automation, custom scapy script development.',
    icon: 'bot',
    difficulty: 'Intermediate',
    modulesCount: 4,
    estimatedTime: '9 Hours',
    badgeColor: 'cyber-badge-cyan'
  },
  {
    id: 'ctf-practical-security',
    slug: 'ctf-practical-security',
    title: 'CTF & Practical Security',
    description: 'Jeopardy & Attack-Defend strategies, gdb-pwndbg tricks, CyberChef recipes, flag formatting, and writeup techniques.',
    icon: 'trophy',
    difficulty: 'All Levels',
    modulesCount: 5,
    estimatedTime: '20 Hours',
    badgeColor: 'cyber-badge-cyan'
  }
];

// Reference Implementation Curricula
export const DOMAIN_CURRICULA = {
  'network-security': {
    domainId: 'network-security',
    title: 'Networking & Network Security',
    description: 'Comprehensive network fundamentals, protocol mechanics, packet inspection, firewalls, and traffic analysis.',
    levels: [
      {
        level: 1,
        levelTitle: 'LEVEL 1 — BEGINNER (FOUNDATIONS)',
        modules: [
          {
            id: 'net-mod-1',
            title: 'Networking Fundamentals & Architectures',
            lessons: [
              {
                id: 'net-les-1',
                title: 'What is Networking & Network Types (LAN, WAN, MAN)',
                shortExplanation: 'Computer networking connects independent computing systems to exchange data, resources, and services.',
                whyItMatters: 'Every cyber security attack, defense, or forensic investigation involves computer networks. Understanding topology and scale is the foundation of network defense.',
                howItWorks: 'Networks range from localized Local Area Networks (LANs) inside buildings using Ethernet or Wi-Fi, to Metropolitan Area Networks (MANs) spanning cities, and Wide Area Networks (WANs) such as the global Internet connecting Autonomous Systems (AS) via border gateways.',
                realWorldExample: 'In an enterprise environment, a company office runs a LAN. When an employee accesses a cloud database in another region, traffic travels over a encrypted WAN link through ISP gateways.',
                diagram: `[Workstation / Client] ---> (Local Switch - LAN) ---> [Edge Firewall/Router] ---> (Internet / WAN) ---> [Remote Server]`,
                commands: [
                  {
                    command: 'ip addr',
                    purpose: 'View IP addresses and network interface status on Linux.',
                    syntax: 'ip addr show [interface]',
                    example: 'ip addr show eth0',
                    expectedOutput: '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\n    inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0',
                    explanation: 'Displays the inet (IPv4) address 192.168.1.50 with subnet mask /24 (255.255.255.0) assigned to network interface eth0.',
                    safeContext: 'Run locally on your Linux terminal to check interface IP configuration.'
                  }
                ],
                tools: ['ip', 'ping', 'traceroute'],
                securityImplications: 'Misconfigured network boundaries can expose internal LAN services to public WAN access.',
                commonMistakes: 'Confusing public IP addresses with private IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).',
                interviewQuestions: [
                  {
                    q: 'What is the primary difference between a LAN and a WAN?',
                    shortAnswer: 'LAN covers a small local area (e.g., home/office) controlled by one org; WAN spans large geographic regions connected via public/private ISPs.',
                    tip: 'Mention speed differences, ownership control, and routing boundaries.'
                  }
                ],
                quickRevision: 'LAN = Local, WAN = Wide area internet connections. Check interface IPs with `ip addr`.',
                safeExercise: 'Open your terminal and run `ip addr` or `ipconfig` to identify your local IP address and interface name.'
              },
              {
                id: 'net-les-2',
                title: 'The OSI 7-Layer Model vs. TCP/IP Model',
                shortExplanation: 'Conceptual frameworks that standardize network communication functions into abstract layers.',
                whyItMatters: 'Security controls (firewalls, IDS, proxies) and attack vectors operate at specific layers of the OSI model.',
                howItWorks: 'The OSI model has 7 layers: 1-Physical, 2-Data Link (MAC), 3-Network (IP), 4-Transport (TCP/UDP), 5-Session, 6-Presentation, 7-Application (HTTP/DNS). As data travels down the stack, each layer adds headers (Encapsulation). As it receives, headers are stripped (Decapsulation).',
                realWorldExample: 'A Layer 3/4 firewall filters packets based on IP addresses and TCP/UDP ports, whereas a Layer 7 Web Application Firewall (WAF) inspects HTTP request payloads for SQL injection.',
                diagram: `OSI MODEL                 TCP/IP MODEL
7. Application    \     
6. Presentation    }--->  Application (HTTP, DNS, SSH)
5. Session        /
4. Transport      ---->  Transport (TCP, UDP)
3. Network        ---->  Internet (IP, ICMP)
2. Data Link      \____  Network Interface (Ethernet, Wi-Fi)
1. Physical       /`,
                commands: [
                  {
                    command: 'ss -tulpn',
                    purpose: 'Display listening sockets and ports (Layer 4 Transport Layer).',
                    syntax: 'ss -tulpn',
                    example: 'ss -tulpn',
                    expectedOutput: 'Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process\nudp   UNCONN 0      0      0.0.0.0:53          0.0.0.0:*     users:(("systemd-resolved",pid=612,fd=13))\ntcp   LISTEN 0      128    0.0.0.0:22          0.0.0.0:*     users:(("sshd",pid=890,fd=3))',
                    explanation: 'Lists listening UDP port 53 (DNS) and TCP port 22 (SSH) along with process names.',
                    safeContext: 'Safe command to inspect what services are listening locally on your system.'
                  }
                ],
                tools: ['ss', 'netstat', 'Wireshark'],
                securityImplications: 'Attackers target different layers: Layer 2 ARP spoofing, Layer 3/4 SYN floods, Layer 7 HTTP flood DDoS.',
                commonMistakes: 'Thinking HTTPS encrypts Layer 3 IP headers. HTTPS only encrypts Layer 7 application data!',
                interviewQuestions: [
                  {
                    q: 'At which OSI layer does a standard packet filtering firewall operate?',
                    shortAnswer: 'Layer 3 (Network - IP addresses) and Layer 4 (Transport - TCP/UDP ports).',
                    tip: 'Differentiate between network firewalls (L3/L4) and WAFs (L7).'
                  }
                ],
                quickRevision: 'OSI = 7 Layers (APSTNDP). TCP/IP = 4 Layers. Encapsulation adds headers downwards.',
                safeExercise: 'Execute `ss -tulpn` on Linux or `netstat -ano` on Windows to view active listening ports.'
              }
            ]
          }
        ]
      },
      {
        level: 2,
        levelTitle: 'LEVEL 2 — INTERMEDIATE (NETWORK PROTOCOLS & CONCEPTS)',
        modules: [
          {
            id: 'net-mod-2',
            title: 'Core Protocols (DNS, ARP, DHCP, HTTP, SSH)',
            lessons: [
              {
                id: 'net-les-3',
                title: 'DNS Mechanics, Resolution & Security (DNSSEC)',
                shortExplanation: 'The Domain Name System (DNS) translates human-readable domain names (e.g. nith.ac.in) into IP addresses.',
                whyItMatters: 'DNS is critical infrastructure. DNS spoofing, cache poisoning, and DNS tunneling are major attack techniques.',
                howItWorks: 'When you request a domain, the local OS checks cache, then queries the Recursive Resolver -> Root Server (.) -> TLD Server (.ac.in) -> Authoritative Nameserver.',
                realWorldExample: 'Attackers perform DNS Hijacking by redirecting authoritative domain records to malicious phishing IPs.',
                diagram: `[Client] ---> (1. Query) ---> [Recursive Resolver]
                                    |---> (2. Query .) ---> [Root DNS]
                                    |---> (3. Query .ac.in) ---> [TLD DNS]
                                    |---> (4. Query nith.ac.in) ---> [Authoritative DNS]`,
                commands: [
                  {
                    command: 'dig +trace nith.ac.in',
                    purpose: 'Perform a full iterative DNS resolution trace.',
                    syntax: 'dig +trace [domain]',
                    example: 'dig +trace nith.ac.in',
                    expectedOutput: 'nith.ac.in. 300 IN A 14.139.221.6',
                    explanation: 'Shows step-by-step query from root servers down to the authoritative answer.',
                    safeContext: 'Safe diagnostic tool to test domain resolution.'
                  }
                ],
                tools: ['dig', 'nslookup', 'Wireshark'],
                securityImplications: 'Unencrypted DNS (UDP 53) allows ISPs and attackers on public Wi-Fi to log every website domain you visit. DoH (DNS over HTTPS) mitigates this.',
                commonMistakes: 'Assuming DNS queries are encrypted by default.',
                interviewQuestions: [
                  {
                    q: 'Explain DNS Cache Poisoning.',
                    shortAnswer: 'An attacker injects forged DNS responses into a resolver cache, redirecting users to malicious IPs before the real server responds.',
                    tip: 'Mention transaction ID matching and DNSSEC signatures.'
                  }
                ],
                quickRevision: 'DNS runs on UDP/TCP port 53. `dig` is the primary CLI tool for DNS queries.',
                safeExercise: 'Run `dig nith.ac.in ANY` in terminal to inspect DNS records.'
              }
            ]
          }
        ]
      },
      {
        level: 3,
        levelTitle: 'LEVEL 3 — ADVANCED (NETWORK DEFENSE & TOOLS)',
        modules: [
          {
            id: 'net-mod-3',
            title: 'Packet Analysis with Wireshark & tcpdump',
            lessons: [
              {
                id: 'net-les-4',
                title: 'Capture & Analyze Traffic using tcpdump and Wireshark',
                shortExplanation: 'Packet inspection captures raw network frames to analyze protocols, debug issues, and detect intrusions.',
                whyItMatters: 'Packet analysis is mandatory for Threat Hunting, Incident Response, and Security Audits.',
                howItWorks: 'Network interface cards (NICs) placed in promiscuous mode pass all captured frames on the wire to capture libraries (libpcap/npcap) for dissection.',
                realWorldExample: 'Analyzing a PCAP file to detect cleartext password transmission over FTP or unencrypted HTTP.',
                diagram: `[Network Wire] ===(Promiscuous Mode NIC)===> [libpcap / tcpdump] ===> [.pcap File] ===> [Wireshark Dissector]`,
                commands: [
                  {
                    command: 'tcpdump -i eth0 -n "port 80 or port 443" -w capture.pcap',
                    purpose: 'Capture web traffic on interface eth0 and write raw packets to file.',
                    syntax: 'tcpdump -i [interface] [filter] -w [filename]',
                    example: 'tcpdump -i eth0 -n "tcp port 80" -c 10',
                    expectedOutput: '17:18:02.123456 IP 192.168.1.50.49152 > 104.21.5.10.80: Flags [S], seq 123456789',
                    explanation: 'Captures 10 TCP packets on port 80 displaying IP addresses, port numbers, TCP SYN flags [S], and sequence numbers.',
                    safeContext: 'Only capture traffic on interfaces you own or have permission to monitor.'
                  }
                ],
                tools: ['tcpdump', 'Wireshark', 'tshark'],
                securityImplications: 'Cleartext protocols (HTTP, Telnet, FTP) leak credentials to anyone running a packet sniffer on the local LAN segment.',
                commonMistakes: 'Running packet captures on high-speed 10Gbps links without BPF (Berkeley Packet Filters), causing packet drops.',
                interviewQuestions: [
                  {
                    q: 'What display filter in Wireshark finds all HTTP POST requests containing data?',
                    shortAnswer: '`http.request.method == "POST"`',
                    tip: 'Know basic BPF and Wireshark display filter syntax.'
                  }
                ],
                quickRevision: 'tcpdump = CLI packet capture. Wireshark = GUI analysis. BPF filters optimize captures.',
                safeExercise: 'Run `tcpdump -i any -c 5 icmp` in terminal, then open another terminal and run `ping 8.8.8.8` to observe ICMP packets.'
              }
            ]
          }
        ]
      }
    ]
  },
  'web-security': {
    domainId: 'web-security',
    title: 'Web Security',
    description: 'Web applications, HTTP protocols, authentication, OWASP Top 10 vulnerabilities, and security auditing.',
    levels: [
      {
        level: 1,
        levelTitle: 'LEVEL 1 — BEGINNER (WEB FUNDAMENTALS)',
        modules: [
          {
            id: 'web-mod-1',
            title: 'HTTP Protocol, Headers, Cookies & Sessions',
            lessons: [
              {
                id: 'web-les-1',
                title: 'HTTP Request & Response Cycle, Verbs & Headers',
                shortExplanation: 'HTTP is a stateless application-layer protocol for transmitting hypermedia documents across client and server.',
                whyItMatters: 'Web security vulnerabilities stem from improper handling of client-controlled HTTP inputs on the server side.',
                howItWorks: 'The client sends an HTTP Request (GET, POST, PUT, DELETE) containing URL, Headers, and Body. The server processes it and returns an HTTP Response with status code (200, 404, 500), headers, and payload.',
                realWorldExample: 'Manipulating HTTP Headers like `User-Agent` or `X-Forwarded-For` to bypass IP-based access controls.',
                diagram: `[Browser Client] --- HTTP GET /index.html ---> [Web Server]
[Browser Client] <--- 200 OK (HTML Payload) --- [Web Server]`,
                commands: [
                  {
                    command: 'curl -i -X GET https://shield-nith.ac.in',
                    purpose: 'Fetch web page with HTTP response headers included.',
                    syntax: 'curl -i [URL]',
                    example: 'curl -i https://shield-nith.ac.in',
                    expectedOutput: 'HTTP/2 200\ncontent-type: text/html; charset=UTF-8\nserver: nginx\nstrict-transport-security: max-age=31536000',
                    explanation: 'Shows HTTP response headers including Strict-Transport-Security (HSTS).',
                    safeContext: 'Standard HTTP client diagnostic tool.'
                  }
                ],
                tools: ['curl', 'Browser DevTools', 'Burp Suite'],
                securityImplications: 'Security headers like CSP, HSTS, X-Frame-Options protect browsers against XSS and clickjacking.',
                commonMistakes: 'Trusting any client-side header value on the server without validation.',
                interviewQuestions: [
                  {
                    q: 'What is the difference between HTTP GET and POST requests?',
                    shortAnswer: 'GET requests data in URL parameters (visible, cached); POST submits data in the request body (not cached, suitable for sensitive data).',
                    tip: 'Never send passwords or sensitive tokens via GET parameters.'
                  }
                ],
                quickRevision: 'HTTP is stateless. `curl -v` provides full verbosity of headers.',
                safeExercise: 'Open Chrome/Firefox DevTools (F12) -> Network tab and observe request headers when reloading a web page.'
              }
            ]
          }
        ]
      },
      {
        level: 2,
        levelTitle: 'LEVEL 2 — INTERMEDIATE (OWASP VULNERABILITIES)',
        modules: [
          {
            id: 'web-mod-2',
            title: 'Injection Attacks (SQLi, Command Injection)',
            lessons: [
              {
                id: 'web-les-2',
                title: 'SQL Injection (SQLi) - Principles & Mitigation',
                shortExplanation: 'SQLi occurs when untrusted user input is directly concatenated into dynamic SQL queries without parameterization.',
                whyItMatters: 'SQLi can lead to complete database dump, authentication bypass, data tampering, and remote code execution (RCE).',
                howItWorks: "An attacker inputs payload like ' OR '1'='1 which modifies query logic: SELECT * FROM users WHERE user='' OR '1'='1' AND pass=''.",
                realWorldExample: "Bypassing login screens by entering ' OR 1=1 -- into username input fields.",
                diagram: `[User Input: ' OR 1=1 --] ===> [Vulnerable Query Concatenation] ===> Database Executes: TRUE ===> Auth Bypassed!`,
                commands: [
                  {
                    command: 'ffuf -w wordlist.txt -u http://127.0.0.1:8080/page?id=FUZZ',
                    purpose: 'Fuzz web parameters to discover injection anomalies.',
                    syntax: 'ffuf -w [wordlist] -u [URL]',
                    example: 'ffuf -w sqli.txt -u http://localhost:3000/api?q=FUZZ',
                    expectedOutput: '200 OK payload: 1\' OR 1=1',
                    explanation: 'Substitutes wordlist items into FUZZ placeholder to discover vulnerable endpoints.',
                    safeContext: 'Only run fuzzers on authorized local lab targets.'
                  }
                ],
                tools: ['Burp Suite', 'sqlmap', 'ffuf'],
                securityImplications: 'Always use Prepared Statements (Parameterized Queries) or ORMs to eliminate SQLi risks entirely.',
                commonMistakes: 'Trying to prevent SQLi using input blacklists (e.g. stripping SELECT or UNION) instead of parameterized queries.',
                interviewQuestions: [
                  {
                    q: 'How do Prepared Statements prevent SQL Injection?',
                    shortAnswer: 'They separate query code from user data. The database compiles the SQL template first, treating user input strictly as literal parameter values.',
                    tip: 'Emphasize that user input can never alter query logic in parameterized queries.'
                  }
                ],
                quickRevision: 'SQLi = Unsafe concatenation of input in queries. Solution = Parameterized Queries.',
                safeExercise: 'Set up OWASP Juice Shop in Docker (`docker run -p 3000:3000 bkimminich/juice-shop`) and solve the initial SQLi login challenge.'
              }
            ]
          }
        ]
      }
    ]
  },
  'cryptography': {
    domainId: 'cryptography',
    title: 'Cryptography',
    description: 'Mathematics of secrets, symmetric/asymmetric ciphers, hashing, MACs, and public key infrastructure.',
    levels: [
      {
        level: 1,
        levelTitle: 'LEVEL 1 — BEGINNER (CRYPTO ESSENTIALS)',
        modules: [
          {
            id: 'cry-mod-1',
            title: 'Symmetric & Asymmetric Encryption, Hashes',
            lessons: [
              {
                id: 'cry-les-1',
                title: 'Symmetric Encryption vs. Asymmetric Cryptography',
                shortExplanation: 'Symmetric crypto uses a single shared secret key for encryption & decryption. Asymmetric uses public/private key pairs.',
                whyItMatters: 'Symmetric encryption (AES-256) is fast and protects bulk data. Asymmetric (RSA/ECC) solves key exchange and identity authentication.',
                howItWorks: 'In RSA, Alice encrypts with Bob\'s Public Key. Only Bob\'s Private Key can decrypt it. In AES, both parties must securely share the key beforehand.',
                realWorldExample: 'TLS handshakes use asymmetric ECC Diffie-Hellman to exchange a session key, then switch to symmetric AES-GCM for fast data transfer.',
                diagram: `SYMMETRIC:   Plaintext + SecretKey ===> Ciphertext ===> Ciphertext + SecretKey ===> Plaintext
ASYMMETRIC:  Plaintext + BobPublicKey ===> Ciphertext ===> Ciphertext + BobPrivateKey ===> Plaintext`,
                commands: [
                  {
                    command: 'openssl rand -hex 16',
                    purpose: 'Generate a cryptographically secure 128-bit random hex key.',
                    syntax: 'openssl rand -hex [num_bytes]',
                    example: 'openssl rand -hex 16',
                    expectedOutput: '4f2e8a10b99c73d5e21f00a98b4712ce',
                    explanation: 'Uses OS CSPRNG source (/dev/urandom) to generate 16 random bytes.',
                    safeContext: 'Safe utility for key generation.'
                  }
                ],
                tools: ['openssl', 'CyberChef'],
                securityImplications: 'Hardcoding encryption keys in source code leads to full system compromise.',
                commonMistakes: 'Using ECB mode in AES which preserves pattern structures in ciphertext.',
                interviewQuestions: [
                  {
                    q: 'What is the main advantage of Asymmetric cryptography over Symmetric cryptography?',
                    shortAnswer: 'It solves key distribution; parties can communicate securely without sharing secret keys in advance.',
                    tip: 'Note that symmetric encryption is significantly faster.'
                  }
                ],
                quickRevision: 'Symmetric = 1 Shared Key (AES). Asymmetric = Key Pair (RSA/ECC).',
                safeExercise: 'Run `openssl dgst -sha256 myfile.txt` to calculate SHA-256 checksum of a file.'
              }
            ]
          }
        ]
      }
    ]
  }
};

// Generic Fallback Generator for other domains so every domain is functional out of the box
export function getDomainCurriculum(domainSlug) {
  if (DOMAIN_CURRICULA[domainSlug]) {
    return DOMAIN_CURRICULA[domainSlug];
  }

  const domainObj = LEARNING_DOMAINS.find(d => d.slug === domainSlug) || {
    id: domainSlug,
    title: domainSlug.replace(/-/g, ' ').toUpperCase(),
    description: 'Structured educational curriculum covering key concepts, tools, and practical exercises.'
  };

  return {
    domainId: domainSlug,
    title: domainObj.title,
    description: domainObj.description,
    levels: [
      {
        level: 1,
        levelTitle: 'LEVEL 1 — BEGINNER (FOUNDATIONS)',
        modules: [
          {
            id: `${domainSlug}-mod-1`,
            title: `${domainObj.title} Fundamentals & Core Principles`,
            lessons: [
              {
                id: `${domainSlug}-les-1`,
                title: `Introduction to ${domainObj.title}`,
                shortExplanation: `Essential concepts and operational principles of ${domainObj.title}.`,
                whyItMatters: `Understanding ${domainObj.title} is essential for building defensive resilience and identifying vulnerabilities.`,
                howItWorks: `Core workflows and technical mechanisms that govern ${domainObj.title} systems.`,
                realWorldExample: `Practical industry applications and threat models encountered in ${domainObj.title}.`,
                diagram: `[Client / User] ===> (${domainObj.title} Control Boundary) ===> [Protected Target System]`,
                commands: [
                  {
                    command: `echo "Learning ${domainObj.title}"`,
                    purpose: 'Demonstrate terminal execution context.',
                    syntax: 'echo [text]',
                    example: `echo "Studying ${domainObj.title} at SHIELD NITH"`,
                    expectedOutput: `Studying ${domainObj.title} at SHIELD NITH`,
                    explanation: 'Prints formatted text to stdout.',
                    safeContext: 'Safe shell command.'
                  }
                ],
                tools: ['Wireshark', 'Nmap', 'Linux CLI'],
                securityImplications: 'Lack of defensive hardening and monitoring creates high-risk exposure points.',
                commonMistakes: 'Ignoring default configurations and failing to audit system access logs.',
                interviewQuestions: [
                  {
                    q: `What is the core security objective in ${domainObj.title}?`,
                    shortAnswer: 'Maintaining Confidentiality, Integrity, and Availability while enforcing least privilege.',
                    tip: 'Always align technical answers with core security frameworks.'
                  }
                ],
                quickRevision: `Review core ${domainObj.title} concepts and CLI diagnostic commands.`,
                safeExercise: `Set up a local test environment or lab to practice ${domainObj.title} exercises.`
              }
            ]
          }
        ]
      },
      {
        level: 2,
        levelTitle: 'LEVEL 2 — INTERMEDIATE (PRACTICAL APPLICATIONS)',
        modules: [
          {
            id: `${domainSlug}-mod-2`,
            title: `Advanced ${domainObj.title} Techniques`,
            lessons: [
              {
                id: `${domainSlug}-les-2`,
                title: `Practical Tools & Hardening for ${domainObj.title}`,
                shortExplanation: `Hands-on tools, diagnostics, and defensive controls for ${domainObj.title}.`,
                whyItMatters: 'Translates theoretical concepts into active defense and vulnerability auditing.',
                howItWorks: 'Utilizing specialized security utilities to audit system state and enforce security baselines.',
                realWorldExample: 'Auditing system configurations against CIS Benchmarks.',
                diagram: `[Audit Scanner] ---> (Rule Set Check) ---> [Target Config] ---> [Compliance Report]`,
                commands: [
                  {
                    command: 'uname -a',
                    purpose: 'Check operating system release and kernel details.',
                    syntax: 'uname -a',
                    example: 'uname -a',
                    expectedOutput: 'Linux nith-cyber 6.8.0-generic #1 SMP x86_64',
                    explanation: 'Outputs system kernel architecture and build date.',
                    safeContext: 'Standard diagnostic command.'
                  }
                ],
                tools: ['Ghidra', 'Burp Suite', 'curl'],
                securityImplications: 'Regular security assessments prevent security regression in production.',
                commonMistakes: 'Running scans without defining scope or authorizing targets.',
                interviewQuestions: [
                  {
                    q: 'How do you prioritize remediation for identified vulnerabilities?',
                    shortAnswer: 'Using CVSS scores combined with asset criticality, exploit availability, and exposure level.',
                    tip: 'Highlight risk-based decision making.'
                  }
                ],
                quickRevision: 'Combine automated tools with manual verification for effective security assessment.',
                safeExercise: 'Perform an inventory of active services on your local machine using CLI tools.'
              }
            ]
          }
        ]
      }
    ]
  };
}

// Commands Reference Data
export const COMMAND_REFERENCES = [
  {
    category: 'Linux & Systems',
    commands: [
      {
        command: 'ls -la',
        purpose: 'List all directory contents including hidden files with long format details.',
        syntax: 'ls [options] [path]',
        example: 'ls -la /var/log',
        expectedOutput: 'drwxr-xr-x  2 root root 4096 Sep 12 10:00 .\n-rw-r-----  1 root adm  12450 Sep 12 10:05 auth.log',
        explanation: 'Displays file permissions, owner, group, size, modification date, and filename including dotfiles.',
        safeContext: 'Safe read-only command.'
      },
      {
        command: 'grep -rnI "password" .',
        purpose: 'Recursively search directory for literal text matching "password", ignoring binary files.',
        syntax: 'grep [options] "pattern" [path]',
        example: 'grep -rnI "SECRET_KEY" ./src',
        expectedOutput: './src/config.js:14:const SECRET_KEY = "env_var_placeholder";',
        explanation: 'Scans text files recursively line-by-line and prints filename with line numbers.',
        safeContext: 'Useful for auditing local source code for hardcoded secrets.'
      },
      {
        command: 'chmod 600 id_rsa',
        purpose: 'Set strict read/write permissions for file owner only (SSH private key security requirement).',
        syntax: 'chmod [octal_mode] [file]',
        example: 'chmod 600 ~/.ssh/id_rsa',
        expectedOutput: 'Permissions updated: -rw-------',
        explanation: 'Octal 600 grants owner read (4) + write (2), revoking all access for group and others.',
        safeContext: 'Essential for securing SSH keys on Linux.'
      }
    ]
  },
  {
    category: 'Networking',
    commands: [
      {
        command: 'ip route',
        purpose: 'Display kernel IP routing table.',
        syntax: 'ip route',
        example: 'ip route',
        expectedOutput: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.50',
        explanation: 'Shows default gateway router IP (192.168.1.1) and active local network interface.',
        safeContext: 'Safe network diagnostic command.'
      },
      {
        command: 'nmap -sV -sC -p 22,80,443 127.0.0.1',
        purpose: 'Scan localhost for open ports 22, 80, 443 with service version detection and default safe scripts.',
        syntax: 'nmap [flags] [target]',
        example: 'nmap -sV -p 80 localhost',
        expectedOutput: 'PORT   STATE SERVICE VERSION\n80/tcp open  http    nginx 1.18.0',
        explanation: 'Probes TCP ports on localhost to discover active web server software version.',
        safeContext: 'Only scan localhost or explicitly authorized systems.'
      }
    ]
  }
];

// Tools Directory Data
export const SECURITY_TOOLS = [
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Network Inspection',
    description: 'The world\'s foremost network protocol analyzer for deep-packet inspection.',
    whySecurityProsUseIt: 'Allows security analysts to capture and interactively browse network traffic running on computer networks.',
    installation: 'sudo apt-get install wireshark',
    basicUsage: 'wireshark -i eth0',
    importantCommands: ['tshark -i eth0 -w dump.pcap', 'tshark -r dump.pcap -Y "http"'],
    safeLabExample: 'Capture local loopback traffic while running `curl http://localhost:3000` to analyze HTTP headers.',
    docUrl: 'https://www.wireshark.org/docs/'
  },
  {
    id: 'nmap',
    name: 'Nmap (Network Mapper)',
    category: 'Reconnaissance & Auditing',
    description: 'Open-source utility for network discovery, port scanning, and vulnerability auditing.',
    whySecurityProsUseIt: 'Discovers hosts on networks, open ports, running services, OS versions, and firewall configurations.',
    installation: 'sudo apt-get install nmap',
    basicUsage: 'nmap -sV -F localhost',
    importantCommands: ['nmap -sS -p- 127.0.0.1', 'nmap -sU --top-ports 20 127.0.0.1'],
    safeLabExample: 'Audit your local web server port configuration using `nmap -sV -p 80,443 127.0.0.1`.',
    docUrl: 'https://nmap.org/book/man.html'
  },
  {
    id: 'burpsuite',
    name: 'Burp Suite',
    category: 'Web Security Testing',
    description: 'Leading graphical tool for testing web application security and intercepting HTTP traffic.',
    whySecurityProsUseIt: 'Acts as a local proxy between browser and web server, allowing researchers to modify HTTP requests on the fly.',
    installation: 'Download Community Edition installer from PortSwigger.',
    basicUsage: 'Set browser proxy to 127.0.0.1:8080 and navigate target web app.',
    importantCommands: ['Proxy Intercept ON', 'Send request to Repeater (Ctrl+R)'],
    safeLabExample: 'Intercept login request to local OWASP Juice Shop lab to inspect form fields.',
    docUrl: 'https://portswigger.net/burp/documentation'
  },
  {
    id: 'ghidra',
    name: 'Ghidra',
    category: 'Reverse Engineering',
    description: 'Software reverse engineering (SRE) framework developed by NSA Research Directorate.',
    whySecurityProsUseIt: 'Decompiles binary executables into C-like pseudocode for malware analysis and binary auditing.',
    installation: 'Download ZIP release from ghidra-sre.org and run ./ghidraRun',
    basicUsage: './ghidraRun',
    importantCommands: ['Import File (I)', 'Analyze (Auto Analysis)', 'Decompile Window (Ctrl+E)'],
    safeLabExample: 'Decompile a simple C binary compiled locally to observe main() decompilation.',
    docUrl: 'https://ghidra-sre.org/'
  }
];

// Glossary Data
export const GLOSSARY_ITEMS = [
  { term: 'CIA Triad', category: 'Fundamentals', definition: 'The core security model consisting of Confidentiality (privacy), Integrity (trustworthiness), and Availability (accessibility).' },
  { term: 'TCP', category: 'Networking', definition: 'Transmission Control Protocol. Connection-oriented, reliable transport protocol with 3-way handshake.' },
  { term: 'UDP', category: 'Networking', definition: 'User Datagram Protocol. Connectionless, lightweight transport protocol without guaranteed delivery.' },
  { term: 'DNS', category: 'Networking', definition: 'Domain Name System. Distributed database translating hostnames to IP addresses.' },
  { term: 'TLS', category: 'Cryptography', definition: 'Transport Layer Security. Cryptographic protocol designed to provide privacy and data integrity over networks.' },
  { term: 'XSS', category: 'Web Security', definition: 'Cross-Site Scripting. Vulnerability allowing attackers to inject malicious scripts into trusted websites viewed by users.' },
  { term: 'SQLi', category: 'Web Security', definition: 'SQL Injection. Vulnerability where untrusted user input alters database SQL query logic.' },
  { term: 'CSRF', category: 'Web Security', definition: 'Cross-Site Request Forgery. Attack forcing an authenticated end user to execute unwanted actions on a web app.' },
  { term: 'JWT', category: 'Authentication', definition: 'JSON Web Token. Compact, URL-safe means of representing claims to be transferred between two parties.' },
  { term: 'CVE', category: 'Vulnerabilities', definition: 'Common Vulnerabilities and Exposures. Standardized public dictionary of known security flaws.' },
  { term: 'CVSS', category: 'Vulnerabilities', definition: 'Common Vulnerability Scoring System. Standard framework for rating vulnerability severity from 0.0 to 10.0.' },
  { term: 'SIEM', category: 'SOC & Defense', definition: 'Security Information and Event Management. Software aggregating security logs for analysis and alert detection.' }
];

// Cheatsheet Data
export const CHEATSHEET_ITEMS = [
  {
    id: 'cs-linux',
    title: 'Linux Security & CLI Cheatsheet',
    category: 'Linux',
    content: `
# Linux File Permissions
chmod 700 file.txt  # Owner read/write/execute only
chmod 644 file.txt  # Owner rw, Group/Others r
chown user:group file.txt

# File Searching & Auditing
find / -name "*.conf" 2>/dev/null  # Search config files suppressing errors
grep -rnI "API_KEY" /etc/           # Recursive text search
lsof -i :80                         # View process using port 80

# Process & Service Inspection
ps aux | grep nginx                 # List processes matching pattern
systemctl status sshd               # Check SSH service status
journalctl -u sshd -n 50 --no-pager # View last 50 SSH service logs
    `
  },
  {
    id: 'cs-network',
    title: 'Networking & Nmap Quick Reference',
    category: 'Networking',
    content: `
# Network Interface Diagnostics
ip addr show                        # Display interface IPs
ip route                            # View default gateway and routing table
ss -tulpn                           # List listening TCP/UDP ports with PIDs

# Nmap Scanning Recipes
nmap -sV -sC 127.0.0.1              # Version & default script scan on localhost
nmap -sn 192.168.1.0/24             # Ping sweep subnet discovery
nmap -p- --min-rate 1000 127.0.0.1  # Fast scan all 65535 ports on localhost
    `
  }
];
