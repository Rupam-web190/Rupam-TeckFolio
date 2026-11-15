"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { FileText, Menu, X } from "lucide-react"

import SocialLinks from "@/components/social-links"
import ThemeToggle from "@/components/theme-toggle"
import { navItems, site } from "@/lib/data/site"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState(navItems[0].id)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight whichever section currently crosses the middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1800px] flex-nowrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2"
          aria-label={`${site.name} — back to top`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-card font-mono text-sm font-bold text-primary transition-colors group-hover:border-primary/50">
            {site.initials}
          </span>
          <span className="hidden whitespace-nowrap text-xs font-semibold tracking-tight sm:block 2xl:text-sm">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden min-w-0 flex-nowrap items-center gap-0 xl:flex">
          {navItems.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active ? "true" : undefined}
                className={`relative whitespace-nowrap rounded-full px-1.5 py-2 text-[11px] font-medium transition-colors 2xl:px-2 2xl:text-xs ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/25"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 flex-nowrap items-center gap-1.5">
          <SocialLinks className="hidden shrink-0 xl:flex" size="sm" />

          <ThemeToggle className="shrink-0" />

          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90 2xl:gap-2 2xl:px-3.5 2xl:text-sm"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary xl:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md xl:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <SocialLinks className="pt-3" />
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="hairline absolute inset-x-0 bottom-0 h-px origin-left"
      />
    </header>
  )
}
