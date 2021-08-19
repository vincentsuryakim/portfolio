import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ScrollToTopProps { scrollVisible: boolean }

const ScrollToTop:React.FC<ScrollToTopProps> = ({ scrollVisible }) => {
    return (
        <AnimatePresence>
          {scrollVisible &&
              <motion.div
                className="fixed bottom-5 right-5 rounded-full bg-black shadow-2xl w-14 h-14 flex items-center justify-center cursor-pointer"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-2xl text-white">↑</p>
              </motion.div>
          }
        </AnimatePresence>
    );
}

export default ScrollToTop;