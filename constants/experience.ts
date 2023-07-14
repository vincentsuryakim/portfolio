import { ExperiencesType } from "@/constants/experience_types";
import { SKILLS } from "./experience_skills";

export const EXPERIENCES: ExperiencesType = {
  Work: [
    {
      name: "CariSaham",
      logo: "/images/experiences/work/carisaham/logo.png",
      link: "https://carisaham.id/",

      images: [
        "/images/experiences/work/carisaham/1.png",
      ],

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

      skills: [SKILLS.NextJS, SKILLS.TypeScript, SKILLS.TailwindCSS, SKILLS.Firebase, SKILLS.FastAPI, SKILLS.Linux, SKILLS.PostgreSQL, SKILLS.AWS],
    },
    {
      name: "Lncircle",
      logo: "/images/experiences/work/lncircle/logo.png",
      link: "https://socl.es/",

      images: [
        "/images/experiences/work/lncircle/1.png",
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

      images: [
        "/images/experiences/work/ajakgerak/1.png",
      ],

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

      skills: [SKILLS.DjangoRestFramework, SKILLS.Firebase, SKILLS.GoogleAPI, SKILLS.PostgreSQL, SKILLS.AWS],
    },
    {
      name: "SabilaMall",
      logo: "/images/experiences/work/sabilamall/logo.png",
      link: "https://www.sabilamall.co.id/",

      images: [
        "/images/experiences/work/sabilamall/1.png",
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

      images: [
        "/images/experiences/work/ui/1.png",
      ],

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
  ],
  Projects: [
    {
      name: "URL Shortener",
      logo: "/images/experiences/projects/url_shortener/logo.svg",
      link: "https://github.com/vincentsuryakim/url-shortener",

      images: [
        "/images/experiences/projects/url_shortener/1.png",
      ],

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

      images: [
        "/images/experiences/projects/memepedia/1.png",
      ],

      history: [
        {
          role: "Software Engineer",
          date: "Mar. 2021",
          job_desc: [
            "Recruitment task for COMPFEST13's Software Engineering Team.",
            "Developed a search engine for memes.",
            "Memes can be saved in the web browser using LocalStorage.",
          ],
        },
      ],

      skills: [SKILLS.ReactJS, SKILLS.Apollo, SKILLS.StyledComponents],
    },
  ],
  Organizations: [
    {
      name: "RISTEK Fasilkom UI",
      logo: "/images/experiences/organizations/ristek/logo.svg",
      link: "https://ristek.cs.ui.ac.id/",

      images: [
        "/images/experiences/organizations/ristek/1.png",
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

      skills: [SKILLS.AWS, SKILLS.GCP, SKILLS.Leadership, SKILLS.DecisionMaking, SKILLS.Communication],
    },
    {
      name: "COMPFEST",
      logo: "/images/experiences/organizations/compfest/logo.svg",
      link: "https://www.compfest.id/",

      images: [
        "/images/experiences/organizations/compfest/1.png",
      ],

      history: [
        {
          role: "Head of IT Development",
          date: "Nov. 2021 - Dec. 2022",
          job_desc: [
            "Led a team of 12 software engineers and 11 UX designers to complete projects from various product owners.",
            "Determined the Minimum Viable Product of various products to further enhance the development cycle.",
            "Developed the main website using Blitz.js, TailwindCSS, Framer Motion, and Prisma, alongside other software engineers.",
            "Developed all of the supporting websites using Next.js, TailwindCSS, Framer Motion, and Prisma.",
            "Developed a web-based QR Code Scanner for event admission.",
            "Deployed various services using Amazon Web Services.",
          ],
        },
        {
          role: "Software Engineer",
          date: "Mar. 2021 - Nov. 2021",
          job_desc: [
            "Developed a the main website using Next.js, TypeScript, TailwindCSS, and Framer Motion.",
            "Developed the business logic and transactional mailing system using Fastify, GraphQL, AWS SES, and many more.",
            "Designed and developed an email template using Figma and MJML."
          ],
        },
      ],

      skills: [SKILLS.Nextjs, SKILLS.BlitzJS, SKILLS.TypeScript, SKILLS.TailwindCSS, SKILLS.FramerMotion, SKILLS.Prisma, SKILLS.Fastify, SKILLS.GraphQL, SKILLS.AWS, SKILLS.Leadership, SKILLS.DecisionMaking, SKILLS.Communication],
    },
    {
      name: "Pesta Rakyat Komputer",
      logo: "/images/experiences/organizations/perak/logo.png",
      link: "https://perak.cs.ui.ac.id/",

      images: [
        "/images/experiences/organizations/perak/1.png",
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
  ]
};
