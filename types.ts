
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export enum SkillLevel {
  Intermediate = 'Intermediate',
  UpperIntermediate = 'Upper Intermediate',
  Advanced = 'Advanced',
}

export interface SoftwareSkill {
  name: string;
  level: SkillLevel;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Language {
    name: string;
    proficiency: string;
}
