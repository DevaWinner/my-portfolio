import instructionSet from "@/portfolio_instructions.json";

export interface ContactInfo {
  email: string;
  linkedin: string;
  phone: string;
  github: string;
  resumePath: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  headline: string;
  contact: ContactInfo;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType?: string;
  summary: string;
  outcomes: string[];
  responsibilities: string[];
  skills: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  name: string;
  role: string;
  period?: string;
  category: "Product" | "Client" | "Platform";
  status?: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  links?: ProjectLink[];
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  coursework: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  period: string;
  details: string[];
}

export interface ServiceItem {
  organization: string;
  role: string;
  period: string;
  details: string;
}

const source = instructionSet.portfolio_content;

function normalizeUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}

function formatSkillLabel(key: string) {
  const aliases: Record<string, string> = {
    backend_and_systems: "Backend and Systems",
    ai_ml_genai: "AI/ML and GenAI",
    tools_and_devops: "Tools and DevOps"
  };

  return aliases[key] ?? key.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

const resumeProjectLinks: Record<string, ProjectLink[]> = {
  "SOLE (Employee Stock Option Loan Platform)": [
    { label: "Frontend Repo", href: "https://github.com/Stock-Loan/sole-frontend" },
    { label: "Backend Repo", href: "https://github.com/Stock-Loan/sole-backend" }
  ],
  "Meditrina (Digital Health Platform)": [{ label: "Live Site", href: "https://meditrina.ng/" }],
  "Liahona Foundation Website": [{ label: "Live Site", href: "https://liahonafoundation.org/" }],
  "Inclusion Afrika Website": [{ label: "Live Site", href: "https://inclusionafrika.org/" }],
  "Engage App (Healthcare Workflow)": [{ label: "Live App", href: "https://engage.app.wellahealth.com/" }],
  "Expertato Meeting Rooms": [{ label: "Live Site", href: "https://expertato.com/meeting-rooms/" }]
};

const primaryExperience: ExperienceItem[] = [
  {
    id: "wellahealth",
    company: "Wellahealth Technologies",
    role: "Software Engineer",
    period: "Feb 2024 - Present",
    location: "Abuja, Nigeria (Remote)",
    summary:
      "Building healthcare and fintech products with a strong focus on reliability, offline capability, and measurable user outcomes.",
    outcomes: [
      "Improved user retention by 60%+ and conversion by 35% across Meditrina, Zoi, and Healthsend.",
      "Reduced release defects by establishing consistent CI/CD practices for the web stack.",
      "Enabled uninterrupted medical data capture through offline-first PWA workflows."
    ],
    responsibilities: [
      "Led development of PRESS, a mobile-first progressive web app using React, TypeScript, and Shadcn UI.",
      "Engineered Service Worker and caching strategy to preserve clinical workflows during network loss.",
      "Architected anti-fraud verification using ML image checks and EXIF metadata analysis.",
      "Built fintech functionality including wallet metrics, secure payouts, and integrated learning modules."
    ],
    skills: ["React", "TypeScript", "PWA", "Service Workers", "CI/CD", "Healthcare Product Engineering"]
  },
  {
    id: "openteams",
    company: "OpenTeams Inc",
    role: "Software Engineer",
    period: "May 2024 - Dec 2025",
    location: "Austin, Texas (Remote)",
    employmentType: "Progressed from Internship (Feb 2024 - April 2024)",
    summary:
      "Delivered production APIs and AI-assisted internal tooling, balancing system performance with developer productivity.",
    outcomes: [
      "Improved API reliability by 45% for production web applications.",
      "Reduced legacy API latency by 18% through targeted service optimization.",
      "Accelerated internal document and data workflows with RAG and SQL routing utilities."
    ],
    responsibilities: [
      "Shipped FastAPI and React applications for production use cases.",
      "Built internal RAG tools using Python, Ollama, and Chroma for semantic search.",
      "Developed a DuckDB-based SQL routing layer translating natural language prompts into parameterized SQL.",
      "Created reusable data access utilities to streamline team delivery."
    ],
    skills: ["FastAPI", "Python", "React", "DuckDB", "ChromaDB", "Ollama", "Performance Optimization"]
  },
  {
    id: "instantdata",
    company: "InstantData",
    role: "Software Engineer (Backend)",
    period: "Oct 2024 - Dec 2024",
    location: "United States (Remote)",
    employmentType: "Contract",
    summary:
      "Built backend foundations for secure medical records processing, centered on compliance, reliability, and maintainable API design.",
    outcomes: [
      "Established a robust backend architecture for ingesting and processing hospital and medical records.",
      "Designed storage and retrieval flows for high-confidence access by healthcare professionals.",
      "Implemented compliance-first practices aligned with HIPAA-style data protection expectations."
    ],
    responsibilities: [
      "Collaborated with multidisciplinary teams to define requirements and backend architecture.",
      "Developed scalable Python backend functionality for data processing and secure access.",
      "Implemented efficient database patterns for reliable retrieval and structured record organization.",
      "Performed rigorous testing and debugging to ensure API stability and correctness."
    ],
    skills: ["Python", "Flask", "Pytest", "Software Infrastructure", "Healthcare Compliance", "API Engineering"]
  },
  {
    id: "liahona",
    company: "Liahona Foundation",
    role: "Lead Developer",
    period: "May 2024 - Oct 2024",
    location: "Colorado, United States (Remote)",
    employmentType: "Contract",
    summary:
      "Owned end-to-end delivery of the organization website, from planning and design through deployment and post-launch support.",
    outcomes: [
      "Expanded platform reach to 5,000+ monthly visitors.",
      "Improved donor contribution outcomes with clearer message-to-action alignment.",
      "Increased visibility and inclusivity through focused SEO and accessibility improvements."
    ],
    responsibilities: [
      "Led website architecture, UI design, implementation, and deployment.",
      "Collaborated with content strategy stakeholders to improve engagement and retention.",
      "Managed post-production operations, updates, and platform availability."
    ],
    skills: [
      "Leadership",
      "SEO",
      "Accessibility",
      "Responsive Web Design",
      "Google Analytics",
      "CSS",
      "Bootstrap",
      "GCP"
    ]
  },
  {
    id: "harmony",
    company: "Harmony Innovation Hub",
    role: "System Administrator",
    period: "Jun 2021 - Jan 2022",
    location: "Abuja, Nigeria",
    summary: "Managed IT operations with emphasis on system reliability, security, and incident response.",
    outcomes: [
      "Maintained stable internal infrastructure across servers, networking, and access controls.",
      "Reduced downtime through routine updates, backup operations, and operational troubleshooting."
    ],
    responsibilities: [
      "Handled server and network administration tasks.",
      "Implemented policies and maintenance procedures for system integrity.",
      "Provided technical support across staff-facing issues."
    ],
    skills: ["Linux", "Systems Administration", "Network Configuration", "Security Operations"]
  },
  {
    id: "itf",
    company: "Model Skill Training Center (ITF)",
    role: "Technical Support Engineer",
    period: "Feb 2021 - May 2021",
    location: "Abuja, Nigeria",
    summary: "Delivered front-line technical support and internal training support in a learning environment.",
    outcomes: [
      "Resolved software and hardware issues to minimize training disruption.",
      "Improved IT usage confidence through practical support and onboarding guidance."
    ],
    responsibilities: [
      "Troubleshot workstation and software incidents.",
      "Supported trainees with technology setup and operational issues.",
      "Worked with management to implement technology improvements."
    ],
    skills: ["Technical Support", "Troubleshooting", "User Training", "Operations"]
  }
];

const projectPortfolio: ProjectItem[] = [
  {
    name: "SOLE (Employee Stock Option Loan Platform)",
    role: "Full-Stack Engineer",
    period: "2025",
    category: "Product",
    summary: "Built a multi-tenant stock-loan platform with strict tenant isolation and workflow governance.",
    highlights: [
      "Implemented borrower eligibility and configurable down-payment flows.",
      "Built HR, Legal, and Finance workflows with staged approval and funding gates.",
      "Integrated JWT auth, RBAC + ACL, encrypted fields, and audit logging."
    ],
    techStack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "TypeScript", "React"],
    links: resumeProjectLinks["SOLE (Employee Stock Option Loan Platform)"],
    featured: true
  },
  {
    name: "SuperSet (Agentic Dev Orchestrator)",
    role: "Engineer",
    period: "In Progress",
    category: "Platform",
    status: "In Progress",
    summary: "Designing a local-first orchestrator for CLI coding agents and verifier-driven automation.",
    highlights: [
      "Defined a handoff bundle contract for stage continuity.",
      "Implemented verifier loops for lint, test, and type gates.",
      "Added worktree-per-task isolation with persistent logs."
    ],
    techStack: ["Python", "Rust", "SQLite", "Git Worktrees", "PTY Sessions", "Electron", "Docker"],
    featured: true
  },
  {
    name: "PRESS (Blood Pressure Monitoring PWA)",
    role: "Lead Developer",
    period: "2024 - Present",
    category: "Product",
    summary: "Delivered a mobile-first, offline-capable progressive web app for blood pressure tracking workflows.",
    highlights: [
      "Designed resilient offline data-entry behavior for unstable network environments.",
      "Implemented modern patient-facing UX with robust form and cache flows.",
      "Supported fraud detection pipelines for reading validation."
    ],
    techStack: ["React", "TypeScript", "Shadcn UI", "Service Workers", "Healthcare Workflows"],
    featured: true
  },
  {
    name: "Meditrina (Digital Health Platform)",
    role: "Lead Engineer",
    period: "2024",
    category: "Product",
    summary: "Built a digital health platform supporting chronic-care workflows and doctor consultation flows.",
    highlights: [
      "Led application architecture and implementation.",
      "Designed user flows for patient support and practitioner interaction."
    ],
    techStack: ["React", "TypeScript", "Healthcare UX"],
    links: resumeProjectLinks["Meditrina (Digital Health Platform)"]
  },
  {
    name: "Engage App (Healthcare Workflow)",
    role: "Frontend Engineer",
    period: "2024",
    category: "Product",
    summary: "Contributed to a web app streamlining patient-care workflows for hospitals and pharmaceutical operators.",
    highlights: [
      "Improved workflow interactions in React/Next.js interfaces.",
      "Supported production deployment and release delivery."
    ],
    techStack: ["JavaScript", "React", "Next.js", "Vercel"],
    links: resumeProjectLinks["Engage App (Healthcare Workflow)"]
  },
  {
    name: "Liahona Foundation Website",
    role: "Lead Developer",
    period: "2024",
    category: "Client",
    summary: "Designed and delivered the foundation website focused on outreach, donor engagement, and accessibility.",
    highlights: [
      "Grew platform traffic to 5,000+ monthly visitors.",
      "Managed deployment, SEO, and post-launch maintenance."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "SEO"],
    links: resumeProjectLinks["Liahona Foundation Website"],
    featured: true
  },
  {
    name: "Inclusion Afrika Website",
    role: "Lead Developer",
    period: "2024",
    category: "Client",
    summary: "Led conception, design, and implementation of a mission-focused organization website.",
    highlights: [
      "Built a clear information architecture and user-friendly presentation.",
      "Implemented SEO strategy to improve visibility and reach."
    ],
    techStack: ["React", "CSS", "Bootstrap", "Google Cloud"],
    links: resumeProjectLinks["Inclusion Afrika Website"]
  },
  {
    name: "Expertato Meeting Rooms",
    role: "Backend Contributor",
    period: "2024",
    category: "Client",
    summary: "Contributed backend functionality for a freelancer work platform with virtual meeting room support.",
    highlights: [
      "Supported core backend flows for user collaboration features.",
      "Helped deliver reliable meeting-room platform behavior."
    ],
    techStack: ["Linux", "Apache", "PHP", "MySQL", "WordPress"],
    links: resumeProjectLinks["Expertato Meeting Rooms"]
  }
];

