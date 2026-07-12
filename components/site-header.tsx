"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FolderKanban, Home, Mail, Moon, Sun, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
	{ href: "/", label: "Home", mobileLabel: "Home", icon: Home },
	{ href: "/projects", label: "Work", mobileLabel: "Work", icon: FolderKanban },
	{ href: "/experience", label: "Experience", mobileLabel: "Career", icon: BriefcaseBusiness },
	{ href: "/about", label: "About", mobileLabel: "About", icon: UserRound },
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
	const [theme, setTheme] = useState<ThemeMode>("light");

	useEffect(() => setTheme(getResolvedTheme()), []);

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
			<aside className="fixed right-3 top-1/2 z-40 hidden w-14 -translate-y-1/2 xl:block" aria-label="Site controls">
				<div className="overflow-visible rounded-2xl border border-border bg-background p-1.5 shadow-overlay">
					<Link href="/" className="focus-ring grid h-11 place-items-center rounded-xl bg-brand text-xs font-bold text-brand-foreground" aria-label="Aniekan Winner, home">
						AW
					</Link>

					<nav className="mt-1.5 border-t border-border pt-1.5" aria-label="Primary navigation">
						{navItems.map((item) => {
							const active = pathname === item.href;
							const Icon = item.icon;
							return (
								<Link key={item.href} href={item.href} className={cn("focus-ring group relative grid h-11 place-items-center rounded-xl text-muted transition-colors hover:bg-card hover:text-foreground", active && "bg-card text-primary")} aria-label={item.label} aria-current={active ? "page" : undefined}>
									<Icon className="h-4 w-4" />
									<span className="pointer-events-none absolute right-full mr-3 rounded-md bg-inverse px-3 py-2 text-xs font-semibold text-inverse-foreground opacity-0 shadow-overlay transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{item.label}</span>
								</Link>
							);
						})}
					</nav>

					<div className="mt-1.5 grid gap-1 border-t border-border pt-1.5">
						<a href={`mailto:${portfolioData.profile.contact.email}`} className="focus-ring group relative grid h-11 place-items-center rounded-xl text-primary transition-colors hover:bg-card" aria-label="Contact me">
							<Mail className="h-4 w-4" />
							<span className="pointer-events-none absolute right-full mr-3 rounded-md bg-inverse px-3 py-2 text-xs font-semibold text-inverse-foreground opacity-0 shadow-overlay transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Contact</span>
						</a>
						<button type="button" onClick={toggleTheme} aria-label={themeLabel} className="focus-ring group relative grid h-11 place-items-center rounded-xl text-foreground transition-colors hover:bg-card">
							{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
							<span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-inverse px-3 py-2 text-xs font-semibold text-inverse-foreground opacity-0 shadow-overlay transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{theme === "dark" ? "Light mode" : "Dark mode"}</span>
						</button>
					</div>
				</div>
			</aside>

			<nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 rounded-2xl border border-border bg-background p-1.5 shadow-overlay xl:hidden" aria-label="Primary navigation">
				{navItems.map((item) => {
					const active = pathname === item.href;
					const Icon = item.icon;
					return (
						<Link key={item.href} href={item.href} className={cn("focus-ring flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-xs font-semibold text-muted transition-colors hover:bg-card hover:text-foreground", active && "bg-brand text-brand-foreground hover:bg-brand hover:text-brand-foreground")} aria-current={active ? "page" : undefined}>
							<Icon className="h-4 w-4 shrink-0" />
							<span className="max-w-full truncate">{item.mobileLabel}</span>
						</Link>
					);
				})}
				<button type="button" onClick={toggleTheme} aria-label={themeLabel} className="focus-ring flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-xs font-semibold text-muted transition-colors hover:bg-card hover:text-foreground">
					{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
					<span>Theme</span>
				</button>
			</nav>
		</>
	);
}
