"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
	{ href: "/projects", label: "Work" },
	{ href: "/experience", label: "Experience" },
	{ href: "/about", label: "About" },
];

type ThemeMode = "light" | "dark";

function getResolvedTheme(): ThemeMode {
	if (typeof window === "undefined") return "light";
	const activeTheme = document.documentElement.dataset.theme;
	if (activeTheme === "light" || activeTheme === "dark") return activeTheme;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function SiteHeader() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [theme, setTheme] = useState<ThemeMode>("light");

	useEffect(() => setTheme(getResolvedTheme()), []);
	useEffect(() => setMobileMenuOpen(false), [pathname]);
	useEffect(() => {
		if (!mobileMenuOpen) return;
		function closeOnEscape(event: KeyboardEvent) {
			if (event.key === "Escape") setMobileMenuOpen(false);
		}
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [mobileMenuOpen]);

	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = nextTheme;
		setTheme(nextTheme);
		try {
			window.localStorage.setItem("theme", nextTheme);
		} catch {
			// Theme still applies when storage is unavailable.
		}
	}

	const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background">
				<div className="container flex h-[4.5rem] items-center justify-between gap-6">
					<Link href="/" className="focus-ring flex min-w-0 items-center gap-3 rounded-md" aria-label="Aniekan Winner Anietie, home">
						<span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">AW</span>
						<span className="min-w-0">
							<span className="block truncate text-sm font-semibold leading-tight">Aniekan Winner</span>
							<span className="type-label mt-0.5 hidden text-muted sm:block">Engineer &amp; founder</span>
						</span>
					</Link>

					<div className="hidden items-center gap-2 md:flex">
						<nav className="flex items-center" aria-label="Primary navigation">
							{navItems.map((item) => {
								const active = pathname === item.href;
								return (
									<Link key={item.href} href={item.href} className={cn("focus-ring relative rounded-md px-3 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:text-foreground", active && "text-primary after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-primary")} aria-current={active ? "page" : undefined}>
										{item.label}
									</Link>
								);
							})}
						</nav>
						<button type="button" onClick={toggleTheme} aria-label={themeLabel} className={buttonVariants({ variant: "ghost", size: "sm", className: "w-11 px-0" })}>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "sm" })}>
							<Mail className="h-4 w-4" /> Contact
						</a>
					</div>

					<div className="flex items-center gap-1 md:hidden">
						<button type="button" onClick={toggleTheme} aria-label={themeLabel} className={buttonVariants({ variant: "ghost", size: "sm", className: "w-11 px-0" })}>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						<button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" className={buttonVariants({ variant: "ghost", size: "sm", className: "w-11 px-0" })}>
							{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</div>
			</header>

			{mobileMenuOpen ? (
				<div id="mobile-navigation" className="fixed inset-x-0 top-[4.5rem] z-30 border-b border-border bg-background px-5 py-6 shadow-overlay md:hidden">
					<nav className="mx-auto grid max-w-6xl gap-1" aria-label="Mobile navigation">
						{navItems.map((item) => (
							<Link key={item.href} href={item.href} className={cn("focus-ring rounded-lg px-4 py-3 text-base font-semibold", pathname === item.href ? "bg-card text-primary" : "text-foreground")} aria-current={pathname === item.href ? "page" : undefined}>
								{item.label}
							</Link>
						))}
						<a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "md", className: "mt-4 w-full" })}>
							<Mail className="h-4 w-4" /> Contact me
						</a>
						<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "md", className: "w-full" })}>
							<Download className="h-4 w-4" /> Download resume
						</a>
					</nav>
				</div>
			) : null}
		</>
	);
}
