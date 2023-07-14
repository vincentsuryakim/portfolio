type ExperienceSkillObject = {
    name: string;
    logo: string;
    link: string;
}

export type ExperienceSkill = {
  [key: string]: ExperienceSkillObject
};

type ExperienceHistory = {
  role: string;
  date: string;
  job_desc: string[];
};

export type SingularExperienceType = {
  name: string;
  logo: string;
  link: string;
  headline_role?: string;
  headline_date?: string;
  images: string[];
  history: ExperienceHistory[];
  skills: ExperienceSkillObject[];
};

export type ExperiencesType = {
  Work: SingularExperienceType[];
  Projects: SingularExperienceType[];
  Organizations: SingularExperienceType[];
};
