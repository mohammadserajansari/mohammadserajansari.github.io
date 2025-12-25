import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-bold font-display gradient-text">
            Mohammad Seraj
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohammadserajansari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ansariserajmd/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:mail.serajansari@gmail.com"
              className="p-2 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Built with <Heart className="h-3 w-3 text-red-500" /> by Mohammad Seraj
          </p>
        </div>
      </div>
    </footer>
  );
}
