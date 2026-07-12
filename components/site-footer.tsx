import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { portfolioData } from "@/lib/portfolio-data";

const footerLinks = [
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Selected work" },
	{ href: "/about", label: "About" },
];

export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_0.6fr_0.7fr] md:gap-12">
				<div>
					<p className="font-heading text-lg font-semibold">Aniekan Winner Anietie</p>
					<p className="mt-4 max-w-sm text-sm leading-6 text-muted">Full-stack software engineer and technical founder building secure multi-tenant platforms, AI systems, and production products.</p>
				</div>
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Navigate</p>
					<nav className="mt-4 grid gap-3">{footerLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold hover:text-primary">{link.label}</Link>)}</nav>
				</div>
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Connect</p>
					<div className="mt-4 grid gap-3">
						<a href={`mailto:${portfolioData.profile.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Mail className="h-4 w-4" /> Email</a>
						<a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
						<a href={portfolioData.profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"><Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" /></a>
					</div>
				</div>
			</div>
			<div className="border-t border-border">
				<div className="container flex flex-wrap justify-between gap-3 py-5 text-xs text-muted"><span>© {new Date().getFullYear()} Aniekan Winner Anietie</span><span>{portfolioData.profile.location} · Available globally</span></div>
			</div>
		</footer>
	);
}
