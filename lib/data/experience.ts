/**
 * Training & internship experience, transcribed from the resume.
 * Ordered newest first (by end date).
 */

export type ExperienceEntry = {
  id: string
  organization: string
  role: string
  focus?: string
  period: string
  location?: string
  highlights: string[]
  /** short chips shown on the timeline card */
  tags?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: "ardent-computech",
    organization: "Ardent Computech Pvt. Ltd.",
    role: "Industrial Trainee",
    focus: "Full Stack Java (Spring Boot & Microservices)",
    period: "Jun 2026 – Nov 2026",
    highlights: [
      "Developing an e-commerce application with Spring Boot, implementing REST controllers, service layer and repository layer following a layered MVC architecture.",
      "Designed entity models integrated with a relational database via JPA-based repositories, implemented CRUD operations, and added authentication/authorization using Spring Security.",
    ],
    tags: ["Spring Boot", "Spring Security", "JPA", "REST"],
  },
  {
    id: "ieee-cis",
    organization: "IEEE Computational Intelligence Society, Kolkata Chapter",
    role: "Research Intern",
    focus: "Deep Learning & Explainable AI (Completed)",
    period: "Jun 2026 – Aug 2026",
    highlights: [
      "Independently designed and benchmarked 7 CNN architectures for facial emotion recognition on the RAF-DB and CK+ datasets; best model achieved 72.88% test accuracy and a 0.923 ROC-AUC.",
      "Built an automated MediaPipe-based facial landmark pipeline, ran controlled ablations across fusion strategy and dataset, and authored a full technical report.",
    ],
    tags: ["PyTorch", "CNN", "MediaPipe", "RAF-DB", "CK+"],
  },
  {
    id: "tata-forage",
    organization: "Tata Group (Forage)",
    role: "Data Visualisation Participant",
    focus: "Data Visualisation Virtual Experience Program",
    period: "Apr 2026 – May 2026",
    highlights: [
      "Built stakeholder-focused BI dashboards and translated business scenarios into analytical reporting tasks.",
    ],
    tags: ["Power BI", "Data Visualization"],
  },
  {
    id: "pinnacle-labs",
    organization: "Pinnacle Labs",
    role: "Java Development Intern",
    period: "Aug 2025 – Sep 2025",
    highlights: [
      "Developed and debugged Java modules following structured, maintainable coding practices in a team-based project setting.",
    ],
    tags: ["Java", "OOP", "Debugging"],
  },
  {
    id: "ybi-foundation",
    organization: "YBI Foundation",
    role: "Gen-AI Intern",
    focus: "Remote",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Completed a remote, self-directed internship building foundational proficiency in AI/ML methodologies and industry workflows.",
    ],
    tags: ["AI/ML", "Generative AI"],
  },
]
