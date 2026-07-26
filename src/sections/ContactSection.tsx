import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { portfolioConfig } from '../config/portfolio.config';
import { personalData } from '../data/personal';
import { socialsData } from '../data/socials';
import { SocialIcon } from '../components/ui/SocialIcon';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const ContactSection: React.FC = () => {
  // Filter out mailto/tel for socials, keeping only external platforms like LinkedIn and GitHub
  const clickableSocials = socialsData.filter(
    (s) => s.platform === 'LinkedIn' || s.platform === 'GitHub'
  );

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Contact"
          title="Let's Connect"
          subtitle="I'm always open to discussing internships, collaborations, research opportunities, and exciting projects."
          centered
        />

        <motion.div
          className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <GlassCard variants={fadeInUp} className="p-8 sm:p-10 text-center space-y-8 border-2 border-[#8AB0AB]/30 bg-[#26413C]/80">
            {/* Header Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1D1A] border border-[#4ADE80]/30 text-xs font-semibold text-[#4ADE80]">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span>{personalData.availability.status}</span>
            </div>

            {/* Plain Text Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-left max-w-lg mx-auto">
              {/* Plain Text Email */}
              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <p className="text-sm font-mono font-medium text-white select-all">
                  {portfolioConfig.author.email}
                </p>
              </div>

              {/* Plain Text Phone */}
              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <p className="text-sm font-mono font-medium text-white select-all">
                  +91 9606933222
                </p>
              </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#8AB0AB]" />
              <span>{portfolioConfig.author.location}</span>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-[#8AB0AB]/20" />

            {/* Clickable Social Profiles (LinkedIn & GitHub only) */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Social & Coding Profiles
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {clickableSocials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/25 text-xs text-slate-200 hover:text-white hover:border-[#8AB0AB] hover:bg-[#3E505B]/60 transition-all cursor-pointer font-medium"
                  >
                    <SocialIcon name={s.iconName} className="w-4 h-4 text-[#8AB0AB]" />
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
