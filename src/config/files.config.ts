/**
 * Centralized File & Media Management System
 * Every downloadable resource, document, certificate, paper, and image
 * references this configuration as the single source of truth.
 */

export interface FileItem {
  id: string;
  name: string;
  category: 'resume' | 'research' | 'certificate' | 'presentation' | 'project' | 'media';
  url: string;
  description?: string;
}

export const filesConfig = {
  // Single Source of Truth for Resume Document
  resume: {
    title: 'Yashas R — Resume Document',
    url: 'https://docs.google.com/document/d/1dHA4uLwFon9etgVy3QTdDZV5oYInCxw_/edit?usp=drive_link&ouid=114914823539295017593&rtpof=true&sd=true',
    fallbackLocalUrl: '/resume.pdf',
  },

  // Single Source of Truth for Research Papers
  research: [
    {
      id: 'paper-green-ai',
      title: 'Green AI: A Review Towards a Sustainable AI Ecosystem',
      pdfUrl: 'https://drive.google.com/file/d/1G54BfVa1ov_U7qnjE4_XtpIEjOQ-Tp_3/view?usp=drive_link',
    },
  ],

  // Single Source of Truth for Certificates
  certificates: [
    {
      id: 'cert-llm-eng',
      title: 'LLM Engineering',
      issuer: 'Udemy',
      pdfUrl: 'https://drive.google.com/file/d/1ExampleDriveCertLlmId/view?usp=sharing',
    },
    {
      id: 'cert-data-analysis',
      title: 'Data Analysis using Python, AI, and Tableau',
      issuer: 'Udemy',
      pdfUrl: 'https://drive.google.com/file/d/1t-iJ3x0xsk9MV1Ka-PTUjVUTor2ofS_L/view?usp=drive_link',
    },
  ],

  // Images & Media Assets
  images: {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    heroBackground: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    projects: {
      fintrack: [
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      ],
      studentNotes: [
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    certifications: {
      udemyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
    },
    leadership: {
      cyberneticsClub: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
  },
};
