"use client";
import Comment from "@/components/elements/Comment";
import { motion } from "framer-motion";

export default function DiscussionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="p-6 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10 flex flex-col text-center"
    >
      <div className="primary text-xl font-bold md:text-3xl">
        <h2 className="gradient__text inline-block">Ask me anything (AMA)</h2>{" "}
        discussion
      </div>

      <div className="mt-8">
        <Comment marginTop="mt-0" />
      </div>
    </motion.section>
  );
}
