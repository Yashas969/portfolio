import { Project } from '../types';
import { filesConfig } from '../config/files.config';

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'fintrack-personal-finance',
    title: 'FinTrack — Personal Finance & Budgeting Platform',
    tagline: 'Full-stack budgeting and financial insights application with automated transaction analytics.',
    summary: 'Engineered a full-stack budgeting and financial insights platform enabling users to add transactions, categorize expenses, and visualize spending patterns across multiple months of data solo.',
    problem: 'Individual users struggle with fragmented expense tracking across multiple bank accounts, lacking real-time data security and intuitive multi-month visual analytics.',
    solution: 'Built a responsive React + Supabase web application featuring solo ownership of frontend architecture, database schema design, and Supabase Row-Level Security (RLS) policies.',
    features: [
      'Interactive financial dashboard built with React, Vite, and Tailwind CSS',
      'Multi-month expense categorization and real-time transaction data aggregation',
      'Supabase Row-Level Security (RLS) policies for encrypted user data isolation',
      'Optimized build bundler performance yielding instant page load times on Vercel',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel', 'JavaScript'],
    category: 'Full Stack',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    githubUrl: 'https://github.com/Yashas969/fintrack',
    featured: true,
    date: '2025-11-10',
    gallery: filesConfig.images.projects.fintrack,
    isHackathon: false,
  },
  {
    id: '2',
    slug: 'student-notes-database',
    title: 'Student Notes Database',
    tagline: 'PERN-stack collaborative academic notes sharing platform.',
    summary: 'Collaborated in a 3-member team during Ramaiah College Hackathon to develop a platform enabling alumni and senior students to upload and share academic notes with peers.',
    problem: 'University students face difficulty accessing verified lecture notes and exam revision guides.',
    solution: 'Architected a PERN-stack (PostgreSQL, Express.js, React, Node.js) web platform supporting structured note categorizations and file uploads.',
    features: [
      'Structured academic repository categorized by course and semester',
      'Secure document upload engine built with Express.js and PostgreSQL',
    ],
    techStack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'PERN Stack'],
    category: 'Hackathon',
    tags: ['Hackathon Project', 'PERN Stack', 'PostgreSQL', 'Express.js', 'React', 'Node.js'],
    featured: true,
    date: '2025-08-25',
    gallery: filesConfig.images.projects.studentNotes,
    isHackathon: true,
  },
];
