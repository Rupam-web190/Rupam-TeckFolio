/**
 * Research output, split into two deliberately distinct shapes:
 *
 *  - `publications`      → peer-reviewed / accepted journal work. Academic treatment.
 *  - `researchProjects`  → research *projects* and reports. Engineering treatment.
 *
 * A research project must never be presented as a published journal paper.
 */

export type Publication = {
  id: string
  title: string
  /** Rupam's position on the author list, exactly as stated on the resume. */
  authorRole: string
  journal: string
  publisher: string
  year: string
  status: string
  doi: string
  description: string
  method: string
  /** Present only when a code repository exists for this work. */
  sourceCode?: string
}

export const publications: Publication[] = [
  {
    id: "fuzzy-volume-control",
    title:
      "Fuzzy Logic-Based Intelligent Volume Control for Headphones Integrating Environmental and Activity Cues for User Safety",
    authorRole: "Co-author",
    journal: "International Journal of Advances in Engineering Sciences and Applied Mathematics",
    publisher: "Springer Nature",
    year: "2026",
    status: "Accepted for publication",
    doi: "https://doi.org/10.1007/s12572-026-00451-z",
    description:
      "An adaptive audio control system that adjusts headphone volume from real-time environmental and user-activity data, using a Mamdani fuzzy inference system so the volume reacts to context rather than to a fixed user setting.",
    method: "Mamdani fuzzy inference over real-time environmental and activity cues",
  },
]

export type ResearchEntry = {
  id: string
  title: string
  subtitle: string
  organization: string
  period: string
  summary: string
  methodology: string[]
  results: { label: string; value: string }[]
  findings: string
  tech: string[]
  github?: string
  /** Add when a written report is available to host. */
  reportUrl?: string
}

export const researchProjects: ResearchEntry[] = [
  {
    id: "facial-expression-recognition",
    title: "Facial Expression Recognition Using Generic and Action Unit-Aligned Facial Regions",
    subtitle:
      "A Comparative Study of CNN-Based Landmark Processing and Fusion Strategies",
    organization: "IEEE Computational Intelligence Society, Kolkata Chapter",
    period: "Jun 2026 – Aug 2026",
    summary:
      "An independent benchmark of seven CNN architectures for 7-class facial expression recognition. Each face is decomposed into either generic facial-landmark regions or FACS Action Unit-aligned regions, and the fusion strategy used to combine those regional features is treated as the variable under test.",
    methodology: [
      "MediaPipe Face Mesh detects facial landmarks and decomposes each face into 7 generic regions (eyes, eyebrows, nose, mouth, face contour) or 10 Action Unit-aligned regions derived from the Facial Action Coding System.",
      "Each region is cropped and normalised to 48×48, producing tensors of shape (B, 7, 3, 48, 48) or (B, 10, 3, 48, 48).",
      "A common Standard CNN block (Conv → BatchNorm → ReLU → MaxPool, ×4, channels 3→64→128→256→256) is held constant so that fusion strategy, not backbone capacity, is isolated as the independent variable.",
      "Seven architectures are compared against a full-image baseline: StandardCNN, SCNN-FC, ECF-CNN, SCNN-FMF, S3D-CNN, LSCNN-FC and LSCNN-FMF — covering shared vs. landmark-specific backbones and feature-vector, feature-map, early-channel and 3D-convolution fusion.",
      "All configurations are trained and evaluated separately on RAF-DB (unconstrained) and CK+ (controlled), using Adam, cross-entropy loss, lr 0.01, ReduceLROnPlateau, batch size 64 and early stopping.",
    ],
    results: [
      { label: "Best test accuracy", value: "72.88%" },
      { label: "ROC-AUC", value: "0.923" },
      { label: "Architectures benchmarked", value: "7" },
      { label: "Datasets", value: "RAF-DB · CK+" },
    ],
    findings:
      "SCNN-FC — a shared backbone with late feature-vector fusion — gave the best overall trade-off at 72.88% test accuracy and 0.923 ROC-AUC on RAF-DB with only ~975K parameters, outperforming both the full-image baseline and the higher-parameter landmark-specific and feature-map-fusion variants. Landmark decomposition on its own did not consistently beat the baseline, and AU-aligned regions did not show a consistent advantage over generic regions under the reported training conditions.",
    tech: ["Python", "PyTorch", "MediaPipe Face Mesh", "CNN", "scikit-learn", "RAF-DB", "CK+"],
    github: "https://github.com/Rupam-web190/facial-emotion-recognition-au-landmarks",
  },
]
