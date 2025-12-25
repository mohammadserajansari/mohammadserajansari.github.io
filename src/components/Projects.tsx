import { ExternalLink, Github, Brain, Microscope, MessageSquare, Image, Dna, HeartPulse } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI Clinical Trial Platform',
    description: 'AI-powered patient recruitment platform for clinical trials using RAG architecture with PGVector. Automated protocol ingestion with NLP pipelines and Claude Sonnet integration.',
    icon: HeartPulse,
    techStack: ['Python', 'FastAPI', 'AWS Bedrock', 'PGVector', 'Claude Sonnet', 'Snowflake'],
    features: ['RAG Architecture', 'HIPAA Compliant', 'Real-time Analysis'],
    featured: true,
  },
  {
    title: 'Alzheimer\'s Disease Diagnostics',
    description: 'Deep learning-based diagnostic system using 3D MRI analysis. Enhanced accuracy by 64% with volumetric analysis combining axial, coronal, and sagittal views.',
    icon: Brain,
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLOv8n'],
    features: ['3D MRI Analysis', '80.5% Accuracy', 'Multi-view Fusion'],
    thesis: true,
  },
  {
    title: 'Drug Discovery ML Pipeline',
    description: 'Computational drug discovery system with GNN achieving state-of-the-art LogP prediction (R² = 0.959). Combines classical and quantum descriptors for enhanced accuracy.',
    icon: Microscope,
    techStack: ['Python', 'PyTorch', 'GNNs', 'XGBoost', 'Scikit-learn'],
    features: ['R² = 0.959', 'Quantum Descriptors', 'BBB Permeability'],
  },
  {
    title: 'AI Text Transformer',
    description: 'Real-time paraphrase generator utilizing T5-base and GPT-2 models with Streamlit web interface for custom paraphrasing solutions.',
    icon: MessageSquare,
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'T5', 'GPT-2', 'Streamlit'],
    features: ['Real-time Generation', 'Multiple Models', 'Web Interface'],
  },
  {
    title: 'Healthcare NLP System',
    description: 'NLP-powered healthcare solution using BERT for disease classification and medication recommendation. Improves patient outcomes through intelligent analysis.',
    icon: Dna,
    techStack: ['Python', 'PyTorch', 'BERT', 'NLP'],
    features: ['Disease Classification', 'Drug Recommendations', 'Patient Feedback'],
  },
  {
    title: 'GAN Image Generator',
    description: 'Generative Adversarial Network with CNN architecture for high-resolution photorealistic image generation. Optimized for robustness and convergence speed.',
    icon: Image,
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'CNNs'],
    features: ['Photorealistic Output', 'CNN Architecture', 'Optimized Training'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(260_60%_55%_/_0.05)_0%,_transparent_60%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From research prototypes to production systems — a collection of AI/ML projects 
              solving real problems in healthcare and beyond.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-6 rounded-xl bg-card border border-border card-glow flex flex-col ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary">Featured</Badge>
                    )}
                    {project.thesis && (
                      <Badge variant="outline">Thesis</Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/mohammadserajansari"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="mr-2 h-5 w-5" />
                View More on GitHub
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
