import { Link } from "wouter";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold text-foreground font-display">
              Studio<span className="text-primary">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the web, one product at a time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Studio.dev. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
