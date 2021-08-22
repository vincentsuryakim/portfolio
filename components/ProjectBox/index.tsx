import React, { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import { Dialog, Transition } from '@headlessui/react'
import Badge from '../Badge';

import { showHoverVariants, backgroundVariants } from '../../data/animationVariants';

export interface ProjectBoxProps { imgSrc:string, href:string, title:string, status?:string, techs:Array<string> }

const ProjectBox:React.FC<ProjectBoxProps> = ({ children, imgSrc, href, title, status = "available", techs }) => {
    const [hovering, setHovering] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const cursorStatus: {[ id: string ]: string} = {
        available: 'cursor-pointer',
        defunct: 'cursor-not-allowed',
    }

    return (
        <>
            <motion.div
                className="cursor-pointer relative w-40 h-40 sm:w-40 sm:h-40 bg-black"
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
                onClick={() => setIsOpen(true)}
            >
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="absolute"
                    variants={backgroundVariants}
                    animate={hovering ? "opaque" : "visible"}
                />
                <motion.p
                    className="text-white text-center absolute w-full h-full flex items-center justify-center font-medium"
                    variants={showHoverVariants}
                    animate={hovering ? "visible" : "hidden"}
                >{title}</motion.p>
            </motion.div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" tabIndex={0} />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                        &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-medium leading-6 text-gray-900"
                                >
                                {title}
                                </Dialog.Title>
                                <div className="mt-4 w-full text-sm text-gray-600">
                                    {children}
                                    <div className="text-xs my-4">
                                        {techs && techs.map((tech, index) => {
                                            return (
                                                <Badge key={index} text={tech} />
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className={`${cursorStatus[status]} mt-2 space-y-1.5`}>
                                    <a href={href} rel="noreferrer" target="_blank" className={`${status === "available" ? "" : "pointer-events-none"}`}>
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        >
                                            {status === "available" ? "Live Demo" : "Website Is Now Defunct"}
                                        </button>
                                    </a>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default ProjectBox;