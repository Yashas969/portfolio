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
          badge="Curriculum Vitae"
          title="Resume"
          subtitle="View Yashas R's verified resume document."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E2E4DF]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#123524]/10 text-[#123524]">
                  <FileText className="w-7 h-7 text-[#123524]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#171A18]">
                    {filesConfig.resume.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Google Drive Document • View in Browser
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon={<Eye className="w-4 h-4" />}
                  onClick={() => setIsPreviewOpen(true)}
                >
                  Resume Preview
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4 text-slate-600" />}
                  onClick={() => window.open(getViewUrl(filesConfig.resume.url), '_blank', 'noopener,noreferrer')}
                >
                  View Resume
                </Button>
              </div>
            </div>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-1">
                <h4 className="text-xs font-semibold text-[#123524] uppercase tracking-wider">
                  Education
                </h4>
                <p className="text-xs text-[#171A18] font-semibold">St. Joseph's University (BCA)</p>
                <p className="text-xs text-slate-600">CGPA: 8.7</p>
                <p className="text-xs text-slate-500">PUC: 96.7% | SSLC: 95%</p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-1">
                <h4 className="text-xs font-semibold text-[#123524] uppercase tracking-wider">
                  Featured Projects
                </h4>
                <p className="text-xs text-[#171A18] font-semibold">FinTrack (React, Supabase)</p>
                <p className="text-xs text-slate-600">Student Notes DB (PERN Stack)</p>
                <p className="text-xs text-slate-500">Full-stack web applications</p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] space-y-1">
                <h4 className="text-xs font-semibold text-[#123524] uppercase tracking-wider">
                  Leadership & Research
                </h4>
                <p className="text-xs text-[#171A18] font-semibold">President, Cybernetics Club</p>
                <p className="text-xs text-slate-600">Class Rep (6 semesters)</p>
                <p className="text-xs text-slate-500">Green AI Research Author</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Embedded Resume Viewer Modal */}
        {isPreviewOpen && (
          <Modal
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            title="Resume Document Viewer"
            maxWidth="max-w-4xl"
          >
            <div className="space-y-4">
              <div className="w-full h-[65vh] rounded-lg bg-[#FAFAF8] border border-[#E2E4DF] overflow-hidden flex items-center justify-center">
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
                  onClick={() => window.open(getViewUrl(filesConfig.resume.url), '_blank', 'noopener,noreferrer')}
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
