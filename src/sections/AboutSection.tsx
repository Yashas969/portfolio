import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Globe, Heart, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const AboutSection: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="about" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Bio & Background Card */}
          <GlassCard variants={fadeInUp} className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#E2E4DF]">
              <div className="p-2.5 rounded-lg bg-[#123524]/10 text-[#123524]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171A18]">Personal Summary</h3>
                <p className="text-xs text-slate-500">{personalData.location}</p>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              {personalData.bio}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              My approach combines modular component design, structured state management, and clear technical communication. Having served as Class Representative across 6 semesters and President of the Cybernetics Club, My focus is on accountabiity, collaborative team work and time management.
            </p>

            {/* Spoken Languages */}
            <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-2">
              <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#123524]" /> Spoken Languages
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {personalData.spokenLanguages.map((lang) => (
                  <Badge key={lang} size="sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalData.coreValues.map((value) => (
                <div
                  key={value.title}
                  className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF]"
                >
                  <h4 className="text-sm font-semibold text-[#171A18] mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#123524] shrink-0" />
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Sidebar: Education & Interests */}
          <div className="space-y-8">
            {/* Education Card */}
            {edu && (
              <GlassCard variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#E2E4DF]">
                  <div className="p-2.5 rounded-lg bg-[#123524]/10 text-[#123524]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171A18]">Education</h3>
                    <p className="text-xs text-[#123524] font-semibold">{edu.gpa}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#171A18]">{edu.degree}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{edu.institution}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">{edu.startDate} — {edu.endDate}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E2E4DF]">
                  <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.keyCoursework.map((course) => (
                      <Badge key={course} size="sm">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Personal Interests Card */}
            <GlassCard variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E2E4DF]">
                <div className="p-2.5 rounded-lg bg-[#123524]/10 text-[#123524]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#171A18]">Personal Interests</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalData.interests.map((interest) => (
                  <Badge key={interest} size="md">
                    {interest}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
