import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
	title: "Experience",
	description: "Aniekan Winner Anietie's engineering experience across AI platforms, healthcare, fintech, and production software.",
};

const [currentRole, ...earlierRoles] = portfolioData.experience;

const workingMethod = [
	{ title: "Make the constraint explicit", text: "Map business rules, service boundaries, data ownership, and failure modes before ambiguity becomes expensive." },
	{ title: "Ship a coherent slice", text: "Carry typed contracts through API, state, interface, verification, and deployment so value arrives intact." },
	{ title: "Measure what changed", text: "Use reliability, latency, conversion, retention, and operational signals to decide what earns the next iteration." },
];

export default function ExperiencePage() {
	return (
		<div>
			<PageHero
				label="Experience"
				title="Ownership measured in what changed."
				description="A career shaped by production constraints: tenant isolation, unreliable networks, sensitive data, legacy systems, and product metrics that leave little room for vague engineering."
				actions={<><a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}><Mail className="h-4 w-4" /> Contact me</a><Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>View the work <ArrowRight className="h-4 w-4" /></Link></>}
				aside={
					<div>
						<p className="type-label text-muted">Work shaped across</p>
						<ul className="mt-5 border-b border-border">
							{["Multi-tenant platforms", "Healthcare and fintech", "AI systems and developer tooling"].map((item) => <li key={item} className="border-t border-border py-4 font-semibold">{item}</li>)}
						</ul>
					</div>
				}
			/>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="current-role-heading">
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div><p className="type-label text-primary">Current ownership</p><h2 id="current-role-heading" className="type-headline mt-4">Building the platform and the practice.</h2></div>
					<p className="type-label text-muted">{currentRole.period}</p>
				</div>

				<article className="overflow-hidden rounded-xl bg-brand text-brand-foreground">
					<div className="grid lg:grid-cols-[0.8fr_1.2fr]">
						<div className="p-6 sm:p-8 lg:p-12">
							<p className="type-label text-white/80">{currentRole.company} · {currentRole.location}</p>
							<h3 className="type-headline mt-6 max-w-[14ch]">{currentRole.role}</h3>
							<p className="type-body mt-6 max-w-[52ch] text-white/80">{currentRole.summary}</p>
							<div className="mt-8 flex flex-wrap gap-2">{currentRole.skills.map((skill) => <span key={skill} className="type-label rounded-full border border-white/30 px-3 py-2 text-white/90">{skill}</span>)}</div>
						</div>

						<div className="bg-inverse p-6 text-inverse-foreground sm:p-8 lg:p-12">
							<div>
								<p className="type-label text-inverse-muted">Selected outcomes</p>
								<ul className="mt-5 space-y-4">{currentRole.outcomes.map((point) => <li key={point} className="flex gap-3 text-base leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" /><span>{point}</span></li>)}</ul>
							</div>
							<div className="mt-8 border-t border-inverse-line pt-8">
								<p className="type-label text-inverse-muted">Core responsibilities</p>
								<ul className="mt-5 space-y-4">{currentRole.responsibilities.map((point) => <li key={point} className="text-base leading-7 text-inverse-muted">{point}</li>)}</ul>
							</div>
						</div>
					</div>
				</article>
			</section>

			<section className="border-y border-border bg-card py-[4.5rem] sm:py-28" aria-labelledby="earlier-roles-heading">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
						<div><p className="type-label text-primary">Production record</p><h2 id="earlier-roles-heading" className="type-headline mt-4 max-w-[12ch]">Roles tied to evidence.</h2></div>
						<p className="type-body max-w-[58ch] text-muted">Each role is presented through the operating context, the work owned, and the outcome it created—not as a list of detached responsibilities.</p>
					</div>

					<div className="mt-12 border-b border-border">
						{earlierRoles.map((item) => (
							<article key={item.id} className="grid gap-8 border-t border-border py-10 lg:grid-cols-[13rem_1fr] lg:gap-12">
								<div>
									<p className="type-label text-primary">{item.period}</p>
									<p className="mt-3 font-semibold">{item.company}</p>
									<p className="type-label mt-2 text-muted">{item.location}</p>
									{item.employmentType ? <p className="type-label mt-4 text-muted">{item.employmentType}</p> : null}
								</div>

								<div>
									<h3 className="type-title">{item.role}</h3>
									<p className="type-body mt-4 max-w-[68ch] text-muted">{item.summary}</p>

									<div className="mt-8 grid gap-8 xl:grid-cols-2">
										<div><p className="type-label text-primary">What changed</p><ul className="mt-4 space-y-3">{item.outcomes.map((point) => <li key={point} className="flex gap-3 text-base leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" /><span>{point}</span></li>)}</ul></div>
										<div><p className="type-label text-muted">What I owned</p><ul className="mt-4 space-y-3">{item.responsibilities.map((point) => <li key={point} className="text-base leading-7 text-muted">{point}</li>)}</ul></div>
									</div>

									<div className="mt-8 flex flex-wrap gap-2">{item.skills.map((skill) => <span key={skill} className="type-label rounded-full border border-border bg-background px-3 py-2 text-muted">{skill}</span>)}</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="method-heading">
				<div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
					<div><p className="type-label text-primary">Working method</p><h2 id="method-heading" className="type-headline mt-4 max-w-[12ch]">The through-line is accountable delivery.</h2></div>
					<div className="border-b border-border">{workingMethod.map((item) => <article key={item.title} className="grid gap-3 border-t border-border py-8 sm:grid-cols-[13rem_1fr] sm:gap-8"><h3 className="type-title">{item.title}</h3><p className="text-base leading-7 text-muted">{item.text}</p></article>)}</div>
				</div>
			</section>
		</div>
	);
}
