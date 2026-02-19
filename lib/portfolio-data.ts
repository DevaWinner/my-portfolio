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
	context?: string;
	summary: string;
	challenge: string;
	solution: string;
	impactMetrics?: string[];
	hardProblems?: string[];
	interviewTalkingPoints?: string[];
	nextSteps?: string[];
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
		tools_and_devops: "Tools and DevOps",
	};

	return (
		aliases[key] ??
		key.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase())
	);
}

const resumeProjectLinks: Record<string, ProjectLink[]> = {
	"SOLE (Employee Stock Option Loan Platform)": [
		{
			label: "Frontend Repo",
			href: "https://github.com/Stock-Loan/sole-frontend",
		},
		{
			label: "Backend Repo",
			href: "https://github.com/Stock-Loan/sole-backend",
		},
	],
	"Meditrina (Digital Health Platform)": [
		{ label: "Live Site", href: "https://meditrina.ng/" },
	],
	"Zoi (Data + Health Subscription Platform)": [
		{ label: "Live Site", href: "https://zoi.ng/" },
	],
	"Inclusion Afrika Website": [
		{ label: "Live Site", href: "https://inclusionafrika.org/" },
	],
	"Engage App (Healthcare Workflow)": [
		{ label: "Live App", href: "https://engage.app.wellahealth.com/" },
	],
	"Expertato Meeting Rooms": [
		{ label: "Live Site", href: "https://expertato.com/meeting-rooms/" },
	],
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
			"Enabled uninterrupted medical data capture through offline-first PWA workflows.",
		],
		responsibilities: [
			"Led development of PRESS, a mobile-first progressive web app using React, TypeScript, and Shadcn UI.",
			"Engineered Service Worker and caching strategy to preserve clinical workflows during network loss.",
			"Architected anti-fraud verification using ML image checks and EXIF metadata analysis.",
			"Built fintech functionality including wallet metrics, secure payouts, and integrated learning modules.",
		],
		skills: [
			"React",
			"TypeScript",
			"PWA",
			"Service Workers",
			"CI/CD",
			"Healthcare Product Engineering",
		],
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
			"Accelerated internal document and data workflows with RAG and SQL routing utilities.",
		],
		responsibilities: [
			"Shipped FastAPI and React applications for production use cases.",
			"Built internal RAG tools using Python, Ollama, and Chroma for semantic search.",
			"Developed a DuckDB-based SQL routing layer translating natural language prompts into parameterized SQL.",
			"Created reusable data access utilities to streamline team delivery.",
		],
		skills: [
			"FastAPI",
			"Python",
			"React",
			"DuckDB",
			"ChromaDB",
			"Ollama",
			"Performance Optimization",
		],
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
			"Implemented compliance-first practices aligned with HIPAA-style data protection expectations.",
		],
		responsibilities: [
			"Collaborated with multidisciplinary teams to define requirements and backend architecture.",
			"Developed scalable Python backend functionality for data processing and secure access.",
			"Implemented efficient database patterns for reliable retrieval and structured record organization.",
			"Performed rigorous testing and debugging to ensure API stability and correctness.",
		],
		skills: [
			"Python",
			"Flask",
			"Pytest",
			"Software Infrastructure",
			"Healthcare Compliance",
			"API Engineering",
		],
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
			"Increased visibility and inclusivity through focused SEO and accessibility improvements.",
		],
		responsibilities: [
			"Led website architecture, UI design, implementation, and deployment.",
			"Collaborated with content strategy stakeholders to improve engagement and retention.",
			"Managed post-production operations, updates, and platform availability.",
		],
		skills: [
			"Leadership",
			"SEO",
			"Accessibility",
			"Responsive Web Design",
			"Google Analytics",
			"CSS",
			"Bootstrap",
			"GCP",
		],
	},
	{
		id: "harmony",
		company: "Harmony Innovation Hub",
		role: "System Administrator",
		period: "Jun 2021 - Jan 2022",
		location: "Abuja, Nigeria",
		summary:
			"Managed IT operations with emphasis on system reliability, security, and incident response.",
		outcomes: [
			"Maintained stable internal infrastructure across servers, networking, and access controls.",
			"Reduced downtime through routine updates, backup operations, and operational troubleshooting.",
		],
		responsibilities: [
			"Handled server and network administration tasks.",
			"Implemented policies and maintenance procedures for system integrity.",
			"Provided technical support across staff-facing issues.",
		],
		skills: [
			"Linux",
			"Systems Administration",
			"Network Configuration",
			"Security Operations",
		],
	},
	{
		id: "itf",
		company: "Model Skill Training Center (ITF)",
		role: "Technical Support Engineer",
		period: "Feb 2021 - May 2021",
		location: "Abuja, Nigeria",
		summary:
			"Delivered front-line technical support and internal training support in a learning environment.",
		outcomes: [
			"Resolved software and hardware issues to minimize training disruption.",
			"Improved IT usage confidence through practical support and onboarding guidance.",
		],
		responsibilities: [
			"Troubleshot workstation and software incidents.",
			"Supported trainees with technology setup and operational issues.",
			"Worked with management to implement technology improvements.",
		],
		skills: [
			"Technical Support",
			"Troubleshooting",
			"User Training",
			"Operations",
		],
	},
];

