import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, LockKeyhole, Workflow } from "lucide-react";

import { PageHero } from "@/components/page-hero";
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
				<a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
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
				kicker="Selected work"
				title={<>Products built around <span className="text-primary">hard constraints.</span></>}
				description="A selection of platform, product, and client work. Each case study focuses on the engineering decision behind the interface: isolation, workflow integrity, offline reliability, verification, or measurable growth."
			/>

			<section className="border-b border-border bg-card/55">
				<div className="container grid gap-px bg-border sm:grid-cols-3">
					<div className="flex items-start gap-3 bg-card py-6 pr-6"><LockKeyhole className="mt-0.5 h-5 w-5 text-primary" /><div><p className="font-heading text-lg font-bold">Secure by design</p><p className="mt-1 text-xs leading-5 text-muted">Tenant boundaries, policy checks, and traceable actions.</p></div></div>
					<div className="flex items-start gap-3 bg-card px-0 py-6 sm:px-6"><Workflow className="mt-0.5 h-5 w-5 text-accent" /><div><p className="font-heading text-lg font-bold">Workflow aware</p><p className="mt-1 text-xs leading-5 text-muted">Systems modeled around how real operations move.</p></div></div>
					<div className="flex items-start gap-3 bg-card py-6 pl-0 sm:pl-6"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /><div><p className="font-heading text-lg font-bold">Verifier driven</p><p className="mt-1 text-xs leading-5 text-muted">Quality gates, observable behavior, measurable outcomes.</p></div></div>
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="mb-12 flex flex-wrap items-end justify-between gap-4">
					<div><p className="eyebrow">Featured case studies</p><h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">Architecture meets product delivery.</h2></div>
					<p className="max-w-md text-sm leading-6 text-muted">Selected for their depth across platform design, security, AI, operational workflows, and user outcomes.</p>
				</div>

				<div className="space-y-16 sm:space-y-24">
					{featuredProjects.map((project, index) => (
						<article key={project.name} id={projectAnchorId(project.name)} className="scroll-mt-28 border-t-2 border-foreground pt-6">
							<div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
								<div>
									<div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em] text-primary"><span>{project.category}</span><span className="font-mono text-muted">0{index + 1}</span></div>
									<h3 className="mt-8 text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl">{project.name}</h3>
									<p className="mt-3 text-sm font-semibold text-muted">{project.role} · {project.period}</p>
									{project.status ? <span className="mt-5 inline-flex rounded-md bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">{project.status}</span> : null}
									<p className="mt-7 text-base leading-7 text-foreground/80">{project.summary}</p>
									<div className="mt-7 flex flex-wrap gap-x-2 gap-y-1">{project.techStack.map((tech) => <span key={tech} className="font-mono text-[0.68rem] text-muted after:ml-2 after:content-['/'] last:after:content-none">{tech}</span>)}</div>
									<div className="mt-7"><ProjectLinks project={project} /></div>
								</div>

								<div className="space-y-8">
									{project.context ? <div className="border-l-2 border-primary pl-5"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Context</p><p className="mt-3 text-sm leading-7 text-foreground/80">{project.context}</p></div> : null}
									<div className="grid gap-7 sm:grid-cols-2">
										<div><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">The constraint</p><p className="mt-3 text-sm leading-7 text-foreground/80">{project.challenge}</p></div>
										<div><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">The response</p><p className="mt-3 text-sm leading-7 text-foreground/80">{project.solution}</p></div>
									</div>
									{project.impactMetrics?.length ? <div className="border-l-2 border-accent pl-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">Results and evidence</p><ul className="mt-4 space-y-3">{project.impactMetrics.map((result) => <li key={result} className="flex gap-3 text-sm leading-6 text-foreground/80"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" /><span>{result}</span></li>)}</ul></div> : null}
									{project.hardProblems?.length ? <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-primary">Hard problems solved</p><div className="mt-4 grid gap-5 sm:grid-cols-3">{project.hardProblems.map((problem, problemIndex) => <p key={problem} className="text-xs leading-5 text-muted"><span className="mb-2 block font-mono text-primary">0{problemIndex + 1}</span>{problem}</p>)}</div></div> : null}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-card/55 py-16 sm:py-20">
				<div className="container">
					<div className="mb-8"><p className="eyebrow">Additional delivery</p><h2 className="mt-5 font-heading text-3xl font-bold">More production work.</h2></div>
					<div className="grid gap-x-12 md:grid-cols-2">
						{otherProjects.map((project) => (
							<article key={project.name} id={projectAnchorId(project.name)} className="scroll-mt-28 border-t border-border py-8">
								<div className="flex justify-between gap-4 text-xs font-bold uppercase tracking-[0.1em] text-primary"><span>{project.category}</span><span className="text-muted">{project.period}</span></div>
								<h3 className="mt-7 font-heading text-2xl font-bold">{project.name}</h3>
								<p className="mt-2 text-xs font-semibold text-muted">{project.role}</p>
								<p className="mt-5 text-sm leading-6 text-foreground/80">{project.summary}</p>
								<div className="mt-6 flex flex-wrap gap-x-2 gap-y-1">{project.techStack.slice(0, 5).map((tech) => <span key={tech} className="font-mono text-[0.68rem] text-muted after:ml-2 after:content-['/'] last:after:content-none">{tech}</span>)}</div>
								<div className="mt-6"><ProjectLinks project={project} /></div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
