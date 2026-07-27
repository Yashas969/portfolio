import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layers, Table, Terminal, Monitor, BarChart, FileCode, Server, ShieldCheck, GitBranch, Palette } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { skillCategories } from '../data/skills';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const SkillsSection: React.FC = () => {
  const safeCategories = skillCategories ?? [];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Terminal className="w-4 h-4 text-[#8AB0AB]" />;
      case 'frameworks':
        return <Layers className="w-4 h-4 text-[#8AB0AB]" />;
      case 'libraries':
        return <Table className="w-4 h-4 text-[#8AB0AB]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-[#8AB0AB]" />;
      case 'ai-tools':
        return <Brain className="w-4 h-4 text-[#8AB0AB]" />;
      case 'dev-tools':
        return <Code2 className="w-4 h-4 text-[#8AB0AB]" />;
      case 'data-bi':
        return <BarChart className="w-4 h-4 text-[#8AB0AB]" />;
      case 'os':
        return <Monitor className="w-4 h-4 text-[#8AB0AB]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#8AB0AB]" />;
    }
  };

  const getSkillIcon = (name: string = '') => {
    const n = name.toLowerCase();
    if (n.includes('python')) return <Terminal className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('sql') || n.includes('postgres') || n.includes('mysql')) return <Database className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('react') || n.includes('vite')) return <Code2 className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('tailwind') || n.includes('css')) return <Palette className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('express') || n.includes('node')) return <Server className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('supabase')) return <ShieldCheck className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('ai') || n.includes('gpt') || n.includes('claude') || n.includes('llm') || n.includes('hugging')) return <Brain className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('git')) return <GitBranch className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('tableau') || n.includes('bar')) return <BarChart className="w-4 h-4 text-[#8AB0AB]" />;
    if (n.includes('windows') || n.includes('os')) return <Monitor className="w-4 h-4 text-[#8AB0AB]" />;
    return <FileCode className="w-4 h-4 text-[#8AB0AB]" />;
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Stack"
          title="Technical Skills & Capabilities"
        />

        {/* Categorized Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeCategories.map((cat) => {
            const skills = cat?.skills ?? [];

            return (
              <GlassCard key={cat.id} variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#8AB0AB]/20">
                  <div className="p-2 rounded-xl bg-[#3E505B] border border-[#8AB0AB]/30">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-slate-300 truncate max-w-[200px]">{cat.description}</p>
                  </div>
                </div>

                {/* Minimal Skill Item Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/15 hover:border-[#8AB0AB]/40 hover:bg-[#1A1D1A]/90 transition-all"
                    >
                      <div className="p-1.5 rounded-lg bg-[#26413C] shrink-0">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-xs font-semibold text-slate-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
