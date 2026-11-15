import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { experience } from "@/lib/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Professional Experience"
          title="Where I've built and researched"
          description="Five training and internship engagements across full-stack Java engineering, deep-learning research, generative AI and data visualisation."
        />

        <ol className="relative mt-14 space-y-6">
          <span
            aria-hidden
            className="absolute bottom-4 left-1.5 top-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
          />

          {experience.map((entry, index) => (
            <li key={entry.id} className="relative pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-7 h-3 w-3 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15"
              />

              <Reveal delay={index * 0.05}>
                <article className="rounded-xl border border-border bg-card/70 p-6 transition-colors duration-200 hover:border-primary/40">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">
                        {entry.role}
                        {entry.focus ? <span className="font-normal text-muted-foreground"> — {entry.focus}</span> : null}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">{entry.organization}</p>
                    </div>
                    <p className="shrink-0 rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {entry.period}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.tags?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border bg-muted/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
