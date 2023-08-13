import { SkillTypeObject } from "@/constants/skill/types";

type ExperienceHistory = {
  role: string;
  date: string;
  description?: string;
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
  skills: SkillTypeObject[];
};

export type ExperiencesType = {
  Work: SingularExperienceType[];
  Projects: SingularExperienceType[];
  Organizations: SingularExperienceType[];
};
