import { Education } from '../types';

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'St. Joseph\'s University',
    location: 'Bengaluru, India',
    startDate: '2024-08',
    endDate: '2027-05 (Expected)',
    gpa: '8.7 CGPA (Consistently > 8.5 SGPA)',
    keyCoursework: [
      'Data Analysis using Python',
      'AI Tools (ChatGPT, LLMs)',
      'Data Visualization',
      'Database Systems',
      'Web Development',
    ],
    honors: [
      'Consistently maintained > 8.5 SGPA across all semesters',
      'President of Cybernetics Club (2026 – 2027)',
      'Class Representative for 6 consecutive semesters',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Pre-University Course (PUC)',
    institution: 'St. Joseph\'s Indian Composite Pre University College',
    location: 'Bengaluru, India',
    startDate: '2022',
    endDate: '2024',
    percentage: '96.7%',
    keyCoursework: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
    honors: ['Distinction Rank — 96.7% Aggregate Score'],
  },
  {
    id: 'edu-3',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Sree Saraswathi Vidya Mandira',
    location: 'Bengaluru, India',
    startDate: '2021',
    endDate: '2022',
    percentage: '95.0%',
    keyCoursework: ['Mathematics', 'Science', 'Social Studies'],
    honors: ['Distinction Rank — 95% Aggregate Score'],
  },
];
