
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  CERTIFICATES = 'certificates',
  LANGUAGES = 'languages',
  CONTACT = 'contact'
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Tech' | 'Design' | 'Languages' | 'Admin' | 'Other';
  imageUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  imageUrl?: string;
}
