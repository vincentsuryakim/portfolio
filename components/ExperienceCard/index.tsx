import React, { useState, Fragment } from 'react';
import { Dialog, Transition  } from '@headlessui/react';

export interface ExperienceCardProps { href: string, img: string, title: string, role: string, time: string}

const ExperienceCard:React.FC<ExperienceCardProps> = ({ href, img, title, role, time, children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className="min-w-[14rem] min-h-[18rem] h-[15.5rem] p-3 rounded-lg shadow-lg">
                <div className="w-full mt-4 flex items-start flex-col">
                    <img src={img} alt={title} className="h-[4.25rem] mb-2" />
                    <div className="h-[7rem]">
                        <h5 className="font-sans font-bold text-2xl">{title}</h5>
                        <div className="mt-1">
                            <h6 className="text-sm">{role}</h6>
                            <p className="text-xs italic">{time}</p>
                        </div>
                    </div>
                    <button className="w-full mt-4 py-2 px-4 text-blue-900 text-sm font-medium rounded-md bg-blue-100 hover:bg-blue-200" onClick={() => setIsOpen(true)}>View More</button>
                </div>
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
    )
}

export default ExperienceCard;