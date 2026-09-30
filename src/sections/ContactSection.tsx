import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { portfolioConfig } from '../config/portfolio.config';
import { socialsData } from '../data/socials';
import { SocialIcon } from '../components/ui/SocialIcon';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ContactSection: React.FC = () => {
  const clickableSocials = socialsData.filter(
    (s) => s.platform === 'LinkedIn' || s.platform === 'GitHub'
  );

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Contact"
          title="Contact Details"
          subtitle="Direct contact information and professional profiles."
          centered
        />

        <motion.div
          className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <GlassCard variants={fadeInUp} className="p-8 sm:p-10 text-center space-y-8">
            {/* Plain Text Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
              {/* Plain Text Email */}
              <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#123524] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <p className="text-sm font-mono font-medium text-[#171A18] select-all">
                  {portfolioConfig.author.email}
                </p>
              </div>

              {/* Plain Text Phone */}
              <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#123524] uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <p className="text-sm font-mono font-medium text-[#171A18] select-all">
                  +91 9606933222
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#123524]" />
              <span>{portfolioConfig.author.location}</span>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-[#E2E4DF]" />

            {/* Clickable Social Profiles (LinkedIn & GitHub only) */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Social Profiles
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {clickableSocials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] text-xs text-slate-700 hover:text-[#123524] hover:border-[#123524]/40 transition-all cursor-pointer font-medium"
                  >
                    <SocialIcon name={s.iconName} className="w-4 h-4 text-[#123524]" />
                    <span>{s.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
