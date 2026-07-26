import { PortfolioConfig } from '../types';
import { filesConfig } from './files.config';

export const portfolioConfig: PortfolioConfig = {
  siteTitle: 'Yashas R | Portfolio',
  siteUrl: 'https://yashas.dev',
  author: {
    name: 'Yashas R',
    role: 'Full Stack Developer & AI Scholar',
    tagline: 'Building web applications, exploring Sustainable Green AI, and leading technical initiatives.',
    bio: 'Computer Applications scholar at St. Joseph’s University (8.7 CGPA). Experienced in web development (React, Vite, Node.js, PostgreSQL, Supabase), AI/ML tools, and empirical research on Green AI ecosystems.',
    avatar: filesConfig.images.avatar,
    location: 'Bengaluru, India',
    email: 'yashas2202@gmail.com',
    statusText: 'Open for Developer & AI Internships',
    isAvailableForHire: true,
    resumeUrl: filesConfig.resume.url,
  },
  seo: {
    description: 'Portfolio of Yashas R showcasing projects, research, leadership, and technical skills.',
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
    primary: '#8AB0AB', // Muted Teal
    secondary: '#3E505B', // Charcoal Blue
    glow: 'rgba(138, 176, 171, 0.15)',
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
