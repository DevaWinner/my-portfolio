import type { Metadata } from "next";
import { Award, BrainCircuit, Download, GraduationCap, HeartHandshake, Mail, MapPin, ShieldCheck, Workflow } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
	title: "About",
	description: "About Aniekan Winner Anietie, a full-stack software engineer and technical founder based in Abuja, Nigeria.",
};

const principles = [
	{ icon: ShieldCheck, title: "Govern the boundaries", text: "Identity, tenant context, authorization, audit events, and data ownership belong in the architecture—not in cleanup work." },
	{ icon: Workflow, title: "Model the operation", text: "Good software reflects how decisions, exceptions, approvals, and handoffs actually happen inside an organization." },
	{ icon: BrainCircuit, title: "Isolate uncertainty", text: "AI can add leverage without owning deterministic business truth. I design service boundaries that preserve that distinction." },
];

export default function AboutPage() {
	return (
		<div>
			<PageHero
				label="About Aniekan"
				title="I build at the boundary of product and systems."
				description={portfolioData.profile.summary}
				actions={<><a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}><Mail className="h-4 w-4" /> Contact me</a><a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}><Download className="h-4 w-4" /> Resume</a></>}
				aside={
					<div>
						<p className="type-label text-muted">Working context</p>
						<dl className="mt-5 border-b border-border">
							<div className="flex items-center justify-between gap-4 border-t border-border py-4"><dt className="type-label text-muted">Based in</dt><dd className="flex items-center gap-2 font-semibold"><MapPin className="h-4 w-4 text-primary" /> Abuja, Nigeria</dd></div>
							<div className="flex items-center justify-between gap-4 border-t border-border py-4"><dt className="type-label text-muted">Working across</dt><dd className="text-right font-semibold">Platforms, AI, product delivery</dd></div>
							<div className="flex items-center justify-between gap-4 border-t border-border py-4"><dt className="type-label text-muted">Availability</dt><dd className="font-semibold">Global opportunities</dd></div>
						</dl>
					</div>
				}
			/>

			<section className="bg-brand py-[4.5rem] text-brand-foreground sm:py-28" aria-labelledby="principles-heading">
				<div className="container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
					<div>
						<p className="type-label text-white/80">Operating thesis</p>
						<h2 id="principles-heading" className="type-headline mt-4 max-w-[12ch]">Reliable systems start with clear decisions.</h2>
						<p className="type-body mt-6 max-w-[48ch] text-white/80">My best work sits where product context and engineering depth meet: turning operational complexity into explicit contracts, usable interfaces, and systems a team can confidently evolve.</p>
					</div>

					<div className="border-b border-white/25">
						{principles.map((principle) => {
							const Icon = principle.icon;
							return (
								<article key={principle.title} className="grid gap-4 border-t border-white/25 py-8 sm:grid-cols-[3rem_1fr]">
									<div className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-accent"><Icon className="h-5 w-5" /></div>
									<div><h3 className="type-title">{principle.title}</h3><p className="mt-3 max-w-[62ch] text-base leading-7 text-white/80">{principle.text}</p></div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="border-b border-border bg-card py-[4.5rem] sm:py-28" aria-labelledby="range-heading">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
						<div><p className="type-label text-primary">Technical range</p><h2 id="range-heading" className="type-headline mt-4 max-w-[12ch]">A stack chosen around the constraint.</h2></div>
						<p className="type-body max-w-[58ch] text-muted">Breadth is useful when it creates coherent ownership. I select languages, frameworks, and infrastructure around the product&apos;s operating reality—not around novelty.</p>
					</div>

					<div className="mt-12 border-b border-border">
						{portfolioData.skills.map((category) => (
							<article key={category.label} className="grid gap-5 border-t border-border py-8 md:grid-cols-[13rem_1fr] md:items-start">
								<h3 className="type-title">{category.label}</h3>
								<div className="flex flex-wrap gap-2">{category.items.map((item) => <span key={item} className="type-label rounded-full border border-border bg-background px-3 py-2 text-muted">{item}</span>)}</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="container py-[4.5rem] sm:py-28" aria-labelledby="learning-heading">
				<div className="mb-12">
					<p className="type-label text-primary">Learning and contribution</p>
					<h2 id="learning-heading" className="type-headline mt-4 max-w-[15ch]">Knowledge should compound in the work.</h2>
				</div>

				<div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
					<div>
						<div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-primary" /><h3 className="type-title">Education</h3></div>
						<div className="mt-6 border-b border-border">
							{portfolioData.education.map((item) => (
								<article key={item.degree} className="border-t border-border py-8">
									<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h4 className="type-title">{item.degree}</h4><p className="mt-2 font-semibold text-muted">{item.institution}</p></div><span className="type-label shrink-0 text-primary">{item.date}</span></div>
									<p className="mt-6 max-w-[68ch] text-base leading-7"><strong>Applied outcome:</strong> {item.notableOutcome}</p>
									<p className="mt-4 max-w-[68ch] text-base leading-7 text-muted"><strong>Selected coursework:</strong> {item.coursework}</p>
								</article>
							))}
						</div>
					</div>

					<div className="space-y-12">
						<div>
							<div className="flex items-center gap-3"><Award className="h-5 w-5 text-primary" /><h3 className="type-title">Credentials</h3></div>
							<div className="mt-6 border-b border-border">
								{portfolioData.certifications.map((item) => <article key={item.name} className="border-t border-border py-6"><h4 className="font-semibold">{item.name}</h4><p className="type-label mt-2 text-muted">{item.provider} · {item.issuedOn}</p><p className="mt-3 text-base leading-7 text-muted">{item.details[0]}</p></article>)}
							</div>
						</div>

						<div>
							<div className="flex items-center gap-3"><HeartHandshake className="h-5 w-5 text-primary" /><h3 className="type-title">Service</h3></div>
							{portfolioData.service.map((item) => <article key={item.organization} className="mt-6 border-y border-border py-6"><h4 className="font-semibold">{item.role}</h4><p className="type-label mt-2 text-primary">{item.organization} · {item.period}</p><p className="mt-3 text-base leading-7 text-muted">{item.details}</p></article>)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
