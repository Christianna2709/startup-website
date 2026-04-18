import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code2, Database, Zap, Cpu, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Full-Stack Web Development Studio
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-8">
              We build <span className="text-primary text-neon">digital</span> <br />
              <span className="text-secondary text-neon-purple">experiences</span> that scale.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed">
              Production-grade React frontends and Spring Boot backends. 
              We don't just write code; we craft products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <span className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 cursor-pointer group">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 hover:text-white cursor-pointer">
                  Start a Project
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props / What We Do */}
      <section className="py-24 border-y border-white/5 relative bg-black/20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-4">What We Do</h2>
            <p className="text-zinc-400 text-lg">We specialize in building robust, scalable web applications with modern architectures.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Modern Frontends",
                desc: "Pixel-perfect, accessible, and wildly fast React applications tailored to your brand."
              },
              {
                icon: <Database className="w-8 h-8 text-secondary" />,
                title: "Robust Backends",
                desc: "Enterprise-grade Spring Boot architectures designed for high availability and scale."
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Rapid Execution",
                desc: "We ship quickly without compromising on architecture, testing, or user experience."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-panel group hover:border-primary/30 transition-colors"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  The <span className="text-primary text-neon">Stack</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                  We don't just use tools; we master them. Our neural architecture represents a deep understanding of full-stack ecosystems.
                </p>
                <Link href="/skills">
                  <span className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
                    Explore our skills architecture
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { name: "React", icon: <Layers className="w-6 h-6" />, color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
                { name: "Spring Boot", icon: <Cpu className="w-6 h-6" />, color: "border-purple-500/30 text-purple-400 bg-purple-500/10" },
                { name: "TypeScript", icon: <Code2 className="w-6 h-6" />, color: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
                { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "border-slate-500/30 text-slate-400 bg-slate-500/10" }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border ${skill.color} flex flex-col items-center justify-center text-center gap-3 backdrop-blur-sm`}
                >
                  {skill.icon}
                  <span className="font-display font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
              <p className="text-zinc-400 text-lg">A glimpse into our product studio.</p>
            </motion.div>
            <Link href="/projects">
              <span className="hidden md:inline-flex items-center text-white/70 hover:text-white transition-colors cursor-pointer group">
                View all projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Aura CRM", desc: "Next-generation CRM for boutique agencies.", bg: "from-blue-500/20 to-cyan-400/20" },
              { title: "Nexus Analytics", desc: "Financial dashboard with sub-50ms query responses.", bg: "from-purple-500/20 to-pink-500/20" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-80 rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} group-hover:opacity-80 transition-opacity opacity-40`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-display font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-zinc-300">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <span className="inline-flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                View all projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
