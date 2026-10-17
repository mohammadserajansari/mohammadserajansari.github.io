import React from 'react';
import { Sparkles, Cpu, Database, Code2, Award, Zap, Brain, Shield, Terminal as TermIcon } from 'lucide-react';
import { AITerminal } from '@/components/AITerminal';

const metrics = [
  { value: '1.5+ Yrs', label: 'Production AI / LLM Experience', icon: Zap },
  { value: '< 30 Min', label: 'Clinical Match Time (from months)', icon: Brain },
  { value: '~70%', label: 'Manual Review Effort Reduction', icon: Shield },
  { value: '0.959 R²', label: 'State-of-the-Art Quantum GNN LogP', icon: Sparkles },
  { value: '+64%', label: '3D MRI Diagnostic Accuracy Gain', icon: Cpu },
  { value: 'AIR 133', label: 'DBT GAT-B National Rank', icon: Award },
];

const pillars = [
  {
    icon: Cpu,
    title: 'Agentic AI & Multi-Agent Swarms',
    description:
      'Designing autonomous multi-agent systems (CrewAI, LangGraph) with tool calling, memory management, and deterministic guardrails that eliminate hallucinations.',
  },
  {
    icon: Database,
    title: 'Enterprise RAG & Vector Intelligence',
    description:
      'Architecting production semantic retrieval pipelines with PGVector and Qdrant. Implementing end-to-end evaluation with RAGAS and LangSmith observability.',
  },
  {
    icon: Brain,
    title: 'Biomedical & Clinical NLP Systems',
    description:
      'Fine-tuning BioBERT and domain LLMs with PEFT/QLoRA (4-bit quantization). Engineering HIPAA-compliant microservices on AWS Bedrock (Claude 3.5 Sonnet) and Snowflake.',
  },
  {
    icon: Sparkles,
    title: 'Quantum-Physics ML & 3D Vision',
    description:
      'Combining quantum chemical descriptors with Graph Neural Networks for molecular solubility (JCTC manuscript under review) and volumetric 3D deep learning on MRI .nii files.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(187_86%_42%_/_0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <TermIcon className="h-3.5 w-3.5" />
            <span>DISPATCH // ARCHITECT PROFILE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Bridging Deep Research with{' '}
            <span className="gradient-text">Enterprise Production AI</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am an AI/ML Engineer with a research pedigree from{' '}
            <span className="text-foreground font-semibold">IIIT Delhi</span> (M.Tech in Computational Biology) 
            and hands-on experience building mission-critical AI systems. Currently at{' '}
            <span className="text-primary font-semibold">MGT</span> as an{' '}
            <span className="text-foreground font-semibold">AI Solution Engineer</span>, I design and deploy 
            high-throughput RAG engines, agentic orchestration swarms, and domain-adapted language models.
          </p>
        </div>

        {/* 6 Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-card/60 border border-border/80 backdrop-blur-sm hover:border-primary/40 transition-all text-center flex flex-col justify-center items-center group card-glow"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                <m.icon className="h-4 w-4" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono gradient-text mb-1">
                {m.value}
              </div>
              <p className="text-[11px] font-mono text-muted-foreground leading-tight">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-card border border-border/80 card-glow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold font-display text-foreground mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Sci-Fi AI Command Terminal */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              INTERACTIVE AI AGENT INTERFACE
            </span>
            <h4 className="text-2xl font-bold font-display mt-1">
              Interrogate the Neural Kernel
            </h4>
          </div>
          <AITerminal />
        </div>
      </div>
    </section>
  );
}
