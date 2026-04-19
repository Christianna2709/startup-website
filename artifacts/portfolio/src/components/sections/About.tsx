import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Zap, Code2, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Zap className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    iconBg: "bg-indigo-500/10",
    title: "Fast Delivery",
    description: "We ship high-quality features quickly without compromising on architecture or technical debt.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    iconBg: "bg-emerald-500/10",
    title: "Clean Code",
    description: "Maintainable, tested, and well-documented codebases that your team will actually enjoy working with.",
  },
  {
    icon: <Globe className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    iconBg: "bg-purple-500/10",
    title: "Full Stack",
    description: "End-to-end expertise from pixel-perfect React frontends to robust API design and database architecture.",
  },
  {
    icon: <Shield className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    iconBg: "bg-amber-500/10",
    title: "Scalable Systems",
    description: "Architectures designed to handle growth, ensuring your application performs under pressure.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionHeader
            title="Built different. Shipped better."
            subtitle="We are a team of product-minded engineers who believe in craftsmanship, speed, and reliability."
          />
          <div className="h-[3px] w-[60px] bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto md:mx-0 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col group transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-border">
                <div
                  className={`h-12 w-12 rounded-full ${value.iconBg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
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
