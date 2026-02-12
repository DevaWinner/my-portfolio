import { Download, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16">
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
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </>
        }
      />

      <section className="container grid gap-5 lg:grid-cols-2">
        {portfolioData.skills.map((category) => (
          <Card key={category.label} className="border-border/90 bg-card/95">
            <CardHeader>
              <CardTitle className="text-xl">{category.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container grid gap-5 lg:grid-cols-2">
        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {portfolioData.education.map((item) => (
              <div key={`${item.institution}-${item.degree}`}>
                <p className="font-heading text-lg font-semibold">{item.degree}</p>
                <p className="text-sm text-muted">
                  {item.institution} | {item.date}
                </p>
                <p className="mt-2 text-sm text-foreground/90">{item.coursework}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Training and Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {portfolioData.certifications.map((item) => (
              <div key={item.name}>
                <p className="font-heading text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-muted">
                  {item.provider} | {item.period}
                </p>
                <ul className="mt-2 space-y-2 text-sm text-foreground/90">
                  {item.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container">
        <Card className="border-border/90 bg-card/95">
          <CardHeader>
            <CardTitle className="text-2xl">Service and Mentorship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {portfolioData.service.map((item) => (
              <div key={item.organization}>
                <p className="font-heading text-lg font-semibold">
                  {item.role} - {item.organization}
                </p>
                <p className="text-sm text-muted">{item.period}</p>
                <p className="mt-2 text-sm text-foreground/90">{item.details}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
