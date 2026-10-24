import React from 'react';
import { Building2, Calendar, MapPin, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AgentFlowDiagram } from '@/components/AgentFlowDiagram';

const experiences = [
  {
    company: 'MGT (Amerisource Solutions Pvt. Ltd.)',
    role: 'AI Solutions Engineer',
    duration: 'Jun 2026 – Present',
    location: 'Remote',
    type: 'Full-time',
    isCurrent: true,
    summary:
      'Building agentic AI workflows and OCR-based document intelligence services, with LLM observability and deployment support.',
    highlights: [
      'Developing agentic AI workflows with LangChain and LangGraph for tool execution, contextual reasoning, and multi-step information processing.',
      'Building OCR-based document intelligence pipelines for scanned-document understanding and structured data extraction.',
      'Implementing AI-powered document analysis with LLM reasoning and prompt engineering to improve retrieval, classification, and response accuracy.',
      'Developing FastAPI services and integrating LiteLLM observability for request monitoring, usage tracking, and performance analysis.',
      'Supporting containerization and cloud deployment workflows with Docker, Azure, Git, and CI/CD.',
    ],
    techStack: [
      'Agentic AI',
      'CrewAI',
      'LangGraph',
      'LangChain',
      'OCR',
      'LiteLLM',
      'FastAPI',
      'Azure',
      'Docker',
    ],
  },
  {
    company: 'Freelance AI Engineer / Independent Research',
    role: 'Independent AI Researcher',
    duration: 'Nov 2025 – June 2026',
    location: 'Remote',
    type: 'Research & Consulting',
    summary:
      'Co-authored manuscript submitted to the Journal of Chemical Theory and Computation (ACS Publications) for quantum-inspired molecular property prediction.',
    highlights: [
      'Co-authored research manuscript (ct-2026-00508r): "Quantum-Physics Inspired ML Model for Partition Coefficient Prediction," submitted to the Journal of Chemical Theory and Computation (ACS Publications; under review).',
      'Formulated novel methodology uniting quantum chemical descriptors with Graph Neural Networks (GNNs) for accurate molecular solubility.',
      'Consulting for biotech and AI startups on productionizing LLMs, agentic tools, and computational drug discovery pipelines.',
    ],
    techStack: [
      'PyTorch Geometric',
      'GNNs',
      'RDKit',
      'DeepChem',
      'Modred',
      'Quantum Chemistry',
      'scikit-learn',
    ],
  },
  {
    company: 'Anervea Data Labs Private Limited',
    role: 'AI Developer',
    duration: 'Apr 2025 – Oct 2025',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    summary:
      'Engineered clinical trial patient recruitment platform and fine-tuned BioBERT models, cutting trial identification time from months to under 30 minutes.',
    highlights: [
      'Architected and deployed an AI-powered system that reduced patient identification time from several months to under 30 minutes, automating end-to-end eligibility screening from EHR and claims data at scale.',
      'Engineered NLP ingestion pipelines using AWS Textract and AWS Bedrock (Claude Sonnet 3.5) to parse protocol inclusion/exclusion criteria into standardized machine-readable schemas.',
      'Designed and implemented a RAG architecture with PGVector for semantic retrieval of ICD-10, CPT, and LOINC medical codes, slashing manual review effort by ~70%.',
      'Integrated with Komodo Workspace (HIPAA-compliant healthcare dataset) to operationalize cohort generation surfacing matched HCOs/HCPs without exposing protected patient data.',
      'Implemented LLM evaluation and monitoring pipelines for RAG workflows using RAGAS metrics (faithfulness, answer relevance, context precision) and LangSmith tracing.',
      'Fine-tuned BioBERT for clinical-trial NLP classification using PEFT/QLoRA with 4-bit quantization via bitsandbytes; containerized services with Docker and Jenkins CI/CD.',
    ],
    techStack: [
      'Python',
      'AWS Bedrock',
      'Claude 3.5 Sonnet',
      'AWS Textract',
      'PGVector',
      'RAGAS',
      'LangSmith',
      'BioBERT',
      'PEFT/QLoRA',
      'Snowflake',
      'Docker',
      'Jenkins',
    ],
  },
  {
    company: 'NeuroCare-eLab',
    role: 'Research Assistant',
    duration: 'Jun 2024 – Apr 2025',
    location: 'New Delhi, India',
    type: 'Research',
    summary:
      'Led computational drug discovery research achieving state-of-the-art LogP molecular prediction using Graph Neural Networks.',
    highlights: [
      'Led computational drug discovery research on LogP prediction and molecular solubility estimation, combining classical and quantum descriptors (QM, QMPSA, ΔG).',
      'Benchmarked GNN, XGBoost, RandomForest, and ExtraTrees with 5-fold cross-validation; achieved state-of-the-art LogP performance with GNN (R² = 0.959, MAE = 0.115, MSE = 0.222), outperforming traditional baselines.',
      'Designed end-to-end computational pipelines covering data preprocessing, molecular representation learning, and reproducibility.',
    ],
    techStack: [
      'Python',
      'PyTorch',
      'GNNs',
      'RDKit',
      'Modred',
      'DeepChem',
      'Feature Engineering',
      'scikit-learn',
    ],
  },
  {
    company: 'Indraprastha Institute of Information Technology Delhi (IIIT-D)',
    role: 'Researcher | M.Tech Thesis',
    duration: 'Jun 2023 – May 2024',
    location: 'New Delhi, India',
    type: 'Academic Research',
    summary:
      'Engineered volumetric 3D deep learning models on neuroimaging MRI scans for Alzheimer’s diagnosis, improving accuracy by 64% over 2D models.',
    highlights: [
      'Engineered a volumetric 3D deep learning model on .nii MRI files, improving Alzheimer’s diagnostic accuracy by 64% over 2D baselines.',
      'Developed multi-view YOLOv8n classifiers across axial (71.0%), coronal (80.5%), and sagittal (78.1%) planes, building an ensemble achieving 75% overall accuracy.',
    ],
    techStack: ['PyTorch', 'TensorFlow', 'YOLOv8n', 'OpenCV', '3D MRI', 'Medical Imaging'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(187_86%_42%_/_0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Work Experience & <span className="gradient-text">Research</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Delivering production-grade AI solutions across enterprise consulting, clinical automation, 
            and computational discovery.
          </p>
        </div>

        {/* Live Architecture Visualizer Component */}
        <AgentFlowDiagram />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.company + exp.role}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20">
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-background flex items-center justify-center ${
                        exp.isCurrent
                          ? 'bg-emerald-400 ring-4 ring-emerald-400/20 animate-pulse'
                          : 'bg-primary'
                      }`}
                    />
                  </div>

                  {/* Spacer for the other half on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-card border card-glow ${
                        exp.isCurrent
                          ? 'border-emerald-500/40 shadow-emerald-500/5'
                          : 'border-border/80'
                      } ${isEven ? 'md:mr-8' : 'md:ml-8'}`}
                    >
                      {/* Card Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-primary" />
                            <span className="font-bold text-lg text-foreground">
                              {exp.company}
                            </span>
                          </div>
                          <Badge
                            variant={exp.isCurrent ? 'default' : 'secondary'}
                            className={
                              exp.isCurrent
                                ? 'bg-emerald-500 text-slate-950 font-mono text-xs font-bold'
                                : 'font-mono text-xs'
                            }
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        <h4 className="text-xl font-bold gradient-text mb-2">
                          {exp.role}
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-sm font-medium text-foreground/90 mb-4 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Detailed Bullet Points */}
                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-primary mt-1 flex-shrink-0 text-xs">◆</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
