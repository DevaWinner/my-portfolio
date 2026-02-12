import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { portfolioData } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-background/90">
      <div className="container grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex items-start gap-3">
          <Image
            src="/logo-mark.svg"
            alt="Aniekan Winner logo"
            width={40}
            height={40}
            className="mt-0.5 h-10 w-10 shrink-0"
          />
          <div>
            <p className="font-heading text-lg font-semibold">{portfolioData.profile.name}</p>
            <p className="mt-1 text-sm text-muted">{portfolioData.profile.headline}</p>
            <p className="mt-3 text-sm text-muted">{portfolioData.profile.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href={`mailto:${portfolioData.profile.contact.email}`} className="inline-flex items-center gap-2 text-muted hover:text-foreground">
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={portfolioData.profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={portfolioData.profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <Link href="/projects" className="text-muted hover:text-foreground">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
