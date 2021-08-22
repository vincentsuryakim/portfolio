import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';

import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Layout from "../components/Layout";
import ExperienceCard from '../components/ExperienceCard';
import ProjectBox from '../components/ProjectBox';
import ScrollToTop from '../components/ScrollToTop';
import SkillItem from '../components/SkillItem';
import SocialItem from '../components/SocialItem';

import { Social } from '../data/social';
import { Skill } from '../data/skill';
import { downVariants, popUpVariants, rightVariants, showVariants, upVariants } from '../data/animationVariants';

import { useLocationContext } from '../contexts/LocationProvider';

const Home: NextPage = () => {
  const { aboutMeRef, resumeRef, projectsRef, contactMeRef, setScrollVisible, setScrollMotionData } = useLocationContext();

  const [profileHovering, setProfileHovering] = useState<boolean>(false)

  const [previousScrollMotionNum, setPreviousScrollMotionNum] = useState<number>(0);

  const logScroll = () => {
    const aboutMeData = aboutMeRef.current!.getBoundingClientRect();

    if (window.pageYOffset > aboutMeData.bottom + 25) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }

    if (previousScrollMotionNum > window.pageYOffset) {
      setScrollMotionData("up");
    } else {
      setScrollMotionData("down");
    }
    setPreviousScrollMotionNum(window.pageYOffset)
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logScroll);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  });

  const controlsWhoAmITitle = useAnimation();
  const { ref:whoAmIRef, inView:whoAmIInView } = useInView();
  useEffect(() => {
    if (whoAmIInView) {
      controlsWhoAmITitle.start('up');
    }
    if (!whoAmIInView) {
      controlsWhoAmITitle.start('down');
    }
  }, [controlsWhoAmITitle, whoAmIInView]);

  const controlsWhoAmIContent = useAnimation();
  const { ref:whoAmIContentRef, inView:whoAmIContentInView } = useInView();
  useEffect(() => {
    if (whoAmIContentInView) {
      controlsWhoAmIContent.start('show');
    }
    if (!whoAmIContentInView) {
      controlsWhoAmIContent.start('hidden');
    }
  }, [controlsWhoAmIContent, whoAmIContentInView]);

  const controlsExperienceTitle = useAnimation();
  const { ref:experienceTitleRef, inView:experienceTitleInView } = useInView();
  useEffect(() => {
    if (experienceTitleInView) {
      controlsExperienceTitle.start('up');
    }
    if (!experienceTitleInView) {
      controlsExperienceTitle.start('down');
    }
  }, [controlsExperienceTitle, experienceTitleInView]);

  const controlsExperienceContent = useAnimation();
  const { ref:experienceContentRef, inView:experienceContentInView } = useInView();
  useEffect(() => {
    if (experienceContentInView) {
      controlsExperienceContent.start('down');
    }
    if (!experienceContentInView) {
      controlsExperienceContent.start('up');
    }
  }, [controlsExperienceContent, experienceContentInView]);

  const controlsEducationTitle = useAnimation();
  const { ref:educationTitleRef, inView:educationTitleInView } = useInView();
  useEffect(() => {
    if (educationTitleInView) {
      controlsEducationTitle.start('up');
    }
    if (!educationTitleInView) {
      controlsEducationTitle.start('down');
    }
  }, [controlsEducationTitle, educationTitleInView]);

  const controlsEducationContent = useAnimation();
  const { ref:educationContentRef, inView:educationContentInView } = useInView();
  useEffect(() => {
    if (educationContentInView) {
      controlsEducationContent.start('right');
    }
    if (!educationContentInView) {
      controlsEducationContent.start('left');
    }
  }, [controlsEducationContent, educationContentInView]);

  const controlsSkillsTitle = useAnimation();
  const { ref:skillsTitleRef, inView:skillsTitleInView } = useInView();
  useEffect(() => {
    if (skillsTitleInView) {
      controlsSkillsTitle.start('up');
    }
    if (!skillsTitleInView) {
      controlsSkillsTitle.start('down');
    }
  }, [controlsSkillsTitle, skillsTitleInView]);

  const controlsSkillsContent = useAnimation();
  const { ref:skillsContentRef, inView:skillsContentInView } = useInView();
  useEffect(() => {
    if (skillsContentInView) {
      controlsSkillsContent.start('popped');
    }
    if (!skillsContentInView) {
      controlsSkillsContent.start('small');
    }
  }, [controlsSkillsContent, skillsContentInView]);

  const controlsProjectsTitle = useAnimation();
  const { ref:projectsTitleRef, inView:projectsTitleInView } = useInView();
  useEffect(() => {
    if (projectsTitleInView) {
      controlsProjectsTitle.start('show');
    }
    if (!projectsTitleInView) {
      controlsProjectsTitle.start('hidden');
    }
  }, [controlsProjectsTitle, projectsTitleInView]);

  const controlsProjectsContent = useAnimation();
  const { ref:projectsContentRef, inView:projectsContentInView } = useInView();
  useEffect(() => {
    if (projectsContentInView) {
      controlsProjectsContent.start('popped');
    }
    if (!projectsContentInView) {
      controlsProjectsContent.start('small');
    }
  }, [controlsProjectsContent, projectsContentInView]);

  return (
    <Layout>

        {/* Hero */}
        <div className="relative w-full h-screen max-h-[-webkit-fill-available] flex items-center justify-center flex-col">
          <h1 className="font-bold text-5xl sm:text-7xl mb-[0.6rem]">Hello!</h1>
          <h2 className="text-xl sm:text-2xl font-light">My name is <span className="font-bold text-2xl sm:text-3xl">Vincent</span></h2>
          <h2 className="text-xl sm:text-2xl font-light">and I&apos;m a <span className="font-bold text-2xl sm:text-3xl">
            <Typewriter
                words={['software engineer', 'student', 'web developer']}
                loop={0}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></span>
          </h2>
          <p className="absolute bottom-4 sm:bottom-12 animate-bounce text-2xl sm:text-3xl">↓</p>
        </div>

        {/* About Me */}
        <div className="pt-12 pb-12 w-full bg-black block lg:flex" ref={aboutMeRef}>
          <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <motion.h3
                className="text-5xl text-center lg:text-right font-bold text-white lg:pr-4 static lg:sticky top-20"
                ref={whoAmIRef}
                initial="up"
                animate={controlsWhoAmITitle}
                variants={upVariants}
              >Who Am I</motion.h3>
            </div>
          </div>
          <motion.div
            className="w-full lg:w-4/6 mt-12 lg:mt-0 flex flex-col items-center"
            ref={whoAmIContentRef}
            initial="hidden"
            animate={controlsWhoAmIContent}
            variants={showVariants}
          >
            <motion.img
              className="rounded-full w-48"
              src="profile.jpg"
              alt="profilephoto"
              onHoverStart={() => setProfileHovering(true)}
              onHoverEnd={() => setProfileHovering(false)}
              variants={{
                basic: { borderRadius: "50%"},
                whileHovering: {
                  borderRadius: "20%",
                  transition: {
                    duration: 0.1,
                  }
                }
              }}
              animate={profileHovering ? "whileHovering" : "basic"}
            />
            <p className="text-center mt-8 text-lg text-white px-4 lg:px-32">Hello! My name is Vincent, and I’m a computer science student at the University of Indonesia. I have a passion for Data Science, Artificial Intelligence, and Web Development. I am dedicated, motivated, highly inspired, and ready to adapt and overcome any obstacles!</p>
            <p className="text-center mt-8 text-lg text-white">Feel free to connect with me via</p>
            <div className="flex items-center space-x-5 mt-2.5">
              {Social && Social.map((data) => {
                return (
                  <SocialItem key={data.alt} href={data.href} src={data.src} alt={data.alt} />
                )
              })}
            </div>
            <a href="https://drive.google.com/file/d/1Tvo6GCSyo50ytg7TVai8WcjN-l9YJIPA/view?usp=sharing" className="w-5/6 lg:w-2/6" rel="noreferrer" target="_blank">
              <button className="mt-8 bg-white rounded-md w-full h-12 font-semibold flex items-center justify-center">
                <div className="flex flex-row space-x-1 items-center justify-center">
                  <img src="/logo/download.svg" alt="download" />
                  <p>Download CV</p>
                </div>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Experience */}
        <div className="mt-24 w-full block lg:flex" ref={resumeRef}>
          <div className=" w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <motion.h3
                className="text-5xl text-right font-bold lg:pr-4 static lg:sticky top-20"
                ref={experienceTitleRef}
                initial="up"
                animate={controlsExperienceTitle}
                variants={upVariants}
              >Experience</motion.h3>
            </div>
          </div>
          <div className="w-full lg:w-4/6 mt-12 lg:mt-0 flex flex-col items-center px-6 lg:px-16">
            <motion.div
              className="w-full space-y-6"
              ref={experienceContentRef}
              initial="up"
              animate={controlsExperienceContent}
              variants={downVariants}
            >
              <ExperienceCard
                href="https://www.compfest.id/"
                imgSrc="/experience/compfest.svg"
                title="COMPFEST"
                role="Manager of IT Development"
                time="2021 - Present"
                // short={[
                //   "To be added",
                // ]}
              >
                <h5 className="text-md italic">Manager of IT Development</h5>
                <h5 className="text-md italic">2021 - Present</h5>
                {/* <ul className="mt-2 list-disc list-inside">
                  <li>Information about being Manager of IT Development</li>
                </ul> */}
                <h5 className="text-md italic border-t-[1px] border-gray-300 mt-2 pt-2">Software Engineer</h5>
                <h5 className="text-md italic">2021</h5>
                {/* <ul className="mt-2 list-disc ml-4">
                  <li>To be added.</li>
                </ul> */}
              </ExperienceCard>
              <ExperienceCard
                href="http://betis.cs.ui.ac.id/"
                imgSrc="/experience/betis.svg"
                title="BETIS Fasilkom UI"
                role="VPIC of Web Development"
                time="2021 - Present"
              >
                <h5 className="text-md italic">VPIC of Web Development</h5>
                <h5 className="text-md italic">2021 - Present</h5>
                {/* <ul className="mt-2 list-disc ml-4">
                  <li>Information about being VPIC of Web Development</li>
                </ul> */}
              </ExperienceCard>
              <ExperienceCard
                href="https://bem.cs.ui.ac.id/"
                imgSrc="/experience/bem.svg"
                title="BEM Fakultas Ilmu Komputer"
                role="Staff of Project Development"
                time="2021 - Present"
                short={[
                  "Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies."
                ]}
              >
                <h5 className="text-md italic">Staff of Project Development</h5>
                <h5 className="text-md italic">2021 - Present</h5>
                <ul className="mt-2 list-disc ml-4">
                  <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                </ul>
              </ExperienceCard>
              <ExperienceCard
                href="https://perak.cs.ui.ac.id/"
                imgSrc="/experience/perak.svg"
                title="Pesta Rakyat Komputer"
                role="Front-end Web Developer"
                time="2021"
                short={[
                  "Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.",
                  "Fetched data from a back-end server using Axios and displayed it to the user."
                ]}
              >
                <h5 className="text-md italic">Front-end Web Developer</h5>
                <h5 className="text-md italic">2021</h5>
                <ul className="mt-2 list-disc ml-4">
                  <li>Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.</li>
                  <li>Fetched data from a back-end server using Axios and displayed it to the user.</li>
                </ul>
              </ExperienceCard>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-36 lg:mt-24 w-full block lg:flex">
          <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <motion.h3
                className="text-5xl text-center lg:text-right font-bold lg:pr-4 static lg:sticky top-20"
                ref={educationTitleRef}
                initial="up"
                animate={controlsEducationTitle}
                variants={upVariants}
              >Education</motion.h3>
            </div>
          </div>
          <motion.div
            className="mt-10 lg:mt-0 w-full lg:w-4/6 px-6 lg:px-16 space-y-9"
            ref={educationContentRef}
            initial="left"
            animate={controlsEducationContent}
            variants={rightVariants}
          >
              <div>
                <h4 className="text-left text-2xl font-semibold">Universitas Indonesia</h4>
                <h5 className="text-md italic">Bachelor of Computer Science &nbsp;&bull;&nbsp; 2020 - 2024</h5>
                <ul className="mt-2 list-disc list-inside">
                  <li>Teaching Assistant for Foundations of Programming 1 in 3<sup>rd</sup> semester</li>
                  <li>Peer Tutor for Introduction to Digital Systems in 2<sup>nd</sup> semester</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-left text-2xl font-semibold">SMAK 1 Penabur Jakarta</h4>
                <h5 className="text-md italic">High School Diploma, Natural Sciences &nbsp;&bull;&nbsp; 2017 - 2020</h5>
              </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-36 lg:mt-24 w-full block lg:flex">
          <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <motion.h3
                className="text-5xl text-center lg:text-right font-bold lg:pr-4 static lg:sticky top-20"
                ref={skillsTitleRef}
                initial="up"
                animate={controlsSkillsTitle}
                variants={upVariants}
              >Skills</motion.h3>
            </div>
          </div>
          <div className="w-full lg:w-4/6 px-6 lg:px-16 mt-12 lg:mt-0 flex justify-center lg:justify-start">
            <motion.div
              className="grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-14"
              ref={skillsContentRef}
              initial="small"
              animate={controlsSkillsContent}
              variants={popUpVariants}
            >
                {Skill && Skill.map((data) => {
                  return (
                    <SkillItem key={data.alt} href={data.href} src={data.src} alt={data.alt} />
                  )
                })}
            </motion.div>
          </div>
        </div>

        {/* Projects */}
        <div className="pt-16 pb-16 mt-24 w-full flex flex-col items-center justify-center bg-gray-100 min-h-[90vh]" ref={projectsRef}>
          <motion.h3
            className="text-5xl font-bold text-black"
            ref={projectsTitleRef}
            initial="hidden"
            animate={controlsProjectsTitle}
            variants={showVariants}
          >Projects</motion.h3>
          <motion.div
            className="mt-12 grid grid-flow-row grid-cols-2 lg:grid-cols-3"
            ref={projectsContentRef}
            initial="small"
            animate={controlsProjectsContent}
            variants={popUpVariants}
          >
              <ProjectBox status="defunct" imgSrc="/projects/memepedia.png" href="https://kesegaran-compfest-git-main-vincentsuryakim.vercel.app" title="Memepedia" techs={["ReactJS", "Apollo", "styled-components"]}>
                <p className="mb-2">Recruitment task for COMPFEST13&apos;s Software Engineering Team</p>
                <ul className="list-disc ml-4">
                    <li>Developed a search engine for memes.</li>
                    <li>Memes can be saved in a web browser with no expiration date using LocalStorage.</li>
                </ul>
              </ProjectBox>
              <ProjectBox imgSrc="/projects/todolist.png" href="https://todolist-bismit.netlify.app" title="Todo List" techs={["ReactJS", "styled-components"]}>
                <ul className="list-disc ml-4">
                    <li>Tasks are saved in a web browser with no expiration date using LocalStorage.</li>
                </ul>
              </ProjectBox>
              <ProjectBox imgSrc="/projects/pendekin.png" href="https://sh.webzerver.xyz" title="URL Shortener" techs={["NextJS", "TailwindCSS", "Typescript", "Prisma", "Route 53", "NGINX"]}>
                <ul className="list-disc ml-4">
                  <li>Prisma and SQLite database are saved in the same repository to minimize redirecting delay.</li>
                  <li>Deployed website to a linux server using Route 53 and NGINX.</li>
                </ul>
              </ProjectBox>
          </motion.div>
        </div>

        {/* Contact Me */}
        <div className="h-screen max-h-[-webkit-fill-available] flex justify-center items-center" ref={contactMeRef}>
          <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col lg:flex-row items-center place-content-between">
            <h3 className="text-4xl md:text-5xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 font-bold text-center lg:text-left max-w-[80%] lg:max-w-[50%]">Have a great idea in mind?</h3>
            <div className="lg:w-[45%] flex flex-col">
              <h4 className="text-left text-xl">Email</h4>
              <h5 className="text-md text-2xl md:text-4xl font-semibold">vincent.suryakim[at]ui.ac.id</h5>
              <a href="mailto:vincent.suryakim@ui.ac.id" className="w-full mt-9">
                <button className="w-full bg-yellow-500 transition duration-300 ease-in-out hover:bg-green-500 text-white h-12 font-semibold tracking-wider rounded-md">Let&apos;s Talk!</button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <ScrollToTop />
    </Layout>
  )
}

export default Home;