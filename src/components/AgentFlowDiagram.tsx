import React, { useState } from 'react';
import { Bot, Database, ShieldCheck, Cpu, ArrowRight, Zap, CheckCircle2, Layers } from 'lucide-react';

interface AgentNode {
  id: string;
  name: string;
  role: string;
  model: string;
  description: string;
  tech: string[];
  status: 'ACTIVE' | 'PROCESSING' | 'READY';
  metrics: string;
}

const agents: AgentNode[] = [
  {
    id: 'supervisor',
    name: 'Orchestrator Agent',
    role: 'Central Intent Classification & Task Planning',
    model: 'Claude 3.5 Sonnet / Llama 3.3',
    description: 'Decomposes complex enterprise prompts into DAG sub-tasks, assigns workflows to specialized agents, and merges synthesized outputs.',
    tech: ['CrewAI', 'LangGraph', 'Task Router', 'Context Memory'],
    status: 'ACTIVE',
    metrics: 'Routing Latency: 18ms',
  },
  {
    id: 'retrieval',
    name: 'RAG Retrieval Agent',
    role: 'Hybrid Semantic & Keyword Search',
    model: 'PGVector / Qdrant HNSW',
    description: 'Executes dense vector similarity search across clinical trial protocols, ICD-10, CPT codes, and high-dimensional embeddings.',
    tech: ['PGVector', 'Qdrant', 'Hugging Face Embeddings', 'RRF Re-ranking'],
    status: 'ACTIVE',
    metrics: 'Context Recall: 96.4%',
  },
  {
    id: 'extraction',
    name: 'Clinical Extraction Agent',
    role: 'Document OCR & Biomedical Parsing',
    model: 'AWS Textract + BioBERT',
    description: 'Extracts inclusion/exclusion criteria from unstructured EHRs and trial documents into machine-actionable JSON formats.',
    tech: ['AWS Textract', 'BioBERT', 'PEFT/QLoRA', 'spaCy'],
    status: 'READY',
    metrics: 'Extraction F1: 0.94',
  },
  {
    id: 'evaluator',
    name: 'Guardrail & Eval Agent',
    role: 'Faithfulness & Hallucination Elimination',
    model: 'RAGAS + LangSmith Tracing',
    description: 'Enforces strict hallucination-blocking guardrails on date/time scheduling and clinical criteria before final response synthesis.',
    tech: ['RAGAS Metrics', 'LangSmith', 'Pydantic Guardrails', 'Zero Hallucination'],
    status: 'ACTIVE',
    metrics: 'Hallucination Rate: <0.2%',
  },
];

export function AgentFlowDiagram() {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(agents[0]);

  return (
    <div className="w-full rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Sci-Fi Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
            <Layers className="h-4 w-4" />
            <span>ENTERPRISE AGENTIC SWARM ARCHITECTURE</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-display">
            Multi-Agent Orchestration & RAG Pipeline
          </h4>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          SWARM STATUS: PRODUCTION READY
        </div>
      </div>

      {/* Interactive Agent Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {agents.map((ag) => {
          const isSelected = selectedAgent.id === ag.id;
          return (
            <div
              key={ag.id}
              onClick={() => setSelectedAgent(ag)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 relative border ${
                isSelected
                  ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10 scale-[1.02]'
                  : 'bg-secondary/40 border-border hover:border-primary/40 hover:bg-secondary/70'
              }`}
            >
              {isSelected && (
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-primary animate-ping" />
              )}
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  {ag.id === 'supervisor' && <Cpu className="h-4 w-4" />}
                  {ag.id === 'retrieval' && <Database className="h-4 w-4" />}
                  {ag.id === 'extraction' && <Bot className="h-4 w-4" />}
                  {ag.id === 'evaluator' && <ShieldCheck className="h-4 w-4" />}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background/80 text-primary border border-primary/20">
                  {ag.status}
                </span>
              </div>
              <h5 className="font-bold text-sm text-foreground mb-1">{ag.name}</h5>
              <p className="text-xs text-muted-foreground line-clamp-1">{ag.role}</p>
            </div>
          );
        })}
      </div>

      {/* Selected Agent Deep Dive Card */}
      <div className="p-5 rounded-xl bg-secondary/30 border border-primary/20 flex flex-col md:flex-row gap-6 items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h5 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              {selectedAgent.name}
            </h5>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-primary/20 text-primary border border-primary/30">
              Model: {selectedAgent.model}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {selectedAgent.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {selectedAgent.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-background border border-border text-foreground/90 flex items-center gap-1.5"
              >
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-auto p-4 rounded-lg bg-background/80 border border-border/80 flex flex-col gap-2 min-w-[200px]">
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            Operational Telemetry
          </span>
          <span className="text-sm font-bold font-mono text-emerald-400">
            {selectedAgent.metrics}
          </span>
          <span className="text-[11px] text-muted-foreground font-mono">
            Orchestration: Async FastAPI + Docker
          </span>
        </div>
      </div>
    </div>
  );
}
