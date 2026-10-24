import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Terminal, Sparkles, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-primary/20 bg-card/60 backdrop-blur-md relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(187_86%_42%_/_0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Logo & Headline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xl font-bold font-display gradient-text flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Mohammad Seraj
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              Agentic AI • LLM Systems • Production Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mohammadserajansari"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl bg-secondary/80 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ansariserajmd/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-xl bg-secondary/80 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:mail.serajansari@gmail.com"
              title="Email"
              className="p-2.5 rounded-xl bg-secondary/80 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+919628104350"
              title="Phone (+91 9628104350)"
              className="p-2.5 rounded-xl bg-secondary/80 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ml-2"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>
            © {currentYear} Mohammad Seraj. Deployed on GitHub Pages.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>PERSONAL PORTFOLIO // ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
