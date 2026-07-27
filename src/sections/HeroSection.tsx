import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Brain, Users, BarChart } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';
import { personalData } from '../data/personal';
import { Button } from '../components/ui/Button';
import { SocialIcon } from '../components/ui/SocialIcon';
import { socialsData } from '../data/socials';
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Status Pill */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1D1A] border border-[#8AB0AB]/30 text-slate-300 text-xs shadow-lg shadow-[#8AB0AB]/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] -ml-4" />
              <span className="font-medium text-slate-200">
                {portfolioConfig.author.statusText}
              </span>
            </div>
          </motion.div>

          {/* Main Title & Role */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-gradient">Artificial Intelligence</span>   • Data Analytics
              • Problem Solver
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-300 max-w-3xl mx-auto">
              Hi, I'm <span className="text-white font-bold">{portfolioConfig.author.name}</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            BCA Scholar at St. Joseph’s University (8.7 CGPA). Building responsive full-stack applications, interested in Green AI research, and leading technical events as Cybernetics Club President.
          </motion.p>

          {/* Core Focus Pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#26413C]/80 border border-[#8AB0AB]/20">
              <Code2 className="w-4 h-4 text-[#8AB0AB]" /> Full Stack Development
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#26413C]/80 border border-[#8AB0AB]/20">
              <Brain className="w-4 h-4 text-[#8AB0AB]" /> Artificial Intelligence
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#26413C]/80 border border-[#8AB0AB]/20">
              <BarChart className="w-4 h-4 text-[#8AB0AB]" /> Data Analytics
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#26413C]/80 border border-[#8AB0AB]/20">
              <Users className="w-4 h-4 text-[#8AB0AB]" /> Technical Leadership
            </span>
          </motion.div>

          {/* CTA Buttons (NO Download button) */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {portfolioConfig.featureFlags.showProjects && (
              <Button
                variant="glow"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5 text-slate-400" />}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto"
          >
            {personalData.highlights?.map((item) => (
              <div
                key={item.label}
                className="glass-panel p-4 rounded-2xl text-center border border-[#8AB0AB]/20 bg-[#26413C]/50"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-teal">
                  {item.value}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
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
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              {clickableSocials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/25 text-slate-300 hover:text-white hover:border-[#8AB0AB] transition-all"
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
