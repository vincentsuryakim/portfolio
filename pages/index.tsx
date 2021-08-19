import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/Layout";
import ExperienceCard from '../components/ExperienceCard';
import ProjectBox from '../components/ProjectBox';

const Home: NextPage = () => {
  const [scrollVisible, setScrollVisible] = useState<boolean>(false);

  const [previousScrollMotionNum, setPreviousScrollMotionNum] = useState<number>(0);
  const [scrollMotionData, setScrollMotionData] = useState<string>("up");

  const aboutMeRef = useRef<HTMLDivElement|null>(null);
  const resumeRef = useRef<HTMLDivElement|null>(null);
  const projectsRef = useRef<HTMLDivElement|null>(null);
  const contactMeRef = useRef<HTMLDivElement|null>(null);

  const [locAboutMe, setLocAboutMe] = useState<number>(0);
  const [locResume, setLocResume] = useState<number>(0);
  const [locProjects, setLocProjects] = useState<number>(0);
  const [locContactMe, setLocContactMe] = useState<number>(0);

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

  useEffect(() => {
    setLocAboutMe(window.pageYOffset + aboutMeRef.current!.getBoundingClientRect().top);
    setLocResume(window.pageYOffset + resumeRef.current!.getBoundingClientRect().top - 30);
    setLocProjects(window.pageYOffset + projectsRef.current!.getBoundingClientRect().top);
    setLocContactMe(window.pageYOffset + contactMeRef.current!.getBoundingClientRect().top);
  }, [])

  return (
    <>
    <Head>
      <title>Vincent&apos;s Portfolio</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Portfolio of Vincent Suryakim" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout locAboutMe={locAboutMe} locResume={locResume} locProjects={locProjects} locContactMe={locContactMe} scrollMotionData={scrollMotionData}>

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
              <h3 className="text-5xl text-center lg:text-right font-bold text-white lg:pr-4 sticky top-12">Who Am I</h3>
            </div>
          </div>
          <div className="w-full lg:w-4/6 mt-12 lg:mt-0 flex flex-col items-center">
            <img className="rounded-full w-48 h-48" src="profile.jpg" alt="profilephoto" />
            <p className="text-center mt-8 text-lg text-white px-4 lg:px-32">Hello! My name is Vincent, and I’m a computer science student at the University of Indonesia. I have a passion for Data Science, Artificial Intelligence, and Web Development. I am dedicated, motivated, highly inspired, and ready to adapt and overcome any obstacles!</p>
            <p className="text-center mt-8 text-lg text-white">Feel free to connect with me via</p>
            <div className="flex items-center space-x-5 mt-2.5">
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
            <button className="mt-8 bg-white rounded-md w-5/6 lg:w-2/6 h-12 font-semibold flex items-center justify-center">
              <div className="flex flex-row space-x-1 items-center justify-center">
                <img src="/logo/download.svg" />
                <p>Download CV</p>
              </div>
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-24 w-full block lg:flex" ref={resumeRef}>
          <div className=" w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <h3 className="text-5xl text-right font-bold lg:pr-4 sticky top-12">Experience</h3>
            </div>
          </div>
          <div className="w-full lg:w-4/6 mt-12 lg:mt-0 flex flex-col items-center px-6 lg:px-16">
            <div className="w-full space-y-6">
              <ExperienceCard imgSrc="/experience/compfest.svg" title="COMPFEST" role="Manager of IT Development" time="2021 - Present" />
              <ExperienceCard imgSrc="/experience/betis.svg" title="BETIS Fasilkom UI" role="VPIC of Web Development" time="2021 - Present" />
              <ExperienceCard imgSrc="/experience/bem.svg" title="BEM Fakultas Ilmu Komputer" role="Staff of Project Development" time="2021 - Present" />
              <ExperienceCard imgSrc="/experience/perak.svg" title="Pesta Rakyat Komputer" role="Front-end Web Developer" time="2021" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-36 lg:mt-24 w-full block lg:flex">
          <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <h3 className="text-5xl text-center lg:text-right font-bold lg:pr-4 sticky top-12">Education</h3>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-4/6 px-6 lg:px-16">
              <h4 className="text-left text-2xl font-semibold">Universitas Indonesia</h4>
              <h5 className="text-md italic">Bachelor of Computer Science &nbsp;&bull;&nbsp; 2020 - 2024</h5>
              <ul className="mt-2 list-disc list-inside">
                <li>Teaching Assistant for Foundations of Programming 1 in 3<sup>rd</sup> semester</li>
                <li>Peer Tutor for Introduction to Digital Systems in 2<sup>nd</sup> semester</li>
              </ul>

              <h4 className="text-left text-2xl font-semibold mt-9">SMAK 1 Penabur Jakarta</h4>
              <h5 className="text-md italic">High School Diploma, Natural Sciences &nbsp;&bull;&nbsp; 2017 - 2020</h5>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-36 lg:mt-24 w-full block lg:flex">
          <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
            <div>
              <h3 className="text-5xl text-center lg:text-right font-bold lg:pr-4 sticky top-12">Skills</h3>
            </div>
          </div>
          <div className="w-full lg:w-4/6 px-6 lg:px-16 mt-12 lg:mt-0 flex justify-center lg:justify-start">
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-14">
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
          </div>
        </div>

        {/* Projects */}
        <div className="pt-16 pb-16 mt-24 w-full flex flex-col items-center justify-center bg-gray-100 min-h-[90vh]" ref={projectsRef}>
          <h3 className="text-5xl font-bold text-black">Projects</h3>
          <div className="mt-12 grid grid-flow-row grid-cols-2 lg:grid-cols-3">
              <ProjectBox status="defunct" imgSrc="/projects/memepedia.png" href="https://kesegaran-compfest-git-main-vincentsuryakim.vercel.app" title="Memepedia" techs={["ReactJS", "Apollo", "styled-components"]}>
                <p className="mb-2">Recruitment task for COMPFEST13&apos;s Software Engineering Team</p>
                <ul className="list-disc list-inside">
                    <li>Developed a search engine for memes.</li>
                    <li>Memes can be saved in a web browser with no expiration date using LocalStorage.</li>
                </ul>
              </ProjectBox>
              <ProjectBox imgSrc="/projects/todolist.png" href="https://todolist-bismit.netlify.app" title="Todo List" techs={["ReactJS", "styled-components"]}>
                <ul className="list-disc list-inside">
                    <li>Tasks are saved in a web browser with no expiration date using LocalStorage.</li>
                </ul>
              </ProjectBox>
              <ProjectBox imgSrc="/projects/pendekin.png" href="https://sh.webzerver.xyz" title="URL Shortener" techs={["NextJS", "TailwindCSS", "Typescript", "Prisma", "Route 53", "NGINX"]}>
                <ul className="list-disc list-inside">
                  <li>Prisma and SQLite database are saved in the same repository to minimize redirecting delay.</li>
                  <li>Deployed website to a linux server using Route 53 and NGINX.</li>
                </ul>
              </ProjectBox>
          </div>
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
        <AnimatePresence>
          {scrollVisible &&
              <motion.div
                className="fixed bottom-5 right-5 rounded-full bg-black shadow-2xl w-14 h-14 flex items-center justify-center cursor-pointer"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-2xl text-white">↑</p>
              </motion.div>
          }
        </AnimatePresence>
    </Layout>
    </>
  )
}

export default Home;