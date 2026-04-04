"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import clsx from "clsx";

const educationData = [
  {
    id: "1",
    school: "SMK Negeri 1 Tampaksiring",
    major: "Desain Komunikasi Visual",
    period: "2022 - 2025",
  },
  {
    id: "2",
    school: "Primakara University",
    major: "Sistem Informasi",
    period: "Present - 2029",
  },
];

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-6 mb-8 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <div
        className={clsx(
          "primary",
          "mb-6",
          "flex items-center gap-2",
          "text-lg md:text-xl",
        )}
      >
        <HiOutlineAcademicCap />
        <h2 className="font-bold">Education</h2>
      </div>

      <div className="md:max-w-[calc(100vw-156px)] lg:max-w-[720px] flex flex-col gap-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center justify-between p-4 bg-white/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 rounded-xl shadow-sm hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neutral-100 dark:bg-black/20 rounded-lg text-neutral-600 dark:text-neutral-300 hidden sm:block">
                <HiOutlineAcademicCap size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
                  {edu.school}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {edu.major} • {edu.period}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
