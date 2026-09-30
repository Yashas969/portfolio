import { portfolioConfig } from '../config/portfolio.config';

export const personalData = {
  ...portfolioConfig.author,
  highlights: [
    { label: 'Academic CGPA', value: '8.7' },
    { label: 'PUC Score', value: '96.7%' },
    { label: 'SSLC Score', value: '95%' },
    { label: 'Events Organized', value: '20+' },
  ],
  coreValues: [
    {
      title: 'Full-Stack Software Architecture',
      description: 'Engineered web platforms using React, Vite, Tailwind CSS, Supabase, and PERN stack.',
    },
    {
      title: 'Sustainable Green AI Research',
      description: 'Sole author of research analyzing carbon footprints, model distillation, and energy efficiency in AI ecosystems.',
    },
    {
      title: 'Technical Leadership & Organization',
      description: 'President of Cybernetics Club, orchestrating technical events, Syntaxia (300+ attendees), and International Conferences (1000+ attendees).',
    },
    {
      title: 'Data-Driven Problem Solving',
      description: 'Proficient in Python data analysis, PostgreSQL relational schemas, Tableau dashboards, and LLM engineering.',
    },
  ],
  spokenLanguages: ['English', 'Hindi', 'Kannada', 'Telugu'],
  interests: ['Fashion', 'Anime', 'Psychology', 'Fitness'],
};
