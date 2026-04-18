import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-12">
          The <span className="text-secondary text-neon-purple">Story</span>
        </h1>

        <div className="prose prose-invert prose-lg md:prose-xl text-zinc-400 max-w-none font-light">
          <p className="lead text-2xl text-white mb-10">
            We are a collective of obsessive builders. We believe that software should feel crafted, not merely assembled.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">Our Philosophy</h3>
              <p>
                In a world of bloated templates and off-the-shelf solutions, we take the hard path. Every line of code is intentional. Every animation serves a purpose. We pair the rigorous engineering of Spring Boot with the boundless creativity of modern React.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">Our Drive</h3>
              <p>
                We are hungry. We operate with the agility of a startup and the precision of an enterprise team. When you work with us, you don't get an agency—you get a dedicated product partner.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl glass-panel relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-display font-bold text-white mb-6 relative z-10">Why We Build</h2>
            <p className="relative z-10 text-xl text-zinc-300">
              Because the internet should be beautiful. Because fast software is a sign of respect for the user's time. Because creating something from nothing is the ultimate privilege.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
