import { Certification } from '../types';
import { filesConfig } from '../config/files.config';

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'LLM Engineering',
    issuer: 'Udemy',
    issueDate: '2026-01-15',
    credentialUrl: '',
    pdfUrl: filesConfig.certificates[0].pdfUrl,
    skills: ['LLM', 'Prompt Engineering', 'RAG', 'Vector DB'],
    category: 'AI / ML',
  },
  {
    id: 'cert-2',
    title: 'Data Analysis using Python, AI, and Tableau',
    issuer: 'Udemy',
    issueDate: '2025-06-20',
    credentialUrl: '',
    pdfUrl: filesConfig.certificates[1].pdfUrl,
    skills: ['Python', 'Tableau', 'Data Analysis', 'Pandas'],
    category: 'Data Analytics',
  },
  {
    id: 'cert-3',
    title: 'Introduction to MongoDB for Students',
    issuer: 'MongoDB University',
    issueDate: '2025-10-10',
    credentialUrl: '',
    pdfUrl: filesConfig.certificates[2].pdfUrl,
    skills: ['MongoDB', 'NoSQL', 'Document Database', 'Aggregation'],
    category: 'Database',
  },
  {
    id: 'cert-4',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '2025-11-15',
    credentialUrl: '',
    pdfUrl: filesConfig.certificates[3].pdfUrl,
    skills: ['AWS', 'Cloud Computing', 'IAM', 'S3', 'EC2'],
    category: 'Cloud',
  },
];
