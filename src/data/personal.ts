import { portfolioConfig } from '../config/portfolio.config';

export const personalData = {
  ...portfolioConfig.author,
  highlights: [
    { label: 'Academic CGPA', value: '8.7' },
    { label: 'PUC Score', value: '96.7%' },
    { label: 'SSLC Score', value: '95%' },
    { label: 'College Events Led', value: '20+' },
  ],
  coreValues: [
    {
      title: 'Full-Stack Software Architecture',
      description: 'Engineered production web platforms using React, Vite, Tailwind CSS, Supabase, and PERN stack.',
    },
    {
      title: 'Sustainable Green AI Research',
      description: 'Sole author of peer-reviewed research analyzing carbon footprints, model distillation, and energy efficiency in AI ecosystems.',
    },
    {
      title: 'Technical Leadership & Organization',
      description: 'President of Cybernetics Club, orchestrating flagship hackathons, Syntaxia (300+ attendees), and International Conferences (1000+ attendees).',
    },
    {
      title: 'Data-Driven Problem Solving',
      description: 'Proficient in Python data analysis, PostgreSQL relational schemas, Tableau dashboards, and LLM engineering.',
    },
  ],
  spokenLanguages: ['English', 'Hindi', 'Kannada', 'Telugu'],
  availability: {
    status: 'Open to Part-time Internships',
    fullTimeDate: 'May 2027',
    relocation: 'Willing to Relocate',
  },
  interests: ['Fashion', 'Anime', 'Psychology', 'Fitness'],
};
