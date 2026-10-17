import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Current Role Tag */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                MS
              </span>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight gradient-text">
                SERAJ // AI
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI Solutions Engineer @ MGT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}

            {/* Quick Resume Download CTA */}
            <Button size="sm" variant="outline" className="font-mono text-xs border-primary/30 hover:border-primary gap-1.5" asChild>
              <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf">
                <Download className="h-3.5 w-3.5 text-primary" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border/80 bg-background/95 backdrop-blur-2xl animate-fade-in">
            <div className="flex flex-col gap-3 font-mono text-sm px-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary mb-2">
                <Zap className="h-3.5 w-3.5" />
                <span>AI Solutions Engineer @ MGT</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors uppercase tracking-wider text-xs"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Mohammad_Seraj_Resume.pdf"
                download="Mohammad_Seraj_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs uppercase"
              >
                <Download className="h-4 w-4" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
