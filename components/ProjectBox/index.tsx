import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface ProjectBoxProps { imgSrc:string, href:string, title:string }

const ProjectBox:React.FC<ProjectBoxProps> = ({ imgSrc, href, title }) => {
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

    return (
        <a href={href} rel="noreferrer" target="_blank">
            <motion.div
                className="relative w-40 h-40 sm:w-40 sm:h-40 bg-black"
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
            >
                <motion.img
                    src={imgSrc}
                    className="absolute"
                    variants={backgroundVariants}
                    animate={hovering ? "opaque" : "visible"}
                />
                <motion.p
                    className="text-white absolute w-full h-full flex items-center justify-center font-medium"
                    variants={showVariants}
                    animate={hovering ? "visible" : "hidden"}
                >{title}</motion.p>
            </motion.div>
        </a>
    );
}

export default ProjectBox;