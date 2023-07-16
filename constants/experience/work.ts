import { SingularExperienceType } from "./types";
import { SKILLS } from "./skills";

const WorkExperience: SingularExperienceType[] = [
  {
    name: "TamanSchool",
    logo: "/images/experiences/work/tamanschool/logo.svg",
    link: "https://tamanschool.com/",

    images: [],

    history: [
      {
        role: "Back-end Engineer",
        date: "Apr. 2023 - Present",
        job_desc: ["Job description isn't available yet. Stay tuned!"],
      },
    ],

    skills: [
      SKILLS.DjangoRestFramework,
      SKILLS.GoogleAPI,
      SKILLS.DatabaseDesign,
      SKILLS.Python,
    ],
  },
  {
    name: "CariSaham",
    logo: "/images/experiences/work/carisaham/logo.png",
    link: "https://carisaham.id/",

    images: [],

    history: [
      {
        role: "Full Stack Software Engineer",
        date: "Mar. 2023 - Apr. 2023",
        job_desc: [
          "Integrated Cloud Firestore by Firebase, Cloud Storage by Firebase, and PostgreSQL as the database.",
          "Integrated a payment gateway using Duitku as the service provider.",
          "Set up daily time-specific service using cron jobs on Linux.",
          "Implemented transactional mailing system for payment confirmation using Gmail SMTP.",
          "Deployed both the front-end and back-end service to AWS Elastic Compute Cloud.",
          "Fixed various unresolved bugs in the front-end and back-end codebase.",
        ],
      },
    ],

    skills: [
      SKILLS.NextJS,
      SKILLS.TypeScript,
      SKILLS.Firebase,
      SKILLS.FastAPI,
      SKILLS.Linux,
    ],
  },
  {
    name: "Lncircle",
    logo: "/images/experiences/work/lncircle/logo.png",
    link: "https://socl.es/",

    images: [
      "/images/experiences/work/lncircle/1.png",
      "/images/experiences/work/lncircle/2.png",
    ],

    history: [
      {
        role: "Software Engineer",
        date: "Jul. 2022 - Oct. 2022",
        job_desc: [
          "Implemented various new features by using various components such as bottom sheet and modals to both Lncircle's mobile and web application using React Native, Expo, and Ignite CLI for mobile, and Next.js and TailwindCSS for web application.",
          "Improved code quality and fixed various bugs in both Lncircle's mobile and web application.",
          "Fixed and added high-fidelity styling for various components.",
        ],
      },
    ],

    skills: [SKILLS.NextJS, SKILLS.TypeScript, SKILLS.ReactNative, SKILLS.Expo],
  },
  {
    name: "AjakGerak",
    logo: "/images/experiences/work/ajakgerak/logo.svg",
    link: "https://www.ajakgerak.org/",

    images: [],

    history: [
      {
        role: "Software Engineer",
        date: "Jun. 2022 - Dec. 2022",
        job_desc: [
          "Main back-end engineer in creating the AjakGerak platform.",
          "Designed the database system alongside another back-end engineer, with respect to the specified requirements.",
          "Developed the back-end system, including authentication, cron jobs, etc, using Django Rest Framework.",
          "Integrated Google Calendar API to create a seamless event management system between its administrators and users.",
        ],
      },
    ],

    skills: [
      SKILLS.DjangoRestFramework,
      SKILLS.Firebase,
      SKILLS.GoogleAPI,
      SKILLS.PostgreSQL,
      SKILLS.AWS,
    ],
  },
  {
    name: "SabilaMall",
    logo: "/images/experiences/work/sabilamall/logo.png",
    link: "https://www.sabilamall.co.id/",

    images: [
      "/images/experiences/work/sabilamall/1.png",
      "/images/experiences/work/sabilamall/2.png",
    ],

    history: [
      {
        role: "Front-end Engineer",
        date: "Apr. 2021 - Mar. 2022",
        job_desc: [
          "Worked in a team of 5 software engineers and 3 UI/UX designers to revamp SabilaMall's older website using Next.js and Chakra UI.",
          "Reduced website load time from minutes to seconds with 1200+ active users by creating much more efficient API calls.",
        ],
      },
    ],

    skills: [SKILLS.NextJS, SKILLS.ChakraUI],
  },
  {
    name: "University of Indonesia",
    logo: "/images/experiences/work/ui/logo.png",
    link: "https://cs.ui.ac.id/",
    headline_role: "Teaching Assistant",
    headline_date: "Feb. 2021 - June. 2023",

    images: [],

    history: [
      {
        role: "Teaching Assistant for Software Engineering in 6th semester.",
        date: "Jan. 2023 - June. 2023",
        job_desc: [
          "Directly responsible and assisted 8 students to help them better understand the materials taught in the course.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Peer Tutor for Databases in 6th semester.",
        date: "Feb. 2023 - June. 2023",
        job_desc: [
          "Taught 6 students on a weekly basis.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Teaching Assistant for Platform-based Programming in 5th semester.",
        date: "Jul. 2022 - Dec. 2022",
        job_desc: [
          "Taught 73 students on a weekly basis.",
          "Directly responsible and assisted 17 students to help them better understand the materials taught in the course.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Teaching Assistant for Programming Foundations 2 (OOP) with Java in 4th semester.",
        date: "Jan. 2022 - June. 2022",
        job_desc: [
          "Directly responsible and assisted 15 students to help them better understand the materials taught in the course.",
          "Prepared weekly laboratory assignments and coding assignments for 400+ students.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Teaching Assistant for Programming Foundations 1 with Python in 3rd semester.",
        date: "Jul. 2021 - Jan. 2022",
        job_desc: [
          "Directly responsible and assisted 10 students to help them better understand the materials taught in the course.",
          "Prepared weekly laboratory assignments and coding assignments for 400+ students.",
          "Gave out weekly/by request sessions.",
        ],
      },
      {
        role: "Peer Tutor for Introduction to Digital Systems in 2nd semester.",
        date: "Feb. 2021 - Jun. 2021",
        job_desc: [
          "Taught 3 students privately",
          "Gave out weekly/by request sessions.",
        ],
      },
    ],

    skills: [SKILLS.Python, SKILLS.Java, SKILLS.Django],
  },
];

export default WorkExperience;