const projectPortfolio: ProjectItem[] = [
	{
		name: "SOLE (Employee Stock Option Loan Platform)",
		role: "Full-Stack Engineer",
		period: "2025",
		category: "Product",
		context:
			"B2B fintech platform for employers issuing employee stock-option loans with strict governance across HR, Legal, and Finance teams.",
		summary:
			"Built a multi-tenant stock-loan platform with strict tenant isolation and workflow governance.",
		challenge:
			"Enforcing strict tenant isolation and multi-team approval workflows in a financial lending product without slowing down borrower onboarding.",
		solution:
			"Implemented typed workflow modules for borrower eligibility, down-payment, and staged HR/Legal/Finance approvals, then hardened the platform with JWT auth, RBAC/ACL, encryption, and audit logging for compliant scale.",
		impactMetrics: [
			"Reduced loan-approval bottlenecks by introducing staged workflow automation.",
			"Improved audit-readiness with immutable trace logs for sensitive loan actions.",
			"Increased implementation confidence through explicit tenant-boundaries in core services.",
		],
		hardProblems: [
			"Designing tenant-safe data access patterns across shared infrastructure.",
			"Coordinating stateful approval transitions across multiple business stakeholders.",
			"Balancing secure controls (RBAC/ACL/encryption) with onboarding speed.",
		],
		interviewTalkingPoints: [
			"How I modeled approval stages to prevent invalid state transitions.",
			"Why we combined RBAC with ACL instead of relying on role checks only.",
			"How I validated tenant isolation in both service and data layers.",
		],
		nextSteps: [
			"Add risk scoring for dynamic borrower eligibility.",
			"Implement workflow analytics to optimize approval SLA.",
		],
		techStack: [
			"Python",
			"FastAPI",
			"SQLAlchemy",
			"Alembic",
			"PostgreSQL",
			"Redis",
			"TypeScript",
			"React",
		],
		links: resumeProjectLinks["SOLE (Employee Stock Option Loan Platform)"],
		featured: true,
	},
	{
		name: "SuperSet (Agentic Dev Orchestrator)",
		role: "Engineer",
		period: "In Progress",
		category: "Platform",
		status: "In Progress",
		context:
			"Developer productivity platform for orchestrating autonomous coding agents with repeatable verification and delivery workflows.",
		summary:
			"Building an open source local-first orchestrator for CLI coding agents and verifier-driven automation.",
		challenge:
			"Coordinating multi-stage autonomous coding tasks reliably while preserving traceability, isolation, and deterministic quality gates.",
		solution:
			"Defined a handoff bundle contract for stage continuity, added verifier loops for lint/test/type checks, and isolated each task in dedicated git worktrees with persistent logs.",
		impactMetrics: [
			"Reduced handoff ambiguity between autonomous stages through a standard bundle contract.",
			"Improved confidence in generated code via automated lint, type, and test verification loops.",
			"Increased reproducibility by isolating tasks in dedicated worktrees with persistent execution logs.",
		],
		hardProblems: [
			"Maintaining deterministic behavior across agents with differing toolchains and output styles.",
			"Designing verifier loops that fail fast without creating noisy false positives.",
			"Balancing local-first execution speed with durable traceability and auditability.",
		],
		interviewTalkingPoints: [
			"How I designed the handoff bundle to preserve context across autonomous stages.",
			"How verifier loops enforce quality gates before code promotion.",
			"How task-level isolation prevented cross-task contamination in multi-agent workflows.",
		],
		nextSteps: [
			"Add policy-driven routing for agent selection by task type.",
			"Introduce observability dashboards for verifier pass/fail trends.",
		],
		techStack: [
			"Python",
			"Rust",
			"SQLite",
			"Git Worktrees",
			"PTY Sessions",
			"Electron",
			"Docker",
		],
		featured: true,
	},
	{
		name: "PRESS (Blood Pressure Monitoring PWA)",
		role: "Lead Developer",
		period: "2024 - Present",
		category: "Product",
		context:
			"Mobile-first health product for blood-pressure tracking where users often operate with unstable connectivity.",
		summary:
			"Delivered a mobile-first, offline-capable progressive web app for blood pressure tracking workflows.",
		challenge:
			"Supporting dependable blood-pressure tracking for users in low-connectivity environments where dropped sessions can break clinical workflows.",
		solution:
			"Built an offline-first PWA flow with resilient form and cache behavior, then integrated validation pathways that support fraud-detection pipelines without degrading patient UX.",
		impactMetrics: [
			"Enabled uninterrupted data capture in low-network scenarios.",
			"Reduced user drop-off during critical measurement submission steps.",
			"Improved trust in captured readings through validation support pathways.",
		],
		hardProblems: [
			"Syncing locally captured readings without creating duplicate clinical records.",
			"Designing resilient forms for interrupted sessions on low-end devices.",
			"Integrating fraud-detection checks without hurting perceived speed.",
		],
		interviewTalkingPoints: [
			"How I designed offline queue + conflict resolution for health records.",
			"Tradeoffs between aggressive caching and data freshness in clinical flows.",
			"How I measured and improved completion rates for core patient journeys.",
		],
		nextSteps: [
			"Add remote telemetry for sync-failure monitoring.",
			"Expand accessibility audits across older Android devices.",
		],
		techStack: [
			"React",
			"TypeScript",
			"Shadcn UI",
			"Service Workers",
			"Healthcare Workflows",
		],
		featured: true,
	},
	{
		name: "Meditrina (Digital Health Platform)",
		role: "Lead Engineer",
		period: "2024",
		category: "Product",
		context:
			"Digital health product supporting chronic-care patients and care teams through ongoing consultations and care continuity workflows.",
		summary:
			"Built a digital health platform supporting chronic-care workflows and doctor consultation flows.",
		challenge:
			"Designing digital care workflows that keep patients engaged while giving clinicians reliable, actionable context.",
		solution:
			"Led architecture and implementation of structured patient-practitioner flows, focusing on clear consultation paths, continuity of care, and low-friction interaction patterns.",
		impactMetrics: [
			"Improved care-flow completion by simplifying consultation pathways.",
			"Reduced user confusion through clearer patient-to-practitioner interaction design.",
			"Strengthened continuity of care with structured follow-up touchpoints.",
		],
		hardProblems: [
			"Balancing clinician data needs with an approachable patient UX.",
			"Designing flows that support recurring care journeys, not just one-time sessions.",
			"Maintaining interaction speed while preserving clinical context quality.",
		],
		interviewTalkingPoints: [
			"How I prioritized care continuity in product flow design.",
			"How architecture decisions supported both patient and clinician experiences.",
			"How we evaluated and improved key health-journey completion points.",
		],
		nextSteps: [
			"Add cohort analytics for consultation-to-follow-up conversion.",
			"Expand personalized care reminders based on patient activity patterns.",
		],
		techStack: ["React", "TypeScript", "Healthcare UX"],
		links: resumeProjectLinks["Meditrina (Digital Health Platform)"],
	},
	{
		name: "Engage App (Healthcare Workflow)",
		role: "Frontend Engineer",
		period: "2024",
		category: "Product",
		context:
			"Operational healthcare workflow application used by hospital and pharma teams to coordinate patient-care activities.",
		summary:
			"Contributed to a web app streamlining patient-care workflows for hospitals and pharmaceutical operators.",
		challenge:
			"Improving care-operations UX across multiple stakeholders without interrupting active production delivery cycles.",
		solution:
			"Refined high-impact React/Next.js workflow interactions and partnered on release delivery to ship safer, faster updates for clinical and operations teams.",
		impactMetrics: [
			"Improved workflow efficiency in high-frequency care operations screens.",
			"Reduced release friction by aligning UI updates with production delivery practices.",
			"Increased reliability of daily operator interactions through focused UX refinements.",
		],
		hardProblems: [
			"Supporting multiple user roles with conflicting workflow priorities.",
			"Shipping UX improvements safely during active production cycles.",
			"Maintaining consistent behavior across legacy and modern interface paths.",
		],
		interviewTalkingPoints: [
			"How I identified high-impact UX bottlenecks in operational workflows.",
			"How I shipped iterative changes without disrupting production operations.",
			"How I collaborated across teams to keep releases predictable and stable.",
		],
		nextSteps: [
			"Add role-based task analytics to prioritize future UX work.",
			"Introduce UI regression monitoring for mission-critical workflow screens.",
		],
		techStack: ["JavaScript", "React", "Next.js", "Vercel"],
		links: resumeProjectLinks["Engage App (Healthcare Workflow)"],
	},
	{
		name: "Zoi (Data + Health Subscription Platform)",
		role: "Frontend Developer",
		period: "2024",
		category: "Product",
		context:
			"Consumer acquisition product combining affordable data bundles with telemedicine and hospital-cover benefits for mobile-first Nigerian users.",
		summary:
			"Built a disruptive health-tech product that bundles affordable data plans with essential healthcare services like telemedicine via WhatsApp and hospital cover.",
		challenge:
			"Building a seamless, trust-based enrollment flow that handles sensitive user data and real-time payments while remaining lightweight enough for the Nigerian mobile-web market.",
		solution:
			"I led the frontend development, focusing on a WhatsApp-first user journey. By integrating a typed client layer and optimizing the UI for mobile users, I reduced friction in the checkout process, directly leading to a 35% jump in conversion rates.",
		impactMetrics: [
			"Delivered a 35% increase in conversion on the primary enrollment funnel.",
			"Reduced checkout friction for first-time mobile users with clearer step progression.",
			"Improved trust signals by clarifying plan benefits, coverage, and support touchpoints.",
		],
		hardProblems: [
			"Handling sensitive identity/payment inputs without making the flow feel heavy.",
			"Building performant UI for constrained devices and variable network quality.",
			"Aligning product messaging with user trust needs in a blended data + health offer.",
		],
		interviewTalkingPoints: [
			"Why I designed a WhatsApp-first flow and how it reduced support friction.",
			"How typed API clients prevented integration regressions during rapid iteration.",
			"What UI changes moved conversion and how we measured those effects.",
		],
		nextSteps: [
			"Add cohort-level funnel analytics to isolate conversion gains by network provider.",
			"Introduce localized experiment flags for messaging and offer optimization.",
		],
		techStack: [
			"React",
			"TypeScript",
			"Vite",
			"Tailwind CSS",
			"REST API Integration",
		],
		links: resumeProjectLinks["Zoi (Data + Health Subscription Platform)"],
		featured: true,
	},
	{
		name: "Inclusion Afrika Website",
		role: "Lead Developer",
		period: "2024",
		category: "Client",
		context:
			"Mission-driven organization website focused on communicating programs clearly and expanding reach to beneficiaries, partners, and donors.",
		summary:
			"Led conception, design, and implementation of a mission-focused organization website.",
		challenge:
			"Communicating mission-driven content clearly for diverse audiences while improving discoverability in a competitive nonprofit search landscape.",
		solution:
			"Designed a clean information architecture and responsive frontend experience, then implemented SEO-focused content structure to improve visibility and audience reach.",
		impactMetrics: [
			"Improved discoverability through SEO-oriented content architecture.",
			"Increased audience clarity with a simplified and structured information flow.",
			"Strengthened stakeholder trust via a professional, accessible web presence.",
		],
		hardProblems: [
			"Structuring broad mission content without overwhelming first-time visitors.",
			"Balancing storytelling needs with SEO and performance constraints.",
			"Maintaining consistency across responsive layouts and varied content blocks.",
		],
		interviewTalkingPoints: [
			"How I translated mission goals into practical information architecture.",
			"How I approached SEO as part of product strategy, not just metadata.",
			"How I measured quality in a content-heavy nonprofit experience.",
		],
		nextSteps: [
			"Add engagement analytics dashboards by content section.",
			"Introduce lightweight CMS workflows for faster stakeholder updates.",
		],
		techStack: ["React", "CSS", "Bootstrap", "Google Cloud"],
		links: resumeProjectLinks["Inclusion Afrika Website"],
	},
	{
		name: "Expertato Meeting Rooms",
		role: "Backend Contributor",
		period: "2024",
		category: "Client",
		context:
			"Freelancer collaboration platform with virtual meeting-room capabilities where reliability directly impacts engagement and retention.",
		summary:
			"Contributed backend functionality for a freelancer work platform with virtual meeting room support.",
		challenge:
			"Maintaining reliable collaboration workflows for freelancers where virtual meeting reliability directly affects user trust and retention.",
		solution:
			"Implemented and stabilized core backend collaboration flows that improved meeting-room consistency and reduced friction in day-to-day platform use.",
		impactMetrics: [
			"Improved meeting-room reliability for routine freelancer collaboration sessions.",
			"Reduced operational friction in backend collaboration flows.",
			"Increased user confidence through more consistent session behavior.",
		],
		hardProblems: [
			"Ensuring stable meeting-related backend behavior under varying usage patterns.",
			"Integrating collaboration logic into an existing platform without regressions.",
			"Maintaining compatibility across legacy service and plugin boundaries.",
		],
		interviewTalkingPoints: [
			"How I diagnosed and stabilized failure-prone collaboration paths.",
			"How I improved reliability while working within an existing backend stack.",
			"How backend quality changes translated into better user trust outcomes.",
		],
		nextSteps: [
			"Add proactive alerts for meeting-flow failure patterns.",
			"Improve session diagnostics for faster incident resolution.",
		],
		techStack: ["Linux", "Apache", "PHP", "MySQL", "WordPress"],
		links: resumeProjectLinks["Expertato Meeting Rooms"],
	},
];

