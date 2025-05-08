"use client";
import Comment from "@/components/elements/Comment";
import { motion } from "framer-motion";

export default function DiscussionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col text-center"
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
