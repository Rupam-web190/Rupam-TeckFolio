"use client"

import type { CSSProperties } from "react"

type Token = { text: string; style: CSSProperties }

/**
 * Decorative "build + test" layer for the About section: drifting monospace
 * shell/commit/test fragments over a faint grid. Purely presentational —
 * hidden from assistive tech and pointer events, and frozen by the global
 * prefers-reduced-motion rule.
 */
const tokens: Token[] = [
  { text: "$ npm run test", style: { top: "10%", left: "4%", animationDelay: "0s" } },
  { text: "✓ 24 passed · 0 failed", style: { top: "30%", right: "6%", animationDelay: "1.1s" } },
  { text: "const model = train(dataset)", style: { bottom: "24%", left: "6%", animationDelay: "2.3s" } },
  { text: 'git commit -m "feat: ship"', style: { bottom: "12%", right: "8%", animationDelay: "0.7s" } },
  { text: "{ }", style: { top: "50%", left: "45%", animationDelay: "1.8s" } },
  { text: "accuracy: 72.88%", style: { top: "70%", right: "34%", animationDelay: "3.1s" } },
  { text: ">_", style: { top: "6%", right: "26%", animationDelay: "2.6s" } },
  { text: "</>", style: { bottom: "38%", left: "22%", animationDelay: "0.4s" } },
]

export default function CodeBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
      <div className="grid-surface absolute inset-0 opacity-40" />

      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />

      {tokens.map((token) => (
        <span
          key={token.text}
          style={token.style}
          className="animate-drift absolute font-mono text-[11px] text-primary/45 sm:text-xs"
        >
          {token.text}
        </span>
      ))}

      <span className="animate-pulse absolute bottom-1/3 right-1/2 font-mono text-sm text-primary/60">▍</span>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
