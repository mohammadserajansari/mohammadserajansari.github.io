import { Sparkles, Cpu, Database, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'AI/ML Systems',
    description: 'End-to-end ML pipelines from research to production deployment',
  },
  {
    icon: Cpu,
    title: 'LLM & RAG',
    description: 'Building intelligent systems with cutting-edge language models',
  },
  {
    icon: Database,
    title: 'Healthcare AI',
    description: 'HIPAA-compliant solutions for clinical and biomedical applications',
  },
  {
    icon: Code2,
    title: 'Full Stack',
    description: 'Scalable APIs and cloud infrastructure for AI applications',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(187_86%_42%_/_0.03)_0%,_transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">About Me</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Turning Complex AI Research into{' '}
              <span className="gradient-text">Production Reality</span>
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI/ML professional with deep expertise in Natural Language Processing, 
                Computer Vision, and Large Language Models. My passion lies in building and 
                deploying end-to-end machine learning solutions that deliver measurable impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience spanning healthcare AI, drug discovery, and clinical 
                trial automation, I specialize in transforming cutting-edge research into 
                production-ready systems. I believe in writing clean, maintainable code that 
                scales — because the best AI solutions are the ones that actually work in the real world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on RAG architectures, agentic systems, and building intelligent 
                automation pipelines that solve real business problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border card-glow text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border card-glow text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border card-glow text-center">
                <div className="text-4xl font-bold gradient-text mb-2">M.Tech</div>
                <div className="text-sm text-muted-foreground">IIIT Delhi</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border card-glow text-center">
                <div className="text-4xl font-bold gradient-text mb-2">AIR 133</div>
                <div className="text-sm text-muted-foreground">DBT GAT-B</div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border card-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
