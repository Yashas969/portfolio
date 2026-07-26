import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { leadershipData } from '../data/leadership';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const LeadershipSection: React.FC = () => {
  const safeLeadership = leadershipData ?? [];

  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Positions of Responsibility"
          title="Technical Leadership & Event Management"
          subtitle="Directing college flagship technical events, leading student committees, and serving as elected Class Representative across 6 semesters."
        />

        <motion.div
          className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-[#8AB0AB]/20 before:hidden md:before:block"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeLeadership.map((item) => (
            <GlassCard
              key={item.id}
              variants={fadeInUp}
              className="md:ml-12 relative space-y-4 border-l-4 border-l-[#8AB0AB]"
            >
              {/* Clean Role & Organization Text Header (No Badges, No Chips, No Colored Rectangles) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#8AB0AB]/20">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#8AB0AB] mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono bg-[#1A1D1A] px-3 py-1.5 rounded-lg border border-[#8AB0AB]/20 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#8AB0AB]" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-slate-200 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2 pt-1">
                {item.highlights?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8AB0AB] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
