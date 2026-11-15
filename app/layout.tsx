import type React from "react"
import type { Metadata, Viewport } from "next"
import { Open_Sans, Montserrat, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Rupam Majumdar — Full-Stack Developer | AI/ML Engineer",
    template: "%s | Rupam Majumdar",
  },
  description:
    "Portfolio of Rupam Majumdar — full-stack developer and AI/ML enthusiast building production web applications, GenAI tools and deep learning research. B.Tech CSE 2027, MCKV Institute of Engineering.",
  authors: [{ name: "Rupam Majumdar" }],
  creator: "Rupam Majumdar",
  keywords: [
    "Rupam Majumdar",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Next.js Developer",
    "Spring Boot",
    "FastAPI",
    "Deep Learning",
    "Facial Emotion Recognition",
    "GenAI",
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060b18" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
