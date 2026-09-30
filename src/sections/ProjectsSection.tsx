import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { SocialIcon } from '../components/ui/SocialIcon';
import { projectsData } from '../data/projects';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ProjectsSection: React.FC = () => {
  const safeProjects = projectsData ?? [];

  return (
    <section id="projects" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Projects"
          subtitle="Full-stack web applications and systems engineered with modern frontend and database architectures."
        />

        {/* Text-focused Project Cards Grid (No images) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeProjects.map((project) => {
            const title = project?.title ?? 'Untitled Project';
            const summary = project?.summary ?? '';
            const techStack = project?.techStack ?? [];

            return (
              <GlassCard
                key={project.id}
                variants={fadeInUp}
                className="flex flex-col justify-between p-6 space-y-6"
              >
                <div className="space-y-3">
                  <div className="pb-2 border-b border-[#E2E4DF]">
                    <h3 className="text-xl font-bold text-[#171A18]">
                      {title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {summary}
                  </p>

                  {/* Clean Dot-Separated Technology Stack */}
                  {techStack.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                        Technologies:
                      </span>
                      <p className="text-xs font-mono font-medium text-[#123524]">
                        {techStack.join('  ·  ')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons (GitHub & Live Demo) */}
                {(project?.githubUrl || project?.liveUrl) && (
                  <div className="pt-4 border-t border-[#E2E4DF] flex items-center gap-3 justify-end">
                    {project?.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<SocialIcon name="github" className="w-4 h-4 text-slate-700" />}
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      >
                        GitHub
                      </Button>
                    )}
                    {project?.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        icon={<ExternalLink className="w-4 h-4" />}
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
