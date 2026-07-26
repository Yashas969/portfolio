import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { certificationsData } from '../data/certifications';
import { getViewUrl } from '../utils/gdrive';
import { fadeInUp, staggerContainer } from '../animations/variants';

export const CertificationsSection: React.FC = () => {
  const safeCertifications = certificationsData ?? [];

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Certified specializations in LLM Engineering, Data Analysis using Python, and Tableau dashboards."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {safeCertifications.map((cert) => (
            <GlassCard key={cert.id} variants={fadeInUp} className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#3E505B] text-[#8AB0AB] border border-[#8AB0AB]/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cert.title}</h3>
                    <p className="text-xs text-[#8AB0AB] font-semibold">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Issued: {cert.issueDate}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills?.map((skill) => (
                    <Badge key={skill} variant="slate" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* View Certificate Action Only (Opens Google Drive link in new tab, NO Verify Link, NO Download) */}
              <div className="pt-3 border-t border-[#8AB0AB]/20 flex items-center justify-end">
                {cert.pdfUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    onClick={() => window.open(getViewUrl(cert.pdfUrl!), '_blank', 'noopener,noreferrer')}
                  >
                    View Certificate
                  </Button>
                )}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
