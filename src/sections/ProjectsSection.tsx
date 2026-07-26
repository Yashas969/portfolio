import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SocialIcon } from '../components/ui/SocialIcon';
import { projectsData } from '../data/projects';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ProjectsSection: React.FC = () => {
  const safeProjects = projectsData ?? [];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Works"
          title="Featured Projects"
          subtitle="Full-stack web applications engineered with modern frontend architectures, secure backend databases, and optimized build setups."
        />

        {/* Projects Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeProjects.map((project) => {
            const imageSrc = project?.gallery?.[0] ?? '';
            const title = project?.title ?? 'Untitled Project';
            const summary = project?.summary ?? '';
            const techStack = project?.techStack ?? [];

            return (
              <GlassCard
                key={project.id}
                variants={fadeInUp}
                className="flex flex-col justify-between p-0 overflow-hidden"
              >
                <div>
                  {/* Thumbnail Cover Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#1A1D1A]">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                        No Image Available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#26413C] via-[#26413C]/30 to-transparent" />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {title}
                    </h3>

                    <p className="text-slate-200 text-sm leading-relaxed">
                      {summary}
                    </p>

                    {/* Technology Stack List */}
                    {techStack.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {techStack.map((tech) => (
                            <Badge key={tech} variant="slate" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons (GitHub & Live Demo only where applicable) */}
                {(project?.githubUrl || project?.liveUrl) && (
                  <div className="p-6 pt-0 border-t border-[#8AB0AB]/20 mt-4 flex items-center gap-3 justify-end">
                    {project?.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<SocialIcon name="github" className="w-4 h-4 text-slate-200" />}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub Repo
                      </Button>
                    )}
                    {project?.liveUrl && (
                      <Button
                        variant="glow"
                        size="sm"
                        icon={<ExternalLink className="w-4 h-4" />}
                        onClick={() => window.open(project.liveUrl, '_blank')}
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
