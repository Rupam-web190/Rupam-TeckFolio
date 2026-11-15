import { BadgeCheck, Target, Trophy } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { achievements, certifications } from "@/lib/data/achievements"

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          eyebrow="Achievements & Certifications"
          title="Recognition and credentials"
          description="Hackathons, competitions and certification tracks completed alongside coursework and internships."
        />

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-wider text-primary">
          Hackathons &amp; competitions
        </h3>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {achievements.map((entry, index) => {
            const Icon = entry.kind === "award" ? Trophy : Target
            return (
              <Reveal key={entry.title + entry.context} delay={index * 0.05}>
                <article className="h-full rounded-xl border border-border bg-card/70 p-6 transition-colors duration-200 hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${
                        entry.kind === "award"
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-base font-semibold">{entry.title}</h4>
                  </div>

                  <p className="mt-4 text-sm font-medium text-primary">{entry.context}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <h3 className="mt-16 text-sm font-semibold uppercase tracking-wider text-accent">Certifications</h3>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <li key={certification.title}>
              <Reveal delay={index * 0.04} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card/60 p-4">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium">{certification.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{certification.issuer}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
