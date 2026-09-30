import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { researchData } from '../data/research';
import { getViewUrl } from '../utils/gdrive';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ResearchSection: React.FC = () => {
  const safeResearch = researchData ?? [];

  return (
    <section id="research" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Systems Research"
          title="Research"
          subtitle="Empirical review analyzing energy consumption, carbon footprints, model distillation, and sustainable AI lifecycle governance."
        />

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeResearch.map((paper) => (
            <GlassCard key={paper.id} variants={fadeInUp} className="p-6 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-[#E2E4DF]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge size="sm">
                      {paper.publicationType}
                    </Badge>
                    <span className="text-xs text-slate-600 font-medium">{paper.venue}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#171A18]">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Author(s): <span className="text-slate-700 font-medium">{paper.authors?.join(', ')}</span>
                  </p>
                </div>

                {paper.impactMetrics && (
                  <div className="p-3 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] text-center shrink-0">
                    <span className="text-xs font-semibold text-[#123524]">
                      {paper.impactMetrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Abstract Text */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Abstract
                </span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Research Focus Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {paper.tags?.map((tag) => (
                  <Badge key={tag} size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* View Paper Action */}
              <div className="flex items-center justify-end pt-3 border-t border-[#E2E4DF]">
                {paper.pdfUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    onClick={() => window.open(getViewUrl(paper.pdfUrl!), '_blank', 'noopener,noreferrer')}
                  >
                    View Paper
                  </Button>
                )}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
