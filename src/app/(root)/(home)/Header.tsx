"use client";
import { PROFILE_PICTURE_URL } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8 p-6 flex items-center gap-4 md:hidden rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <Image
        src={PROFILE_PICTURE_URL}
        alt="Made Wijaya - Front End Developer"
        className="border__color h-11 w-11 rounded-full"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-1">
        <h2 className="primary font-medium md:text-lg">Made</h2>
        <p className="secondary text-sm md:text-base">Wijaya</p>
      </div>
    </motion.header>
  );
}
