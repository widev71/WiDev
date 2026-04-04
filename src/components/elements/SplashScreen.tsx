"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "./DecryptedText";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // We give the animation about 2.5 seconds to complete before fading out.
    // The text is ~35 chars, at 40ms speed it's ~1.4s, plus pause.
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="text-xl md:text-3xl font-mono text-white text-center px-4">
            <DecryptedText
              text="hi there welcome to Witya portfolio"
              speed={40}
              sequential={true}
              revealDirection="center"
              animateOn="view"
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              encryptedClassName="text-white/40"
            />
          </div>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-white mt-8 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
