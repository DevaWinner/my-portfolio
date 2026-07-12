import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

const footerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Work" },
	{ href: "/experience", label: "Experience" },
	{ href: "/about", label: "About" },
];

export function SiteFooter() {
	return (
		<footer className="bg-brand text-brand-foreground">
			<div className="container py-[4.5rem] sm:py-28">
				<div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">
							<span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" /> Available globally
						</div>
						<h2 className="type-headline mt-6 max-w-[16ch]">Need an engineer who can own the whole system?</h2>
						<p className="type-body mt-6 max-w-[58ch] text-white/80">Bring the product context, technical constraints, and desired outcome. I&apos;ll help turn them into a system your team can trust and evolve.</p>
					</div>

					<div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col lg:items-stretch">
						<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "secondary", size: "lg", className: "bg-white text-inverse ring-0 hover:bg-white/90" })}>
							<Mail className="h-4 w-4" /> Contact me
						</a>
						<Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg", className: "text-white ring-white/40 hover:bg-white/10" })}>
							View my work <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>

				<div className="mt-16 flex flex-col gap-6 border-t border-white/25 pt-6 md:flex-row md:items-center md:justify-between">
					<nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
						{footerLinks.map((link) => <Link key={link.href} href={link.href} className="focus-ring rounded-sm text-sm font-semibold text-white/80 transition-colors hover:text-white">{link.label}</Link>)}
					</nav>
					<div className="flex flex-wrap items-center gap-2">
						<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"><Download className="h-4 w-4" /> Resume</a>
						<a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring grid h-11 w-11 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"><Linkedin className="h-4 w-4" /><ArrowUpRight className="sr-only" /></a>
						<a href={portfolioData.profile.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring grid h-11 w-11 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"><Github className="h-4 w-4" /><ArrowUpRight className="sr-only" /></a>
					</div>
				</div>
			</div>

			<div className="border-t border-white/20">
				<div className="container flex flex-col gap-2 py-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
					<span>© {new Date().getFullYear()} Aniekan Winner Anietie</span>
					<span>{portfolioData.profile.location} · Rigorous, inventive, dependable</span>
				</div>
			</div>
		</footer>
	);
}
