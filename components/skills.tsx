import { Code, Brain, Globe, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "JavaScript"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Brain size={24} />,
      title: "AI/ML",
      skills: ["Machine Learning", "Predictive Analytics", "Data Visualization", "Speech Processing"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Audacity", "FFT Analysis"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="font-serif font-bold text-foreground mb-4 text-lg">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-muted px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Interest Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Special Interest</h3>
          <p className="text-lg text-muted-foreground mb-4">
            <span className="font-semibold text-primary">Audio & Speech Processing</span> - Specializing in FFT analysis
            and voice-based emotion detection
          </p>
          <div className="flex justify-center items-center gap-4 text-sm">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">FFT Analysis</span>
            <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Emotion Detection</span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Speech Recognition</span>
          </div>
        </div>
      </div>
    </section>
  )
}
