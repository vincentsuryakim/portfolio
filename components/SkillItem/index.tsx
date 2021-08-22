import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export interface SkillItemProps {
  href: string;
  src: string;
  alt: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ href, src, alt }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <motion.div className="relative h-20 w-20" whileHover={{ scale: 1.2 }}>
        <Image src={src} alt={alt} layout="fill" />
      </motion.div>
    </a>
  );
};

export default SkillItem;
