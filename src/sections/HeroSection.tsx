import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';
import { personalData } from '../data/personal';
import { Button } from '../components/ui/Button';
import { SocialIcon } from '../components/ui/SocialIcon';
import { socialsData } from '../data/socials';
import { getViewUrl } from '../utils/gdrive';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const clickableSocials = socialsData.filter(
    (s) => s.platform === 'LinkedIn' || s.platform === 'GitHub'
  );

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title & Personal Intro */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171A18] leading-tight">
              {portfolioConfig.author.name}
            </h1>
            {/* Role paragraph removed */}
          </motion.div>

          {/* Understated Bio Summary */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioConfig.author.tagline}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View Featured Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<FileText className="w-4 h-4 text-slate-700" />}
              onClick={() => window.open(getViewUrl(portfolioConfig.author.resumeUrl), '_blank', 'noopener,noreferrer')}
            >
              View Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 text-slate-600" />}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Academic Highlights Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto"
          >
            {personalData.highlights?.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl text-center border border-[#E2E4DF] bg-[#FFFFFF] shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#123524]">
                  {item.value}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links (LinkedIn & GitHub) */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Profiles:
            </span>
            <div className="flex items-center gap-2">
              {clickableSocials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E2E4DF] text-slate-700 hover:text-[#123524] hover:border-[#123524]/40 transition-colors shadow-xs"
                  aria-label={social.platform}
                >
                  <SocialIcon name={social.iconName} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
