import type { NextPage } from 'next'
import { Typewriter } from 'react-simple-typewriter'
import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Head from 'next/head'
import Image from "next/image"

import HoverWrapper from "../components/HoverWrapper"
import ExperienceCard from '../components/ExperienceCard'
import ProjectBox from '../components/ProjectBox'

// Don't forget to add experience or skills to both mobile and desktop views

const Home: NextPage = () => {
  const homeRef = useRef<null|HTMLDivElement>(null)
  const aboutMeRef = useRef<null|HTMLDivElement>(null)
  const experienceRef = useRef<null|HTMLDivElement>(null)
  const educationRef = useRef<null|HTMLDivElement>(null)
  const skillsRef = useRef<null|HTMLDivElement>(null)
  const projectRef = useRef<null|HTMLDivElement>(null)
  const contactMeRef = useRef<null|HTMLDivElement>(null)

  const [profileHovering, setProfileHovering] = useState<boolean>(false)

  const downVariants = {
    up: { y: -85, opacity: 0 },
    down: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35
      }
    }
  }
  const showVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.5
      }
    }
  }
  const showVariantsLessDelay = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.05,
        duration: 0.5
      }
    }
  }
  const popUpVariants = {
    small: { scale: 0.8, opacity: 0 },
    popped: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.2
      }
    }
  }

  const controlsWhoAmITitle = useAnimation();
  const { ref:whoAmIRef, inView:whoAmIInView } = useInView();
  useEffect(() => {
    if (whoAmIInView) {
      controlsWhoAmITitle.start('down');
    }
    if (!whoAmIInView) {
      controlsWhoAmITitle.start('up');
    }
  }, [controlsWhoAmITitle, whoAmIInView]);

  const controlsMyInfo = useAnimation();
  const { ref:myInfoRef, inView:myInfoInView } = useInView();
  useEffect(() => {
    if (myInfoInView) {
      controlsMyInfo.start('show');
    }
    if (!myInfoInView) {
      controlsMyInfo.start('hidden');
    }
  }, [controlsMyInfo, myInfoInView]);

  const controlsExperienceTitle = useAnimation();
  const { ref:experienceTitleRef, inView:experienceTitleInView } = useInView();
  useEffect(() => {
    if (experienceTitleInView) {
      controlsExperienceTitle.start('down');
    }
    if (!experienceTitleInView) {
      controlsExperienceTitle.start('up');
    }
  }, [controlsExperienceTitle, experienceTitleInView]);

  const controlsExperienceContent = useAnimation();
  const { ref:experienceContentRef, inView:experienceContentInView } = useInView();
  useEffect(() => {
    if (experienceContentInView) {
      controlsExperienceContent.start('show');
    }
    if (!experienceContentInView) {
      controlsExperienceContent.start('hidden');
    }
  }, [controlsExperienceContent, experienceContentInView]);
  const controlsExperienceContentMobile = useAnimation();
  const { ref:experienceContentMobileRef, inView:experienceContentMobileInView } = useInView();
  useEffect(() => {
    if (experienceContentMobileInView) {
      controlsExperienceContentMobile.start('show');
    }
    if (!experienceContentMobileInView) {
      controlsExperienceContentMobile.start('hidden');
    }
  }, [controlsExperienceContentMobile, experienceContentMobileInView]);

  const controlsEducationTitle = useAnimation();
  const { ref:educationTitleRef, inView:educationTitleInView } = useInView();
  useEffect(() => {
    if (educationTitleInView) {
      controlsEducationTitle.start('down');
    }
    if (!educationTitleInView) {
      controlsEducationTitle.start('up');
    }
  }, [controlsEducationTitle, educationTitleInView]);

  const controlsEducationContent = useAnimation();
  const { ref:educationContentRef, inView:educationContentInView } = useInView();
  useEffect(() => {
    if (educationContentInView) {
      controlsEducationContent.start('show');
    }
    if (!educationContentInView) {
      controlsEducationContent.start('hidden');
    }
  }, [controlsEducationContent, educationContentInView]);

  const controlsSkillsTitle = useAnimation();
  const { ref:skillsTitleRef, inView:skillsTitleInView } = useInView();
  useEffect(() => {
    if (skillsTitleInView) {
      controlsSkillsTitle.start('show');
    }
    if (!skillsTitleInView) {
      controlsSkillsTitle.start('hidden');
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
    <>
      <Head>
        <title>Vincent&apos;s Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portfolio of Vincent Suryakim" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="disable-scroll overflow-y-scroll snap snap-y snap-mandatory h-screen max-h-[-webkit-fill-available]">
        <div className="relative font-sans snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available] flex flex-col items-center justify-center" ref={homeRef}>
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
            /></span></h2>
        <p className="absolute bottom-4 sm:bottom-12 animate-bounce text-2xl sm:text-3xl cursor-pointer" onClick={() => aboutMeRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available] bg-black" ref={aboutMeRef}>
          <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col lg:flex-row items-center place-content-between">
            <motion.h3
              className="mb-8 lg:mb-0 text-4xl lg:text-8xl font-bold text-white"
              ref={whoAmIRef}
              initial="up"
              animate={controlsWhoAmITitle}
              variants={downVariants}
            >Who am I?</motion.h3>
            <motion.div
              className="w-[calc(100vw-3rem)] lg:w-1/2 flex flex-col items-center"
              ref={myInfoRef}
              initial="hidden"
              animate={controlsMyInfo}
              variants={showVariants}
            >
              <motion.img
                className="rounded-full w-48"
                src="profile.jpg"
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
              <p className="text-center mt-8 text-lg text-white">Hello! My name is Vincent, and I’m a computer science student at the University of Indonesia. I have a passion for Data Science, Artificial Intelligence, and Web Development. I am dedicated, motivated, highly inspired, and ready to adapt and overcome any obstacles!</p>
              <p className="text-center mt-6 lg:mt-8 text-lg text-white">Feel free to connect with me via</p>
              <div className="flex flex-row items-center space-x-5 mt-2.5 mb-2">
                <a href="https://www.linkedin.com/in/vincent-suryakim-70a80a1b6" rel="noreferrer" target="_blank">
                  <div className="h-7 w-7 relative">
                    <Image src="/social/linkedin.png" alt="linkedin" layout="fill" />
                  </div>
                </a>
                <a href="https://github.com/vincentsuryakim" rel="noreferrer" target="_blank">
                  <div className="h-7 w-7 relative">
                    <Image src="/social/github.png" alt="github" layout="fill" />
                  </div>
                </a>
                <a href="https://www.instagram.com/vincentsuryakim/" rel="noreferrer" target="_blank">
                  <div className="h-7 w-7 relative">
                    <Image src="/social/instagram.png" alt="instagram" layout="fill" />
                  </div>
                </a>
                <a href="https://gitlab.com/vincent.suryakim" rel="noreferrer" target="_blank">
                  <div className="h-7 w-7 relative">
                    <Image src="/social/gitlab.png" alt="gitlab" layout="fill" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <p className="absolute bottom-4 md:bottom-12 animate-bounce text-2xl md:text-3xl text-white cursor-pointer" onClick={() => experienceRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={experienceRef}>
          <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col-reverse lg:flex-row items-center place-content-between">
            <motion.div
              className="lg:w-[45%] overflow-x-hidden hidden lg:flex flex-col max-h-[30rem] lg:max-h-[36rem] overflow-y-scroll"
              ref={experienceContentRef}
              initial="hidden"
              animate={controlsExperienceContent}
              variants={showVariants}
            >
              <HoverWrapper imgSrc="/experience/compfest.svg" href="https://www.compfest.id/">
                <h4 className="text-left text-2xl font-semibold">COMPFEST</h4>
                <h5 className="text-md italic">Manager of IT Development &nbsp;&bull;&nbsp; 2021 - Present</h5>
                {/* <ul className="mt-2 list-disc list-inside">
                  <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                </ul> */}
                <h5 className="text-md italic border-t-[1px] border-gray-300 mt-2 pt-2">Software Engineer &nbsp;&bull;&nbsp; 2021</h5>
                <ul className="mt-2 list-disc list-inside">
                  <li>To be added.</li>
                </ul>
              </HoverWrapper>

              <div className="mt-7">
                <HoverWrapper imgSrc="/experience/betis.svg" href="http://betis.cs.ui.ac.id/">
                  <h4 className="text-left text-2xl font-semibold">Betis Fasilkom UI 2022</h4>
                  <h5 className="text-md italic">VPIC of Web Development &nbsp;&bull;&nbsp; 2021 - Present</h5>
                  {/* <ul className="mt-2 list-disc list-inside">
                    <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                  </ul> */}
                </HoverWrapper>
              </div>
              
              <div className="mt-7">
                <HoverWrapper imgSrc="/experience/bem.png" href="https://bem.cs.ui.ac.id/">
                  <h4 className="text-left text-2xl font-semibold">BEM Fakultas Ilmu Komputer</h4>
                  <h5 className="text-md italic">Staff of Project Development &nbsp;&bull;&nbsp; 2021 - Present</h5>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                  </ul>
                </HoverWrapper>
              </div>

              <div className="mt-7">
                <HoverWrapper imgSrc="/experience/perak.svg" href="https://perak.cs.ui.ac.id/">
                  <h4 className="text-left text-2xl font-semibold">Pesta Rakyat Komputer</h4>
                  <h5 className="text-md italic">Front-end Web Developer &nbsp;&bull;&nbsp; 2021</h5>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.</li>
                    <li>Fetched data from a back-end server using Axios and displayed it to the user.</li>
                  </ul>
                </HoverWrapper>
              </div>
            </motion.div>
            <motion.div
              className="flex lg:hidden w-full overflow-x-scroll space-x-4"
              ref={experienceContentMobileRef}
              initial="hidden"
              animate={controlsExperienceContentMobile}
              variants={showVariants}
            >
                  <ExperienceCard href="https://www.compfest.id/">
                    <h4 className="text-left text-2xl font-semibold">COMPFEST</h4>
                    <h5 className="text-md italic">Manager of IT Development</h5>
                    <h5 className="text-md italic">2021 - Present</h5>
                    {/* <ul className="mt-2 list-disc list-inside">
                      <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                    </ul> */}
                    <h5 className="text-md italic border-t-[1px] border-gray-300 mt-2 pt-2">Software Engineer</h5>
                    <h5 className="text-md italic">2021</h5>
                    <ul className="mt-2 list-disc list-inside">
                      <li>To be added.</li>
                    </ul>
                  </ExperienceCard>
                  
                  <ExperienceCard href="http://betis.cs.ui.ac.id/">
                    <h4 className="text-left text-2xl font-semibold">Betis Fasilkom UI 2022</h4>
                    <h5 className="text-md italic">VPIC of Web Development</h5>
                    <h5 className="text-md italic">2021 - Present</h5>
                    {/* <ul className="mt-2 list-disc list-inside">
                      <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                    </ul> */}
                  </ExperienceCard>

                  <ExperienceCard href="https://bem.cs.ui.ac.id/">
                    <h4 className="text-left text-2xl font-semibold">BEM Fakultas Ilmu Komputer</h4>
                    <h5 className="text-md italic">Staff of Project Development</h5>
                    <h5 className="text-md italic">2021 - Present</h5>
                    <ul className="mt-2 list-disc list-inside">
                      <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                    </ul>
                  </ExperienceCard>

                  <ExperienceCard href="https://perak.cs.ui.ac.id/">
                    <h4 className="text-left text-2xl font-semibold">Pesta Rakyat Komputer</h4>
                    <h5 className="text-md italic">Front-end Web Developer &nbsp;&bull;&nbsp; 2021</h5>
                    <ul className="mt-2 list-disc list-inside">
                      <li>Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.</li>
                      <li>Fetched data from a back-end server using Axios and displayed it to the user.</li>
                    </ul>
                  </ExperienceCard>
            </motion.div>
            <motion.h3
              className="text-4xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 text-right font-bold"
              ref={experienceTitleRef}
              initial="up"
              animate={controlsExperienceTitle}
              variants={downVariants}
            >Experience</motion.h3>
          </div>
          <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => educationRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={educationRef}>
          <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col lg:flex-row items-center place-content-between">
            <motion.h3
              className="text-4xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 text-left font-bold"
              ref={educationTitleRef}
              initial="up"
              animate={controlsEducationTitle}
              variants={downVariants}
            >Education</motion.h3>
            <motion.div
              className="lg:w-[45%] flex flex-col"
              ref={educationContentRef}
              initial="hidden"
              animate={controlsEducationContent}
              variants={showVariants}
            >
              <h4 className="text-left text-2xl font-semibold">Universitas Indonesia</h4>
              <h5 className="text-md italic">Bachelor of Computer Science &nbsp;&bull;&nbsp; 2020 - 2024</h5>
              <ul className="mt-2 list-disc list-inside">
                <li>Teaching Assistant for Foundations of Programming 1 in 3<sup>rd</sup> semester</li>
                <li>Peer Tutor for Introduction to Digital Systems in 2<sup>nd</sup> semester</li>
              </ul>

              <h4 className="text-left text-2xl font-semibold mt-9">SMAK 1 Penabur Jakarta</h4>
              <h5 className="text-md italic">High School Diploma, Natural Sciences &nbsp;&bull;&nbsp; 2017 - 2020</h5>
            </motion.div>
          </div>
          <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => skillsRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex flex-col items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={skillsRef}>
          <div className="w-[calc(100vw-10rem)] flex flex-col items-center">
            <motion.h3
              className="text-3xl text-left font-bold mb-8 lg:mb-7"
              ref={skillsTitleRef}
              initial="hidden"
              animate={controlsSkillsTitle}
              variants={showVariantsLessDelay}
            >Skills</motion.h3>
            <motion.div
              className="flex lg:flex-col lg:items-center"
              ref={skillsContentRef}
              initial="small"
              animate={controlsSkillsContent}
              variants={popUpVariants}
            >
              <div className="max-h-[20rem] overflow-y-scroll lg:overflow-auto grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-14">
                <a href="https://www.python.org/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/python.png" alt="Python" layout="fill" />
                  </div>
                </a>
                <a href="https://www.java.com/en/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/java.png" alt="Java" layout="fill" />
                  </div>
                </a>
                <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/nextjs.png" alt="NextJS" layout="fill" />
                  </div>
                </a>
                <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/react.png" alt="ReactJS" layout="fill" />
                  </div>
                </a>
                <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/tailwind.png" alt="TailwindCSS" layout="fill" />
                  </div>
                </a>
                <a href="https://hasura.io/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/hasura.png" alt="Hasura" layout="fill" />
                  </div>
                </a>
                <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/typescript.png" alt="TypeScript" layout="fill" />
                  </div>
                </a>
                <a href="https://www.docker.com/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/docker.png" alt="Docker" layout="fill" />
                  </div>
                </a>
                <a href="https://git-scm.com/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/git.png" alt="Git" layout="fill" />
                  </div>
                </a>
                <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
                  <div className="relative h-20 w-20">
                    <Image src="/skills/nodejs.png" alt="NodeJS" layout="fill" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => projectRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex flex-col items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={projectRef}>
          <div className="w-[calc(100vw-3rem)] sm:w-[calc(100vw-10rem)] flex flex-col items-center">
            <motion.h3
              className="text-3xl text-left font-bold mb-7"
              ref={projectsTitleRef}
              initial="hidden"
              animate={controlsProjectsTitle}
              variants={showVariantsLessDelay}
            >Projects</motion.h3>
            <motion.div
              className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
              ref={projectsContentRef}
              initial="small"
              animate={controlsProjectsContent}
              variants={popUpVariants}
            >
              <ProjectBox status="defunct" imgSrc="/projects/memepedia.png" href="https://kesegaran-compfest-git-main-vincentsuryakim.vercel.app" title="Memepedia (defunct)" />
              <ProjectBox imgSrc="/projects/todolist.png" href="https://todolist-bismit.netlify.app" title="Todo List" />
              <ProjectBox imgSrc="/projects/pendekin.png" href="https://sh.webzerver.xyz" title="URL Shortener" />
            </motion.div>
          </div>
          <p className="absolute bottom-4 sm:bottom-12 animate-bounce text-2xl sm:text-3xl cursor-pointer" onClick={() => contactMeRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
        </div>

        <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={contactMeRef}>
          <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col lg:flex-row items-center place-content-between">
            <h3 className="text-4xl md:text-5xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 font-bold text-center lg:text-left max-w-[80%] lg:max-w-[50%]">Have a great idea in mind?</h3>
            <div className="lg:w-[45%] flex flex-col">
              <h4 className="text-left text-xl">Email</h4>
              <h5 className="text-md text-2xl md:text-4xl font-semibold">vincent.suryakim@ui.ac.id</h5>

              <h4 className="text-left text-xl mt-9">Phone</h4>
              <h5 className="text-md text-2xl md:text-4xl font-semibold">+62 8179 9901 13</h5>

              <a href="mailto:vincent.suryakim@ui.ac.id" className="w-full mt-9">
                <button className="w-full bg-yellow-500 transition duration-300 ease-in-out hover:bg-green-500 text-white h-12 font-semibold tracking-wider rounded-md">Let&apos;s Talk!</button>
              </a>
            </div>
          </div>
          <p className="absolute bottom-12 lg:bottom-14 animate-bounce text-xl lg:text-xl cursor-pointer" onClick={() => homeRef.current!.scrollIntoView({ behavior: 'smooth' })}>↑</p>
          <p className="absolute bottom-6 font-medium">2021 &copy; Vincent Suryakim</p>
        </div>
      </div>
    </>
  )
}

export default Home
