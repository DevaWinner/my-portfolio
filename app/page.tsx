import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { cn, projectAnchorId } from "@/lib/utils";

const featuredExperiences = portfolioData.experience.slice(0, 3);
const featuredProjects = portfolioData.projects
	.filter((project) => project.featured)
	.slice(0, 4);

export default function HomePage() {
	return (
		<div className="space-y-12 pb-16 sm:space-y-16">
			<PageHero
				kicker="Portfolio"
				title={
					<>
						<span className="sm:mr-2">{portfolioData.profile.name}</span>
						<span className="block sm:inline">
							- {portfolioData.profile.title}
						</span>
					</>
				}
				description={portfolioData.profile.headline}
				actions={
					<>
						<a
							href={`mailto:${portfolioData.profile.contact.email}`}
							className={buttonVariants({ variant: "primary", size: "lg" })}
						>
							<Mail className="h-4 w-4" />
							Contact
						</a>
						<a
							href={portfolioData.profile.contact.resumePath}
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "cta", size: "lg" })}
						>
							<Download className="h-4 w-4" />
							Download Resume
						</a>
					</>
				}
			/>

			<section className="container">
				<dl className="grid gap-5 rounded-2xl border border-border/80 bg-card/60 px-5 py-6 sm:grid-cols-2 sm:px-7 xl:grid-cols-4">
					{portfolioData.metrics.map((metric, index) => (
						<div
							key={metric.label}
							className={cn("space-y-1", index > 0 && "xl:border-l xl:border-border/70 xl:pl-6")}
						>
							<dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{metric.label}</dt>
							<dd className="font-heading text-2xl font-bold tracking-tight text-primary">{metric.value}</dd>
						</div>
					))}
				</dl>
			</section>

			<section className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Profile</p>
					<h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Professional Summary</h2>
					<div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
						<p>{portfolioData.profile.summary}</p>
						<p>
							I design and ship production software that balances domain reliability, clear product experience, and measurable business outcomes.
							My recent work spans healthcare systems, fintech operations, and AI-enabled tooling.
						</p>
					</div>
				</div>

				<div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/60 to-background p-6">
					<div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary/45" />
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Current Focus</p>
					<ul className="mt-4 space-y-3 text-sm text-foreground/90">
						{portfolioData.focusAreas.map((focus) => (
							<li key={focus} className="flex items-start gap-3">
								<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
								<span>{focus}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="container space-y-6">
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Experience</p>
						<h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Recent Roles and Outcomes</h2>
					</div>
					<Link href="/experience" className={buttonVariants({ variant: "ghost", size: "md" })}>
						View full experience
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>

				<div>
					{featuredExperiences.map((item, index) => (
						<article
							key={item.id}
							className={cn(
								"grid gap-4 py-6 lg:grid-cols-[14rem_1fr]",
								index < featuredExperiences.length - 1 && "border-b border-border/70"
							)}
						>
							<div className="space-y-2">
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.period}</p>
								<p className="text-sm font-semibold text-foreground/90">{item.company}</p>
								<p className="text-sm text-muted">{item.location}</p>
							</div>

							<div className="space-y-4">
								<div>
									<h3 className="font-heading text-xl font-semibold tracking-tight">{item.role}</h3>
									{item.employmentType ? <p className="mt-1 text-sm text-muted">{item.employmentType}</p> : null}
								</div>
								<p className="text-sm leading-relaxed text-foreground/90">{item.summary}</p>
								<ul className="space-y-2 text-sm text-foreground/90">
									{item.outcomes.slice(0, 2).map((point) => (
										<li key={point} className="flex items-start gap-3">
											<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
											<span>{point}</span>
										</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-2">
									{item.skills.slice(0, 4).map((skill) => (
										<span key={skill} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
											{skill}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="container space-y-6">
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Projects</p>
						<h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Selected Delivery Highlights</h2>
					</div>
					<Link href="/projects" className={buttonVariants({ variant: "ghost", size: "md" })}>
						View all projects
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>

				<div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
					{featuredProjects.map((project) => (
						<article key={project.name} className="space-y-3 border-b border-border/70 pb-6">
							<div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
								<span className="text-primary">{project.category}</span>
								{project.status ? <span className="rounded-full border border-border/80 px-2 py-0.5 normal-case tracking-normal">{project.status}</span> : null}
								{project.period ? <span className="normal-case tracking-normal">{project.period}</span> : null}
							</div>
							<h3 className="font-heading text-xl font-semibold tracking-tight">{project.name}</h3>
							<p className="text-sm text-muted">{project.role}</p>
							<p className="text-sm leading-relaxed text-foreground/90">{project.summary}</p>
							<div className="flex flex-wrap gap-2">
								{project.techStack.slice(0, 4).map((tech) => (
									<span key={tech} className="rounded-full border border-border/80 px-2.5 py-1 text-xs text-muted">
										{tech}
									</span>
								))}
							</div>
							<Link
								href={`/projects#${projectAnchorId(project.name)}`}
								className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
							>
								View full case study
								<ArrowRight className="h-4 w-4" />
							</Link>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
