import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from "next/image"

export interface HoverWrapperProps { imgSrc:string, href:string }

const HoverWrapper:React.FC<HoverWrapperProps> = ({ children, imgSrc, href }) => {
    const [hovering, setHovering] = useState<boolean>(false)

    const showVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            transition: {
                duration: 0.15,
            }
        },
    }

    return (
        <a href={href} rel="noreferrer" target="_blank">
            <motion.div
                className={`relative pl-3 py-2 ${hovering ? "bg-gradient-to-r from-yellow-200 via-red-200 to-white" : ""} rounded-md`}
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
            >
                <motion.div
                    className={`${hovering ? "opacity-80" : "opacity-100"}`}
                >
                    {children}
                </motion.div>
                <motion.div
                    className="absolute bottom-0 right-0 h-full"
                    variants={showVariants}
                    animate={hovering ? "visible" : "hidden"}
                >
                    <Image src={imgSrc} alt="experience" className="h-full" />
                </motion.div>
            </motion.div>
        </a>
    );
}

export default HoverWrapper;