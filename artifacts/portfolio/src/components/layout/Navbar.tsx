import * as React from "react";
import { Link } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#work", label: "Work", id: "work" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground font-display">
          Studio<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "hover:text-primary transition-colors relative group",
                    activeSection === link.id ? "text-primary" : ""
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                      activeSection === link.id ? "w-full" : "w-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact">
            <Button>Get in Touch</Button>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-slate-900 border-b border-border shadow-lg p-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-base font-medium font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "block py-2 hover:text-primary transition-colors",
                    activeSection === link.id ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Get in Touch</Button>
          </a>
        </div>
      )}
    </header>
  );
}
