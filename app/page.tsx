import Link from "next/link";
import {
	ArrowRight,
	BrainCircuit,
	CheckCircle2,
	Download,
	ExternalLink,
	GitBranch,
	Layers3,
	Mail,
	ServerCog,
	ShieldCheck,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { projectAnchorId } from "@/lib/utils";

const featuredProjects = portfolioData.projects.filter((project) => project.featured).slice(0, 4);
const featuredExperiences = portfolioData.experience.slice(0, 3);

const architecture = [
	{ icon: Layers3, label: "Product layer", value: "Next.js monorepo" },
	{ icon: ServerCog, label: "Core platform", value: "Go / Chi" },
	{ icon: BrainCircuit, label: "AI service", value: "Python / LangGraph" },
	{ icon: ShieldCheck, label: "Governance", value: "OIDC / Cerbos" },
];

export default function HomePage() {
	return (
		<div>
			<section className="relative overflow-hidden border-b border-border/80 bg-card">
				<div className="page-grid pointer-events-none absolute inset-0" />
				<div className="container relative pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pt-20">
					<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
						<p className="eyebrow">Full-stack software engineer</p>
						<span className="inline-flex items-center gap-2 text-xs font-semibold text-muted">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
							</span>
							Based in Abuja, working globally
						</span>
					</div>

					<h1 className="mt-7 max-w-5xl text-balance font-heading text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
						Aniekan Winner <span className="text-primary">Anietie.</span>
					</h1>
					<p className="mt-7 max-w-3xl text-balance text-lg leading-8 text-muted sm:text-xl">
						I architect secure multi-tenant platforms, AI systems, and product experiences that hold up in production.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link href="/projects" className={buttonVariants({ variant: "primary", size: "lg" })}>
							Explore my work <ArrowRight className="h-4 w-4" />
						</Link>
						<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
							<Mail className="h-4 w-4" /> Start a conversation
						</a>
						<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "lg" })}>
							<Download className="h-4 w-4" /> Resume
						</a>
					</div>

					<div className="mt-16 border-t border-border pt-6">
						<div className="mb-5 flex items-center justify-between">
							<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
								<GitBranch className="h-3.5 w-3.5 text-primary" /> Current platform architecture
							</div>
							<span className="hidden font-mono text-[0.65rem] text-accent sm:block">tenant context preserved end-to-end</span>
						</div>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{architecture.map((item, index) => {
								const Icon = item.icon;
								return (
									<div key={item.label} className="relative border-l border-border pl-4">
										<div className="flex items-center justify-between">
											<Icon className="h-5 w-5 text-primary" />
											<span className="font-mono text-[0.65rem] text-muted">0{index + 1}</span>
										</div>
										<p className="mt-4 text-xs font-medium text-muted">{item.label}</p>
										<p className="mt-1 font-heading text-base font-bold">{item.value}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			<section className="border-b border-border/80">
				<div className="container grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
					{portfolioData.metrics.map((metric) => (
						<div key={metric.label} className="px-4 py-7 first:pl-0 sm:px-6 lg:py-9">
							<p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{metric.value}</p>
							<p className="mt-2 max-w-[10rem] text-xs font-semibold leading-5 text-muted">{metric.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
					<div>
						<p className="eyebrow">What I do</p>
						<h2 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">From product intent to production systems.</h2>
						<p className="mt-5 text-base leading-7 text-muted">I work across architecture, backend, frontend, AI integration, security, and delivery. The goal is one coherent product, not a collection of disconnected technical decisions.</p>
					</div>
					<div className="border-y border-border">
						{portfolioData.focusAreas.map((focus, index) => (
							<div key={focus} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-5 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:py-6">
								<span className="font-mono text-xs font-bold text-primary">0{index + 1}</span>
								<p className="text-base font-semibold leading-7 text-foreground/90">{focus}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="border-y border-border/80 py-16 sm:py-24">
				<div className="container">
					<div className="flex flex-wrap items-end justify-between gap-5">
						<div>
							<p className="eyebrow">Selected work</p>
							<h2 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">Systems with real constraints.</h2>
						</div>
						<Link href="/projects" className={buttonVariants({ variant: "outline", size: "md" })}>All case studies <ArrowRight className="h-4 w-4" /></Link>
					</div>

					<div className="mt-10 grid gap-x-12 lg:grid-cols-2">
						{featuredProjects.map((project, index) => (
							<article key={project.name} className="group flex min-h-[21rem] flex-col border-t border-border py-8">
								<div className="flex items-start justify-between gap-4">
									<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-primary">
										<span>{project.category}</span>{project.status ? <span className="rounded-md bg-accent/10 px-2 py-1 normal-case tracking-normal text-accent">{project.status}</span> : null}
									</div>
									<span className="font-mono text-xs text-muted">0{index + 1}</span>
								</div>
								<h3 className="mt-10 text-balance font-heading text-2xl font-bold sm:text-3xl">{project.name}</h3>
								<p className="mt-3 text-sm font-semibold text-muted">{project.role} · {project.period}</p>
								<p className="mt-5 flex-1 text-sm leading-6 text-foreground/80">{project.summary}</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{project.techStack.slice(0, 5).map((tech) => <span key={tech} className="font-mono text-[0.68rem] text-muted after:ml-2 after:content-['/'] last:after:content-none">{tech}</span>)}
								</div>
								<Link href={`/projects#${projectAnchorId(project.name)}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
					<div>
						<p className="eyebrow">Experience</p>
						<h2 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">Built across domains.</h2>
						<p className="mt-5 text-base leading-7 text-muted">Founder-level ownership backed by hands-on product delivery in education, healthcare, fintech, and developer tooling.</p>
						<Link href="/experience" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Full timeline <ArrowRight className="h-4 w-4" /></Link>
					</div>
					<div>
						{featuredExperiences.map((item) => (
							<article key={item.id} className="grid gap-3 border-t border-border py-7 first:pt-0 first:border-t-0 sm:grid-cols-[9rem_1fr]">
								<p className="font-mono text-xs font-bold text-primary">{item.period}</p>
								<div>
									<h3 className="font-heading text-2xl font-bold">{item.role}</h3>
									<p className="mt-1 text-sm font-semibold text-muted">{item.company}</p>
									<p className="mt-4 text-sm leading-6 text-foreground/80">{item.summary}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-foreground py-16 text-background sm:py-20">
				<div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
					<div>
						<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-background/60"><CheckCircle2 className="h-4 w-4 text-accent" /> Open to meaningful engineering work</div>
						<h2 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">Need a platform that is ambitious and accountable?</h2>
					</div>
					<a href={`mailto:${portfolioData.profile.contact.email}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-background px-6 text-sm font-bold text-foreground transition hover:-translate-y-0.5">Let&apos;s talk <ExternalLink className="h-4 w-4" /></a>
				</div>
			</section>
		</div>
	);
}
