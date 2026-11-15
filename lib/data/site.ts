/**
 * Single source of truth for personal details.
 * All values are taken from Rupam's resume — nothing here is invented.
 */

export const site = {
  name: "Rupam Majumdar",
  initials: "RM",
  headline: "Full-Stack Developer · AI/ML Enthusiast · Computer Science Engineer",
  summary:
    "Final-year B.Tech Computer Science & Engineering student (2027) with a 9.60 CGPA, specializing in AI, Machine Learning and Generative AI. I build end-to-end products — from Spring Boot and FastAPI backends to Next.js frontends and LLM-powered tooling.",
  location: "Howrah, West Bengal, India",
  email: "rupammajumdar2005@gmail.com",
  phone: "+91 6291164210",
  phoneHref: "tel:+916291164210",
  github: "https://github.com/Rupam-web190",
  linkedin: "https://linkedin.com/in/rupam-majumdar-0ab740333",
  leetcode: "https://leetcode.com/u/Rupam_Majumdar/",
  cloudSkillsBoost: "https://www.skills.google/public_profiles/f45fc544-37d1-4ef1-85e6-0b08abe3bf1e",
  googleDeveloper: "https://me.developers.google.com/u/117739243948860395584",
  /** Original PDF is served untouched from /public/resume */
  resumePath: "/resume/Rupam-Majumdar-Resume.pdf",
} as const

export type NavItem = {
  id: string
  label: string
}

/**
 * In-page sections, in DOM order.
 * Sections are appended here as each phase ships, so the nav never points at a section that does not exist yet.
 */
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

export type HeroStat = {
  value: string
  label: string
}

export const heroStats: HeroStat[] = [
  { value: "9.60", label: "CGPA · B.Tech CSE" },
  { value: "1", label: "Springer publication" },
  { value: "5", label: "Internships" },
  { value: "7", label: "CNN models benchmarked" },
]

export type EducationEntry = {
  qualification: string
  institute: string
  period: string
  result: string
}

/** Taken verbatim from the resume's EDUCATION table. */
export const education: EducationEntry[] = [
  {
    qualification: "B.Tech, Computer Science & Engineering",
    institute: "MCKV Institute of Engineering (MAKAUT)",
    period: "2023 – 2027",
    result: "CGPA 9.60",
  },
  { qualification: "WBCHSE (10+2)", institute: "Kona High School", period: "2023", result: "88%" },
  { qualification: "WBBSE (10)", institute: "Kona High School", period: "2021", result: "94.14%" },
]

export const focusAreas = [
  {
    title: "Full-Stack Engineering",
    detail: "Spring Boot, FastAPI, Node/Express backends with React & Next.js frontends.",
  },
  {
    title: "AI/ML & Deep Learning",
    detail: "CNN training and evaluation in PyTorch, Scikit-learn pipelines, MediaPipe landmark processing.",
  },
  {
    title: "Generative AI & LLMs",
    detail: "OpenAI API applications, prompt engineering, keyphrase extraction and semantic search.",
  },
  {
    title: "Data & Analytics",
    detail: "SQL and MySQL data modelling, Power BI and Tableau dashboards, data cleaning and preprocessing.",
  },
]
