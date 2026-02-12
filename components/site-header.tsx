"use client";

import Image from "next/image";
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
  { href: "/about", label: "About" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="inline-flex min-w-0 items-center gap-3">
            <Image
              src="/logo-mark.svg"
              alt="Aniekan Winner logo"
              width={36}
              height={36}
              priority
              className="h-9 w-9 shrink-0"
            />
            <span className="truncate font-heading text-sm font-semibold">{portfolioData.profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-card text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href={portfolioData.profile.contact.resumePath}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            type="button"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "md:hidden")}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-72 border-l border-border bg-background p-5 transition-transform md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
                pathname === item.href ? "bg-card text-foreground" : "text-muted hover:text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-2">
          <a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "md", className: "w-full" })}>
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            href={portfolioData.profile.contact.resumePath}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "md", className: "w-full" })}
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </aside>
    </>
  );
}
