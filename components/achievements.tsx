"use client"

import { useEffect, useState } from "react"
import { Award, Trophy, Medal, Star, BookOpen, GraduationCap, Target, Users, Lightbulb } from "lucide-react"

export default function Achievements() {
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

    const element = document.getElementById("achievements")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const honors = [
    {
      title: "Third Position - Innovative Idea Competition",
      organization: "MCKV Institute of Engineering",
      date: "May 2024",
      description: "Nurturing Innovation-2024",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-300",
      shadowColor: "shadow-yellow-200/50",
    },
    {
      title: "Certificate of Excellence - All India Rank: 246",
      organization: "Competitive Programming Contest",
      date: "2024",
      description: "Nationwide participants in data structures and algorithmic problem solving",
      icon: Medal,
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-300",
      shadowColor: "shadow-pink-200/50",
    },
    {
      title: "Top 4 Finalist - Mahindra Tech Innovators Garage ILP",
      organization: "Mahindra Group",
      date: "Phase VII",
      description: "AI-powered system to optimize crowd flow in hospitals",
      icon: Lightbulb,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-300",
      shadowColor: "shadow-green-200/50",
    },
    {
      title: "Finalist - Galgotias International Hackathon",
      organization: "GIH 2025",
      date: "2025",
      description: "Emotionally intelligent voice-to-voice chatbot for mental health support",
      icon: Users,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-300",
      shadowColor: "shadow-purple-200/50",
    },
    {
      title: "Gold Certificate | Top 5% - NPTEL",
      organization: "Fuzzy Sets, Logic, and Systems & Applications",
      date: "Jan-Apr 2025",
      description: "97/100 Score - Advanced knowledge in fuzzy logic and AI applications",
      icon: Award,
      color: "from-amber-400 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-300",
      shadowColor: "shadow-amber-200/50",
    },
  ]

  const certifications = [
    {
      title: "Career Essentials in Generative AI",
      organization: "Microsoft & LinkedIn",
      date: "June 2025",
      skills: ["Generative AI", "Prompt Engineering", "Microsoft Copilot", "Responsible AI"],
      icon: Star,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      shadowColor: "shadow-purple-200/50",
    },
    {
      title: "Analyzing and Visualizing Data with Microsoft Power BI",
      organization: "Office Master",
      date: "May 2025",
      skills: ["Power BI", "Data Analysis", "Business Intelligence", "DAX"],
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-300",
      shadowColor: "shadow-cyan-200/50",
    },
    {
      title: "Programming In Java",
      organization: "NPTEL",
      date: "Jul-Oct 2024",
      skills: ["Java Programming", "Object-Oriented Programming"],
      icon: BookOpen,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-300",
      shadowColor: "shadow-red-200/50",
    },
    {
      title: "The Joy of Computing using Python",
      organization: "NPTEL",
      date: "Jan-Apr 2024",
      skills: ["Python Programming", "Problem Solving"],
      icon: BookOpen,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-300",
      shadowColor: "shadow-teal-200/50",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-foreground mb-4">Honors & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 mx-auto mb-4 animate-rotate-gradient"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, innovative thinking, and continuous learning
          </p>
        </div>

        {/* Honors & Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              🏆 Honors & Awards
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map((honor, index) => {
              const IconComponent = honor.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${honor.bgColor} dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border-2 ${honor.borderColor} dark:border-gray-600 hover:shadow-xl ${honor.shadowColor} transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${honor.color} rounded-lg flex items-center justify-center mb-4 animate-pulse-glow hover:animate-spin`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-2">{honor.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">{honor.organization}</p>
                  <p className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {honor.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{honor.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              📜 Licenses & Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${cert.bgColor} dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border-2 ${cert.borderColor} dark:border-gray-600 hover:shadow-xl ${cert.shadowColor} transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? "animate-slide-in-left" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow hover:animate-bounce`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">{cert.organization}</p>
                      <p className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                        {cert.date}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-white to-gray-50 dark:from-gray-600 dark:to-gray-500 text-xs font-medium rounded-full text-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-500 hover:scale-105 transition-transform duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              🎓 Academic Excellence
            </span>
          </h3>
          <div
            className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border-2 border-blue-200 dark:border-gray-600 hover:shadow-xl shadow-blue-200/50 transition-all duration-300 hover:scale-105">
              <GraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-4 animate-bounce" />
              <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-2">Current YGPA: 9.47</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">Third Year B.Tech CSE</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border-2 border-green-200 dark:border-gray-600 hover:shadow-xl shadow-green-200/50 transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-4 animate-spin-slow" />
              <h4 className="font-serif font-bold text-gray-900 dark:text-white mb-2">Higher Secondary: 88%</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">Grade A+, 440/500 marks</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Top Subjects: Mathematics (99), Physics (83), Chemistry (80)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
