import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SKILLS = [
  { id: "react", name: "React", x: 20, y: 20, level: 98, color: "#ff6b1a" },
  { id: "spring", name: "Spring Boot", x: 75, y: 30, level: 95, color: "#1aadff" },
  { id: "ts", name: "TypeScript", x: 40, y: 55, level: 92, color: "#3178c6" },
  { id: "java", name: "Java", x: 80, y: 70, level: 90, color: "#f89820" },
  { id: "node", name: "Node.js", x: 15, y: 75, level: 88, color: "#3c873a" },
  { id: "pg", name: "PostgreSQL", x: 60, y: 85, level: 94, color: "#336791" },
  { id: "aws", name: "AWS", x: 85, y: 15, level: 85, color: "#ff9900" },
  { id: "docker", name: "Docker", x: 10, y: 45, level: 90, color: "#2496ed" }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Generates connecting lines between nodes
  const lines = [];
  for (let i = 0; i < SKILLS.length; i++) {
    for (let j = i + 1; j < SKILLS.length; j++) {
      // Connect mostly adjacent nodes
      const dist = Math.sqrt(Math.pow(SKILLS[i].x - SKILLS[j].x, 2) + Math.pow(SKILLS[i].y - SKILLS[j].y, 2));
      if (dist < 50) {
        lines.push({ source: SKILLS[i], target: SKILLS[j] });
      }
    }
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-[90vh] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Neural <span className="text-primary text-neon">Architecture</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
          Hover over nodes to explore the stack. The lines represent deep integration capabilities.
        </p>
      </motion.div>

      <div className="flex-1 relative rounded-[3rem] glass-panel border border-white/10 overflow-hidden bg-black/40" ref={containerRef}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,107,26,0.05) 0%, transparent 70%)' }} />
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {lines.map((line, i) => {
            const isHighlighted = hoveredSkill === line.source.id || hoveredSkill === line.target.id;
            return (
              <motion.line
                key={i}
                x1={`${line.source.x}%`}
                y1={`${line.source.y}%`}
                x2={`${line.target.x}%`}
                y2={`${line.target.y}%`}
                stroke={isHighlighted ? line.source.color : "rgba(255,255,255,0.05)"}
                strokeWidth={isHighlighted ? 2 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
                style={{
                  filter: isHighlighted ? `drop-shadow(0 0 8px ${line.source.color})` : 'none'
                }}
              />
            );
          })}
        </svg>

        {SKILLS.map((skill, i) => {
          const isHovered = hoveredSkill === skill.id;
          return (
            <motion.div
              key={skill.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative group cursor-pointer flex flex-col items-center">
                <motion.div 
                  className="w-4 h-4 rounded-full bg-white relative z-10"
                  animate={{ 
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? skill.color : "#ffffff",
                    boxShadow: isHovered ? `0 0 20px ${skill.color}, 0 0 40px ${skill.color}` : `0 0 10px rgba(255,255,255,0.5)`
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Ping effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.2 }}
                />

                <motion.div 
                  className="absolute top-8 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-center whitespace-nowrap z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 0 }}
                >
                  <p className="font-display font-bold text-white text-lg" style={{ color: isHovered ? skill.color : 'white' }}>{skill.name}</p>
                  {isHovered && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-2"
                    >
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full" 
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider text-right">{skill.level}% Mastery</p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
