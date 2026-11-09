import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Download, Terminal, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NeuralMatrix3D } from '@/components/NeuralMatrix3D';

export function Hero() {
  return (
    <section id="home" className="hero-section relative min-h-screen pt-28 pb-16 flex flex-col justify-start overflow-hidden">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Hero Main Grid: Left Details & Right 3D Scene */}
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Intro, Photo Hologram & CTAs */}
          <div className="hero-copy lg:col-span-6 space-y-6">
            {/* Profile Avatar & Name Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              {/* Sci-Fi Holographic Photo Avatar */}
              <div className="profile-avatar relative group flex-shrink-0">
                <div className="profile-avatar-halo" aria-hidden="true" />

                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-background bg-card shadow-xl">
                  <img
                    src="/Mohammad_Seraj.png"
                    alt="Portrait of Mohammad Seraj"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Status Dot */}
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-background border-2 border-emerald-400 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Headline */}
              <div>
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display">
                  <span className="text-foreground">Mohammad </span>
                  <span className="gradient-text">Seraj</span>
                </h1>
                <p className="text-sm sm:text-base font-mono text-primary font-medium mt-1">
                  AI Solutions Engineer • LLM & Agentic Systems Architect
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  M.Tech IIIT-Delhi (Computational Biology) • AIR 133 DBT GAT-B
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="hero-intro text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
              Building agentic AI workflows, enterprise RAG systems, and intelligent document-processing pipelines at{' '}
              <span className="text-primary font-semibold">MGT</span>. Research interests span computational drug discovery,
              quantum-inspired graph neural networks, and biomedical deep learning—bringing together production AI engineering
              and scientific research to solve complex, real-world problems.
            </p>

            {/* Quick Impact Tags */}
            <div className="hero-tags flex flex-wrap gap-2 text-xs font-mono">
              <span className="hero-tag px-3 py-1 rounded-full bg-secondary border border-border text-foreground/90">
                ⚡ LangChain • LangGraph • CrewAI
              </span>
              <span className="hero-tag px-3 py-1 rounded-full bg-secondary border border-border text-foreground/90">
                🔍 PGVector & Qdrant RAG
              </span>
              <span className="hero-tag px-3 py-1 rounded-full bg-secondary border border-border text-foreground/90">
                🧬 BioBERT & Clinical Trials
              </span>
              <span className="hero-tag px-3 py-1 rounded-full bg-secondary border border-border text-foreground/90">
                ⚛️ Quantum GNN • JCTC (ACS Publications)
              </span>
            </div>

            {/* CTAs: Resume Download, Projects, Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Resume Download Button */}
              <Button variant="outline" size="lg" className="glass-control group font-medium" asChild>
                <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  <span>Download Resume</span>
                </a>
              </Button>

              <Button variant="outline" size="lg" className="glass-control group font-medium" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>

              <Button variant="outline" size="lg" className="glass-control group font-medium" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Initiate Connection
                </a>
              </Button>
            </div>

            {/* Social Channels with Tooltips */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/ansariserajmd/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="icon-button glass-control text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/mohammadserajansari"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                className="icon-button glass-control text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="mailto:mail.serajansari@gmail.com"
                title="Send Email"
                className="icon-button glass-control text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="tel:+919628104350"
                title="Direct Phone (+91- 9628104350)"
                className="icon-button glass-control text-muted-foreground hover:text-primary"
              >
                <Phone className="h-5 w-5" />
              </a>

              <div className="text-xs font-mono text-muted-foreground pl-2 border-l border-border">
                <span>+91- 9628104350</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Neural Matrix Canvas */}
          <div className="hero-visual lg:col-span-6 w-full">
            <NeuralMatrix3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-6">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>DISCOVER MATRIX</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
