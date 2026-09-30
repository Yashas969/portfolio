import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { skillCategories } from '../data/skills';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const SkillsSection: React.FC = () => {
  const safeCategories = skillCategories ?? [];

  return (
    <section id="skills" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Stack"
          title="Skills & Technologies"
        />

        {/* Clean, Compact, Scannable Skills Grid (NO Descriptions) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeCategories.map((cat) => {
            const skillNames = (cat?.skills ?? []).map((s) => s.name);

            return (
              <GlassCard key={cat.id} variants={fadeInUp} className="p-5 space-y-2">
                <h3 className="text-base font-bold text-[#171A18] pb-1 border-b border-[#E2E4DF]">
                  {cat.name}
                </h3>

                {/* Clean dot-separated text list */}
                <p className="text-sm font-medium text-slate-700 leading-relaxed tracking-wide pt-1">
                  {skillNames.join('  ·  ')}
                </p>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
