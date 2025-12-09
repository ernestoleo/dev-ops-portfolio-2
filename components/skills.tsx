import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "DevOps & Infrastructure",
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure", "GCP", "Jenkins", "GitHub Actions", "ArgoCD"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux", "Zustand"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Linux", "Monitoring", "Prometheus", "Grafana", "ELK Stack", "Agile", "CI/CD"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-regular text-foreground mb-12">Technical Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
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
