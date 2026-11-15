import type { ComponentType } from "react"
import { BrainCircuit, Landmark, Mail, School } from "lucide-react"

/**
 * Icon per project slug, kept out of the data layer so `lib/data` stays
 * pure data with no React imports.
 */
export const projectIcons: Record<string, ComponentType<{ className?: string }>> = {
  "ai-email-triage-assistant": Mail,
  "ai-legislative-analyzer": Landmark,
  campusconnect: School,
  "facial-expression-recognition": BrainCircuit,
}
