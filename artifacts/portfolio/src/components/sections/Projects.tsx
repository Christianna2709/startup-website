import * as React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    accentColor: "bg-slate-700 dark:bg-slate-500",
  },
  {
    title: "Lumina Commerce",
    description: "High-conversion headless e-commerce storefront with instantaneous page transitions.",
    tags: ["Next.js", "Stripe", "Framer Motion"],
    accentColor: "bg-emerald-500",
  },
  {
    title: "Vanguard API",
    description: "High-throughput developer API platform with automated SDK generation.",
    tags: ["Spring Boot", "Java", "PostgreSQL"],
    accentColor: "bg-orange-500",
  },
  {
    title: "Sync OS",
    description: "Real-time collaboration platform with document editing and video conferencing.",
    tags: ["React", "WebSockets", "Spring Boot"],
    accentColor: "bg-violet-500",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filters = ["All", ...allTags];

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Selected Work"
          subtitle="Recent products we've designed and engineered from the ground up."
        />

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-sm"
                  : "bg-card text-muted-foreground hover:bg-secondary shadow-sm border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                  <div className={`h-1 w-full rounded-tl-lg rounded-tr-lg ${project.accentColor}`} />
                  <div className="p-8 flex flex-col flex-grow relative">
                    <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors mt-auto"
                    >
                      View Project
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
