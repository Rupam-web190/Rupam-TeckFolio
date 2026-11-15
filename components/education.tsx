import { GraduationCap } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeading from "@/components/section-heading"
import { education } from "@/lib/data/site"

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Education"
          title="Academic record"
          description="B.Tech Computer Science & Engineering at MCKV Institute of Engineering (MAKAUT), 2023–2027."
        />

        <Reveal className="mt-14">
          <ul className="mx-auto max-w-5xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-card/70">
            {education.map((entry) => (
              <li
                key={entry.qualification}
                className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{entry.qualification}</p>
                    <p className="text-sm text-muted-foreground">{entry.institute}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-14 sm:pl-0">
                  <span className="font-mono text-[11px] text-muted-foreground">{entry.period}</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {entry.result}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
