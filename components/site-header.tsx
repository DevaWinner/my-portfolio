"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/experience", label: "Experience" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
];

export function SiteHeader() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 rounded-xl border border-border/80 bg-background/95 backdrop-blur">
				<div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
					<Link href="/" className="inline-flex min-w-0 items-center">
						<span className="truncate font-heading text-lg font-semibold sm:text-xl">
							{portfolioData.profile.name}
						</span>
					</Link>

					<div className="hidden items-center gap-3 md:flex">
						<nav className="flex items-center gap-1">
							{navItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											"rounded-md px-3 py-2 text-sm font-medium transition-colors",
											isActive
												? "bg-card text-foreground"
												: "text-muted hover:text-foreground",
										)}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>
						<a
							href={portfolioData.profile.contact.resumePath}
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "cta", size: "sm" })}
						>
							<Download className="h-4 w-4" />
							Download Resume
						</a>
					</div>

					<button
						type="button"
						className={cn(
							buttonVariants({ variant: "ghost", size: "sm" }),
							"md:hidden",
						)}
						onClick={() => setMobileMenuOpen(true)}
						aria-label="Open menu"
						aria-expanded={mobileMenuOpen}
						aria-controls="site-navigation-drawer"
					>
						<Menu className="h-5 w-5" />
					</button>
				</div>
			</header>

			<div
				className={cn(
					"fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden",
					mobileMenuOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0",
				)}
				onClick={() => setMobileMenuOpen(false)}
			/>

			<aside
				id="site-navigation-drawer"
				className={cn(
					"fixed inset-x-2 top-20 z-[60] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl border border-border/90 bg-background/95 p-5 shadow-2xl backdrop-blur transition-all md:hidden",
					mobileMenuOpen
						? "translate-y-0 opacity-100"
						: "pointer-events-none -translate-y-2 opacity-0",
				)}
			>
				<div className="mb-8 flex items-center justify-between">
					<p className="font-heading text-base font-semibold">Navigation</p>
					<button
						type="button"
						className={buttonVariants({ variant: "ghost", size: "sm" })}
						onClick={() => setMobileMenuOpen(false)}
						aria-label="Close menu"
					>
						<X className="h-4 w-4" />
					</button>
				</div>

				<nav className="space-y-2">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"block rounded-md px-3 py-2 text-sm font-medium",
								pathname === item.href
									? "bg-card text-foreground"
									: "text-muted hover:text-foreground",
							)}
							onClick={() => setMobileMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="mt-8 space-y-2">
					<a
						href={`mailto:${portfolioData.profile.contact.email}`}
						className={buttonVariants({
							variant: "primary",
							size: "md",
							className: "w-full",
						})}
					>
						<Mail className="h-4 w-4" />
						Contact
					</a>
					<a
						href={portfolioData.profile.contact.resumePath}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({
							variant: "outline",
							size: "md",
							className: "w-full",
						})}
					>
						<Download className="h-4 w-4" />
						Download Resume
					</a>
				</div>
			</aside>
		</>
	);
}
