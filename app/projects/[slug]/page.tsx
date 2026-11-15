import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Github, Layers, Target, Wrench } from "lucide-react"

import Footer from "@/components/footer"
import SiteBackground from "@/components/site-background"
import ThemeToggle from "@/components/theme-toggle"
import { projectIcons } from "@/components/project-icon"
import { getProject, projects } from "@/lib/data/projects"
import { site } from "@/lib/data/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return { title: "Project not found" }

  return {
    title: `${project.title} — ${site.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.tagline,
      type: "article",
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const Icon = projectIcons[project.slug]
  const index = projects.findIndex((entry) => entry.slug === project.slug)
  const previous = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined

  return (
    <div className="relative min-h-screen">
      <SiteBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <Link href="/#home" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card font-mono text-sm font-bold text-primary transition-colors group-hover:border-primary/50">
                {site.initials}
              </span>
              <span className="hidden text-sm font-semibold tracking-tight sm:block">{site.name}</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/#projects"
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">All projects</span>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          {/* ── Title block ─────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-2">
            {Icon ? (
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-card text-primary">
                <Icon className="h-5 w-5" />
              </span>
            ) : null}
            <ul className="flex flex-wrap gap-1.5">
              {project.categories.map((category) => (
                <li
                  key={category}
                  className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{project.tagline}</p>

          {/* ── Actions ─────────────────────────────────────────────── */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-soft inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Github className="h-4 w-4" />
                View Source Repository
              </a>
            ) : (
              <span
                title="GitHub repository coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 px-5 py-2.5 text-sm font-medium text-muted-foreground"
              >
                <Clock3 className="h-4 w-4" />
                Repository coming soon
              </span>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
            >
              Ask me about this project
            </Link>
          </div>

          {/* ── Metrics ─────────────────────────────────────────────── */}
          {project.metrics ? (
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 rounded-xl border border-border bg-card/60 p-5 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug text-muted-foreground">{metric.label}</dt>
                  <dd className="font-mono text-xl font-bold sm:text-2xl">{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {/* ── Overview ────────────────────────────────────────────── */}
          <section className="mt-12">
            <h2 className="text-lg font-bold">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          </section>

          {/* ── Problem ─────────────────────────────────────────────── */}
          <section className="mt-10 rounded-xl border border-border bg-card/60 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Target className="h-4 w-4 text-primary" />
              Problem statement
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
          </section>

          {/* ── Technical implementation ────────────────────────────── */}
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Wrench className="h-4 w-4 text-primary" />
              Technical implementation
            </h2>
            <ul className="mt-4 space-y-3">
              {project.implementation.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Key features ────────────────────────────────────────── */}
          <section className="mt-10">
            <h2 className="text-lg font-bold">Key features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card/60 p-3.5 text-sm leading-snug text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Stack ───────────────────────────────────────────────── */}
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <Layers className="h-4 w-4 text-primary" />
              Technology stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Prev / next ─────────────────────────────────────────── */}
          <nav aria-label="Other projects" className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/45"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </span>
                <span className="mt-2 text-sm font-semibold transition-colors group-hover:text-primary">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span aria-hidden />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/45 sm:text-right"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:justify-end">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 text-sm font-semibold transition-colors group-hover:text-primary">{next.title}</span>
              </Link>
            ) : null}
          </nav>
        </main>

        <Footer />
      </div>
    </div>
  )
}
