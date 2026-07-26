export interface FeatureFlags {
  showProjects: boolean;
  showResearch: boolean;
  showLeadership: boolean;
  showCertifications: boolean;
  showResume: boolean;
  showContactForm: boolean;
  showCommandMenu: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  username: string;
}

export interface PortfolioConfig {
  siteTitle: string;
  siteUrl: string;
  author: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
    statusText: string;
    isAvailableForHire: boolean;
    resumeUrl: string;
  };
  seo: {
    description: string;
    keywords: string[];
    ogImage: string;
    twitterHandle: string;
  };
  featureFlags: FeatureFlags;
  accentColors: {
    primary: string;
    secondary: string;
    glow: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  category: 'Full Stack' | 'Web App' | 'PERN Stack' | 'Database' | 'Hackathon';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  gallery: string[];
  isHackathon?: boolean;
}

export interface ResearchPaper {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  abstract: string;
  pdfUrl?: string;
  presentationUrl?: string;
  revisionPdfUrl?: string;
  bibtex?: string;
  tags: string[];
  publicationType: 'Conference Review' | 'Journal' | 'Survey' | 'Preprint';
  featured: boolean;
  impactMetrics?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  startDate: string;
  description: string;
  highlights: string[];
  attendeesCount?: string;
  category?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  imageUrl?: string;
  credentialUrl?: string;
  badge?: string;
  category: 'Hackathon' | 'Award' | 'Leadership' | 'Academic' | 'Fellowship';
  tags: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency?: number;
  experienceYears?: string;
  isFeatured: boolean;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  percentage?: string;
  keyCoursework: string[];
  honors?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  badgeUrl?: string;
  skills: string[];
  category?: string;
}
