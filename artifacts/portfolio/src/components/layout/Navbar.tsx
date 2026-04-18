import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/skills", label: "Skills" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-display font-bold text-2xl tracking-tighter cursor-pointer relative group">
            <span className="text-white">Studio</span>
            <span className="text-primary">.dev</span>
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-medium transition-colors cursor-pointer relative py-2 ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-white'}`}>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className="md:hidden glass-panel absolute top-20 left-0 right-0 border-b border-white/5 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className="text-lg font-display font-medium text-white/80 hover:text-primary cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
