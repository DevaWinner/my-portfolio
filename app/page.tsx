import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

const featuredExperiences = portfolioData.experience.slice(0, 3);
const featuredProjects = portfolioData.projects.filter((project) => project.featured).slice(0, 4);

export default function HomePage() {
  return (
    <div className="space-y-14 pb-16">
      <PageHero
        kicker="Portfolio"
        title={`${portfolioData.profile.name} - ${portfolioData.profile.title}`}
        description={portfolioData.profile.headline}
        actions={
          <>
            <a href={`mailto:${portfolioData.profile.contact.email}`} className={buttonVariants({ variant: "primary", size: "lg" })}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href={portfolioData.profile.contact.resumePath}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </>
        }
      />

      <section className="container">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {portfolioData.metrics.map((metric) => (
            <Card key={metric.label} className="border-border/90 bg-card/95">
              <CardContent className="p-5">
                <p className="font-heading text-2xl font-bold text-primary">{metric.value}</p>
                <p className="mt-2 text-sm text-muted">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-foreground/90">
            <p>{portfolioData.profile.summary}</p>
            <p>
              I design and ship production software that balances domain reliability, clear product experience, and measurable business outcomes.
              My recent work spans healthcare systems, fintech operations, and AI-enabled tooling.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Current Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/90">
              {portfolioData.focusAreas.map((focus) => (
                <li key={focus}>- {focus}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Experience</p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Recent Roles and Outcomes</h2>
          </div>
          <Link href="/experience" className={buttonVariants({ variant: "ghost", size: "md" })}>
            View full experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featuredExperiences.map((item) => (
            <Card key={item.id} className="border-border/90 bg-card/95">
              <CardHeader className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.period}</p>
                <CardTitle className="text-lg">{item.role}</CardTitle>
                <p className="text-sm text-muted">{item.company}</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/90">
                <p>{item.summary}</p>
                <ul className="space-y-2">
                  {item.outcomes.slice(0, 2).map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Projects</p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Selected Delivery Highlights</h2>
          </div>
          <Link href="/projects" className={buttonVariants({ variant: "ghost", size: "md" })}>
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
