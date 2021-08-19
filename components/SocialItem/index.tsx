import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export interface SocialItemProps { href:string, src:string, alt:string}

const SocialItem:React.FC<SocialItemProps> = ({ href, src, alt}) => {
    return (
        <a href={href} rel="noreferrer" target="_blank">
            <motion.div className="h-7 w-7 relative" whileHover={{ scale: 1.2 }}>
                <Image src={src} alt={alt} layout="fill" />
            </motion.div>
        </a>
    );
}

export default SocialItem;