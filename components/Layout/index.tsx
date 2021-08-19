import React, { Fragment } from "react";
import Image from "next/image";

import { Menu, Transition } from '@headlessui/react';
import { IoMdMenu } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

export interface LayoutProps { locAboutMe:number, locResume:number, locProjects:number, locContactMe:number, scrollMotionData:string }

export const Layout: React.FC<LayoutProps> = ({ children, locAboutMe, locResume, locProjects, locContactMe, scrollMotionData }) => {
    return (
        <>
        <AnimatePresence>
            {scrollMotionData === 'up' &&
            <motion.div
                className="fixed top-0 w-full h-16 bg-white z-50 shadow-lg flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.2} }}
                exit={{ opacity: 0, transition: {duration: 0.2} }}
            >
                <div className="w-full max-w-[1536px] h-full flex justify-between items-center">
                    <div className="ml-10">
                        <Image src="/favicon.ico" alt="logo" width={32} height={32} />
                    </div>
                    <div className="mr-10 font-semibold hidden sm:flex flex-row space-x-8">
                        <p className="cursor-pointer" onClick={() => window.scroll({ top: locAboutMe, behavior: "smooth" })}>About Me</p>
                        <p className="cursor-pointer" onClick={() => window.scroll({ top: locResume, behavior: "smooth" })}>Resume</p>
                        <p className="cursor-pointer" onClick={() => window.scroll({ top: locProjects, behavior: "smooth" })}>Projects</p>
                        <p className="cursor-pointer" onClick={() => window.scroll({ top: locContactMe, behavior: "smooth" })}>Contact Me</p>
                    </div>
                    <div className="mr-10 sm:hidden">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="w-6 h-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <IoMdMenu className="w-full h-full" />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            <button
                                                className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                                onClick={() => window.scroll({ top: locAboutMe, behavior: "smooth" })}
                                            >
                                                About Me
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                                onClick={() => window.scroll({ top: locResume, behavior: "smooth" })}
                                            >
                                                Resume
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                                onClick={() => window.scroll({ top: locProjects, behavior: "smooth" })}
                                            >
                                                Projects
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                                onClick={() => window.scroll({ top: locContactMe, behavior: "smooth" })}
                                            >
                                                Contact Me
                                            </button>
                                        </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                </motion.div>
            }
        </AnimatePresence>
          
        <div className="w-full flex justify-center font-sans relative">
            <div className="w-full max-w-[1536px]">
                {children}
            </div>
        </div>
        </>
    )
}

export default Layout;