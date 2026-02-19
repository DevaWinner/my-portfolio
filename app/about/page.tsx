import { Download, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16 sm:space-y-16">
      <PageHero
        kicker="About"
        title="Background, Skills, Education, and Professional Context"
        description="A fuller overview of technical strengths, learning path, and the engineering approach behind my recent work."
        actions={
          <>
            <a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}>
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href={portfolioData.profile.contact.resumePath}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "cta", size: "lg" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </>
        }
      />

      <section className="container space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Capabilities</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Skills and Technical Stack</h2>
        </div>
        <div className="divide-y divide-border/70 border-y border-border/70">
          {portfolioData.skills.map((category) => (
            <article key={category.label} className="grid gap-4 py-6 lg:grid-cols-[16rem_1fr] lg:gap-6">
              <h3 className="font-heading text-xl font-semibold tracking-tight">{category.label}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-border/80 px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Background</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Education</h2>
          <div className="mt-5 space-y-6">
            {portfolioData.education.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="border-l border-border/70 pl-4">
                <p className="font-heading text-lg font-semibold">{item.degree}</p>
                <p className="text-sm text-muted">
                  {item.institution} | {item.date}
                </p>
                <p className="mt-2 text-sm text-foreground/90">{item.coursework}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Credentials</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Training and Certifications</h2>
          <div className="mt-5 space-y-6">
            {portfolioData.certifications.map((item) => (
              <article key={item.name} className="border-l border-border/70 pl-4">
                <p className="font-heading text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-muted">
                  {item.provider} | {item.period}
                </p>
                <ul className="mt-2 space-y-2 text-sm text-foreground/90">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/60 to-background px-6 py-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Community</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Service and Mentorship</h2>
          <div className="mt-5">
            {portfolioData.service.map((item, index) => (
              <article key={item.organization} className={cn(index < portfolioData.service.length - 1 && "mb-5 border-b border-border/70 pb-5")}>
                <p className="font-heading text-lg font-semibold">
                  {item.role} - {item.organization}
                </p>
                <p className="text-sm text-muted">{item.period}</p>
                <p className="mt-2 text-sm text-foreground/90">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
