import React, { useState } from 'react';
import { Cpu, Database, Cloud, Brain, Wrench, Sparkles, Layers } from 'lucide-react';

const skillCategories = [
  {
    id: 'genai',
    title: 'Generative AI & Agentic Systems',
    icon: Cpu,
    color: 'from-cyan-500/20 to-blue-500/20',
    skills: [
      { name: 'LangChain & LangGraph' },
      { name: 'CrewAI Multi-Agent Swarms' },
      { name: 'AWS Bedrock (Claude 3.5 Sonnet)' },
      { name: 'Llama 3.3 & Open Source LLMs' },
      { name: 'PEFT / QLoRA 4-bit Quantization' },
      { name: 'Prompt Engineering & Few-Shot' },
      { name: 'Deterministic Tool Calling & Memory' },
      { name: 'RAGAS & LangSmith Evaluation' },
    ],
  },
  {
    id: 'rag',
    title: 'RAG, Vector Stores & Databases',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20',
    skills: [
      { name: 'PGVector (PostgreSQL)' },
      { name: 'Qdrant Vector Database' },
      { name: 'FAISS Semantic Search' },
      { name: 'Snowflake Data Cloud' },
      { name: 'Hugging Face Embeddings' },
      { name: 'Hybrid Dense/Sparse Retrieval' },
      { name: 'Reciprocal Rank Fusion (RRF)' },
      { name: 'SQL & Database Indexing' },
    ],
  },
  {
    id: 'nlp-vision',
    title: 'NLP, Vision & Deep Learning',
    icon: Brain,
    color: 'from-purple-500/20 to-indigo-500/20',
    skills: [
      { name: 'BioBERT Clinical NLP' },
      { name: 'PyTorch & PyTorch Geometric' },
      { name: 'Graph Neural Networks (GNNs)' },
      { name: 'Hugging Face Transformers' },
      { name: '3D MRI Volumetric Vision (.nii)' },
      { name: 'YOLOv8n Multi-view Classification' },
      { name: 'spaCy & NLTK Text Processing' },
      { name: 'TensorFlow & Keras' },
    ],
  },
  {
    id: 'cloud-mlops',
    title: 'Cloud, Backend & MLOps',
    icon: Cloud,
    color: 'from-amber-500/20 to-orange-500/20',
    skills: [
      { name: 'FastAPI High-Speed Microservices' },
      { name: 'AWS (EC2, S3, Textract, Bedrock)' },
      { name: 'Docker Containerization' },
      { name: 'CI/CD Pipelines (Jenkins, GitHub)' },
      { name: 'CUDA & GPU Acceleration' },
      { name: 'HIPAA-Compliant AI Services' },
      { name: 'Async Stream Handling (TTS/STT)' },
      { name: 'MLflow & Model Tracking' },
    ],
  },
  {
    id: 'bio-chemistry',
    title: 'Computational Biology & Chemistry',
    icon: Sparkles,
    color: 'from-pink-500/20 to-rose-500/20',
    skills: [
      { name: 'RDKit Cheminformatics' },
      { name: 'DeepChem Drug Discovery' },
      { name: 'Modred Molecular Descriptors' },
      { name: 'Quantum Descriptors (QM, QMPSA)' },
      { name: 'LogP & Solubility Prediction' },
      { name: 'EHR & Clinical Claims Ingestion' },
      { name: 'Komodo Healthcare Workspace' },
      { name: 'ICD-10, CPT, LOINC Standards' },
    ],
  },
  {
    id: 'core-tools',
    title: 'Languages & Developer Tools',
    icon: Wrench,
    color: 'from-blue-500/20 to-cyan-500/20',
    skills: [
      { name: 'Python (3.9 - 3.12+)' },
      { name: 'SQL (PostgreSQL, MySQL)' },
      { name: 'Git & GitHub Collaboration' },
      { name: 'Linux / Bash Scripting' },
      { name: 'VS Code & PyCharm' },
      { name: 'Google Colab Pro & Jupyter' },
      { name: 'NumPy, Pandas & Scikit-Learn' },
      { name: 'Streamlit Rapid Prototyping' },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visibleCategories = skillCategories.filter(
    (cat) => activeCategory === 'all' || cat.id === activeCategory
  );

  return (
    <section id="skills" className="section-padding relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(260_60%_55%_/_0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>ENGINEERING ARSENAL</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Technical Stack & <span className="gradient-text">Core Skills</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A comprehensive, battle-tested stack spanning LLMs, agentic swarms, clinical RAG, and deep learning.
          </p>

          {/* Quick Category Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20'
                  : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              ALL CAPABILITIES
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20'
                    : 'bg-secondary/60 text-muted-foreground hover:text-foreground border border-border'
                }`}
              >
                <cat.icon className="h-3 w-3" />
                <span>{cat.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-card border border-border/80 card-glow flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold font-display text-foreground">
                    {cat.title}
                  </h4>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 rounded-lg bg-secondary/40 border border-border/50 flex items-center hover:border-primary/40 transition-colors"
                    >
                      <span className="text-xs font-mono text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill.name}
                      </span>
                    </div>
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
