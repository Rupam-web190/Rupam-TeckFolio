"use client"

import { useEffect, useState } from "react"
import { Github, Mail, ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-foreground mb-6 drop-shadow-lg">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-rotate-gradient">
                Rupam
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              A passionate <span className="text-primary font-semibold">AI/ML Developer</span> and{" "}
              <span className="text-accent font-semibold">Software Engineer</span> creating innovative solutions that
              combine technology with real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 animate-pulse-glow"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="https://github.com/Rupam-web190"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted text-card-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 border border-border"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>

            <div className="flex justify-center items-center gap-8 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>B.Tech CSE (2023-2027)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  )
}
