import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	BrainCircuit,
	Download,
	Globe2,
	Mail,
	ServerCog,
	ShieldCheck,
	Workflow,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { projectAnchorId } from "@/lib/utils";

const featuredProjects = portfolioData.projects.filter((project) => project.featured).slice(0, 4);
const leadProject = featuredProjects[0]!;
const supportingProjects = featuredProjects.slice(1);
const featuredExperiences = portfolioData.experience.slice(0, 3);

const proofStories = [
	{
		constraint: "Health products were losing momentum across fragmented care journeys.",
		decision: "Reworked critical paths around continuity, faster feedback, and lower-friction completion.",
		outcome: "60%+",
		outcomeLabel: "retention improvement",
	},
	{
		constraint: "Production APIs needed to become more dependable without slowing delivery.",
		decision: "Tightened service boundaries, failure handling, and verification around release-critical paths.",
		outcome: "45%",
		outcomeLabel: "reliability improvement",
	},
	{
		constraint: "Legacy services were carrying avoidable latency into user-facing workflows.",
		decision: "Profiled the bottlenecks and optimized the service paths that materially affected response time.",
		outcome: "18%",
		outcomeLabel: "lower API latency",
	},
];

const architecture = [
	{ icon: Workflow, label: "Product surfaces", value: "Next.js monorepo" },
	{ icon: ServerCog, label: "Deterministic core", value: "Go / Chi" },
	{ icon: BrainCircuit, label: "Stateless AI", value: "Python / LangGraph" },
	{ icon: ShieldCheck, label: "Policy boundary", value: "Keycloak / Cerbos" },
];