export const portfolioData = {
  profile: {
    name: source.profile.name,
    title: source.profile.title,
    location: source.profile.location,
    summary: source.profile.summary,
    headline: "Software Engineer focused on healthcare systems, fintech products, and high-performance backend delivery.",
    contact: {
      email: source.profile.contact.email,
      linkedin: normalizeUrl(source.profile.contact.linkedin),
      phone: source.profile.contact.phone,
      github: "https://github.com/DevaWinner",
      resumePath: "/aniekan.resume.pdf"
    }
  } satisfies Profile,
  metrics: [
    { value: "4+ years", label: "Software engineering experience" },
    { value: "60%+", label: "Retention growth delivered" },
    { value: "35%", label: "Conversion lift on core health products" },
    { value: "5,000+", label: "Monthly visitors on led web platform" }
  ] satisfies Metric[],
  focusAreas: [
    "Reliable API and backend architecture for healthcare and fintech products",
    "Offline-first, mobile-focused frontend systems for real operating conditions",
    "AI-assisted product features including RAG, semantic search, and automation tooling",
    "Practical engineering execution with clear release quality and delivery outcomes"
  ],
  skills: Object.entries(source.skills).map(([key, items]) => ({
    label: formatSkillLabel(key),
    items
  })) satisfies SkillCategory[],
  experience: primaryExperience,
  projects: projectPortfolio,
  education: [
    ...source.education.map((item) => ({
      institution: item.institution,
      degree: item.degree,
      date: item.date,
      coursework: item.coursework
    })),
    {
      institution: "Microverse Inc.",
      degree: "Remote Full-Stack Web Development Program",
      date: "Mar 2023 - Sep 2023",
      coursework:
        "1300+ hours in algorithms, data structures, and full-stack engineering with Ruby, Rails, JavaScript, React, and Redux."
    }
  ] satisfies EducationItem[],
  certifications: [
    {
      name: "System Administration Training",
      provider: "Industrial Training Fund (Abuja)",
      period: "Mar 2022 - Jul 2022",
      details: [
        "Server management across Windows and Linux environments.",
        "Network configuration, monitoring, and troubleshooting.",
        "Virtualization with VMware and Hyper-V.",
        "Security and availability best practices."
      ]
    },
    {
      name: "CompTIA A+ Track",
      provider: "Cisco Networking Academy",
      period: "Aug 2020 - Nov 2020",
      details: [
        "Hardware and software troubleshooting fundamentals.",
        "Operating system installation, configuration, and maintenance.",
        "Networking and operational security procedures."
      ]
    }
  ] satisfies CertificationItem[],
  service: [
    {
      organization: "BYU-Pathway Worldwide",
      role: "Service Missionary",
      period: "Aug 2024 - July 2025",
      details: "Mentor and support students across their program journey while collaborating on student support improvements."
    }
  ] satisfies ServiceItem[]
};
