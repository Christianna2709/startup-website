import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Aura CRM",
    description: "A modern customer relationship manager built for high-touch boutique agencies.",
    tags: ["React", "Spring Boot", "Tailwind"],
    accentColor: "bg-indigo-500",
  },
  {
    title: "Nexus Dashboard",
    description: "Financial analytics platform providing real-time insights with sub-50ms query times.",
    tags: ["React", "PostgreSQL", "Recharts"],
    accentColor: "bg-slate-800",
  },
  {
    title: "Lumina Commerce",
    description: "High-conversion headless e-commerce storefront with instantaneous page transitions.",
    tags: ["Next.js", "Stripe", "Framer Motion"],
    accentColor: "bg-emerald-500",
  }
];

export function Projects() {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Selected Work" 
          subtitle="Recent products we've designed and engineered from the ground up."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden flex flex-col" hoverEffect>
                <div className={`h-2 w-full ${project.accentColor}`} />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group mt-auto">
                    View Project
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
