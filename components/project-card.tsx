import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectItem } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full border-border/90 bg-card/95">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <CardDescription className="mt-1 text-sm">{project.role}</CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary">{project.category}</Badge>
            {project.status ? <Badge>{project.status}</Badge> : null}
          </div>
        </div>

        <p className="text-sm text-muted">{project.period}</p>
        <p className="text-sm leading-relaxed text-foreground/90">{project.summary}</p>
      </CardHeader>

      <CardContent className="space-y-5">
        <ul className="space-y-2 text-sm text-foreground/90">
          {project.highlights.map((point) => (
            <li key={point}>- {point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {project.links?.length ? (
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
