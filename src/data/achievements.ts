import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Hackathon Contributor & UI Lead — Ramaiah College Hackathon',
    organization: 'Ramaiah College of Arts, Science & Commerce',
    date: '2025-08-25',
    description: 'Collaborated in a 3-member team to design and build the Student Notes Database PERN-stack platform, owning end-to-end testing and frontend UI development.',
    category: 'Hackathon',
    badge: '🏆 Hackathon Finalist',
    tags: ['PERN Stack', 'PostgreSQL', 'React', 'Hackathon'],
  },
  {
    id: 'ach-2',
    title: 'Flagship Event Leadership — Multiplexer, Syntaxia & International Conference',
    organization: 'Cybernetics Club, St. Joseph\'s University',
    date: '2026-02-15',
    description: 'Led planning and execution of Multiplexer (100+ participants), Syntaxia (300+ participants), and the SJU International Conference (1,000+ attendees).',
    category: 'Leadership',
    badge: '🎖️ President Award',
    tags: ['Leadership', 'Event Management', 'Technical Events'],
  },
  {
    id: 'ach-3',
    title: 'Consistent Academic Distinction (> 8.5 SGPA)',
    organization: 'St. Joseph\'s University, Bengaluru',
    date: '2024 — 2027',
    description: 'Consistently maintained above 8.5 SGPA across all semesters in Bachelor of Computer Applications (BCA) program, achieving 8.7 cumulative CGPA.',
    category: 'Academic',
    badge: '⭐ Academic Honor',
    tags: ['BCA', 'CGPA 8.7', 'Distinction Rank'],
  },
];