export default function HomePage() {
	return (
		<div>
			<section className="overflow-hidden border-b border-border bg-background text-foreground">
				<div className="container pb-[4.5rem] pt-14 sm:pb-24 sm:pt-20 lg:pb-28">
					<div className="hero-enter flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="type-label text-primary">Aniekan Winner Anietie</p>
							<p className="mt-1 text-base font-semibold">Full-stack engineer &amp; technical founder</p>
						</div>
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">
								<span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" /> Open to qualified opportunities
							</span>
						</div>
					</div>

					<div className="hero-enter-late pt-12 sm:pt-16">
						<h1 className="type-display max-w-[15ch] text-balance">I build secure platforms and practical AI that hold up in production.</h1>
						<p className="type-body mt-8 max-w-[62ch] text-muted">I turn complex product requirements into reliable systems—across multi-tenant architecture, governed AI, resilient frontends, and the delivery practices that keep them working.</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}>
								<Mail className="h-4 w-4" /> Contact me
							</a>
							<Link href="#selected-work" className={buttonVariants({ variant: "outline", size: "lg" })}>
								View my work <ArrowRight className="h-4 w-4" />
							</Link>
							<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "lg" })}>
								<Download className="h-4 w-4" /> Resume
							</a>
						</div>
					</div>

					<div className="mt-16 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
						<div>
							<p className="type-label text-muted">Based in</p>
							<p className="mt-2 flex items-center gap-2 font-semibold"><Globe2 className="h-4 w-4" /> Abuja, working globally</p>
						</div>
						<div>
							<p className="type-label text-muted">Core work</p>
							<p className="mt-2 font-semibold">Platforms, AI systems, product delivery</p>
						</div>
						<div>
							<p className="type-label text-muted">Working style</p>
							<p className="mt-2 font-semibold">Rigorous, inventive, dependable</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="proof-heading">
				<div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
					<div>
						<p className="type-label text-primary">Evidence, not adjectives</p>
						<h2 id="proof-heading" className="type-headline mt-4 max-w-[12ch]">The work is measurable.</h2>
						<p className="type-body mt-6 max-w-[48ch] text-muted">Technical depth matters when it changes reliability, speed, adoption, or the team&apos;s confidence in what ships.</p>
					</div>

					<div className="border-b border-border">
						{proofStories.map((story) => (
							<article key={story.outcomeLabel} className="grid gap-6 border-t border-border py-8 md:grid-cols-[1fr_1.15fr_0.72fr] md:items-start">
								<div>
									<p className="type-label text-muted">Constraint</p>
									<p className="mt-3 leading-7">{story.constraint}</p>
								</div>
								<div>
									<p className="type-label text-muted">Decision</p>
									<p className="mt-3 leading-7">{story.decision}</p>
								</div>
								<div className="rounded-lg bg-accent p-4 text-accent-foreground">
									<p className="type-label">Result</p>
									<p className="type-title mt-3 tabular-nums">{story.outcome}</p>
									<p className="mt-1 text-sm font-semibold leading-5">{story.outcomeLabel}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="selected-work" className="scroll-mt-24 border-y border-border bg-card py-[4.5rem] sm:py-28" aria-labelledby="work-heading">
				<div className="container">
					<div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
						<div>
							<p className="type-label text-primary">Selected systems</p>
							<h2 id="work-heading" className="type-headline mt-4">Built around real constraints.</h2>
						</div>
						<Link href="/projects" className={buttonVariants({ variant: "outline", size: "md" })}>All case studies <ArrowRight className="h-4 w-4" /></Link>
					</div>

					<article className="mt-12 overflow-hidden rounded-xl bg-brand text-brand-foreground">
						<div className="grid lg:grid-cols-[1.08fr_0.92fr]">
							<div className="p-6 sm:p-8 lg:p-12">
								<div className="flex flex-wrap items-center gap-3">
									<span className="type-label text-white/80">Featured platform</span>
									{leadProject.status ? <span className="rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-accent-foreground">{leadProject.status}</span> : null}
								</div>
								<h3 className="type-headline mt-8 max-w-[15ch] text-balance">{leadProject.name}</h3>
								<p className="type-body mt-6 max-w-[58ch] text-white/85">{leadProject.summary}</p>
								<p className="mt-6 max-w-[62ch] leading-7 text-white/75">{leadProject.solution}</p>
								<div className="mt-8 flex flex-wrap gap-2">
									{leadProject.techStack.slice(0, 6).map((tech) => <span key={tech} className="rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white/90">{tech}</span>)}
								</div>
								<Link href={`/projects#${projectAnchorId(leadProject.name)}`} className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-white underline decoration-white/40 underline-offset-8 transition-colors hover:decoration-white">
									View the case study <ArrowRight className="h-4 w-4" />
								</Link>
							</div>

							<figure className="bg-inverse p-6 text-inverse-foreground sm:p-8 lg:p-12">
								<figcaption>
									<p className="type-label text-inverse-muted">System boundary map</p>
									<p className="type-title mt-3">One platform, explicit risk boundaries.</p>
								</figcaption>
								<div className="mt-8 border-b border-inverse-line">
									{architecture.map((item, index) => {
										const Icon = item.icon;
										return (
											<div key={item.label} className="grid grid-cols-[auto_1fr] gap-4 border-t border-inverse-line py-5">
												<div className="grid h-11 w-11 place-items-center rounded-lg bg-inverse-line text-accent"><Icon className="h-5 w-5" /></div>
												<div className="flex items-center justify-between gap-4">
													<div><p className="type-label text-inverse-muted">{item.label}</p><p className="mt-1 font-semibold">{item.value}</p></div>
													{index < architecture.length - 1 ? <ArrowRight className="h-4 w-4 text-inverse-muted" aria-hidden="true" /> : <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />}
												</div>
											</div>
										);
									})}
								</div>
							</figure>
						</div>
					</article>

					<div className="mt-12 border-b border-border">
						{supportingProjects.map((project) => (
							<article key={project.name} className="group grid gap-4 border-t border-border py-8 md:grid-cols-[10rem_1fr_auto] md:items-start md:gap-8">
								<div>
									<p className="type-label text-primary">{project.category}</p>
									<p className="mt-2 text-sm font-semibold text-muted">{project.period}</p>
								</div>
								<div>
									<h3 className="type-title">{project.name}</h3>
									<p className="mt-3 max-w-[66ch] leading-7 text-muted">{project.summary}</p>
									{project.impactMetrics?.[0] ? <p className="mt-4 flex gap-2 font-semibold"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />{project.impactMetrics[0]}</p> : null}
								</div>
								<Link href={`/projects#${projectAnchorId(project.name)}`} aria-label={`View ${project.name} case study`} className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-border text-primary transition-colors duration-150 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="ownership-heading">
				<div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
					<div>
						<p className="type-label text-primary">Engineering ownership</p>
						<h2 id="ownership-heading" className="type-headline mt-4 max-w-[12ch]">Architecture through outcomes.</h2>
						<p className="type-body mt-6 max-w-[48ch] text-muted">Founder-level product judgment, backed by hands-on delivery across platform engineering, healthcare, fintech, and internal AI tooling.</p>
						<Link href="/experience" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary underline decoration-border decoration-2 underline-offset-8 hover:decoration-primary">Full experience <ArrowRight className="h-4 w-4" /></Link>
					</div>

					<div className="border-b border-border">
						{featuredExperiences.map((item) => (
							<article key={item.id} className="grid gap-4 border-t border-border py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
								<div>
									<p className="type-label text-primary">{item.period}</p>
									<p className="mt-2 text-sm font-semibold text-muted">{item.company}</p>
								</div>
								<div>
									<h3 className="type-title">{item.role}</h3>
									<p className="mt-4 max-w-[66ch] leading-7 text-muted">{item.summary}</p>
									{item.outcomes[0] ? <p className="mt-4 font-semibold">{item.outcomes[0]}</p> : null}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-background py-[4.5rem] sm:py-28" aria-labelledby="contact-heading">
				<div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
					<div>
						<p className="type-label text-primary">Start a conversation</p>
						<h2 id="contact-heading" className="type-headline mt-4 max-w-[14ch]">Bring me the hard part.</h2>
						<p className="type-body mt-6 max-w-[58ch] text-muted">If you&apos;re hiring for deep product engineering, shaping a complex platform, or need a technical partner who can carry architecture into delivery, I&apos;d like to hear about it.</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}><Mail className="h-4 w-4" /> Contact me</a>
						<a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>LinkedIn <ArrowUpRight className="h-4 w-4" /></a>
					</div>
				</div>
			</section>
		</div>
	);
}
