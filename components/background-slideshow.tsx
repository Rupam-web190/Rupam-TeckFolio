"use client"

import { useEffect, useState } from "react"

const images = [
  "/modern-web-dev-workspace.png",
  "/ai-neural-network.png",
  "/mern-stack-logos.png",
  "/python-data-science-terminal.png",
  "/javascript-react-dev-environment.png",
  "/ai-chatbot-nlp-visualization.png",
  "/full-stack-web-mockups.png",
  "/machine-learning-algorithms.png",
  "/cloud-computing-servers.png",
  "/mobile-app-dev-interface.png",
  "/cybersecurity-network-protection.png",
  "/blockchain-digital-ledger.png",
  "/iot-smart-home.png",
  "/database-sql-queries.png",
  "/devops-ci-cd-pipeline.png",
  "/vr-development-environment.png",
  "/ar-mobile-applications.png",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
]

export default function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Slightly faster transitions for more dynamic feel

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-40" : "opacity-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Tech Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-[1px]"></div>
        </div>
      ))}

      {/* Additional overlay for dark mode compatibility */}
      <div className="absolute inset-0 bg-background/10 dark:bg-background/20"></div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-primary scale-125 animate-pulse-glow"
                : "bg-muted-foreground/50 hover:bg-muted-foreground/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
