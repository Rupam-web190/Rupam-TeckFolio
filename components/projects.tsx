import { ExternalLink, Github, Brain, Shield, Gamepad2, Hospital, Users, TrendingUp } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "EmpathAI",
      description:
        "An emotionally intelligent voice-to-voice chatbot designed to support mental health. It integrates speech recognition and emotion AI to provide empathetic responses.",
      technologies: ["Python", "AI/ML", "Speech Processing", "Emotion Detection"],
      icon: <Brain size={24} />,
      color: "from-blue-500 to-purple-600",
      category: "AI/ML Project",
    },
    {
      title: "Safeclue Connection (Freedom To Move)",
      description:
        "A mobile application that helps prevent accidents or pre-accident situations by monitoring environmental noise intensity. With the help of an in-built fuzzy inference system, it alerts people about dangerous surroundings through their smart wearables.",
      technologies: ["C Programming", "MATLAB", "Mobile Applications", "Fuzzy Logic", "Project Management"],
      icon: <Shield size={24} />,
      color: "from-red-500 to-orange-600",
      category: "Innovation Project",
      timeline: "Oct 2023 – Present, MCKV Institute of Engineering",
    },
    {
      title: "Stock Market Trend Prediction",
      description:
        "This project predicts the next day's closing price of Reliance Industries (RELIANCE.NS) stock using historical data and machine learning models in Python (Google Colab). Achieved R² Score of ~0.9771 with Linear Regression model.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "yfinance", "Google Colab"],
      icon: <TrendingUp size={24} />,
      color: "from-emerald-500 to-cyan-600",
      category: "Machine Learning",
      github: "https://github.com/Rupam-web190/Stock_Market_Trend_Prediction",
    },
    {
      title: "Gaming Website",
      description:
        "A central hub to play multiple JavaScript-based games like Tic Tac Toe, Snake, and Snake & Ladder, built with a clean and responsive UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: <Gamepad2 size={24} />,
      color: "from-green-500 to-teal-600",
      category: "Web Development",
    },
    {
      title: "AI Crowd Management for Hospitals",
      description:
        "Med ARK is developing an AI-powered crowd management app for hospitals to reduce emergency room congestion and save lives. The app enables patients' families to check real-time bed availability in nearby hospitals, book beds in advance, and upload medical details to prepare hospitals ahead of time.",
      technologies: ["AI/ML", "Mobile Development", "Healthcare Tech", "Real-time Systems"],
      icon: <Hospital size={24} />,
      color: "from-cyan-500 to-blue-600",
      category: "Healthcare AI",
      timeline: "Nov 2024 - Present, MCKV Institute of Engineering",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining technology with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-2 rounded-lg">{project.icon}</div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{project.category}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                {project.timeline && <p className="text-sm text-white/80">{project.timeline}</p>}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted hover:bg-accent hover:text-accent-foreground text-muted-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  ) : (
                    <button className="bg-muted hover:bg-accent hover:text-accent-foreground text-muted-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                      <Github size={16} />
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20 mb-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              <Users className="inline-block mr-2" size={24} />
              Let's Build Something Amazing Together!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always looking for passionate collaborators who share my vision for innovative technology solutions.
              Whether you're a fellow developer, designer, or just someone with great ideas, let's connect and create
              something impactful!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Let's Collaborate
              </a>
              <a
                href="https://github.com/Rupam-web190"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted text-card-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 border border-border"
              >
                <Github size={20} />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
