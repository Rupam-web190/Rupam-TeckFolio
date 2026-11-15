"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Check, Clock3, Github } from "lucide-react"

import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { projectIcons } from "@/components/project-icon"
import { projectCategories, projects, type ProjectCategory } from "@/lib/data/projects"
import { site } from "@/lib/data/site"
import { cn } from "@/lib/utils"

type Filter = ProjectCategory | "All"

const filters: readonly Filter[] = ["All", ...projectCategories]

export default function Projects() {
  const [active, setActive] = useState<Filter>("All")

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.categories.includes(active))),
    [active],
  )

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Featured Projects"
          title="Things I've designed, built and shipped"
          description="Full-stack applications, GenAI tooling and deep-learning research. Each card opens a full case study with the problem, the implementation and the stack."
        />

        {/* ── Category filters ──────────────────────────────────────── */}
        <Reveal className="mt-10">
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = active === filter
              const count =
                filter === "All"
                  ? projects.length
                  : projects.filter((project) => project.categories.includes(filter)).length

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                    isActive
                      ? "border-primary/40 text-primary"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="project-filter-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/25"
                      transition={{ type: "spring", stiffness: 340, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">
                    {filter}
                    <span className="ml-1.5 font-mono text-[11px] opacity-60">{count}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ── Cards ─────────────────────────────────────────────────── */}
        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => {
              const Icon = projectIcons[project.slug]

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_60px_-28px_var(--glow)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between gap-4">
                    {Icon ? (
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-muted text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                    ) : null}
                    <ul className="flex flex-wrap justify-end gap-1.5">
                      {project.categories.map((category) => (
                        <li
                          key={category}
                          className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug">
                    <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

                  {project.metrics ? (
                    <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="flex flex-col-reverse">
                          <dt className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{metric.label}</dt>
                          <dd className="font-mono text-base font-bold">{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <ul className="mt-5 space-y-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-snug text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    ) : (
                      <span
                        title="GitHub repository coming soon"
                        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-dashed border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground"
                      >
                        <Clock3 className="h-4 w-4" />
                        Repo coming soon
                      </span>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">No projects in this category yet.</p>
        ) : null}

        <Reveal className="mt-12 text-center">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
            Browse all repositories on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
