import { LEARNING_DOMAINS, DOMAIN_CURRICULA } from './learningData.js';

// Formal Academic Units & Syllabus Structure (NIT Hamirpur / University Grade)
const ACADEMIC_UNITS_25 = [
  // UNIT I: Theoretical Foundations & System Architecture (01-05)
  { num: '01', unit: 'UNIT I', unitTitle: 'Theoretical Foundations & Overview', level: 'Beginner' },
  { num: '02', unit: 'UNIT I', unitTitle: 'System Architecture & Mathematical Abstractions', level: 'Beginner' },
  { num: '03', unit: 'UNIT I', unitTitle: 'Protocol Standards & State Machine Models', level: 'Beginner' },
  { num: '04', unit: 'UNIT I', unitTitle: 'Data Structures, Memory Layout & Syntax Specifications', level: 'Beginner' },
  { num: '05', unit: 'UNIT I', unitTitle: 'Academic Laboratory Environment & Toolchain Setup', level: 'Beginner' },

  // UNIT II: Protocol Mechanics & Mathematical Formulations (06-10)
  { num: '06', unit: 'UNIT II', unitTitle: 'Empirical CLI Diagnostics & Low-Level Inspection', level: 'Intermediate' },
  { num: '07', unit: 'UNIT II', unitTitle: 'Formal Threat Modeling (STRIDE, DREAD & MITRE ATT&CK)', level: 'Intermediate' },
  { num: '08', unit: 'UNIT II', unitTitle: 'Vulnerability Analysis & Surface Area Quantification', level: 'Intermediate' },
  { num: '09', unit: 'UNIT II', unitTitle: 'Reconnaissance Algorithms & OSINT Intelligence Gathering', level: 'Intermediate' },
  { num: '10', unit: 'UNIT II', unitTitle: 'Active Scanning & Port/Service State Enumeration', level: 'Intermediate' },

  // UNIT III: Threat Vectors, Vulnerabilities & Exploitation Mechanics (11-15)
  { num: '11', unit: 'UNIT III', unitTitle: 'Exploitation Mechanics & Memory Corruption Theory', level: 'Advanced' },
  { num: '12', unit: 'UNIT III', unitTitle: 'Post-Exploitation Analytics & Forensic Artifact Tracing', level: 'Advanced' },
  { num: '13', unit: 'UNIT III', unitTitle: 'Defensive Security Controls & Stateful Firewalls', level: 'Advanced' },
  { num: '14', unit: 'UNIT III', unitTitle: 'System Hardening, Least Privilege & Access Matrix', level: 'Advanced' },
  { num: '15', unit: 'UNIT III', unitTitle: 'Audit Logging, SIEM Rule Writing & Anomaly Detection', level: 'Advanced' },

  // UNIT IV: Applied Security Engineering, Cryptography & Standards (16-20)
  { num: '16', unit: 'UNIT IV', unitTitle: 'Incident Response Playbooks & Containment Protocols', level: 'Advanced' },
  { num: '17', level: 'Advanced', unit: 'UNIT IV', unitTitle: 'Cryptographic Formulations, Hash Functions & TLS 1.3' },
  { num: '18', unit: 'UNIT IV', unitTitle: 'Regulatory Compliance, NIST SP 800-53 & OWASP Frameworks', level: 'Advanced' },
  { num: '19', unit: 'UNIT IV', unitTitle: 'Advanced Evasion Analysis & Zero-Day Vulnerability Auditing', level: 'Advanced' },
  { num: '20', unit: 'UNIT IV', unitTitle: 'Empirical Case Study Analysis & Academic Vulnerability Audit', level: 'Advanced' },

  // UNIT V: Laboratory Practicum, Proofs & Capstone Assessment (21-25)
  { num: '21', unit: 'UNIT V', unitTitle: 'Code Security Auditing, Static Analysis & Common Pitfalls', level: 'Practical' },
  { num: '22', unit: 'UNIT V', unitTitle: 'Academic & Technical Interview Viva Questions', level: 'Practical' },
  { num: '23', unit: 'UNIT V', unitTitle: 'Laboratory Practicum I: System Reconnaissance & Packet Capture', level: 'Practical' },
  { num: '24', unit: 'UNIT V', unitTitle: 'Laboratory Practicum II: Exploit Verification & Remediation', level: 'Practical' },
  { num: '25', unit: 'UNIT V', unitTitle: 'Capstone Research Project & CTF Assessment Challenge', level: 'Challenge' }
];

