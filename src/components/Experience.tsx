import { Building2, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Anervea Data Labs Private Limited',
    role: 'AI Developer',
    duration: 'April 2025 – October 2025',
    location: 'India',
    type: 'Full-time',
    highlights: [
      'Designed and deployed AI-powered patient recruitment platform for clinical trials, enabling faster and more precise patient identification from claims and EHR data',
      'Automated protocol ingestion by building NLP pipelines with AWS Textract and Bedrock (Claude Sonnet), extracting trial criteria into standardized formats',
      'Implemented RAG architecture with PGVector for retrieval of ICD-10, CPT, and LOINC codes, along with demographic eligibility criteria',
      'Integrated with Komodo Workspace to operationalize patient matching, returning structured cohorts with provider and site-level insights',
      'Built HIPAA-compliant services on AWS and Snowflake enabling near real-time trial feasibility analysis',
    ],
    techStack: ['Python', 'FastAPI', 'AWS EC2', 'AWS S3', 'AWS Textract', 'AWS Bedrock', 'Claude Sonnet', 'PGVector', 'Snowflake'],
  },
  {
    company: 'NeuroCare-eLab',
    role: 'Research Assistant',
    duration: 'June 2024 – April 2025',
    location: 'India',
    type: 'Research',
    highlights: [
      'Led advanced AI/ML research in computational drug discovery, driving innovations in LogP prediction and solubility estimation',
      'Engineered and benchmarked cutting-edge models (GNN, XGBoost, RandomForest) with rigorous 5-fold cross-validation',
      'Achieved state-of-the-art LogP performance with GNN (R² = 0.959, MAE = 0.115), outperforming traditional ML methods',
      'Designed end-to-end computational pipelines ensuring robust experimentation that accelerated drug discovery efforts',
    ],
    techStack: ['Python', 'PyTorch', 'Scikit-learn', 'GNNs', 'Transformers', 'XGBoost', 'Feature Engineering'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(187_86%_42%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Career</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building AI systems that solve real-world problems in healthcare and biotech.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0
                      ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2'
                      : 'left-0 md:-translate-x-1/2'
                  } -translate-x-1/2`}
                />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="p-6 rounded-xl bg-card border border-border card-glow">
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                        <Badge variant="outline" className="ml-auto md:ml-0">
                          {exp.type}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-bold gradient-text mb-2">{exp.role}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
