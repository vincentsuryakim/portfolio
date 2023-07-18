import { SingularExperienceType } from "./types";
import { SKILLS } from "./skills";

const OrganizationsExperience: SingularExperienceType[] = [
  {
    name: "RISTEK Fasilkom UI",
    logo: "/images/experiences/organizations/ristek/logo.svg",
    link: "https://ristek.cs.ui.ac.id/",

    images: [
      "/images/experiences/organizations/ristek/1.png",
      "/images/experiences/organizations/ristek/2.png",
      "/images/experiences/organizations/ristek/3.png",
    ],

    history: [
      {
        role: "Executive Director of Engineering",
        date: "Jan. 2023 - Present",
        job_desc: [
          "Responsible for overseeing all technical aspects of the organization.",
          "Provided consulting services to staff members to assist in problem-solving and technical guidance.",
          "Managed and maintained the IT infrastructure of the organization using Amazon Web Services and Google Cloud Platform.",
          "Supervised all ongoing internal projects within the organization to ensure their successful completion",
          "Worked with the marketing team to maintain the organization's open source community and promote its open source contributions.",
          "Fostered a collaborative and innovative environment within the organization to drive growth and success.",
        ],
      },
    ],

    skills: [
      SKILLS.AWS,
      SKILLS.GCP,
      SKILLS.Leadership,
      SKILLS.DecisionMaking,
      SKILLS.Communication,
    ],
  },
  {
    name: "COMPFEST",
    logo: "/images/experiences/organizations/compfest/logo.svg",
    link: "https://www.compfest.id/",

    images: [
      "/images/experiences/organizations/compfest/1.png",
      "/images/experiences/organizations/compfest/2.png",
      "/images/experiences/organizations/compfest/3.png",
      "/images/experiences/organizations/compfest/4.png",
    ],

    history: [
      {
        role: "Head of IT Development",
        date: "Nov. 2021 - Dec. 2022",
        job_desc: [
          "Led a team of 12 software engineers and 11 UX designers to complete projects from various product owners.",
          "Determined the Minimum Viable Product of various products to further enhance the development cycle.",
          "Developed all of the supporting websites using Next.js, TailwindCSS, Framer Motion, and Prisma.",
          "Contributed to the development of the main website using Blitz.js, TailwindCSS, Framer Motion, and Prisma, alongside other software engineers.",
          "Developed a web-based QR Code Scanner for event admission.",
          "Deployed various services using Amazon Web Services.",
        ],
      },
      {
        role: "Software Engineer",
        date: "Mar. 2021 - Nov. 2021",
        job_desc: [
          "Developed a the main website using Next.js, TypeScript, TailwindCSS, and Framer Motion.",
          "Developed the business logic for a transactional mailing system using Fastify, GraphQL, AWS SES, and many more.",
          "Designed and developed an email template using Figma and MJML.",
        ],
      },
    ],

    skills: [
      SKILLS.BlitzJS,
      SKILLS.TypeScript,
      SKILLS.FramerMotion,
      SKILLS.GraphQL,
      SKILLS.AWS,
    ],
  },
  {
    name: "Pesta Rakyat Komputer",
    logo: "/images/experiences/organizations/perak/logo.png",
    link: "https://perak.cs.ui.ac.id/",

    images: [
      "/images/experiences/organizations/perak/1.png",
      "/images/experiences/organizations/perak/2.png",
      "/images/experiences/organizations/perak/3.png",
      "/images/experiences/organizations/perak/4.png",
      "/images/experiences/organizations/perak/5.png",
    ],

    history: [
      {
        role: "Front-end Web Developer",
        date: "Jan. 2021 - May. 2021",
        job_desc: [
          "Developed a responsive and interactive map and TypeRacer game using ReactJS and styled-components.",
          "Fetched data from the back-end server using Axios.",
        ],
      },
    ],

    skills: [SKILLS.ReactJS, SKILLS.StyledComponents],
  },
];

export default OrganizationsExperience;
