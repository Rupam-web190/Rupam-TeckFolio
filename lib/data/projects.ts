/**
 * Featured software projects.
 *
 * Every description, metric and technology name below is taken either from
 * Rupam's own project brief or from the README of the repository it links to.
 * Nothing is inferred from a template.
 */

export const projectCategories = [
  "Full Stack",
  "Backend Development",
  "AI/ML",
  "Deep Learning",
  "Research",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectMetric = {
  label: string
  value: string
}

export type Project = {
  slug: string
  title: string
  /** one-line summary used on the card */
  tagline: string
  /** longer paragraph used on the detail page */
  summary: string
  problem: string
  implementation: string[]
  features: string[]
  stack: string[]
  categories: ProjectCategory[]
  /** only present when the repository is public */
  github?: string
  /** repository not published yet — renders a disabled chip instead of a link */
  repoPending?: boolean
  /** only real, verifiable numbers */
  metrics?: ProjectMetric[]
}

export const projects: Project[] = [
  {
    slug: "ai-email-triage-assistant",
    title: "AI Email Triage Assistant",
    tagline: "Full-stack email triage that compresses long threads before reasoning over them.",
    summary:
      "A production-ready, full-stack email triage assistant that processes 50+ email threads simultaneously. The ScaleDown compression engine reduces email content by up to 85% while preserving context, which lets the triage layer reason over a large inbox without drowning in quoted history and signatures.",
    problem:
      "A crowded inbox arrives as long, repetitive threads. Reading every message in full is slow, and handing whole threads to a model wastes context on quoted replies and signatures rather than on the decision that actually has to be made.",
    implementation: [
      "ScaleDown Engine compresses each thread by up to 85% while keeping conversational context intact before triage runs.",
      "Batch processing handles 50+ threads in a single pass and reports a summary of items processed and time saved.",
      "A 5-point priority algorithm auto-categorises mail into Urgent, Action and Newsletter buckets with red / yellow priority badges.",
      "Server-side sanitisation of uploaded .eml files blocks XSS payloads before anything is rendered.",
      "Analytics dashboard tracks time saved and processing metrics across runs.",
    ],
    features: [
      "ScaleDown compression engine (85% reduction)",
      "Smart triage via a 5-point priority algorithm",
      "Infinite-scroll social-feed inbox",
      "EML upload with XSS-safe sanitisation",
      "Batch processing for 50+ threads",
      "Productivity analytics dashboard",
      "Dark / light adaptive UI",
    ],
    stack: ["Python", "Flask", "REST API", "Vanilla JavaScript", "Responsive CSS"],
    categories: ["AI/ML", "Full Stack"],
    metrics: [
      { label: "Threads per batch", value: "50+" },
      { label: "Content compressed", value: "85%" },
      { label: "Email overload reduced", value: "70%" },
    ],
    github: "https://github.com/Rupam-web190/Email-Triage-Assistant",
  },
  {
    slug: "ai-legislative-analyzer",
    title: "AI Legislative Analyzer",
    tagline: "GenAI pipeline that turns dense legislation into citizen-friendly summaries.",
    summary:
      "An end-to-end GenAI application that ingests dense legislative documents and generates concise, citizen-friendly summaries using LLM-based prompt engineering through the OpenAI API.",
    problem:
      "Legislation is written for legal professionals — long, cross-referential and padded with boilerplate. A citizen needs the operative rules, penalties and deadlines, not a hundred pages of formal prose.",
    implementation: [
      "Four-step compression pipeline: boilerplate and duplicate removal, symbolic compression with 60+ abbreviation rules, structured JSON extraction (penalties, stakeholders, rules) and citizen-facing summarisation.",
      "NLP-based keyphrase extraction and semantic similarity surface the most relevant passages before they reach the LLM, improving summarisation relevance and reducing hallucination risk.",
      "LLM summarisation through the OpenAI API with prompt engineering; the pipeline degrades gracefully to rule-based NLP when no API key is configured.",
      "REST endpoints exposed through a FastAPI backend and consumed by a Streamlit dashboard.",
      "tiktoken-based token accounting measures compression and cost savings per document.",
    ],
    features: [
      "TL;DR, bullet and risk / benefit summary cards",
      "Structured JSON output: rules, penalties, deadlines, benefits, risks, definitions",
      "Keyphrase extraction and semantic similarity ranking (spaCy, KeyBERT, sentence-transformers)",
      "Works fully offline with rule-based NLP — OpenAI integration is optional",
      "FastAPI REST backend with a Streamlit citizen dashboard",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "OpenAI API",
      "spaCy",
      "KeyBERT",
      "sentence-transformers",
      "tiktoken",
    ],
    categories: ["AI/ML", "Backend Development"],
    github: "https://github.com/Rupam-web190/AI-Legislative-Analyser-Scale-Down-",
  },
  {
    slug: "campusconnect",
    title: "CampusConnect",
    tagline: "Full-stack career, internship and placement management platform.",
    summary:
      "A full-stack platform for managing careers, internships and placements, built with React, Spring Boot and MySQL.",
    problem:
      "Placement records, internship applications and drive schedules usually live across spreadsheets and chat groups, so students and placement cells rarely share one reliable view of where a candidate or a drive stands.",
    implementation: [
      "React front-end for the student-facing and placement-cell views.",
      "Spring Boot backend exposing the career, internship and placement APIs.",
      "MySQL relational schema for students, internship and placement records.",
    ],
    features: ["Career and internship listings", "Placement record management", "React + Spring Boot + MySQL stack"],
    stack: ["React", "Spring Boot", "MySQL", "REST API"],
    categories: ["Full Stack", "Backend Development"],
    github: "https://github.com/Rupam-web190/CampusConnect",
  },
  {
    slug: "facial-expression-recognition",
    title: "Facial Expression Recognition",
    tagline: "Benchmarking seven CNNs across generic and Action Unit-aligned facial regions.",
    summary:
      "A comparative study of CNN-based landmark processing and fusion strategies for 7-class facial expression recognition, carried out as an IEEE Computational Intelligence Society (Kolkata Chapter) summer internship project.",
    problem:
      "Holistic CNNs must implicitly discover which facial regions are discriminative for each emotion. Landmark decomposition makes that anatomical structure explicit, but its value depends on which regions are selected and how regional features are extracted, shared and fused.",
    implementation: [
      "MediaPipe Face Mesh decomposes each face into 7 generic landmark regions or 10 FACS Action Unit-aligned regions, cropped and normalised to 48×48.",
      "A common Standard CNN block (Conv → BatchNorm → ReLU → MaxPool, ×4) is held constant across all landmark architectures, isolating fusion strategy as the independent variable rather than backbone capacity.",
      "Seven architectures compared against a full-image baseline: StandardCNN, SCNN-FC, ECF-CNN, SCNN-FMF, S3D-CNN, LSCNN-FC and LSCNN-FMF.",
      "Training with Adam, cross-entropy loss, lr 0.01, ReduceLROnPlateau, batch size 64 and early stopping (patience 10); the reported runs used no augmentation so architectural effects stay isolated.",
      "Evaluated on RAF-DB (unconstrained, 15,339 images, stratified 70/15/15) and CK+ (controlled, ~3,000 images from 327 labelled sequences).",
    ],
    features: [
      "7 CNN architectures benchmarked against a full-image baseline",
      "Generic (7) and FACS Action Unit-aligned (10) region decomposition",
      "Shared vs. landmark-specific backbones with feature-vector, feature-map, early-channel and 3D-convolution fusion",
      "Evaluation across unconstrained (RAF-DB) and controlled (CK+) imaging conditions",
    ],
    stack: ["Python", "PyTorch", "MediaPipe Face Mesh", "CNN", "Computer Vision", "scikit-learn"],
    categories: ["Deep Learning", "Research"],
    metrics: [
      { label: "Best test accuracy", value: "72.88%" },
      { label: "ROC-AUC", value: "0.923" },
      { label: "Architectures compared", value: "7" },
      { label: "Winning model", value: "SCNN-FC · ~975K params" },
    ],
    github: "https://github.com/Rupam-web190/facial-emotion-recognition-au-landmarks",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
