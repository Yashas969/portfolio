import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import { DynamicSEO } from '../components/common/DynamicSEO';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ResearchSection } from '../sections/ResearchSection';
import { LeadershipSection } from '../sections/LeadershipSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ResumeSection } from '../sections/ResumeSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  const flags = portfolioConfig.featureFlags;

  return (
    <>
      <DynamicSEO />
      <div className="space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        {flags.showProjects && <ProjectsSection />}
        {flags.showResearch && <ResearchSection />}
        {flags.showLeadership && <LeadershipSection />}
        {flags.showCertifications && <CertificationsSection />}
        {flags.showResume && <ResumeSection />}
        {flags.showContactForm && <ContactSection />}
      </div>
    </>
  );
};
