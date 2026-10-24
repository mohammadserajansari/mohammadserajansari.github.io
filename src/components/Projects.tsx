import React, { useState } from 'react';
import { Github, Brain, Microscope, MessageSquare, Dna, HeartPulse, Bot, Layers, ShieldCheck, FileSearch, Network } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'all' | 'agentic' | 'rag' | 'quantum';

const projects = [
  {
    title: 'Autonomous Voice-Enabled Dealership Agent',
    category: 'agentic',
    tagline: 'Multi-Agent Voice Automation with Zero Hallucination',
    description:
      'Engineered an enterprise multi-agent system using CrewAI and Llama 3.3 for end-to-end customer service workflows: test-drive scheduling, intent detection, and dynamic knowledge base lookup. Features a sub-second voice pipeline using Deepgram Nova-2 (STT) and Aura (TTS) with tool-level deterministic guardrails eliminating scheduling hallucinations.',
    icon: Bot,
    featured: true,
    metrics: 'Sub-second Voice Latency • Zero-Hallucination Guardrails',
    techStack: ['CrewAI', 'LangChain', 'Llama 3.3', 'FastAPI', 'Deepgram Nova-2', 'Docker'],
    github: 'https://github.com/mohammadserajansari/dealership-voice-ai',
  },
  {
    title: 'Clinical Trial Patient Recruitment RAG Platform',
    category: 'rag',
    tagline: 'HIPAA-Compliant AI Patient Matching Engine',
    description:
      'Architected and deployed an AI-powered system that slashed patient identification time from several months to under 30 minutes. Implemented automated protocol ingestion using AWS Textract & Bedrock (Claude 3.5 Sonnet) with PGVector semantic retrieval for ICD-10, CPT, and LOINC codes, cutting manual screening effort by ~70%. Evaluated via RAGAS and LangSmith.',
    icon: HeartPulse,
    featured: true,
    metrics: 'Time Reduced: Months ➔ <30 Mins • 70% Manual Reduction',
    techStack: ['Claude 3.5 Sonnet', 'AWS Bedrock', 'PGVector', 'RAGAS', 'LangSmith', 'Komodo', 'Snowflake'],
    github: 'https://github.com/mohammadserajansari',
  },
  {
    title: 'Quantum-Physics Inspired Molecular GNN',
    category: 'quantum',
    tagline: 'State-of-the-Art LogP Partition Coefficient Prediction',
    description:
      'Pioneered a machine learning pipeline combining classical and quantum descriptors (QM, QMPSA, ΔG) with Graph Neural Networks for computational drug discovery. Achieved state-of-the-art LogP performance with GNN (R² = 0.959, MAE = 0.115), outperforming XGBoost and ExtraTrees. Co-authored manuscript submitted to the Journal of Chemical Theory and Computation (ACS Publications).',
    icon: Microscope,
    featured: true,
    metrics: 'R² = 0.959 (SOTA) • JCTC (ACS Publications) Under Review',
    techStack: ['PyTorch Geometric', 'GNNs', 'RDKit', 'Modred', 'DeepChem', 'scikit-learn'],
    github: 'https://github.com/mohammadserajansari',
  },
  {
    title: 'Volumetric 3D Deep Learning Alzheimer’s Diagnostics',
    category: 'quantum',
    tagline: 'M.Tech Thesis at IIIT Delhi on .nii Neuroimaging',
    description:
      'Engineered a volumetric 3D deep learning model on 3D MRI neuroimaging scans (.nii files), improving Alzheimer’s diagnostic classification accuracy by 64% over traditional 2D slice baselines. Developed multi-view YOLOv8n classifiers across axial, coronal, and sagittal planes, creating an ensemble achieving 75% overall accuracy.',
    icon: Brain,
    featured: false,
    metrics: '+64% Accuracy Gain over 2D • Multi-View Ensemble 75%',
    techStack: ['PyTorch', 'TensorFlow', 'YOLOv8n', 'OpenCV', '3D MRI (.nii)', 'Medical Imaging'],
    github: 'https://github.com/mohammadserajansari',
  },
  {
    title: 'Smart Document Q&A System',
    category: 'rag',
    tagline: 'High-Throughput RAG & Semantic QA Engine',
    description:
      'Built a production-style document Q&A API with asynchronous PDF and DOCX ingestion, hybrid FAISS and BM25 retrieval, and a corrective RAG workflow that checks grounding and retries weak retrieval. Supports multi-turn conversations with PostgreSQL, Celery, Redis, FastAPI, LangChain, and LangGraph.',
    icon: MessageSquare,
    featured: false,
    metrics: 'Hybrid Vector + BM25 Retrieval • Async Document Ingestion',
    techStack: ['FastAPI', 'LangGraph', 'FAISS', 'BM25', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
    github: 'https://github.com/mohammadserajansari/smart_doc_qa',
  },
  {
    title: 'Domain-Adapted BioBERT Clinical NLP Classifier',
    category: 'agentic',
    tagline: '4-bit Quantized Parameter-Efficient Fine-Tuning',
    description:
      'Fine-tuned BioBERT on specialized biomedical corpora using PEFT/QLoRA with 4-bit quantization via bitsandbytes, achieving efficient low-memory training and superior domain classification. Containerized via Docker with automated Jenkins CI/CD deployment pipelines.',
    icon: Dna,
    featured: false,
    metrics: '4-bit QLoRA Quantization • Low-Memory GPU Serving',
    techStack: ['BioBERT', 'Hugging Face Transformers', 'PEFT/QLoRA', 'bitsandbytes', 'PyTorch', 'Docker'],
    github: 'https://github.com/mohammadserajansari',
  },
  {
    title: 'Multi-Agent Research & Reporting System',
    category: 'agentic',
    tagline: 'Collaborative Research Across Web Sources and Documents',
    description:
      'Built a CrewAI research workflow that plans a query, gathers web and uploaded-document evidence, extracts findings, compares sources, and generates a report with confidence scoring. Supports multi-file input, local Ollama models, Tavily search, FastAPI, and persistent SQLite sessions.',
    icon: Network,
    featured: true,
    metrics: 'Six-Agent Research Workflow • Multi-Format Document Analysis',
    techStack: ['CrewAI', 'Ollama', 'FastAPI', 'Tavily', 'SQLite', 'Docker'],
    github: 'https://github.com/mohammadserajansari/multi-agent-researcher',
  },
  {
    title: 'ECCN Classification RAG',
    category: 'rag',
    tagline: 'Grounded Export Control Classification',
    description:
      'Created a retrieval-augmented classifier for matching product descriptions to export control classification numbers. Uses category routing, two-stage Qdrant retrieval, reranking, and grounded LLM reasoning over source definitions, with request tracing for auditable results.',
    icon: ShieldCheck,
    featured: true,
    metrics: 'Two-Stage Retrieval • Source-Grounded Classification',
    techStack: ['FastAPI', 'Qdrant', 'Sentence Transformers', 'LangChain', 'Groq', 'Docker'],
    github: 'https://github.com/mohammadserajansari/eccn-ai-rag-classifier',
  },
  {
    title: 'PowerPoint Template Intelligence',
    category: 'agentic',
    tagline: 'AI-Assisted Presentation Generation from Templates',
    description:
      'Built a service that analyzes presentation content and selects suitable PowerPoint templates, then generates slides through a FastAPI backend. The repository includes a Docker-based workflow and template scoring to keep generated decks aligned with the source layouts.',
    icon: Layers,
    featured: false,
    metrics: 'Template Matching • Automated Slide Generation',
    techStack: ['Python', 'FastAPI', 'LLMs', 'PowerPoint', 'Docker'],
    github: 'https://github.com/mohammadserajansari/ppt-template-intelligence',
  },
  {
    title: 'AI Chatbot Evaluation Tool',
    category: 'agentic',
    tagline: 'Local LLM Integration with Conversational Evaluation',
    description:
      'Integrated an Ollama-hosted Gemma 3 chatbot with the CeRAI AI Evaluation Tool. The project documents a reproducible local evaluation setup, an OpenAI-compatible FastAPI endpoint, and Apple Silicon Docker compatibility.',
    icon: FileSearch,
    featured: false,
    metrics: 'Local Gemma 3 Inference • Reproducible Evaluation Setup',
    techStack: ['Ollama', 'Gemma 3', 'FastAPI', 'Docker', 'CeRAI'],
    github: 'https://github.com/mohammadserajansari/chatbot-AIEvaluationTool',
  },
  {
    title: 'AI Text Transformer',
    category: 'agentic',
    tagline: 'Interactive T5 and GPT-2 Paraphrasing',
    description:
      'Developed a Streamlit application that uses pretrained T5-base and GPT-2 models to generate paraphrases from user-provided text through a simple web interface.',
    icon: MessageSquare,
    featured: false,
    metrics: 'Two Transformer Models • Interactive Streamlit App',
    techStack: ['Python', 'T5', 'GPT-2', 'PyTorch', 'Streamlit'],
    github: 'https://github.com/mohammadserajansari/AI-Text-Transformer-Custom-Paraphrasing-Solutions',
  },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      {/* Sci-Fi Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_60%_55%_/_0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>NEURAL REPOSITORY // PORTFOLIO VAULT</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Featured <span className="gradient-text">AI Projects</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From multi-agent voice systems to clinical RAG platforms and quantum-inspired deep learning.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              ALL SYSTEMS ({projects.length})
            </button>
            <button
              onClick={() => setFilter('agentic')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'agentic'
                  ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              AGENTIC & LLMs
            </button>
            <button
              onClick={() => setFilter('rag')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'rag'
                  ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              HEALTHCARE & RAG
            </button>
            <button
              onClick={() => setFilter('quantum')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'quantum'
                  ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              QUANTUM & 3D VISION
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group p-6 rounded-2xl bg-card border border-border/80 card-glow flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                project.featured ? 'border-primary/40 shadow-primary/5' : ''
              }`}
            >
              {/* Top Accent Line */}
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
              )}

              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <project.icon className="h-6 w-6" />
                  </div>

                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-mono">
                        FEATURED
                      </Badge>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      title={project.github === 'https://github.com/mohammadserajansari' ? "Browse Mohammad's GitHub repositories" : 'View GitHub Repository'}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h4 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-1">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-primary/90 mb-3 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics Highlight Pill */}
                <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/60 text-xs font-mono text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-secondary/80 text-foreground/80 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
