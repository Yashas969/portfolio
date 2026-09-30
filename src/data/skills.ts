import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: '',
    skills: [
      { name: 'Python', category: 'Languages', isFeatured: true },
      { name: 'SQL', category: 'Languages', isFeatured: true },
      { name: 'C, C++', category: 'Languages', isFeatured: true },
      { name: 'Java', category: 'Languages', isFeatured: true }
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Frontend',
    description: '',
    skills: [
      { name: 'React', category: 'Frameworks', isFeatured: true },
      { name: 'Vite', category: 'Frameworks', isFeatured: true },
      { name: 'Tailwind CSS', category: 'Frameworks', isFeatured: true },
      { name: 'Express.js', category: 'Frameworks', isFeatured: true },
      { name: 'Node.js (PERN Stack)', category: 'Frameworks', isFeatured: true },
    ],
  },
  {
    id: 'data-analytics',
    name: 'Data Analysis & Visualization',
    description: '',
    skills: [
      { name: 'Data Analytics', category: 'Data & AI', isFeatured: true },
      { name: 'Pandas', category: 'Data & AI', isFeatured: true },
      { name: 'NumPy', category: 'Data & AI', isFeatured: true },
      { name: 'Tableau', category: 'Data & AI', isFeatured: true },
      { name: 'Power BI', category: 'Data & AI', isFeatured: true }
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Cloud Storage',
    description: '',
    skills: [
      { name: 'Vector DB', category: 'Databases', isFeatured: true },
      { name: 'PostgreSQL', category: 'Databases', isFeatured: true },
      { name: 'MySQL', category: 'Databases', isFeatured: true },
      { name: 'MongoDB', category: 'Databases', isFeatured: true },
      { name: 'Supabase', category: 'Databases', isFeatured: true },
    ],
  },
  {
    id: 'ai-tools',
    name: 'AI & Machine Learning Tools',
    description: '',
    skills: [
      { name: 'Frontier APIs & LLMs', category: 'AI Tools', isFeatured: true },
      { name: 'Claude, Gemini, ChatGPT', category: 'AI Tools', isFeatured: true },
      { name: 'Hugging Face', category: 'AI Tools', isFeatured: false },
    ],
  },
  {
    id: 'dev-tools',
    name: 'Developer Tools & IDEs',
    description: '',
    skills: [
      { name: 'Git & GitHub', category: 'Developer Tools', isFeatured: true },
      { name: 'AntiGravity', category: 'Developer Tools', isFeatured: false },
      { name: 'VS Code & Cursor', category: 'Developer Tools', isFeatured: true },
      { name: 'Jupyter Notebook', category: 'Developer Tools', isFeatured: false },
    ],
  },
];
