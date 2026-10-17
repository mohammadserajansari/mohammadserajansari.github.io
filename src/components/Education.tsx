import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, FileCheck2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    institution: 'Indraprastha Institute of Information Technology, Delhi (IIIT-D)',
    degree: 'M.Tech in Computational Biology',
    duration: '2022 – 2024',
    grade: 'CGPA: 7.96 / 10.0',
    location: 'New Delhi, India',
    badge: 'Premier Institute',
    thesis:
      'Master’s Thesis: Volumetric 3D Deep Learning Model on .nii MRI Scans for Alzheimer’s Diagnostics (+64% accuracy improvement over 2D slice baselines; multi-view YOLOv8n ensemble achieving 75%).',
    coursework: [
      'Natural Language Processing',
      'Machine Learning in Biomedical Applications',
      'Big Data Mining in Healthcare',
      'Biomedical Image Processing',
    ],
  },
  {
    institution: 'Hindustan College of Science and Technology',
    degree: 'B.Tech in Biotechnology',
    duration: '2018 – 2022',
    grade: 'CGPA: 7.80 / 10.0',
    location: 'Mathura, Uttar Pradesh, India',
    badge: 'First Class with Distinction',
    coursework: [
      'Computational Biology',
      'Biochemistry & Molecular Biology',
      'Biostatistics & Data Modeling',
      'Genetic Engineering',
    ],
  },
];

const achievements = [
  {
    title: 'DBT GAT-B (2022) — All India Rank 133',
    issuer: 'Department of Biotechnology, Government of India',
    description:
      'Secured top 1% nationwide ranking (AIR 133) in the highly competitive national aptitude examination conducted by the Govt of India for computational biology and biotechnology.',
    icon: Award,
    tag: 'National Honor',
  },
  {
    title: 'Peer-Reviewed Manuscript (ct-2026-00508r)',
    issuer: 'Journal of Chemical Theory and Computation (ACS)',
    description:
      'Co-authored research paper "Quantum-Physics Inspired ML Model for Partition Coefficient Prediction", pioneering quantum chemical descriptors with Graph Neural Networks for LogP prediction (under review).',
    icon: FileCheck2,
    tag: 'Research Impact',
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(187_86%_42%_/_0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Education & <span className="gradient-text">Honors</span>
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Rigorous computational and mathematical foundation grounded at premier institutions.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 card-glow transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h4 className="text-xl font-bold font-display text-foreground">
                        {edu.degree}
                      </h4>
                      {edu.badge && (
                        <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-mono">
                          {edu.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {edu.location}
                      </span>
                      <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thesis if present */}
              {edu.thesis && (
                <div className="mt-4 p-3.5 rounded-xl bg-secondary/50 border border-border text-xs font-mono text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">◆ </span>
                  {edu.thesis}
                </div>
              )}

              {/* Coursework Tags */}
              <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-border/50">
                <span className="text-xs font-mono text-muted-foreground self-center mr-1">
                  Core Focus:
                </span>
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-background border border-border text-foreground/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notable Achievements Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              RECOGNITIONS & CITATIONS
            </span>
            <h4 className="text-2xl font-bold font-display mt-1">
              National Honors & Research Submissions
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.title}
                className="p-6 rounded-2xl bg-card border border-primary/30 card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                      <ach.icon className="h-5 w-5" />
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                      {ach.tag}
                    </Badge>
                  </div>

                  <h5 className="text-base font-bold font-display text-foreground mb-1">
                    {ach.title}
                  </h5>
                  <p className="text-xs font-mono text-primary mb-3">{ach.issuer}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
