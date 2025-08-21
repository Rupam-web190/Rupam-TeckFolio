import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      type: "internship",
      title: "Frontend Development Internship",
      organization: "Web Development Company",
      period: "June 2025",
      description:
        "Worked on web development projects using HTML, CSS, and JavaScript, including a quiz app with DOM manipulation, validation, and responsive design.",
      skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive Design"],
      icon: <Briefcase size={20} />,
    },
    {
      type: "internship",
      title: "Machine Learning Internship Project",
      organization: "Data Analytics Firm",
      period: "June 2025",
      description:
        "Built Predictive Analytics for Stock Market Trends using ML algorithms to analyze market patterns and forecast trends.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"],
      icon: <Briefcase size={20} />,
    },
    {
      type: "education",
      title: "B.Tech in Computer Science & Engineering",
      organization: "MCKV Institute of Engineering",
      period: "2023 - 2027",
      description:
        "Currently in 3rd year with focus on advanced computer science concepts and practical implementations in software development and AI/ML.",
      skills: ["Computer Science", "Data Structures", "Algorithms", "Software Engineering"],
      icon: <GraduationCap size={20} />,
    },
  ]

  const achievements = [
    "Participated in multiple hackathons showcasing innovative projects",
    "Completed Machine Learning Internship on stock market predictive analytics",
    "Earned certifications in AI/ML and Web Development",
    "Developed award-winning Safeclue Connection safety innovation project",
    "Currently working on AI Crowd Management for Hospitals project",
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-foreground mb-4">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 flex items-center gap-2">
              <Briefcase size={24} className="text-primary" />
              Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>

                  <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">{exp.icon}</div>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="font-serif font-bold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-accent font-medium mb-3">{exp.organization}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 flex items-center gap-2">
              <Award size={24} className="text-accent" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-300 hover:scale-105 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <p className="text-foreground">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-serif font-bold text-foreground mb-4">Current Focus Areas</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-primary mb-2">Technical Skills</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Advanced AI/ML</li>
                    <li>• Speech Processing</li>
                    <li>• Full-Stack Development</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-accent mb-2">Soft Skills</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Problem Solving</li>
                    <li>• Innovation</li>
                    <li>• Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
