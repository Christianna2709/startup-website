import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Aura CRM",
    description: "A next-generation CRM for boutique agencies. Real-time collaboration, complex data pipelines, and a buttery-smooth interface.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Framer Motion", "Tailwind"],
    color: "from-blue-500 to-cyan-400",
    image: "project-aura.png"
  },
  {
    title: "Nexus Analytics",
    description: "Financial dashboard processing millions of rows. Features custom WebGL charting and sub-50ms query response times.",
    tech: ["React", "Three.js", "Spring Boot", "Redis"],
    color: "from-purple-500 to-pink-500",
    image: "project-nexus.png"
  },
  {
    title: "Lumina Commerce",
    description: "Headless e-commerce storefront with aggressive edge caching and an immersive 3D product configurator.",
    tech: ["Next.js", "Spring Boot", "Stripe", "PostgreSQL"],
    color: "from-emerald-400 to-cyan-500",
    image: "project-lumina.png"
  },
  {
    title: "Sync OS",
    description: "Internal operating system for remote teams. Includes video conferencing, document editing, and real-time cursors.",
    tech: ["React", "WebRTC", "Spring WebSockets", "MongoDB"],
    color: "from-orange-500 to-yellow-400",
    image: "project-sync.png"
  },
  {
    title: "Vanguard API",
    description: "High-throughput developer API platform with automated SDK generation and complex rate-limiting architectures.",
    tech: ["Spring Boot", "Java 21", "Redis", "Kafka"],
    color: "from-indigo-500 to-blue-500",
    image: "project-vanguard.png"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Selected <span className="text-primary text-neon">Work</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl font-light">
          We don't build toy projects. We engineer robust systems that solve real business problems with uncompromising aesthetic standards.
        </p>
      </motion.div>

      <div className="space-y-12">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-[2rem] glass-panel overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between relative z-10">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
                <div className="hidden lg:block shrink-0 relative w-[200px] h-[140px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors shadow-2xl">
                  <img src={`/images/${project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="flex gap-4 shrink-0">
                  <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all">
                    View Live <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
