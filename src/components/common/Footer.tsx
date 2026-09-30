import React from 'react';
import { portfolioConfig } from '../../config/portfolio.config';
import { socialsData } from '../../data/socials';
import { SocialIcon } from '../ui/SocialIcon';

export const Footer: React.FC = () => {
  const clickableSocials = socialsData.filter(
    (s) => s.platform === 'LinkedIn' || s.platform === 'GitHub'
  );

  return (
    <footer className="border-t border-[#E2E4DF] bg-[#FAFAF8] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright & Name */}
        <p className="text-slate-600 text-sm font-medium">
          © {new Date().getFullYear()} {portfolioConfig.author.name}
        </p>

        {/* Clickable Social Icons (LinkedIn & GitHub) */}
        <div className="flex items-center gap-3">
          {clickableSocials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E4DF] text-slate-700 hover:text-[#123524] hover:border-[#123524]/40 transition-colors"
              aria-label={social.platform}
            >
              <SocialIcon name={social.iconName} className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
