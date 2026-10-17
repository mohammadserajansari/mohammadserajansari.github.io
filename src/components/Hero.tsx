import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Download, Terminal, Sparkles, Phone, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NeuralMatrix3D } from '@/components/NeuralMatrix3D';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Cybernetic Grids & Deep Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(187_86%_42%_/_0.15)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(260_60%_55%_/_0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Cyberpunk Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow animation-delay-400" />

      <div className="container-custom relative z-10">
        {/* Top Sci-Fi Status Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-primary/20 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold tracking-wider">SYSTEM STATUS: OPTIMAL</span>
            <span className="text-muted-foreground hidden sm:inline">•</span>
            <span className="text-muted-foreground hidden sm:inline">SERAJ_CORE_v2.6</span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="hidden md:inline">LOCATION: VARANASI / NEW DELHI / REMOTE</span>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              <Zap className="h-3 w-3" />
              <span>ACTIVE: AI SOLUTION ENGINEER @ MGT</span>
            </div>
          </div>
        </div>

        {/* Hero Main Grid: Left Details & Right 3D Scene */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          {/* Left Column: Intro, Photo Hologram & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/80 border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs sm:text-sm font-mono font-medium text-foreground">
                AI Solution Engineer <span className="text-primary font-bold">@ MGT</span>
              </span>
            </div>

            {/* Profile Avatar & Name Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              {/* Sci-Fi Holographic Photo Avatar */}
              <div className="relative group flex-shrink-0">
                {/* Rotating Outer Tech Ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow group-hover:border-primary transition-colors" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-purple-600 opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
                
                {/* Image Container */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary bg-card shadow-xl">
                  <img
                    src="/Mohammad_Seraj.png"
                    alt="Mohammad Seraj - AI Solution Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Holographic Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Status Dot */}
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-background border-2 border-emerald-400 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display">
                  <span className="text-foreground">Mohammad </span>
                  <span className="gradient-text">Seraj</span>
                </h1>
                <p className="text-sm sm:text-base font-mono text-primary font-medium mt-1">
                  AI Solution Engineer • LLM & Agentic Systems Architect
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  M.Tech IIIT-Delhi (Computational Biology) • AIR 133 DBT GAT-B
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Engineering high-impact <span className="text-foreground font-medium">Agentic Workflows</span>,{' '}
              <span className="text-foreground font-medium">Enterprise RAG</span>, and{' '}
              <span className="text-foreground font-medium">Quantum-Inspired Graph Neural Networks</span>. 
              Currently architecting enterprise AI solutions at <span className="text-primary font-semibold">MGT</span>, 
              translating cutting-edge LLMs and deep learning into production-grade autonomy.
            </p>

            {/* Quick Impact Tags */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-secondary border border-border text-foreground/90">
                ⚡ CrewAI & LangGraph
              </span>
              <span className="px-3 py-1 rounded-md bg-secondary border border-border text-foreground/90">
                🔍 PGVector & Qdrant RAG
              </span>
              <span className="px-3 py-1 rounded-md bg-secondary border border-border text-foreground/90">
                🧬 BioBERT & Clinical Trials
              </span>
              <span className="px-3 py-1 rounded-md bg-secondary border border-border text-foreground/90">
                ⚛️ Quantum GNN (JCTC Paper)
              </span>
            </div>

            {/* CTAs: Resume Download, Projects, Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Resume Download Button */}
              <Button size="lg" className="group font-mono shadow-lg shadow-primary/20" asChild>
                <a href="/Mohammad_Seraj_Resume.pdf" download="Mohammad_Seraj_Resume.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
              </Button>

              <Button variant="outline" size="lg" className="group font-mono border-primary/30 hover:border-primary" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>

              <Button variant="ghost" size="lg" className="font-mono text-muted-foreground hover:text-foreground" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Initiate Comms
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
                className="p-2.5 rounded-xl bg-secondary/60 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/mohammadserajansari"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repositories"
                className="p-2.5 rounded-xl bg-secondary/60 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="mailto:mail.serajansari@gmail.com"
                title="Send Email"
                className="p-2.5 rounded-xl bg-secondary/60 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="tel:+919628104350"
                title="Direct Phone (+91 9628104350)"
                className="p-2.5 rounded-xl bg-secondary/60 border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>

              <div className="text-xs font-mono text-muted-foreground pl-2 border-l border-border">
                <span>+91 9628104350</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Neural Matrix Canvas */}
          <div className="lg:col-span-6 w-full">
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