export function generate25AcademicLessons(domain) {
  const domainName = domain.title;
  const slug = domain.slug || domain.id;

  return ACADEMIC_UNITS_25.map((t, idx) => {
    const lessonId = `${slug}-les-${t.num}`;
    return {
      id: lessonId,
      number: t.num,
      unit: t.unit,
      level: t.level,
      title: `${t.num}. ${t.unitTitle}`,
      courseTitle: domainName,
      academicReference: getAcademicReference(slug),
      learningObjectives: [
        `CLO 1: Formulate the theoretical principles governing ${t.unitTitle.toLowerCase()}.`,
        `CLO 2: Analyze packet traces, memory dumps, or log artifacts using empirical diagnostic tools.`,
        `CLO 3: Evaluate security risks and synthesize defensive controls per NIST / OWASP guidelines.`
      ],
      shortExplanation: `Academic lecture covering ${t.unitTitle.toLowerCase()} within the framework of ${domainName}. Includes mathematical formulations, state machine models, and empirical lab analysis.`,
      whyItMatters: `Essential for academic computer science research, security engineering, and rigorous vulnerability assessments in compliance with university curricula (NITH / IEEE / ACM standards).`,
      howItWorks: `1. **Formal Definition**: Examine system specifications and protocol state machines.\n2. **Mathematical Abstraction**: Apply quantitative models (e.g. Bandwidth-Delay Product, Shannon Entropy, RSA modular arithmetic).\n3. **Empirical Execution**: Run low-level diagnostic tools in isolated Linux sandbox environments.\n4. **Countermeasure Synthesis**: Implement firewall filtering rules, cryptographic signing, or memory isolation.`,
      mathFormulation: getMathFormulation(slug, idx),
      concepts: [
        { term: 'Formal Specification', desc: 'Mathematical and logical rules defining valid system behaviors.' },
        { term: 'State Machine Model', desc: 'Abstract machine representation of protocol transitions.' },
        { term: 'Threat Matrix', desc: 'Quantitative classification of potential attack vectors (STRIDE/DREAD).' },
        { term: 'Defensive Mitigation', desc: 'Algorithmic or architectural countermeasure to neutralize security flaws.' }
      ],
      realWorldExample: `Academic case study: Analyzing a vulnerability in ${t.unitTitle.toLowerCase()} to demonstrate how state machine deviations lead to security exploits and how formal verification mitigates them.`,
      diagram: `+-----------------------+        Formal Input Stream        +------------------------+
| Client / Investigator | ================================> | Edge Security Boundary |
+-----------------------+                                   +------------------------+
                                                                        |
                                                                        v
+-----------------------+       Validated Audit Logs       +------------------------+
| Central SIEM / Audits | <================================ | Target Service Engine  |
+-----------------------+                                   +------------------------+`,
      commands: [
        {
          command: idx % 2 === 0 ? `nmap -sV -p 80,443,22 127.0.0.1` : `ip addr show`,
          purpose: `Empirical Diagnostic Command for ${t.unitTitle}`,
          syntax: `tool [flags] [target_specification]`,
          example: `nmap -sV 127.0.0.1`,
          expectedOutput: `PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.9p1\n80/tcp open  http    nginx 1.18.0`,
          explanation: `Executes service inspection and state verification to validate active security boundaries.`,
          safeContext: 'Authorized academic laboratory test environment.'
        }
      ],
      securityImplications: `Violating formal state specifications in ${t.unitTitle.toLowerCase()} exposes system memory, unencrypted traffic, or unauthenticated API endpoints to remote attackers.`,
      commonMistakes: `Ignoring edge-case state transitions, failing to validate input lengths, or omitting cryptographic salt/nonce values.`,
      interviewQuestions: [
        {
          q: `Explain the academic significance of ${t.unitTitle}?`,
          shortAnswer: `It establishes the boundary between system functionality and security guarantees using formal state models and defense-in-depth principles.`,
          tip: 'Cite both theoretical principles (CIA triad, least privilege) and practical implementation details.'
        }
      ],
      labExercise: `Academic Assignment: Execute the diagnostic command, generate packet logs, and submit a formal lab report documenting interface state observations.`,
      ctfChallenge: `Lab Assessment Challenge: Identify the anomaly in the sandbox environment. Flag format: SHIELD{${slug}_${t.num}_academic_passed}`
    };
  });
}

