import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl tracking-tighter">
            <span className="text-white">Studio</span>
            <span className="text-primary">.dev</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Studio.dev. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
