import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { portfolioData, type ProjectItem } from "@/lib/portfolio-data";
import { cn, projectAnchorId } from "@/lib/utils";

const featuredProjects = portfolioData.projects.filter(
	(project) => project.featured,
);
const otherProjects = portfolioData.projects.filter(
	(project) => !project.featured,
);

interface ProjectEntryProps {
	project: ProjectItem;
	compact?: boolean;
}

function ProjectEntry({ project, compact = false }: ProjectEntryProps) {
	return (
		<article
			id={projectAnchorId(project.name)}
			className="scroll-mt-28 border-b border-border/70 py-8"
		>
			<div
				className={cn(
					"grid gap-5 lg:grid-cols-[12rem_1fr]",
					compact && "lg:grid-cols-[10rem_1fr]",
				)}
			>
				<div className="space-y-2">
					<div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
						<span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">
							{project.category}
						</span>
						{project.status ? (
							<span className="rounded-full border border-border/80 px-2.5 py-1 text-muted normal-case tracking-normal">
								{project.status}
							</span>
						) : null}
					</div>
					{project.period ? (
						<p className="text-sm text-muted">{project.period}</p>
					) : null}
				</div>

				<div className="space-y-5">
					<div>
						<h3 className="font-heading text-2xl font-semibold tracking-tight">
							{project.name}
						</h3>
						<p className="mt-1 text-sm text-muted">{project.role}</p>
						<p className="mt-3 text-sm leading-relaxed text-foreground/90">
							{project.summary}
						</p>
					</div>

					{project.context ? (
						<p className="text-sm text-foreground/90">
							<span className="font-semibold text-foreground">Context:</span>{" "}
							{project.context}
						</p>
					) : null}

					<div
						className={cn(
							"grid gap-4",
							compact ? "md:grid-cols-1" : "md:grid-cols-2",
						)}
					>
						<div>
							<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
								Challenge
							</p>
							<p className="text-sm text-foreground/90">{project.challenge}</p>
						</div>
						<div>
							<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
								Solution
							</p>
							<p className="text-sm text-foreground/90">{project.solution}</p>
						</div>
					</div>

					{project.impactMetrics?.length ? (
						<div>
							<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
								Key Results
							</p>
							<ul className="space-y-2 text-sm text-foreground/90">
								{project.impactMetrics.slice(0, 3).map((result) => (
									<li key={result} className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
										<span>{result}</span>
									</li>
								))}
							</ul>
						</div>
					) : null}

					<div className="flex flex-wrap gap-2">
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className="rounded-full border border-border/80 px-2.5 py-1 text-xs text-muted"
							>
								{tech}
							</span>
						))}
					</div>

					{project.links?.length ? (
						<div className="flex flex-wrap items-center gap-4">
							{project.links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
								>
									{link.label}
									<ArrowUpRight className="h-4 w-4" />
								</a>
							))}
						</div>
					) : null}
				</div>
			</div>
		</article>
	);
}

export default function ProjectsPage() {
	return (
		<div className="space-y-12 pb-16 sm:space-y-16">
			<PageHero
				kicker="Projects"
				title="Technical Case Studies Across Product, Client, and Platform Delivery"
				description="Selected technical case studies showing the product context, engineering challenge, and solution delivered for each project."
			/>

			<section className="container space-y-6">
				<div>
					<h2 className="font-heading text-2xl font-bold tracking-tight">
						Featured Work
					</h2>
					<p className="mt-2 text-sm text-muted">
						Projects with strongest alignment to current software engineering
						focus.
					</p>
				</div>
				<div>
					{featuredProjects.map((project) => (
						<ProjectEntry key={project.name} project={project} />
					))}
				</div>
			</section>

			<section className="container space-y-6">
				<div>
					<h2 className="font-heading text-2xl font-bold tracking-tight">
						Additional Delivery Work
					</h2>
					<p className="mt-2 text-sm text-muted">
						Supporting project history from prior engagements and production
						contributions.
					</p>
				</div>
				<div>
					{otherProjects.map((project) => (
						<ProjectEntry key={project.name} project={project} compact />
					))}
				</div>
			</section>

			<section className="container">
				<div className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/60 to-background px-6 py-7">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Delivery Pattern
					</p>
					<h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">
						How Projects Move Forward
					</h2>
					<div className="mt-5 grid gap-4 text-sm text-foreground/90 md:grid-cols-3">
						<div>
							<p className="font-semibold text-foreground">Discover</p>
							<p className="mt-1">
								Clarify user and business constraints with engineering
								feasibility early.
							</p>
						</div>
						<div>
							<p className="font-semibold text-foreground">Build</p>
							<p className="mt-1">
								Implement modular services and UI workflows with testing and
								operational visibility.
							</p>
						</div>
						<div>
							<p className="font-semibold text-foreground">Improve</p>
							<p className="mt-1">
								Iterate based on usage, defects, and performance signals to
								sustain product value.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
