import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

const featuredProjects = portfolioData.projects.filter((project) => project.featured);
const otherProjects = portfolioData.projects.filter((project) => !project.featured);

export default function ProjectsPage() {
  return (
    <div className="space-y-9 pb-16 sm:space-y-12">
      <PageHero
        kicker="Projects"
        title="Project Work Across Product, Client, and Platform Delivery"
        description="Selected case studies that reflect backend rigor, frontend quality, and practical product execution."
      />

      <section className="container space-y-5">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">Featured Work</h2>
          <p className="mt-2 text-sm text-muted">Projects with strongest alignment to current software engineering focus.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="container space-y-5">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">Additional Delivery Work</h2>
          <p className="mt-2 text-sm text-muted">Supporting project history from prior engagements and production contributions.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="container">
        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Delivery Pattern</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-foreground/90 md:grid-cols-3">
            <p>
              <strong>Discover:</strong> clarify user and business constraints with engineering feasibility early.
            </p>
            <p>
              <strong>Build:</strong> implement modular services and UI workflows with testing and operational visibility.
            </p>
            <p>
              <strong>Improve:</strong> iterate based on usage, defects, and performance signals to sustain product value.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
