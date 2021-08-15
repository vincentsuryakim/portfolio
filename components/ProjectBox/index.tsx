import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface ProjectBoxProps { imgSrc:string, href:string, title:string, status?:string }

const ProjectBox:React.FC<ProjectBoxProps> = ({ imgSrc, href, title, status = "available" }) => {
    const [hovering, setHovering] = useState<boolean>(false);

    const showVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
            }
        }
    }

    const backgroundVariants = {
        visible: { opacity: 1},
        opaque: {
            opacity: 0.5,
            transition: {
                duration: 0.1
            }
        }
    }

    const cursorStatus: {[ id: string ]: string} = {
        available: 'cursor-pointer',
        defunct: 'cursor-not-allowed',
    }

    return (
        <motion.div
            className={`${cursorStatus[status]} relative w-40 h-40 sm:w-40 sm:h-40 bg-black`}
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
        >
            <a href={href} rel="noreferrer" target="_blank" className={`${status === "available" ? "" : "pointer-events-none"}`}>
                <motion.img
                    src={imgSrc}
                    className="absolute"
                    variants={backgroundVariants}
                    animate={hovering ? "opaque" : "visible"}
                />
                <motion.p
                    className="text-white text-center absolute w-full h-full flex items-center justify-center font-medium"
                    variants={showVariants}
                    animate={hovering ? "visible" : "hidden"}
                >{title}</motion.p>
            </a>
        </motion.div>
    );
}

export default ProjectBox;