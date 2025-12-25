import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    institution: 'Indraprastha Institute of Information Technology, Delhi (IIIT-D)',
    degree: 'M.Tech in Computational Biology',
    duration: '2022 - 2024',
    // score: 'CGPA: 7.96/10',
    highlight: 'Premier Institute',
  },
  {
    institution: 'Hindustan College of Science and Technology',
    degree: 'B.Tech in Biotechnology',
    duration: '2018 - 2022',
    // score: 'CGPA: 7.8/10',
    location: 'Farah, Mathura',
  },
];

const achievements = [
  {
    title: 'DBT GAT-B 2022',
    description: 'All India Rank 133 in Graduate Aptitude Test in Biotechnology',
    icon: Award,
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(187_86%_42%_/_0.03)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Background</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="gradient-text">Achievements</span>
            </h3>
          </div>

          {/* Education Cards */}
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="p-6 rounded-xl bg-card border border-border card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      {edu.highlight && (
                        <Badge className="bg-primary/20 text-primary">{edu.highlight}</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.duration}
                      </span>
                      {/* <span className="font-medium text-primary">{edu.score}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-center mb-8">Notable Achievement</h4>
            <div className="grid gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-6 rounded-xl bg-gradient-to-r from-primary/10 via-card to-card border border-primary/20 card-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold gradient-text">{achievement.title}</h5>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
