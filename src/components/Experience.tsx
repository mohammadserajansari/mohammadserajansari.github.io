import React, { useState } from 'react';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'MGT (Amerisource Solutions Pvt. Ltd.)',
    role: 'AI Solutions Engineer',
    duration: 'Jun 2026 – Present',
    location: 'Remote',
    type: 'Full-time',
    isCurrent: true,
    summary: 'Building agentic AI workflows and OCR-based document intelligence services, with LLM observability and deployment support.',
    highlights: [
      'Developing agentic AI workflows with LangChain and LangGraph for tool execution, contextual reasoning, and multi-step information processing.',
      'Building OCR-based document intelligence pipelines for scanned-document understanding and structured data extraction.',
      'Implementing AI-powered document analysis with LLM reasoning and prompt engineering to improve retrieval, classification, and response accuracy.',
      'Developing FastAPI services and integrating LiteLLM observability for request monitoring, usage tracking, and performance analysis.',
      'Supporting containerization and cloud deployment workflows with Docker, Azure, Git, and CI/CD.',
    ],
    techStack: ['Agentic AI', 'CrewAI', 'LangGraph', 'LangChain', 'OCR', 'LiteLLM', 'FastAPI', 'Azure', 'Docker'],
  },
  {
    company: 'Freelance AI Engineer / Independent Research',
    role: 'Independent AI Researcher',
    duration: 'Nov 2025 – June 2026',
    location: 'Remote',
    type: 'Research & Consulting',
    summary: 'Co-authored a manuscript submitted to the Journal of Chemical Theory and Computation (ACS Publications) on quantum-inspired molecular property prediction.',
    highlights: [
      'Co-authored manuscript (ct-2026-00508r), “Quantum-Physics Inspired ML Model for Partition Coefficient Prediction,” submitted to JCTC (ACS Publications; under review).',
      'Combined quantum chemical descriptors with Graph Neural Networks for molecular property prediction.',
      'Consulted biotech and AI startups on LLM applications, agentic tools, and computational drug discovery workflows.',
    ],
    techStack: ['PyTorch Geometric', 'GNNs', 'RDKit', 'DeepChem', 'Mordred', 'Quantum Chemistry', 'scikit-learn'],
  },
  {
    company: 'Anervea Data Labs Private Limited',
    role: 'AI Developer',
    duration: 'Apr 2025 – Oct 2025',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    summary: 'Worked on clinical-trial recruitment workflows, protocol parsing, clinical-code retrieval, and biomedical NLP.',
    highlights: [
      'Built NLP ingestion pipelines with AWS Textract and AWS Bedrock (Claude 3.5 Sonnet) to structure trial inclusion and exclusion criteria.',
      'Implemented PGVector retrieval for ICD-10, CPT, and LOINC medical codes to support cohort identification.',
      'Reduced patient identification time from several months to under 30 minutes and cut manual screening effort by about 70%.',
      'Integrated with Komodo Workspace and developed RAG evaluation and tracing with RAGAS and LangSmith.',
      'Fine-tuned BioBERT for clinical-trial NLP classification with PEFT/QLoRA; supported Docker and Jenkins workflows.',
    ],
    techStack: ['AWS Bedrock', 'AWS Textract', 'PGVector', 'RAGAS', 'LangSmith', 'BioBERT', 'PEFT/QLoRA', 'Docker', 'Jenkins'],
  },
  {
    company: 'NeuroCare-eLab',
    role: 'Research Assistant',
    duration: 'Jun 2024 – Apr 2025',
    location: 'New Delhi, India',
    type: 'Research',
    summary: 'Conducted computational drug-discovery research comparing graph neural networks with classical machine-learning baselines for LogP prediction.',
    highlights: [
      'Explored LogP prediction and molecular solubility using classical and quantum descriptors, including QM, QMPSA, and ΔG.',
      'Benchmarked GNN, XGBoost, Random Forest, and ExtraTrees with 5-fold cross-validation.',
      'In 5-fold cross-validation, the GNN achieved R² = 0.959, MAE = 0.115, and MSE = 0.222.',
      'Worked across preprocessing, molecular representations, and reproducible computational pipelines.',
    ],
    techStack: ['Python', 'PyTorch', 'GNNs', 'RDKit', 'Mordred', 'DeepChem', 'scikit-learn'],
  },
  {
    company: 'Indraprastha Institute of Information Technology Delhi (IIIT-D)',
    role: 'Researcher | M.Tech Thesis',
    duration: 'Jun 2023 – May 2024',
    location: 'New Delhi, India',
    type: 'Academic Research',
    summary: 'M.Tech thesis work on volumetric MRI modeling and multi-view classification for Alzheimer’s diagnosis.',
    highlights: [
      'Developed a volumetric deep-learning workflow for .nii MRI data and compared it with 2D slice baselines.',
      'Built multi-view YOLOv8n classifiers using axial, coronal, and sagittal views.',
      'Improved diagnostic accuracy by 64% over 2D slice baselines; the multi-view ensemble achieved 75% accuracy.',
    ],
    techStack: ['PyTorch', 'TensorFlow', 'YOLOv8n', 'OpenCV', '3D MRI', 'Medical Imaging'],
  },
];

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experiences[selectedIndex];

  const selectExperience = (index: number) => {
    setSelectedIndex(index);
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = selectedIndex;
    if (event.key === 'ArrowRight') nextIndex = (selectedIndex + 1) % experiences.length;
    else if (event.key === 'ArrowLeft') nextIndex = (selectedIndex - 1 + experiences.length) % experiences.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = experiences.length - 1;
    else return;
    event.preventDefault();
    selectExperience(nextIndex);
    document.getElementById(`experience-tab-${nextIndex}`)?.focus();
  };

  return (
    <section id="experience" className="section-padding experience-section relative overflow-hidden">
      <div className="experience-atmosphere" aria-hidden="true" />
      <div className="container-custom relative z-10 space-y-10">
        <header className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" /> CAREER & RESEARCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-5">
            Experience in <span className="gradient-text">AI and research</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Select a point in the timeline to explore the work, methods, and tools from each role.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-5 h-px bg-border" aria-hidden="true">
            <div className="experience-progress h-full bg-primary" style={{ width: `${((selectedIndex + 1) / experiences.length) * 100}%` }} />
          </div>

          <div className="experience-stops" role="tablist" aria-label="Career and research timeline">
            {experiences.map((experience, index) => {
              const active = selectedIndex === index;
              return (
                <button
                  key={experience.company}
                  id={`experience-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="experience-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => selectExperience(index)}
                  onKeyDown={handleTabKeyDown}
                  className={`experience-stop ${active ? 'is-active' : ''}`}
                >
                  <span className="experience-stop-marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="experience-stop-copy">
                    <span className="experience-stop-role">{experience.role}</span>
                    <span className="experience-stop-date">{experience.duration}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article
            key={selected.company}
            id="experience-panel"
            role="tabpanel"
            aria-labelledby={`experience-tab-${selectedIndex}`}
            aria-live="polite"
            aria-label={`${selected.role} at ${selected.company}`}
            className="experience-panel mt-6 rounded-2xl border border-border/80 bg-card/90 p-5 sm:p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <Badge variant="secondary" className="font-mono text-xs">{selected.type}</Badge>
                  {selected.isCurrent && <Badge className="bg-emerald-500 text-slate-950 font-mono text-xs">Current</Badge>}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{selected.role}</h3>
                    <p className="mt-1 text-primary font-medium">{selected.company}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-5">{selected.summary}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{selected.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{selected.location}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold font-mono uppercase tracking-wider text-foreground/90 mb-4">Selected contributions</h4>
                <ul className="space-y-3">
                  {selected.highlights.map((highlight) => (
                    <li key={highlight} className="experience-contribution flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border/70 pt-5" aria-label="Technologies used">
              {selected.techStack.map((technology) => (
                <span key={technology} className="rounded-md border border-primary/15 bg-primary/5 px-2.5 py-1 text-[11px] font-mono text-foreground/80">{technology}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
