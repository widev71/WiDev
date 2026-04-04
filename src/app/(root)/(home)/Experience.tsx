"use client";
import React, { useState } from "react";
import { Reorder, motion } from "framer-motion";
import { MdWorkOutline, MdDragIndicator } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import clsx from "clsx";

const initialExperiences = [
  { id: "1", role: "Frontend Developer", company: "Blue Creative", period: "14 June 2025 - 14 December 2025" },
  { id: "2", role: "Social Media Admin", company: "Mr G Mart", period: "15 May 2025 - February 2026" },
];

export default function Experience() {
  const [experiences, setExperiences] = useState(initialExperiences);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="p-4 md:p-6 mb-8 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <div
        className={clsx(
          "primary",
          "mb-6",
          "flex items-center gap-2",
          "text-lg md:text-xl",
        )}
      >
        <MdWorkOutline />
        <h2 className="font-bold">Work Experience</h2>
        <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500 ml-2">(Pengalaman Kerja)</span>
      </div>

      <div className="w-full">
        <Reorder.Group
          axis="y"
          values={experiences}
          onReorder={setExperiences}
          className="flex flex-col gap-4"
        >
          {experiences.map((exp) => (
            <Reorder.Item
              key={exp.id}
              value={exp}
              className="flex items-center justify-between p-4 bg-white/5 dark:bg-white/5 border border-neutral-200/50 dark:border-white/10 rounded-xl shadow-sm cursor-grab active:cursor-grabbing hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-100 dark:bg-black/20 rounded-lg text-neutral-600 dark:text-neutral-300 hidden sm:block">
                  <HiOutlineOfficeBuilding size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">{exp.company}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.role} • {exp.period}</p>
                </div>
              </div>
              <div className="text-neutral-400 dark:text-neutral-500">
                <MdDragIndicator size={24} />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </motion.section>
  );
}
