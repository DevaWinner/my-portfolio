import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExperienceItem } from "@/lib/portfolio-data";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <Card className="border-border/90 bg-card/95">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="text-xl">{item.role}</CardTitle>
            <CardDescription className="mt-1 text-sm">
              {item.company} | {item.location}
            </CardDescription>
          </div>
          <div className="text-sm font-semibold text-primary">{item.period}</div>
        </div>

        {item.employmentType ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{item.employmentType}</p> : null}

        <p className="text-sm leading-relaxed text-foreground/90">{item.summary}</p>
      </CardHeader>

      <CardContent className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Outcomes</p>
          <ul className="space-y-2 text-sm text-foreground/90">
            {item.outcomes.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Responsibilities</p>
          <ul className="space-y-2 text-sm text-foreground/90">
            {item.responsibilities.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Stack and skills</p>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
