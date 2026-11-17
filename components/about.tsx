"use client"

import Image from "next/image"
import { GraduationCap } from "lucide-react"
import CodeBackground from "@/components/code-background"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { education, focusAreas, site } from "@/lib/data/site"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <CodeBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Full-stack builder with a research mindset"
          description="Final-year B.Tech Computer Science & Engineering student at MCKV Institute of Engineering (MAKAUT), graduating in 2027 with a 9.60 CGPA."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card glow-soft">
              <Image
                src="/rupam-profile-2.jpeg"
                alt="Rupam Majumdar"
                width={876}
                height={1388}
                sizes="(max-width: 1024px) 80vw, 400px"
                className="h-auto w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-border bg-card/90 px-3.5 py-2.5 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold">{site.name}</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE · MCKV Institute of Engineering</p>
                </div>
                <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
              </div>
            </div>
          </Reveal>

          {/* Narrative + facts */}
          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                My work sits where software engineering meets applied AI. I build and ship complete products — Spring Boot
                services with layered MVC architecture, FastAPI endpoints, Node/Express REST APIs, and React/Next.js
                frontends — and I run the machine-learning experiments that back them up.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                During my research internship with the IEEE Computational Intelligence Society (Kolkata Chapter), I
                independently benchmarked seven CNN architectures for facial emotion recognition on the RAF-DB and CK+
                datasets — the best model reached{" "}
                <span className="mx-0.5 inline-block rounded-md border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-primary">
                  72.88%
                </span>{" "}
                test accuracy with a{" "}
                <span className="mx-0.5 inline-block rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-accent">
                  0.923
                </span>{" "}
                ROC-AUC. I have also co-authored a paper on fuzzy logic-based headphone volume control, accepted for
                publication in the International Journal of Advances in Engineering Sciences and Applied Mathematics
                (2026).
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m currently open to internship and full-time opportunities where I can ship production software and
                keep working on applied machine learning.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.2}>
                <div className="h-full rounded-xl border border-border bg-card/70 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Academic snapshot</h3>
                  <ul className="mt-5 space-y-3">
                    {education.map((entry) => (
                      <li
                        key={entry.qualification}
                        className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{entry.qualification}</p>
                          <p className="text-xs text-muted-foreground">{entry.institute}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-mono text-sm text-primary">{entry.result}</p>
                          <p className="text-xs text-muted-foreground">{entry.period}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="h-full rounded-xl border border-border bg-card/70 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Focus areas</h3>
                  <ul className="mt-5 space-y-3">
                    {focusAreas.map((area, index) => (
                      <li key={area.title} className="flex gap-3">
                        <span className="mt-0.5 font-mono text-xs text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{area.title}</p>
                          <p className="text-xs leading-relaxed text-muted-foreground">{area.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
