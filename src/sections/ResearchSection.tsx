import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { researchData } from '../data/research';
import { getViewUrl } from '../utils/gdrive';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ResearchSection: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = React.useState<Record<string, boolean>>({});

  const safeResearch = researchData ?? [];

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="research" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Systems Research"
          title="Sustainable Green AI Research"
          subtitle="Empirical review analyzing energy consumption, carbon footprints, model distillation, and sustainable AI lifecycle governance."
        />

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeResearch.map((paper) => {
            const isExpanded = expandedAbstracts[paper.id];

            return (
              <GlassCard key={paper.id} variants={fadeInUp} className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-[#8AB0AB]/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="teal" size="sm">
                        {paper.publicationType}
                      </Badge>
                      <span className="text-xs text-[#8AB0AB] font-semibold">{paper.venue}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white hover:text-[#8AB0AB] transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-xs text-slate-300">
                      Author(s): <span className="text-white font-semibold">{paper.authors?.join(', ')}</span>
                    </p>
                  </div>

                  {paper.impactMetrics && (
                    <div className="p-3 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/30 text-center shrink-0">
                      <span className="text-xs font-bold text-[#8AB0AB]">
                        {paper.impactMetrics}
                      </span>
                    </div>
                  )}
                </div>

                {/* Abstract Accordion */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Paper Abstract
                    </span>

                  </div>
                  <p
                    className={`text-slate-200 text-xs sm:text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'
                      }`}
                  >
                    {paper.abstract}
                  </p>
                </div>

                {/* Research Focus Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {paper.tags?.map((tag) => (
                    <Badge key={tag} variant="slate" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Paper Action Only (Opens Google Drive document in new tab) */}
                <div className="flex items-center justify-end pt-3 border-t border-[#8AB0AB]/20">
                  {paper.pdfUrl && (
                    <Button
                      variant="glow"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                      onClick={() => window.open(getViewUrl(paper.pdfUrl!), '_blank', 'noopener,noreferrer')}
                    >
                      View Paper
                    </Button>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
