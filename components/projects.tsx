import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description:
      "Terraform modules for multi-cloud deployment. Automated provisioning of VPCs, EKS clusters, and RDS instances with best practices built-in.",
    technologies: ["Terraform", "AWS", "Kubernetes", "Helm"],
    github: "#",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline Framework",
    description:
      "Reusable GitHub Actions workflows for microservices. Includes automated testing, security scanning, and progressive deployment strategies.",
    technologies: ["GitHub Actions", "Docker", "ArgoCD", "SonarQube"],
    github: "#",
    demo: "#",
  },
  {
    title: "Monitoring Dashboard",
    description:
      "Full-stack observability platform built with modern technologies. Real-time metrics, logs, and traces with custom alerting rules.",
    technologies: ["React", "Node.js", "Prometheus", "Grafana", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Service Mesh Implementation",
    description:
      "Production-ready Istio deployment with traffic management, security policies, and distributed tracing for microservices architecture.",
    technologies: ["Istio", "Kubernetes", "Jaeger", "Kiali"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-regular text-foreground mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
