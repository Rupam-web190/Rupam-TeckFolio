import type { ComponentType } from "react"
import { BrainCircuit, Code2, Cpu, Database, Layers, Sparkles } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { skillGroups, type SkillGroup } from "@/lib/data/skills"

const icons: Record<SkillGroup["key"], ComponentType<{ className?: string }>> = {
  languages: Code2,
  fullstack: Layers,
  ai: BrainCircuit,
  genai: Sparkles,
  data: Database,
  fundamentals: Cpu,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="Six working groups spanning backend services, deep-learning research and data tooling — each one used in a shipped project, an internship or a published study."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.key]
            return (
              <Reveal key={group.key} delay={index * 0.05}>
                <article className="group h-full rounded-xl border border-border bg-card/70 p-6 transition-colors duration-200 hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-muted/50 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold">{group.title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.summary}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
