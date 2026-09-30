import { PortfolioConfig } from '../types';
import { filesConfig } from './files.config';

export const portfolioConfig: PortfolioConfig = {
  siteTitle: 'Yashas R | Portfolio',
  siteUrl: 'https://yashas.dev',
  author: {
    name: 'Yashas R',
    role: 'Full Stack Developer & AI Scholar',
    tagline: 'Computer Applications scholar at St. Joseph’s University.',
    bio: 'Computer Applications scholar at St. Joseph’s University. Interested in AI/ML, web development, and empirical research on Green AI ecosystems.',
    avatar: filesConfig.images.avatar,
    location: 'Bengaluru, India',
    email: 'yashas2202@gmail.com',
    statusText: '',
    isAvailableForHire: false,
    resumeUrl: filesConfig.resume.url,
  },
  seo: {
    description: 'Personal portfolio of Yashas R showcasing web development projects, Green AI research, leadership, and technical skills.',
    keywords: [
      'Yashas R',
      'Full Stack Developer',
      'React',
      'Vite',
      'Python',
      'SQL',
      'PostgreSQL',
      'Supabase',
      'Green AI',
      'Cybernetics Club President'
    ],
    ogImage: filesConfig.images.heroBackground,
    twitterHandle: '@yashas_dev',
  },
  accentColors: {
    primary: '#26413C', // Deep Green
    secondary: '#1A1D1A', // Dark Neutral
    glow: 'rgba(38, 65, 60, 0.2)',
  },
  featureFlags: {
    showProjects: true,
    showResearch: true,
    showLeadership: true,
    showCertifications: true,
    showResume: true,
    showContactForm: true,
    showCommandMenu: true,
  },
};
