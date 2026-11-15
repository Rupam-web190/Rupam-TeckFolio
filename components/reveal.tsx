"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  /** stagger offset in seconds */
  delay?: number
  /** travel distance in px */
  y?: number
  className?: string
}

/**
 * Standard scroll-reveal wrapper. Animates once, on first entry,
 * and collapses to a no-op when the visitor prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 20, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
