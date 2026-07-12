"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Work" },
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
			<header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
				<div className="container flex h-[4.5rem] items-center justify-between gap-6">
					<Link href="/" className="focus-ring flex min-w-0 items-center rounded-md" aria-label="Aniekan Winner Anietie, home">
						<div className="min-w-0">
							<span className="block truncate font-heading text-base font-semibold leading-none">Aniekan Winner Anietie</span>
							<span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted sm:block">Engineer &amp; founder</span>
						</div>
					</Link>

					<div className="hidden items-center gap-2 md:flex">
						<nav className="flex items-center" aria-label="Primary navigation">
							{navItems.map((item) => {
								const active = pathname === item.href;
								return (
									<Link key={item.href} href={item.href} className={cn("focus-ring rounded-md px-3 py-2 text-sm font-semibold transition-colors", active ? "text-primary" : "text-muted hover:text-foreground")} aria-current={active ? "page" : undefined}>
										{item.label}
									</Link>
								);
							})}
						</nav>
						<button type="button" onClick={toggleTheme} aria-label={themeLabel} className={buttonVariants({ variant: "ghost", size: "sm", className: "w-9 px-0" })}>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "cta", size: "sm" })}>
							<Download className="h-4 w-4" /> Resume
						</a>
					</div>

					<div className="flex items-center gap-1 md:hidden">
						<button type="button" onClick={toggleTheme} aria-label={themeLabel} className={buttonVariants({ variant: "ghost", size: "sm", className: "w-9 px-0" })}>
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</button>
						<button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} className={buttonVariants({ variant: "ghost", size: "sm", className: "w-9 px-0" })}>
							{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</div>
			</header>

			<div className={cn("fixed inset-x-0 top-[4.5rem] z-40 border-b border-border bg-background px-5 py-6 shadow-soft transition md:hidden", mobileMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0")}>
				<nav className="mx-auto grid max-w-6xl gap-1" aria-label="Mobile navigation">
					{navItems.map((item) => (
						<Link key={item.href} href={item.href} className={cn("rounded-md px-3 py-3 text-base font-semibold", pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground")}>
							{item.label}
						</Link>
					))}
					<a href={portfolioData.profile.contact.resumePath} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "primary", size: "md", className: "mt-4 w-full" })}>
						<Download className="h-4 w-4" /> Download resume
					</a>
				</nav>
			</div>
		</>
	);
}
