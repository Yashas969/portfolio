import { ResearchPaper } from '../types';
import { filesConfig } from '../config/files.config';

export const researchData: ResearchPaper[] = [
  {
    id: 'research-green-ai',
    slug: 'green-ai-review-sustainable-ecosystem',
    title: 'Green AI: A Review Towards a Sustainable AI Ecosystem',
    authors: ['Yashas R'],
    venue: 'Presented at 2nd International Conference, St. Joseph\'s University',
    date: '2026-03-01',
    abstract: 'Investigates energy efficiency and carbon emissions in machine learning lifecycles. Discusses architectural strategies like knowledge distillation, pruning, and quantization to reduce environmental impact without degrading model accuracy.',
    pdfUrl: filesConfig.research[0].pdfUrl,
    tags: ['Sustainable AI', 'Model Compression', 'Carbon Footprint', 'Distillation', 'Energy Efficiency'],
    publicationType: 'Conference Review',
    featured: true,
    impactMetrics: 'Sole Author • International Conference Presentation',
  },
];
