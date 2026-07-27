import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages for software engineering, data analysis, and relational query design.',
    skills: [
      { name: 'Python', category: 'Languages', proficiency: 92, isFeatured: true, iconName: 'Terminal' },
      { name: 'SQL', category: 'Languages', proficiency: 90, isFeatured: true, iconName: 'Database' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Frontend',
    description: 'Modern web development tooling, reactive UI frameworks, and styling systems.',
    skills: [
      { name: 'React', category: 'Frameworks', proficiency: 94, isFeatured: true, iconName: 'Atom' },
      { name: 'Vite', category: 'Frameworks', proficiency: 92, isFeatured: true, iconName: 'Zap' },
      { name: 'Tailwind CSS', category: 'Frameworks', proficiency: 95, isFeatured: true, iconName: 'Palette' },
      { name: 'Express.js', category: 'Frameworks', proficiency: 88, isFeatured: true, iconName: 'Server' },
      { name: 'Node.js (PERN Stack)', category: 'Frameworks', proficiency: 88, isFeatured: true, iconName: 'Layers' },
    ],
  },
  {
    id: 'libraries',
    name: 'Data Analysis and visualization',
    description: 'Scientific computing, data manipulation, and numerical analytical libraries.',
    skills: [
      { name: 'Pandas', category: 'Libraries', proficiency: 90, isFeatured: true, iconName: 'Table' },
      { name: 'NumPy', category: 'Libraries', proficiency: 86, isFeatured: true, iconName: 'Binary' },
      { name: 'Tableau', category: 'Libraries', proficiency: 86, isFeatured: true, iconName: 'Binary' },

    ],
  },
  {
    id: 'databases',
    name: 'Databases & Cloud Storage',
    description: 'Relational data modeling, cloud DB services, and vector similarity stores.',
    skills: [
      { name: 'PostgreSQL', category: 'Databases', proficiency: 92, isFeatured: true, iconName: 'Database' },
      { name: 'MySQL', category: 'Databases', proficiency: 88, isFeatured: true, iconName: 'Database' },
      { name: 'Supabase (Auth & RLS)', category: 'Databases', proficiency: 90, isFeatured: true, iconName: 'ShieldCheck' },
      { name: 'Vector Databases', category: 'Databases', proficiency: 82, isFeatured: false, iconName: 'Cpu' },
    ],
  },
  {
    id: 'ai-tools',
    name: 'AI & Machine Learning Tools',
    description: 'State-of-the-art LLMs, prompt engineering, and generative AI platform integrations.',
    skills: [
      { name: 'OpenAI APIs & LLMs', category: 'AI Tools', proficiency: 92, isFeatured: true, iconName: 'Brain' },
      { name: 'Claude & ChatGPT', category: 'AI Tools', proficiency: 95, isFeatured: true, iconName: 'Sparkles' },
      { name: 'Hugging Face', category: 'AI Tools', proficiency: 85, isFeatured: false, iconName: 'Cpu' },
    ],
  },
  {
    id: 'dev-tools',
    name: 'Developer Tools & IDEs',
    description: 'Version control, AI-assisted development, and interactive notebook environments.',
    skills: [
      { name: 'Git & GitHub', category: 'Developer Tools', proficiency: 94, isFeatured: true, iconName: 'GitBranch' },
      { name: 'VS Code & Cursor', category: 'Developer Tools', proficiency: 95, isFeatured: true, iconName: 'Code2' },
      { name: 'Antigravity', category: 'Developer Tools', proficiency: 90, isFeatured: true, iconName: 'Zap' },
      { name: 'Jupyter Notebook', category: 'Developer Tools', proficiency: 88, isFeatured: false, iconName: 'FileCode' },
    ],
  },
];
