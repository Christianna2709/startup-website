import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-80 -translate-y-1/4 translate-x-1/4" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground">
            Web Development Studio
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            We build products that <br className="hidden md:block" />
            people love to use
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Full-stack applications with React frontends and robust backends. 
            Shipped fast, crafted carefully.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#work">
              <Button size="lg">View Our Work</Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg">Learn More</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
