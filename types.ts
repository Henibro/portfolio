export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  date: string;
}

export interface SkillItem {
  category: 'Technical' | 'Analytical' | 'Communication';
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  objective: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}