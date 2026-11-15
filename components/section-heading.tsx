"use client"

import Reveal from "@/components/reveal"

type SectionHeadingProps = {
  /** two-digit section number, e.g. "01" */
  index: string
  /** short label shown next to the number */
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

/**
 * Shared heading block so every section has identical rhythm,
 * numbering and eyebrow treatment.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <Reveal className={centered ? "text-center" : undefined}>
      <p
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary ${
          centered ? "justify-center" : ""
        }`}
      >
        <span>{index}</span>
        <span aria-hidden className="h-px w-8 bg-primary/50" />
        <span>{eyebrow}</span>
      </p>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl">{title}</h2>

      {description ? (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
