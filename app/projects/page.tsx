import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Github, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData, type ProjectItem } from "@/lib/portfolio-data";
import { projectAnchorId } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Selected Work",
	description: "Technical case studies from Aniekan Winner Anietie across AI platforms, fintech, healthtech, and developer infrastructure.",
};

const featuredProjects = portfolioData.projects.filter((project) => project.featured);
const otherProjects = portfolioData.projects.filter((project) => !project.featured);

function ProjectLinks({ project }: { project: ProjectItem }) {
	if (!project.links?.length) return null;
	return (
		<div className="flex flex-wrap gap-4">
			{project.links.map((link) => (
				<a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary underline decoration-border underline-offset-8 hover:decoration-primary">
					{link.label}<ArrowUpRight className="h-4 w-4" />
				</a>
			))}
		</div>
	);
}

export default function ProjectsPage() {
	return (
		<div>
			<PageHero
				label="Selected work"
				title="Systems built to withstand real pressure."
				description="Platform, product, and client work shaped by tenant isolation, workflow integrity, offline reliability, verification, and measurable growth."
				actions={<><a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}><Mail className="h-4 w-4" /> Discuss a project</a><a href={portfolioData.profile.contact.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}><Github className="h-4 w-4" /> GitHub</a></>}
				aside={
					<div>
						<p className="type-label text-muted">Case-study lens</p>
						<ul className="mt-5 border-b border-border">{["Constraint and operating context", "Architecture and product decision", "Evidence and remaining tradeoffs"].map((item) => <li key={item} className="border-t border-border py-4 font-semibold">{item}</li>)}</ul>
					</div>
				}
			/>

			<nav className="border-b border-border bg-card" aria-label="Case study index">
				<div className="container py-8">
					<div className="flex items-end justify-between gap-6">
						<div><p className="type-label text-primary">Project index</p><p className="mt-2 text-sm text-muted">Move directly to a featured case study.</p></div>
						<ArrowUpRight className="hidden h-5 w-5 text-muted sm:block" aria-hidden="true" />
					</div>
					<div className="mt-6 grid border-b border-border sm:grid-cols-2 lg:grid-cols-4">
						{featuredProjects.map((project) => (
							<Link key={project.name} href={`#${projectAnchorId(project.name)}`} className="focus-ring group flex min-h-24 flex-col justify-between gap-4 border-t border-border py-4 pr-5 transition-colors hover:text-primary sm:odd:pr-6 sm:even:border-l sm:even:pl-6 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
								<span className="type-label text-muted transition-colors group-hover:text-primary">{project.category}</span>
								<span className="flex items-end justify-between gap-3 font-semibold"><span>{project.name}</span><ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
							</Link>
						))}
					</div>
				</div>
			</nav>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="featured-work-heading">
				<div className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
					<div><p className="type-label text-primary">Featured case studies</p><h2 id="featured-work-heading" className="type-headline mt-4 max-w-[12ch]">Architecture meets product delivery.</h2></div>
					<p className="type-body max-w-[58ch] text-muted">The strongest work makes constraints visible, turns them into explicit system decisions, and leaves evidence that the decision held up.</p>
				</div>

				<div className="mt-12 border-b border-border">
					{featuredProjects.map((project) => (
						<article key={project.name} id={projectAnchorId(project.name)} className="scroll-mt-28 grid gap-10 border-t border-border py-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
							<div>
								<div className="flex flex-wrap items-center gap-3"><span className="type-label text-primary">{project.category}</span>{project.status ? <span className="rounded-full bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">{project.status}</span> : null}</div>
								<h3 className="type-headline type-project-title mt-6 max-w-[14ch]">{project.name}</h3>
								<p className="type-label mt-4 text-muted">{project.role} · {project.period}</p>
								<p className="type-body mt-6 max-w-[58ch] text-muted">{project.summary}</p>
								<div className="mt-8 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="type-label rounded-full border border-border bg-card px-3 py-2 text-muted">{tech}</span>)}</div>
								<div className="mt-8"><ProjectLinks project={project} /></div>
							</div>

							<div>
								{project.context ? <div className="rounded-lg bg-card p-6"><p className="type-label text-muted">Operating context</p><p className="mt-4 max-w-[68ch] text-base leading-7">{project.context}</p></div> : null}
								<div className="mt-8 grid gap-8 sm:grid-cols-2">
									<div><p className="type-label text-primary">The constraint</p><p className="mt-4 text-base leading-7 text-muted">{project.challenge}</p></div>
									<div><p className="type-label text-primary">The response</p><p className="mt-4 text-base leading-7 text-muted">{project.solution}</p></div>
								</div>
								{project.impactMetrics?.length ? <div className="mt-8 border-y border-border py-8"><p className="type-label text-muted">Results and evidence</p><ul className="mt-5 grid gap-4 sm:grid-cols-2">{project.impactMetrics.map((result) => <li key={result} className="flex gap-3 text-base leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" /><span>{result}</span></li>)}</ul></div> : null}
								{project.hardProblems?.length ? <div className="mt-8"><p className="type-label text-muted">Hard problems solved</p><ul className="mt-5 grid gap-4 sm:grid-cols-2">{project.hardProblems.map((problem, problemIndex) => <li key={`${problem}-${problemIndex}`} className="text-base leading-7 text-muted">{problem}</li>)}</ul></div> : null}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-card py-[4.5rem] sm:py-28" aria-labelledby="additional-work-heading">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20"><div><p className="type-label text-primary">Additional delivery</p><h2 id="additional-work-heading" className="type-headline mt-4">More production work.</h2></div><p className="type-body max-w-[58ch] text-muted">A broader record of shipping across healthcare, data products, nonprofit platforms, and collaboration tooling.</p></div>
					<div className="mt-12 border-b border-border">
						{otherProjects.map((project) => (
							<article key={project.name} id={projectAnchorId(project.name)} className="scroll-mt-28 grid gap-5 border-t border-border py-8 md:grid-cols-[12rem_1fr] md:items-start md:gap-8">
								<div><p className="type-label text-primary">{project.category}</p><p className="type-label mt-2 text-muted">{project.period}</p></div>
								<div><h3 className="type-title">{project.name}</h3><p className="mt-2 font-semibold text-muted">{project.role}</p><p className="mt-4 max-w-[68ch] text-base leading-7 text-muted">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.techStack.slice(0, 6).map((tech) => <span key={tech} className="type-label rounded-full border border-border bg-background px-3 py-2 text-muted">{tech}</span>)}</div><div className="mt-5"><ProjectLinks project={project} /></div></div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
