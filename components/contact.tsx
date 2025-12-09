import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-regular text-foreground mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Whether you need infrastructure expertise, full stack development, or technical consulting, I'm here to help
            bring your ideas to life.
          </p>

          <Card className="p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:ernesto.leo505@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com/in/ernesto-leo-068134195" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Based in Córdoba, Argentina • Open to remote opportunities
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
