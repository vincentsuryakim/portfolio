import { ExperiencesType } from "./types";

import WorkExperience from "./work";
import OrganizationsExperience from "./organizations";
import ProjectsExperience from "./projects";

export const EXPERIENCES: ExperiencesType = {
    Work: WorkExperience,
    Projects: ProjectsExperience,
    Organizations: OrganizationsExperience
}