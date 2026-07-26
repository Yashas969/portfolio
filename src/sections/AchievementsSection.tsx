import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { achievementsData } from '../data/achievements';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Recognition"
          title="Engineering Achievements & Awards"
          subtitle="Hackathon recognitions, technical club presidency awards, and academic honors."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievementsData.map((item) => (
            <GlassCard key={item.id} variants={fadeInUp} className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {item.badge && (
                    <Badge variant="amber" size="sm">
                      {item.badge}
                    </Badge>
                  )}
                  <span className="text-xs font-mono text-slate-400">{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#8AB0AB]">
                  {item.organization}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#8AB0AB]/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag: string) => (
                    <Badge key={tag} variant="slate" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8AB0AB] hover:text-[#A2C4C0] flex items-center gap-1 font-medium"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
