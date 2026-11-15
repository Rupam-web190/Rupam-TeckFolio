"use client"

import Image from "next/image"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Download,
  MapPin,
} from "lucide-react"
import { heroStats, site } from "@/lib/data/site"
import SocialLinks from "@/components/social-links"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* ── Intro copy ─────────────────────────────────────────── */}
          <motion.div variants={container} initial={reduceMotion ? false : "hidden"} animate="show">
            <motion.div variants={item} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to internship &amp; full-time roles
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {site.location}
              </span>
            </motion.div>

            <motion.h1 variants={item} className="mt-6 text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{site.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-primary sm:text-sm"
            >
              {site.headline}
            </motion.p>

            <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.summary}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group glow-soft inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Find me</span>
              <SocialLinks />
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8 sm:grid-cols-4"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-bold sm:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ── Portrait in circular frame ─────────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-[21rem]"
          >
            <div aria-hidden className="absolute -inset-10 rounded-full bg-primary/15 blur-3xl" />
            <div aria-hidden className="ring-conic absolute inset-0 animate-spin-slow rounded-full" />
            <div aria-hidden className="absolute inset-[3px] rounded-full bg-background" />

            <div className="absolute inset-[14px] overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src="/myimage1.jpg"
                alt="Portrait of Rupam Majumdar"
                fill
                priority
                sizes="(max-width: 640px) 76vw, 336px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -left-2 bottom-6 flex animate-float items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-medium shadow-lg">
              <Code2 className="h-3.5 w-3.5 text-primary" />
              Full-Stack
            </div>
            <div
              className="absolute -right-2 top-8 flex animate-float items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-medium shadow-lg"
              style={{ animationDelay: "1.4s" }}
            >
              <BrainCircuit className="h-3.5 w-3.5 text-accent" />
              AI / ML
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary lg:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
