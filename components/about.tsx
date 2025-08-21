"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-foreground mb-4 drop-shadow-lg">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vut1.jpg-T2rmhLOxZH29OVNRedbrkxgIdJwVZc.jpeg"
                alt="Rupam Majumdar"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-30 animate-spin-slow"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-lg leading-relaxed text-foreground drop-shadow-md">
              I'm <span className="font-semibold text-primary">Rupam Majumdar</span>, a 3rd-year B.Tech student in
              Computer Science & Engineering at MCKV Institute of Engineering.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground drop-shadow-md">
              I'm passionate about software development, artificial intelligence, and open-source contribution. I enjoy
              creating projects that combine technology with real-world impact, whether it's in mental health support,
              futuristic safety innovations, or gaming experiences.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-lg border border-blue-500/20">
              <h4 className="font-serif font-bold text-blue-600 mb-3">🎓 Academic Excellence</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Current YGPA:</span> 9.47 (Third Year B.Tech CSE)
                </p>
                <p>
                  <span className="font-semibold">Higher Secondary:</span> 88% (Grade A+, 440/500 marks)
                </p>
                <p>
                  <span className="font-semibold">Top Subjects:</span> Mathematics (99), Physics (83), Chemistry (80)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-serif font-bold text-primary mb-3">🤝 Let's Collaborate!</h4>
              <p className="text-muted-foreground">
                I believe in the power of collaboration and teamwork. If you're passionate about technology and
                innovation, let's connect and work together to create something amazing! Whether it's AI/ML projects,
                web development, or any tech initiative, I'm always excited to collaborate with like-minded individuals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif font-bold text-primary mb-2">🎯 Focus Areas</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI/ML Development</li>
                  <li>• Web Development</li>
                  <li>• Speech Processing</li>
                  <li>• Open Source</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif font-bold text-accent mb-2">🚀 Interests</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Audio & Speech Processing</li>
                  <li>• Safety Innovations</li>
                  <li>• Gaming Development</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-sm font-semibold animate-float border border-pink-500/30 hover:animate-pulse hover:scale-110 transition-all duration-300">
                AI/ML Expert
              </div>
              <div
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold animate-float border border-green-500/30 hover:animate-pulse hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "0.5s" }}
              >
                Full Stack Developer
              </div>
              <div
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold animate-float border border-yellow-500/30 hover:animate-pulse hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "1s" }}
              >
                Innovation Enthusiast
              </div>
              <div
                className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold animate-float border border-purple-500/30 hover:animate-pulse hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "1.5s" }}
              >
                Problem Solver
              </div>
              <div
                className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold animate-float border border-cyan-500/30 hover:animate-pulse hover:scale-110 transition-all duration-300"
                style={{ animationDelay: "2s" }}
              >
                Tech Innovator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
