import { SingularExperienceType } from "./types";
import { SKILLS } from "@/constants/skill";

const ProjectsExperience: SingularExperienceType[] = [
  {
    name: "URL Shortener",
    logo: "/images/experiences/projects/url_shortener/logo.svg",
    link: "https://github.com/vincentsuryakim/url-shortener",

    images: [],

    history: [
      {
        role: "Software Engineer/Article Writer",
        date: "Feb. 2023",
        job_desc: [
          "Developed a simple URL Shortener using Next.js, TypeScript, Prisma, and SQLite.",
          "Published an article on Medium about the development process.",
        ],
      },
    ],

    skills: [SKILLS.NextJS, SKILLS.TypeScript, SKILLS.Prisma, SKILLS.SQLite],
  },
  {
    name: "Memepedia",
    logo: "/images/experiences/projects/memepedia/logo.svg",
    link: "https://github.com/vincentsuryakim/kesegaran-compfest",

    images: [],

    history: [
      {
        role: "Software Engineer",
        date: "Mar. 2021",
        description: "Recruitment task for COMPFEST13's Software Engineering Team.",
        job_desc: [
          "Developed a search engine for memes.",
          "Memes can be saved in the web browser using LocalStorage.",
        ],
      },
    ],

    skills: [SKILLS.ReactJS, SKILLS.Apollo, SKILLS.StyledComponents],
  },
];

export default ProjectsExperience;
