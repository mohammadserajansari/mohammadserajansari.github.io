import React, { useState } from 'react';
import { Cpu, Terminal, Database, Cloud, Brain, Wrench, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    id: 'genai',
    title: 'Generative AI & Agentic Systems',
    icon: Cpu,
    color: 'from-cyan-500/20 to-blue-500/20',
    skills: [
      { name: 'LangChain & LangGraph', level: 'Expert' },
      { name: 'CrewAI Multi-Agent Swarms', level: 'Expert' },
      { name: 'AWS Bedrock (Claude 3.5 Sonnet)', level: 'Expert' },
      { name: 'Llama 3.3 & Open Source LLMs', level: 'Advanced' },
      { name: 'PEFT / QLoRA 4-bit Quantization', level: 'Advanced' },
      { name: 'Prompt Engineering & Few-Shot', level: 'Expert' },
      { name: 'Deterministic Tool Calling & Memory', level: 'Expert' },
      { name: 'RAGAS & LangSmith Evaluation', level: 'Advanced' },
    ],
  },
  {
    id: 'rag',
    title: 'RAG, Vector Stores & Databases',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20',
    skills: [
      { name: 'PGVector (PostgreSQL)', level: 'Expert' },
      { name: 'Qdrant Vector Database', level: 'Advanced' },
      { name: 'FAISS Semantic Search', level: 'Advanced' },
      { name: 'Snowflake Data Cloud', level: 'Advanced' },
      { name: 'Hugging Face Embeddings', level: 'Expert' },
      { name: 'Hybrid Dense/Sparse Retrieval', level: 'Advanced' },
      { name: 'Reciprocal Rank Fusion (RRF)', level: 'Advanced' },
      { name: 'SQL & Database Indexing', level: 'Expert' },
    ],
  },
  {
    id: 'nlp-vision',
    title: 'NLP, Vision & Deep Learning',
    icon: Brain,
    color: 'from-purple-500/20 to-indigo-500/20',
    skills: [
      { name: 'BioBERT Clinical NLP', level: 'Advanced' },
      { name: 'PyTorch & PyTorch Geometric', level: 'Expert' },
      { name: 'Graph Neural Networks (GNNs)', level: 'Advanced' },
      { name: 'Hugging Face Transformers', level: 'Expert' },
      { name: '3D MRI Volumetric Vision (.nii)', level: 'Advanced' },
      { name: 'YOLOv8n Multi-view Classification', level: 'Advanced' },
      { name: 'spaCy & NLTK Text Processing', level: 'Advanced' },
      { name: 'TensorFlow & Keras', level: 'Proficient' },
    ],
  },
  {
    id: 'cloud-mlops',
    title: 'Cloud, Backend & MLOps',
    icon: Cloud,
    color: 'from-amber-500/20 to-orange-500/20',
    skills: [
      { name: 'FastAPI High-Speed Microservices', level: 'Expert' },
      { name: 'AWS (EC2, S3, Textract, Bedrock)', level: 'Advanced' },
      { name: 'Docker Containerization', level: 'Advanced' },
      { name: 'CI/CD Pipelines (Jenkins, GitHub)', level: 'Advanced' },
      { name: 'CUDA & GPU Acceleration', level: 'Advanced' },
      { name: 'HIPAA-Compliant AI Services', level: 'Advanced' },
      { name: 'Async Stream Handling (TTS/STT)', level: 'Advanced' },
      { name: 'MLflow & Model Tracking', level: 'Proficient' },
    ],
  },
  {
    id: 'bio-chemistry',
    title: 'Computational Biology & Chemistry',
    icon: Sparkles,
    color: 'from-pink-500/20 to-rose-500/20',
    skills: [
      { name: 'RDKit Cheminformatics', level: 'Expert' },
      { name: 'DeepChem Drug Discovery', level: 'Advanced' },
      { name: 'Modred Molecular Descriptors', level: 'Advanced' },
      { name: 'Quantum Descriptors (QM, QMPSA)', level: 'Advanced' },
      { name: 'LogP & Solubility Prediction', level: 'Expert' },
      { name: 'EHR & Clinical Claims Ingestion', level: 'Advanced' },
      { name: 'Komodo Healthcare Workspace', level: 'Advanced' },
      { name: 'ICD-10, CPT, LOINC Standards', level: 'Advanced' },
    ],
  },
  {
    id: 'core-tools',
    title: 'Languages & Developer Tools',
    icon: Wrench,
    color: 'from-blue-500/20 to-cyan-500/20',
    skills: [
      { name: 'Python (3.9 - 3.12+)', level: 'Expert' },
      { name: 'SQL (PostgreSQL, MySQL)', level: 'Advanced' },
      { name: 'Git & GitHub Collaboration', level: 'Expert' },
      { name: 'Linux / Bash Scripting', level: 'Advanced' },
      { name: 'VS Code & PyCharm', level: 'Expert' },
      { name: 'Google Colab Pro & Jupyter', level: 'Expert' },
      { name: 'NumPy, Pandas & Scikit-Learn', level: 'Expert' },
      { name: 'Streamlit Rapid Prototyping', level: 'Advanced' },
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
                      className="p-2 rounded-lg bg-secondary/40 border border-border/50 flex items-center justify-between hover:border-primary/40 transition-colors"
                    >
                      <span className="text-xs font-mono text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : skill.level === 'Advanced'
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {skill.level}
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
