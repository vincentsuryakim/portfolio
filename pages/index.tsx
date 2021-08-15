import type { NextPage } from 'next'
import { Typewriter } from 'react-simple-typewriter'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

import HoverWrapper from "../components/HoverWrapper"

const Home: NextPage = () => {
  const aboutMeRef = useRef<null|HTMLDivElement>(null)
  const experienceRef = useRef<null|HTMLDivElement>(null)
  const educationRef = useRef<null|HTMLDivElement>(null)
  const skillsRef = useRef<null|HTMLDivElement>(null)
  const projectRef = useRef<null|HTMLDivElement>(null)
  const contactMeRef = useRef<null|HTMLDivElement>(null)

  return (
    <div className="disable-scroll overflow-y-scroll snap snap-y snap-mandatory h-screen max-h-[-webkit-fill-available]">
      <div className="relative font-sans snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available] flex flex-col items-center justify-center">
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
          <h3 className="mb-8 lg:mb-0 text-4xl lg:text-8xl font-bold text-white">Who am I?</h3>
          <div className="w-[calc(100vw-3rem)] lg:w-1/2 flex flex-col items-center">
            <img className="rounded-full w-48" src="profile.jpg" />
            <p className="text-center mt-8 text-lg text-white">Hello! My name is Vincent, and I’m a computer science student at the University of Indonesia. I have a passion for Data Science, Artificial Intelligence, and Web Development. I am dedicated, motivated, highly inspired, and ready to adapt and overcome any obstacles!</p>
            <p className="text-center mt-6 lg:mt-8 text-lg text-white">Feel free to connect with me via</p>
            <div className="flex flex-row items-center space-x-5 mt-2.5 mb-2">
              <a href="https://www.linkedin.com/in/vincent-suryakim-70a80a1b6" rel="noreferrer" target="_blank">
                <img src="social/linkedin.png" className="h-7" />
              </a>
              <a href="https://github.com/vincentsuryakim" rel="noreferrer" target="_blank">
                <img src="social/github.png" className="h-7" />
              </a>
              <a href="https://www.instagram.com/vincentsuryakim/" rel="noreferrer" target="_blank">
                <img src="social/instagram.png" className="h-7" />
              </a>
              <a href="https://gitlab.com/vincent.suryakim" rel="noreferrer" target="_blank">
                <img src="social/gitlab.png" className="h-7" />
              </a>
            </div>
          </div>
        </div>
        <p className="absolute bottom-4 md:bottom-12 animate-bounce text-2xl md:text-3xl text-white cursor-pointer" onClick={() => experienceRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
      </div>

      <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={experienceRef}>
        <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col-reverse lg:flex-row items-center place-content-between">
          <div className="lg:w-[45%] flex flex-col max-h-[30rem] lg:max-h-[36rem] overflow-y-scroll">
            <HoverWrapper imgSrc="experience/compfest.svg">
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
              <HoverWrapper imgSrc="experience/betis.svg">
                <h4 className="text-left text-2xl font-semibold">Betis Fasilkom UI 2022</h4>
                <h5 className="text-md italic">VPIC of Web Development &nbsp;&bull;&nbsp; 2021 - Present</h5>
                {/* <ul className="mt-2 list-disc list-inside">
                  <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                </ul> */}
              </HoverWrapper>
            </div>
            
            <div className="mt-7">
              <HoverWrapper imgSrc="experience/bem.png">
                <h4 className="text-left text-2xl font-semibold">BEM Fakultas Ilmu Komputer</h4>
                <h5 className="text-md italic">Staff of Project Development &nbsp;&bull;&nbsp; 2021 - Present</h5>
                <ul className="mt-2 list-disc list-inside">
                  <li>Developed the front-end of an e-commerce web application using NextJS, Chakra UI, Axios, ContextAPI, and Nookies.</li>
                </ul>
              </HoverWrapper>
            </div>

            <div className="mt-7">
              <HoverWrapper imgSrc="experience/perak.svg">
                <h4 className="text-left text-2xl font-semibold">Pesta Rakyat Komputer</h4>
                <h5 className="text-md italic">Front-end Web Developer &nbsp;&bull;&nbsp; 2021</h5>
                <ul className="mt-2 list-disc list-inside">
                  <li>Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.</li>
                  <li>Fetched data from a back-end server using Axios and displayed it to the user.</li>
                </ul>
              </HoverWrapper>
            </div>
          </div>
          <h3 className="text-4xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 text-right font-bold">Experience</h3>
        </div>
        <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => educationRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
      </div>

      <div className="relative flex items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={educationRef}>
        <div className="w-[calc(100vw-3rem)] lg:w-[calc(100vw-10rem)] flex flex-col lg:flex-row items-center place-content-between">
          <h3 className="text-4xl lg:text-8xl mb-8 md:mb-12 lg:mb-0 text-left font-bold">Education</h3>
          <div className="lg:w-[45%] flex flex-col">
            <h4 className="text-left text-2xl font-semibold">Universitas Indonesia</h4>
            <h5 className="text-md italic">Bachelor of Computer Science &nbsp;&bull;&nbsp; 2020 - 2024</h5>
            <ul className="mt-2 list-disc list-inside">
              <li>Peer Tutor for Introduction to Digital Systems in 2<sup>nd</sup> semester</li>
              <li>Teaching Assistant for Foundations of Programming 1 in 3<sup>rd</sup> semester</li>
            </ul>

            <h4 className="text-left text-2xl font-semibold mt-9">SMAK 1 Penabur Jakarta</h4>
            <h5 className="text-md italic">High School Diploma, Natural Sciences &nbsp;&bull;&nbsp; 2017 - 2020</h5>
          </div>
        </div>
        <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => skillsRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
      </div>

      <div className="relative flex flex-col items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={skillsRef}>
        <div className="w-[calc(100vw-10rem)] flex flex-col items-center">
          <h3 className="text-3xl text-left font-bold mb-8 lg:mb-7">Skills</h3>
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <div className="flex space-x-16">
              <img src="skills/nextjs.png" className="h-20" />
              <img src="skills/python.png" className="h-20" />
              <img src="skills/java.png" className="h-20" />
              <img src="skills/react.svg" className="h-20" />
              <img src="skills/tailwind.png" className="h-20" />
            </div>
            <div className="flex space-x-16 mt-8">
              <img src="skills/hasura.png" className="h-20" />
              <img src="skills/typescript.png" className="h-20" />
              <img src="skills/docker.png" className="h-20" />
              <img src="skills/git.png" className="h-20" />
            </div>
          </div>
          <div className="flex flex-col max-h-[30rem] overflow-y-scroll lg:hidden space-y-8">
            <ul className="list-disc list-inside">
              <li>NextJS</li>
              <li>Python</li>
              <li>Java</li>
              <li>ReactJS</li>
              <li>TailwindCSS</li>
              <li>Hasura</li>
              <li>TypeScript</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <p className="absolute bottom-4 lg:bottom-12 animate-bounce text-2xl lg:text-3xl cursor-pointer" onClick={() => projectRef.current!.scrollIntoView({ behavior: 'smooth' })}>↓</p>
      </div>

      <div className="relative flex flex-col items-center justify-center snap-start w-screen max-w-[-webkit-fill-available] h-screen max-h-[-webkit-fill-available]" ref={projectRef}>
        <div className="w-[calc(100vw-10rem)] flex flex-col items-center">
          <h3 className="text-3xl text-left font-bold mb-7">Projects</h3>
          <p className="italic">Coming Soon</p>
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
              <button className="w-full bg-yellow-500 hover:bg-green-500 text-white h-12 font-semibold tracking-wider rounded-md">Let&apos;s Talk!</button>
            </a>
          </div>
        </div>
        <p className="absolute bottom-6 font-medium">Vincent Suryakim</p>
      </div>
    </div>
  )
}

export default Home
