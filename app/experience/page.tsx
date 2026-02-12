import { ExperienceCard } from "@/components/experience-card";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  return (
    <div className="space-y-9 pb-16 sm:space-y-12">
      <PageHero
        kicker="Experience"
        title="Professional Experience and Delivery Outcomes"
        description="Detailed timeline of engineering roles, measurable outcomes, and the systems I have built across healthcare, fintech, and platform tooling."
      />

      <section className="container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {portfolioData.metrics.map((metric) => (
          <Card key={metric.label} className="border-border/90 bg-card/95">
            <CardContent className="p-5">
              <p className="font-heading text-2xl font-bold text-primary">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container space-y-5">
        {portfolioData.experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </section>

      <section className="container">
        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">How I Work</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-foreground/90 md:grid-cols-2">
            <p>
              I prioritize practical architecture: clear API contracts, observable services, and product decisions grounded in operational realities.
              My work generally starts with requirements clarity, then moves quickly into reliable implementation and verification loops.
            </p>
            <p>
              In distributed teams, I focus on maintainable delivery: readable code, clear handoffs, CI-backed confidence, and measurable product impact
              instead of output without outcomes.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
