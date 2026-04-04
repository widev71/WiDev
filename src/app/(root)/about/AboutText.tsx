"use client";
import BreakLine from "@/components/elements/BreakLine";
import { ABOUT_TEXTS } from "@/constants/about";
import { motion } from "framer-motion";

export default function AboutText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8 p-6 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      {ABOUT_TEXTS.map(({ text }, index) => (
        <p key={index} className="secondary mb-8 leading-relaxed">
          {text}
        </p>
      ))}
      <BreakLine />
    </motion.section>
  );
}
