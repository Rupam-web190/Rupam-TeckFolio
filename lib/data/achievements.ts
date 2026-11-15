/**
 * Hackathons, competitions and certifications — all transcribed from the
 * resume's HACKATHONS & INNOVATION CHALLENGES and CERTIFICATIONS sections.
 */

export type Achievement = {
  title: string
  context: string
  detail: string
  /** "award" = placed/finalist, "contest" = took part */
  kind: "award" | "contest"
}

export const achievements: Achievement[] = [
  {
    title: "Top 10 Finalist",
    context: "Mahindra Tech Innovators Garage (ILP Phase 9)",
    detail:
      "Conceptualized and pitched an AI-powered hospital crowd-flow optimization system, competing against a national applicant pool on innovation, feasibility and technical merit.",
    kind: "award",
  },
  {
    title: "3rd Position",
    context: "Innovative Idea Competition, Nurturing Innovation 2024 · MCKV Institute of Engineering",
    detail: "Placed third in the institute-level innovation challenge with an original technical concept.",
    kind: "award",
  },
  {
    title: "Rank 246",
    context: "CodeClash — solving contest",
    detail: "Applied Data Structures & Algorithms under strict time constraints.",
    kind: "contest",
  },
  {
    title: "Participant",
    context: "Smart India Hackathon 2025 (College-Level Round)",
    detail: "Developed a Smart Waste Segregation system concept at the internal/college-level selection round.",
    kind: "contest",
  },
]

export type Certification = {
  title: string
  issuer: string
}

export const certifications: Certification[] = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
  },
  {
    title: "NPTEL Gold Certificate (Top 5%) — Fuzzy Sets, Logic and Systems & Applications",
    issuer: "NPTEL",
  },
  {
    title: "Programming in Java & The Joy of Computing using Python",
    issuer: "NPTEL",
  },
  {
    title: "Power BI & SQL Using AI — Workshop Certification",
    issuer: "Workshop",
  },
  {
    title: "Short Term Course on Privacy Preserving Cryptographic Security: Advanced Encryption, Authentication & Zero-Knowledge Proofs",
    issuer: "Indian Statistical Institute",
  },
]
