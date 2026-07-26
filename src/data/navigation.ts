import { portfolioConfig } from '../config/portfolio.config';
import { FeatureFlags } from '../types';

export interface NavItem {
  label: string;
  href: string;
  flagKey?: keyof FeatureFlags;
  isExternal?: boolean;
}

export const rawNavItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects', flagKey: 'showProjects' },
  { label: 'Research', href: '#research', flagKey: 'showResearch' },
  { label: 'Leadership', href: '#leadership', flagKey: 'showLeadership' },
  { label: 'Certifications', href: '#certifications', flagKey: 'showCertifications' },
  { label: 'Resume', href: '#resume', flagKey: 'showResume' },
  { label: 'Contact', href: '#contact', flagKey: 'showContactForm' },
];

export const getActiveNavItems = (): NavItem[] => {
  return rawNavItems.filter((item) => {
    if (!item.flagKey) return true;
    return portfolioConfig.featureFlags[item.flagKey];
  });
};
