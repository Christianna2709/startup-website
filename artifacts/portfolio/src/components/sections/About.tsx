import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Zap, Code2, Layers, Server } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Fast Delivery",
    description: "We ship high-quality features quickly without compromising on architecture or technical debt."
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary" />,
    title: "Clean Code",
    description: "Maintainable, tested, and well-documented codebases that your team will actually enjoy working with."
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "Full Stack",
    description: "End-to-end expertise from pixel-perfect React frontends to robust API design and database architecture."
  },
  {
    icon: <Server className="w-5 h-5 text-primary" />,
    title: "Scalable Systems",
    description: "Architectures designed to handle growth, ensuring your application performs under pressure."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Built different. Shipped better." 
          subtitle="We are a team of product-minded engineers who believe in craftsmanship, speed, and reliability."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col" hoverEffect>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
