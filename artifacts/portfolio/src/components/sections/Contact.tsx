import * as React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-secondary/40 to-background dark:from-slate-900/60 dark:to-background"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Start a project"
          subtitle="Tell us what you're building. We'll get back to you within 24 hours."
          className="text-center items-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-10 border-l-4 border-primary">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center relative"
              >
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{
                        scale: [0, 2],
                        opacity: [1, 0],
                        x: [0, (i % 2 === 0 ? 1 : -1) * 50],
                        y: [0, (i < 2 ? 1 : -1) * 50],
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute w-3 h-3 rounded-full bg-primary"
                    />
                  ))}
                </div>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 z-10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 z-10 text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground z-10">
                  Thanks for reaching out. We'll be in touch shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 z-10"
                  onClick={() => setIsSuccess(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background dark:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background dark:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                      placeholder="work@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background dark:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm resize-none"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
