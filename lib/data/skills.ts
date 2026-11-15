/**
 * Skill groups, sourced from the resume's TECHNICAL SKILLS table plus the
 * stack listed in the project brief. Nothing here is inferred or invented.
 */

export type SkillGroup = {
  /** stable key used for icon lookup in the component */
  key: "fullstack" | "ai" | "genai" | "data" | "languages" | "fundamentals"
  title: string
  summary: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: "languages",
    title: "Languages",
    summary: "Daily drivers across coursework, backend services and ML pipelines.",
    skills: ["Python", "Java", "JavaScript", "C"],
  },
  {
    key: "fullstack",
    title: "Full-Stack & APIs",
    summary: "Layered backends and typed frontends, wired together over REST.",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Node.js / Express.js",
      "React",
      "Next.js",
      "REST API Development & Integration",
    ],
  },
  {
    key: "ai",
    title: "AI / ML / Deep Learning",
    summary: "Model design, training and evaluation — CNN research included.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Model Training & Evaluation",
      "PyTorch",
      "Scikit-learn",
      "MediaPipe",
    ],
  },
  {
    key: "genai",
    title: "Generative AI / LLMs",
    summary: "Shipping LLM features with grounding instead of guesswork.",
    skills: [
      "OpenAI API",
      "LLM-based Summarization",
      "Prompt Engineering",
      "ChatGPT",
      "NLP (Keyphrase Extraction, Semantic Similarity)",
    ],
  },
  {
    key: "data",
    title: "Data & Databases",
    summary: "From raw tables to decision-ready dashboards.",
    skills: [
      "SQL",
      "MySQL",
      "MongoDB",
      "Data Cleaning & Preprocessing",
      "Power BI",
      "Tableau",
      "Data Visualization",
    ],
  },
  {
    key: "fundamentals",
    title: "CS Fundamentals & Tools",
    summary: "The groundwork that keeps the rest maintainable.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Problem Solving",
      "Git & GitHub",
    ],
  },
]
