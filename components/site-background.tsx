export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* blueprint grid */}
      <div className="absolute inset-0 grid-surface opacity-70 dark:opacity-100" />

      {/* drifting accent glows */}
      <div className="absolute -left-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
      <div
        className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[130px] animate-aurora"
        style={{ animationDelay: "4s" }}
      />

      {/* readability veil */}
      <div className="absolute inset-0 bg-background/60" />
    </div>
  )
}
