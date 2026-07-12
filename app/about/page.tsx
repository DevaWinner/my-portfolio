import type { Metadata } from "next";
import { ArrowUpRight, BrainCircuit, Download, GraduationCap, Mail, MapPin, ShieldCheck, Workflow } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
	title: "About",
	description: "About Aniekan Winner Anietie, a full-stack software engineer and technical founder based in Abuja, Nigeria.",
};

const principles = [
	{ icon: ShieldCheck, title: "Govern the boundaries", text: "Identity, tenant context, authorization, audit events, and data ownership belong in the architecture, not in cleanup work." },
	{ icon: Workflow, title: "Model the operation", text: "Good software reflects how decisions, exceptions, approvals, and handoffs happen in the real organization." },
	{ icon: BrainCircuit, title: "Isolate uncertainty", text: "AI can add leverage without owning deterministic business truth. I design service boundaries that preserve that distinction." },
];

export default function AboutPage() {
	return (
		<div>
			<PageHero
				kicker="About"
				title={<>Engineer, technical founder, <span className="text-primary">systems thinker.</span></>}
				description={portfolioData.profile.summary}
				actions={<><a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}><Mail className="h-4 w-4" /> Contact me</a><a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}><Download className="h-4 w-4" /> Download resume</a></>}
			/>

			<section className="border-b border-border bg-card/55">
				<div className="container flex flex-wrap gap-x-10 gap-y-3 py-5 text-xs font-semibold text-muted">
					<span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Abuja, Nigeria</span>
					<a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
					<a href={portfolioData.profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">GitHub <ArrowUpRight className="h-3.5 w-3.5" /></a>
					<a href={`mailto:${portfolioData.profile.contact.email}`} className="hover:text-primary">{portfolioData.profile.contact.email}</a>
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
					<div>
						<p className="eyebrow">Working principles</p>
						<h2 className="mt-5 text-balance font-heading text-4xl font-bold sm:text-5xl">Reliable systems start with clear decisions.</h2>
						<p className="mt-5 text-base leading-7 text-muted">My best work sits where product context and engineering depth meet: translating operational complexity into explicit contracts, usable interfaces, and systems a team can confidently evolve.</p>
					</div>
					<div className="border-y border-border">
						{principles.map((principle) => {
							const Icon = principle.icon;
							return <article key={principle.title} className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[3rem_1fr]"><Icon className="mt-1 h-5 w-5 text-primary" /><div><h3 className="font-heading text-xl font-semibold">{principle.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{principle.text}</p></div></article>;
						})}
					</div>
				</div>
			</section>

			<section className="border-y border-border bg-card/55 py-16 sm:py-24">
				<div className="container">
					<div className="grid gap-5 lg:grid-cols-[14rem_1fr] lg:gap-12">
						<div><p className="eyebrow">Technical range</p><p className="mt-5 text-sm leading-6 text-muted">A practical stack selected around product and operational constraints.</p></div>
						<div className="border-t border-border">
							{portfolioData.skills.map((category, index) => (
								<article key={category.label} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2.5rem_13rem_1fr] sm:items-start">
									<span className="font-mono text-xs font-bold text-primary">0{index + 1}</span>
									<h2 className="font-heading text-lg font-bold">{category.label}</h2>
									<div className="flex flex-wrap gap-x-2 gap-y-1.5">{category.items.map((item) => <span key={item} className="font-mono text-[0.72rem] text-muted after:ml-2 after:content-['/'] last:after:content-none">{item}</span>)}</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="container py-16 sm:py-24">
				<div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
					<div><p className="eyebrow">Education</p><h2 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">Learning that compounds in the work.</h2></div>
					<div>
						{portfolioData.education.map((item) => (
							<article key={item.degree} className="grid gap-4 border-t border-border py-7 first:pt-0 first:border-t-0 sm:grid-cols-[3rem_1fr]">
								<GraduationCap className="h-6 w-6 text-primary" />
								<div><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-heading text-2xl font-bold">{item.degree}</h3><span className="font-mono text-xs font-bold text-primary">{item.date}</span></div><p className="mt-2 text-sm font-semibold text-muted">{item.institution}</p><p className="mt-5 text-sm leading-6 text-foreground/80"><strong>Selected coursework:</strong> {item.coursework}</p><p className="mt-3 text-sm leading-6 text-muted">{item.notableOutcome}</p></div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
