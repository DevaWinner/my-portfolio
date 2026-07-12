import type { Metadata } from "next";
import { ArrowDown, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
	title: "Experience",
	description: "Aniekan Winner Anietie's engineering experience across AI platforms, healthcare, fintech, and production software.",
};

export default function ExperiencePage() {
	return (
		<div>
			<PageHero
				kicker="Experience"
				title={<>Engineering ownership, from <span className="text-primary">architecture to outcomes.</span></>}
				description="A career shaped by production constraints: tenant isolation, unreliable networks, sensitive data, legacy systems, and product metrics that leave little room for vague engineering."
			/>

			<section className="border-b border-border bg-card/55">
				<div className="container grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
					{portfolioData.metrics.map((metric) => (
						<div key={metric.label} className="px-4 py-6 first:pl-0 sm:px-6">
							<p className="font-heading text-2xl font-bold text-primary sm:text-3xl">{metric.value}</p>
							<p className="mt-1 text-xs font-semibold leading-5 text-muted">{metric.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="mb-12 grid gap-5 lg:grid-cols-[14rem_1fr] lg:gap-12">
					<p className="eyebrow">Career timeline</p>
					<h2 className="max-w-3xl font-heading text-3xl font-bold sm:text-4xl">Roles, decisions, and the work that moved the product.</h2>
				</div>

				<div className="relative">
					<div className="absolute bottom-0 left-[5px] top-3 w-px bg-border md:left-[13.5rem]" />
					{portfolioData.experience.map((item, index) => (
						<article key={item.id} className="relative grid gap-5 pb-14 pl-9 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-12 md:pl-0">
							<span className="absolute left-0 top-2 grid h-3 w-3 place-items-center rounded-full border-2 border-background bg-primary md:left-[13.15rem]" />
							<div>
								<p className="font-mono text-xs font-bold text-primary">{item.period}</p>
								<p className="mt-2 text-sm font-bold">{item.company}</p>
								<p className="mt-1 text-xs leading-5 text-muted">{item.location}</p>
								{index < portfolioData.experience.length - 1 ? <ArrowDown className="mt-5 hidden h-4 w-4 text-muted md:block" /> : null}
							</div>

							<div className="border-t border-border pt-5 md:pt-6">
								<h3 className="font-heading text-2xl font-bold sm:text-3xl">{item.role}</h3>
								{item.employmentType ? <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted">{item.employmentType}</p> : null}
								<p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/80">{item.summary}</p>

								<div className="mt-7 grid gap-7 xl:grid-cols-2">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Selected outcomes</p>
										<ul className="mt-4 space-y-3">
											{item.outcomes.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-foreground/80"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" /><span>{point}</span></li>)}
										</ul>
									</div>
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Core responsibilities</p>
										<ul className="mt-4 space-y-3">
											{item.responsibilities.map((point) => <li key={point} className="grid grid-cols-[1rem_1fr] gap-2 text-sm leading-6 text-foreground/80"><span className="font-mono text-primary">/</span><span>{point}</span></li>)}
										</ul>
									</div>
								</div>

								<div className="mt-7 flex flex-wrap gap-x-2 gap-y-1">{item.skills.map((skill) => <span key={skill} className="font-mono text-[0.68rem] text-muted after:ml-2 after:content-['/'] last:after:content-none">{skill}</span>)}</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="bg-foreground py-16 text-background sm:py-20">
				<div className="container grid gap-10 md:grid-cols-3">
					<div><p className="font-mono text-xs font-bold text-accent">01 / CLARITY</p><h2 className="mt-4 font-heading text-2xl font-bold">Make constraints explicit.</h2><p className="mt-3 text-sm leading-6 text-background/65">Map business rules, service boundaries, data ownership, and failure modes before they turn into expensive ambiguity.</p></div>
					<div><p className="font-mono text-xs font-bold text-accent">02 / DELIVERY</p><h2 className="mt-4 font-heading text-2xl font-bold">Ship coherent slices.</h2><p className="mt-3 text-sm leading-6 text-background/65">Carry typed contracts through API, state, interface, verification, and deployment so value arrives intact.</p></div>
					<div><p className="font-mono text-xs font-bold text-accent">03 / EVIDENCE</p><h2 className="mt-4 font-heading text-2xl font-bold">Measure what changed.</h2><p className="mt-3 text-sm leading-6 text-background/65">Use reliability, latency, conversion, retention, and operational signals to decide what deserves the next iteration.</p></div>
				</div>
			</section>
		</div>
	);
}
