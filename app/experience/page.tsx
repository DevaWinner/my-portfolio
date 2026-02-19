import { PageHero } from "@/components/page-hero";
import { portfolioData } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function ExperiencePage() {
  return (
    <div className="space-y-12 pb-16 sm:space-y-16">
      <PageHero
        kicker="Experience"
        title="Professional Experience and Delivery Outcomes"
        description="Detailed timeline of engineering roles, measurable outcomes, and the systems I have built across healthcare, fintech, and platform tooling."
      />

      <section className="container">
        <dl className="grid gap-5 rounded-2xl border border-border/80 bg-card/60 px-5 py-6 sm:grid-cols-2 sm:px-7 xl:grid-cols-4">
          {portfolioData.metrics.map((metric, index) => (
            <div key={metric.label} className={cn("space-y-1", index > 0 && "xl:border-l xl:border-border/70 xl:pl-6")}>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{metric.label}</dt>
              <dd className="font-heading text-2xl font-bold tracking-tight text-primary">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Roles, Scope, and Impact</h2>
        </div>

        <div>
          {portfolioData.experience.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                "relative border-l border-border/70 py-7 pl-6 md:grid md:grid-cols-[14rem_1fr] md:gap-8 md:border-l-0 md:pl-0",
                index < portfolioData.experience.length - 1 && "border-b border-border/70"
              )}
            >
              <span className="absolute -left-[5px] top-11 h-2.5 w-2.5 rounded-full bg-primary md:hidden" />

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.period}</p>
                <p className="text-sm font-semibold text-foreground/90">{item.company}</p>
                <p className="text-sm text-muted">{item.location}</p>
              </div>

              <div className="mt-4 space-y-5 md:mt-0">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{item.role}</h3>
                  {item.employmentType ? <p className="mt-1 text-sm text-muted">{item.employmentType}</p> : null}
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">{item.summary}</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Outcomes</p>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      {item.outcomes.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Responsibilities</p>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      {item.responsibilities.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-border/80 px-2.5 py-1 text-xs text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/60 to-background px-6 py-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Approach</p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">How I Work</h2>
          <div className="mt-5 grid gap-4 text-sm text-foreground/90 md:grid-cols-2">
            <p>
              I prioritize practical architecture: clear API contracts, observable services, and product decisions grounded in operational realities.
              My work generally starts with requirements clarity, then moves quickly into reliable implementation and verification loops.
            </p>
            <p>
              In distributed teams, I focus on maintainable delivery: readable code, clear handoffs, CI-backed confidence, and measurable product impact
              instead of output without outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
