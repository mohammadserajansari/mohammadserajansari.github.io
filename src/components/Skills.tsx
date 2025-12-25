import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'AI/ML & LLMs',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Large Language Models',
      'RAG Architecture',
      'Generative AI',
      'GNNs',
      'Transformers',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'LangChain',
      'Hugging Face',
      'OpenCV',
      'NLTK',
      'scikit-learn',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Python',
      'FastAPI',
      'SQL',
      'MySQL',
      'REST APIs',
      'Streamlit',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS EC2',
      'AWS S3',
      'AWS Textract',
      'AWS Bedrock',
      'Docker',
      'GitHub',
      'Snowflake',
    ],
  },
  {
    title: 'Vector Stores & Data',
    skills: [
      'PGVector',
      'Feature Engineering',
      'Data Pre-processing',
      'Big Data Analytics',
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      'VS Code',
      'PyCharm',
      'Google Colab',
      'Jupyter',
      'Git',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(260_60%_55%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Tech Stack</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building production-ready AI systems, from research 
              to deployment.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-semibold mb-4 gradient-text">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
