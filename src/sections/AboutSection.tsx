import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Compass, Target, Code, Cpu, ShieldCheck, Globe, Calendar, Heart } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const AboutSection: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Academics"
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
            <div className="flex items-center gap-3 pb-4 border-b border-[#8AB0AB]/20">
              <div className="p-2.5 rounded-xl bg-[#3E505B] text-[#8AB0AB] border border-[#8AB0AB]/30">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">About Yashas R</h3>
                <p className="text-xs text-slate-300">{personalData.location}</p>
              </div>
            </div>

            <p className="text-slate-200 text-base leading-relaxed">
              {personalData.bio}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              My software engineering approach combines clean component composition, data-driven state isolation, and effective team coordination. Having served as Class Representative for 6 consecutive semesters and President of the Cybernetics Club, I understand the importance of clear communication, deadline accountability, and technical rigor.
            </p>

            {/* Spoken Languages & Availability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-2">
                <h4 className="text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> Spoken Languages
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {personalData.spokenLanguages.map((lang) => (
                    <Badge key={lang} variant="slate" size="sm">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-2">
                <h4 className="text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> Career Availability
                </h4>
                <p className="text-xs text-slate-300">
                  {personalData.availability.status} • Full-time from {personalData.availability.fullTimeDate} ({personalData.availability.relocation})
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalData.coreValues.map((value) => (
                <div
                  key={value.title}
                  className="p-4 rounded-xl bg-[#1A1D1A]/80 border border-[#8AB0AB]/20 hover:border-[#8AB0AB]/40 transition-all"
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8AB0AB] shrink-0" />
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Sidebar: Education & Interests */}
          <div className="space-y-8">
            {/* Education Summary Card */}
            {edu && (
              <GlassCard variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#8AB0AB]/20">
                  <div className="p-2.5 rounded-xl bg-[#3E505B] text-[#8AB0AB] border border-[#8AB0AB]/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Education</h3>
                    <p className="text-xs text-[#8AB0AB] font-semibold">{edu.gpa}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-100">{edu.degree}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{edu.institution}</p>
                  <p className="text-xs font-mono text-slate-400 mt-1">{edu.startDate} — {edu.endDate}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#8AB0AB]/20">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Coursework
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.keyCoursework.map((course) => (
                      <Badge key={course} variant="slate" size="sm">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Personal Interests Card */}
            <GlassCard variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#8AB0AB]/20">
                <div className="p-2.5 rounded-xl bg-[#3E505B] text-[#8AB0AB] border border-[#8AB0AB]/30">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Personal Interests</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalData.interests.map((interest) => (
                  <Badge key={interest} variant="teal" size="md">
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
