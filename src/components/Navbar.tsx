import React, { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
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
  const [activeSection, setActiveSection] = useState('');
  const { resolvedTheme, setTheme } = useTheme();

  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, '', href);
    const top = target.getBoundingClientRect().top + window.scrollY - 100;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top, behavior });
  };

  useEffect(() => {
    let frame = 0;
    let restoreFrame = 0;
    const updateFromScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled((current) => {
          const next = window.scrollY > 24;
          return current === next ? current : next;
        });

        const activationLine = Math.max(112, Math.min(176, window.innerHeight * 0.28));
        let nextActive = '';
        for (const link of navLinks) {
          const section = document.getElementById(link.href.slice(1));
          if (section && section.getBoundingClientRect().top <= activationLine) nextActive = link.href;
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          nextActive = '#contact';
        }
        setActiveSection((current) => current === nextActive ? current : nextActive);
      });
    };
    const restoreFromHistory = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;
      if (restoreFrame) window.cancelAnimationFrame(restoreFrame);
      restoreFrame = window.requestAnimationFrame(() => {
        restoreFrame = 0;
        const top = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'instant' });
        updateFromScroll();
      });
    };

    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll, { passive: true });
    window.addEventListener('popstate', restoreFromHistory);
    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
      window.removeEventListener('popstate', restoreFromHistory);
      if (frame) window.cancelAnimationFrame(frame);
      if (restoreFrame) window.cancelAnimationFrame(restoreFrame);
    };
  }, []);

  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  const ThemeIcon = nextTheme === 'light' ? Sun : Moon;

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <div className="container-custom">
        <div className={`glass-nav flex h-14 items-center justify-between gap-3 px-3 sm:px-5 ${isScrolled ? 'is-scrolled' : ''}`}>
          <a href="#home" className="flex min-w-0 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold tracking-tight text-primary">MS</span>
            <span className="truncate text-sm font-semibold tracking-tight sm:text-base">Mohammad Seraj</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(event) => navigateToSection(event, link.href)} className={`nav-link rounded-full px-2.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground lg:px-3 ${activeSection === link.href ? 'is-active' : ''}`} aria-current={activeSection === link.href ? 'location' : undefined}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="icon-button glass-control text-foreground hover:text-primary"
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              onClick={() => setTheme(nextTheme)}
            >
              <ThemeIcon className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button variant="outline" size="sm" className="glass-control hidden gap-1.5 rounded-full px-3 font-medium lg:inline-flex" asChild>
              <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Resume
              </a>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="icon-button glass-control text-foreground lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="glass-panel mt-2 p-3 lg:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(event) => { navigateToSection(event, link.href); setIsOpen(false); }} aria-current={activeSection === link.href ? 'location' : undefined} className={`rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground ${activeSection === link.href ? 'bg-foreground/5 text-foreground' : ''}`}>
                  {link.name}
                </a>
              ))}
              <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf" onClick={() => setIsOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-card/80 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