function getAcademicReference(slug) {
  if (slug.includes('network')) {
    return 'Kurose & Ross: Computer Networking - A Top-Down Approach (8th Edition), Pearson Academic, Chapters 1-4.';
  } else if (slug.includes('web')) {
    return 'Stuttard & Pinto: The Web Application Hacker’s Handbook (2nd Edition), Wiley & Sons / OWASP Testing Guide v4.2.';
  } else if (slug.includes('crypto')) {
    return 'Stallings: Cryptography and Network Security - Principles and Practice (7th Edition), Pearson Academic, Chapters 3-10.';
  } else if (slug.includes('linux') || slug.includes('pwn') || slug.includes('binary')) {
    return 'Silberschatz, Galvin & Gagne: Operating System Concepts (10th Edition), Wiley / Erickson: Hacking - The Art of Exploitation (2nd Ed).';
  }
  return 'IEEE / ACM Curriculum Guidelines for Cybersecurity Degree Programs (CS2020), Academic Press.';
}

function getMathFormulation(slug, idx) {
  if (slug.includes('crypto')) {
    return `FORMAL MATHEMATICAL FORMULATION (RSA & Modular Arithmetic):
1. Key Generation: Select large primes p and q. Compute N = p * q, phi(N) = (p-1)(q-1).
2. Public Key: Select e such that gcd(e, phi(N)) = 1.
3. Private Key: Compute d = e^(-1) mod phi(N).
4. Encryption: Ciphertext C = M^e mod N. Decryption: Message M = C^d mod N.`;
  } else if (slug.includes('network')) {
    return `FORMAL MATHEMATICAL FORMULATION (Network Bandwidth & CIDR):
1. Subnet Host Allocation: H = 2^(32 - n) - 2 (where n is CIDR prefix length).
2. Bandwidth-Delay Product (BDP): BDP = Bandwidth (bits/sec) * Round-Trip Time (sec).
3. Packet Transmission Delay: D_trans = L / R (Packet length L bits / Transmission rate R bps).`;
  }
  return `FORMAL ACADEMIC FORMULATION (State Machine & Entropy):
1. Shannon Information Entropy: H(X) = - SUM( P(x_i) * log2(P(x_i)) )
2. Probability of System Collision: P_collision <= 1 / 2^(k/2) (Birthday Bound).
3. Access Control Matrix: A(u, r) = { read, write, execute } where u in Users, r in Resources.`;
}

export function getCourseData(courseSlug) {
  const domain = LEARNING_DOMAINS.find((d) => d.slug === courseSlug || d.id === courseSlug) || LEARNING_DOMAINS[0];
  const lessons = generate25AcademicLessons(domain);

  return {
    ...domain,
    textbook: getAcademicReference(domain.slug || domain.id),
    prerequisites: 'Computer Science Fundamentals (Data Structures, OS, Networking & Linear Algebra Basics)',
    lessonsCount: 25,
    lessons
  };
}

export function getAllCourses() {
  return LEARNING_DOMAINS.map((d) => ({
    ...d,
    courseSlug: d.slug || d.id
  }));
}
