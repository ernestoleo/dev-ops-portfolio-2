import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Keylab",
    period: "April 2025 - Present",
    description:
      "Designed and maintained multi-region cloud infrastructure. Established monitoring and alerting systems, improving incident response time by 60%.",
    technologies: ["AWS", "Terraform", "CI/CD", "Docker", "Jenkins", "Azure", "Ansible", "Grafana"],
  },
  {
    title: "Full Stack Developer",
    company: "Keylab",
    period: "2022 - April 2025",
    description:
      "Built scalable web applications using modern frameworks. Collaborated with product teams to deliver features and optimize application performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Next.js", "SQL Server", "TypeScript", "NET Core"],
  },
  {
    title: "Full Stack Developer",
    company: "Centro de Integracion, Desarrollo y Transferencia de Sistemas (CIDS) - Universidsad Tecnologica Nacional - Regional Cordoba",
    period: "2020 - 2022",
    description:
      "Built scalable web applications using modern frameworks. Collaborated with product teams to deliver features and optimize application performance.",
    technologies: ["Angular", "Node.js", "Oracle", "Redis", "Next.js", "SQL Server", "TypeScript", "NET Core"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-regular text-foreground mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 font-mono">{exp.period}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
