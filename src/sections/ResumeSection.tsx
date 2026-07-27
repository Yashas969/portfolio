import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { filesConfig } from '../config/files.config';
import { getEmbedUrl, getViewUrl } from '../utils/gdrive';
import { fadeInUp } from '../animations/variants';

export const ResumeSection: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8 sm:p-10 space-y-8 border-2 border-[#8AB0AB]/30 bg-[#26413C]/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#8AB0AB]/20">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#3E505B] border border-[#8AB0AB]/30 text-[#8AB0AB]">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {filesConfig.resume.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    PDF Format • Preview or Open in Browser
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="glow"
                  size="md"
                  icon={<Eye className="w-4 h-4" />}
                  onClick={() => setIsPreviewOpen(true)}
                >
                  Resume Preview
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4 text-slate-300" />}
                  onClick={() => window.open(getViewUrl(filesConfig.resume.url), '_blank')}
                >
                  View Resume
                </Button>
              </div>
            </div>

            {/* Quick Resume Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-1.5">
                <h4 className="text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider">
                  Education & GPA
                </h4>
                <p className="text-xs text-white font-semibold">St. Joseph's University (BCA)</p>
                <p className="text-xs text-slate-300">CGPA: 8.7 </p>
                <p className="text-xs text-slate-400">PUC: 96.7% | SSLC: 95%</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-1.5">
                <h4 className="text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider">
                  Featured Projects
                </h4>
                <p className="text-xs text-white font-semibold">FinTrack (React, Vite, Supabase)</p>
                <p className="text-xs text-slate-300">Student Notes DB (Hackathon PERN)</p>
                <p className="text-xs text-slate-400">Full-stack web applications</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 space-y-1.5">
                <h4 className="text-xs font-semibold text-[#8AB0AB] uppercase tracking-wider">
                  Leadership & Research
                </h4>
                <p className="text-xs text-white font-semibold">President, Cybernetics Club</p>
                <p className="text-xs text-slate-300">Class Rep (6 consecutive terms)</p>
                <p className="text-xs text-slate-400">Green AI Research Paper Author</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Embedded Resume Viewer Modal (View Only) */}
        {isPreviewOpen && (
          <Modal
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            title="Resume Document Viewer"
            maxWidth="max-w-4xl"
          >
            <div className="space-y-4">
              <div className="w-full h-[65vh] rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 overflow-hidden flex items-center justify-center">
                <iframe
                  src={getEmbedUrl(filesConfig.resume.url)}
                  title="Resume PDF Preview"
                  className="w-full h-full border-none"
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  onClick={() => window.open(getViewUrl(filesConfig.resume.url), '_blank')}
                >
                  View Resume in Google Drive
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};
