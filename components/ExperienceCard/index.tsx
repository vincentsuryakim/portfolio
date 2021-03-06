import React, { useState, Fragment } from 'react';
import Image from "next/image"

import { Dialog, Transition } from '@headlessui/react';

export interface ExperienceCardProps { href: string, imgSrc: string, title: string, role: string, time: string, short?: Array<string>}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ href, imgSrc, title, role, time, short, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <>
        <div className="bg-white shadow-xl rounded-md px-8 lg:px-4 py-4">
            <div className="w-full flex items-center justify-center">
                <div className="h-20 w-20 relative">
                    <Image src={imgSrc} alt={title} layout="fill" />
                </div>
                <div className="ml-4 lg:ml-6 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold">{title}</h4>
                    <h5 className="text-sm italic">{role}</h5>
                    <h5 className="text-sm italic">{time}</h5>
                </div>
            </div>
            <ul className="list-disc list-outside ml-6 mt-4 text-gray-700">
                {/* <li>Developed a responsive and interactive Cafeteria-Map, Games-Map, TypeRacer, and Registration Confirmation page using React.JS, styled-components, and ContextAPI.</li>
                <li>Fetched data from a back-end server using Axios and displayed it to the user.</li> */}
                {short && short.map((data) => {
                    return (
                        <li key={data}>{data}</li>
                    )
                })}
            </ul>
            <button className="w-full mt-4 py-2 px-4 text-blue-900 text-sm font-medium rounded-md bg-blue-100 hover:bg-blue-200" onClick={() => setIsOpen(true)}>View More</button>
        </div>
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
                                </div>

                                <a href={href} rel="noreferrer" target="_blank">
                                    <button
                                        type="button"
                                        className="mt-4 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        Open Website
                                    </button>
                                </a>
                                <button
                                    type="button"
                                    className="mt-1.5 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default ExperienceCard;