export const portfolioData = {
	profile: {
		name: source.profile.name,
		title: source.profile.title,
		location: source.profile.location,
		summary: source.profile.summary,
		headline:
			"Software Engineer focused on healthcare systems, fintech products, and high-performance backend delivery.",
		contact: {
			email: source.profile.contact.email,
			linkedin: normalizeUrl(source.profile.contact.linkedin),
			phone: source.profile.contact.phone,
			github: "https://github.com/DevaWinner",
			resumePath: "/aniekan.resume.pdf",
		},
	} satisfies Profile,
	metrics: [
		{ value: "3+ years", label: "Software engineering experience" },
		{ value: "60%+", label: "Retention growth delivered" },
		{ value: "35%", label: "Conversion lift on core health products" },
		{ value: "100,000+", label: "Monthly visitors on led web platform" },
	] satisfies Metric[],
	focusAreas: [
		"Reliable API and backend architecture for healthcare and fintech products",
		"Offline-first, mobile-focused frontend systems for real operating conditions",
		"AI-assisted product features including RAG, semantic search, and automation tooling",
		"Practical engineering execution with clear release quality and delivery outcomes",
	],
	skills: Object.entries(source.skills).map(([key, items]) => ({
		label: formatSkillLabel(key),
		items,
	})) satisfies SkillCategory[],
	experience: primaryExperience,
	projects: projectPortfolio,
	education: [
		...source.education.map((item) => ({
			institution: item.institution,
			degree: item.degree,
			date: item.date,
			coursework: item.coursework,
		})),
		{
			institution: "Microverse Inc.",
			degree: "Remote Full-Stack Web Development Program",
			date: "Mar 2023 - Sep 2023",
			coursework:
				"1300+ hours in algorithms, data structures, and full-stack engineering with Ruby, Rails, JavaScript, React, and Redux.",
		},
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
				"Security and availability best practices.",
			],
		},
		{
			name: "CompTIA A+ Track",
			provider: "Cisco Networking Academy",
			period: "Aug 2020 - Nov 2020",
			details: [
				"Hardware and software troubleshooting fundamentals.",
				"Operating system installation, configuration, and maintenance.",
				"Networking and operational security procedures.",
			],
		},
	] satisfies CertificationItem[],
	service: [
		{
			organization: "BYU-Pathway Worldwide",
			role: "Service Missionary",
			period: "Aug 2024 - July 2025",
			details:
				"Mentor and support students across their program journey while collaborating on student support improvements.",
		},
	] satisfies ServiceItem[],
};
