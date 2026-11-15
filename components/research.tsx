import { BookOpen, ExternalLink, Github, Quote, Telescope } from "lucide-react"

import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { publications, researchProjects } from "@/lib/data/research"

/**
 * Research & Publications.
 *
 * The two blocks are intentionally different artefacts:
 *   • a journal publication is shown with academic framing (journal, publisher, DOI)
 *   • a research project is shown with engineering framing (methodology, metrics, repo)
 * They are never merged, and a research project is never labelled as a published paper.
 */
export default function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Research &amp; Publications"
          title="Published work and research projects"
          description="One accepted journal paper and one comparative deep-learning study. They are listed separately below."
        />

        {/* ── Peer-reviewed publication ─────────────────────────────── */}
        <div className="mt-14">
          <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <BookOpen className="h-4 w-4 text-primary" />
            Journal publication
          </h3>

          <div className="mt-5 space-y-6">
            {publications.map((publication, index) => (
              <Reveal key={publication.id} delay={index * 0.05}>
                <article className="panel relative overflow-hidden rounded-xl p-6 sm:p-8">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {publication.authorRole}
                    </span>
                    <span className="rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {publication.status}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {publication.year}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">{publication.title}</h4>

                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{publication.journal}</span>
                    <span aria-hidden className="mx-2 text-border">
                      |
                    </span>
                    Publisher: <span className="font-medium text-foreground">{publication.publisher}</span>
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {publication.description}
                  </p>

                  <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <Quote className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                    <span>{publication.method}</span>
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-soft inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      Read Publication
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      DOI 10.1007/s12572-026-00451-z
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Research project ──────────────────────────────────────── */}
        <div className="mt-16">
          <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <Telescope className="h-4 w-4 text-accent" />
            Research project
          </h3>

          <div className="mt-5 space-y-6">
            {researchProjects.map((study, index) => (
              <Reveal key={study.id} delay={index * 0.05}>
                <article className="panel relative overflow-hidden rounded-xl p-6 sm:p-8">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent via-accent/60 to-transparent"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
                      Research project
                    </span>
                    <span className="rounded-full border border-border bg-muted px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {study.period}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">{study.title}</h4>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{study.subtitle}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {study.organization}
                  </p>

                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{study.summary}</p>

                  {/* Key results */}
                  <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 rounded-lg border border-border bg-muted/40 p-5 sm:grid-cols-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="flex flex-col-reverse">
                        <dt className="mt-1 text-xs leading-snug text-muted-foreground">{result.label}</dt>
                        <dd className="font-mono text-xl font-bold sm:text-2xl">{result.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Methodology */}
                  <h5 className="mt-8 text-sm font-semibold uppercase tracking-wider text-foreground">
                    Methodology
                  </h5>
                  <ul className="mt-4 space-y-3">
                    {study.methodology.map((step) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key findings */}
                  <div className="mt-8 rounded-lg border border-accent/25 bg-accent/5 p-5">
                    <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Key findings</h5>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.findings}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7">
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-foreground">Technologies</h5>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {study.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.github || study.reportUrl ? (
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      {study.github ? (
                        <a
                          href={study.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                        >
                          <Github className="h-4 w-4" />
                          View GitHub Repository
                        </a>
                      ) : null}
                      {study.reportUrl ? (
                        <a
                          href={study.reportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                        >
                          <BookOpen className="h-4 w-4" />
                          Read Research Report
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
