"use client";
import BreakLine from "@/components/elements/BreakLine";
import Ping from "@/components/elements/Ping";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8 p-4 md:p-6 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <h1
        className={clsx(
          "primary",
          "mb-4",
          "text-2xl font-bold tracking-tight",
          "md:text-5xl md:font-extrabold md:leading-tight",
        )}
      >
        Made Wijaya - <span className="gradient__text">Front End Developer</span>
      </h1>
      <ul className="secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg">
        <li>I am a Front End Developer</li>
        <li>
          I build <span className="gradient__text">websites</span>.
        </li>
      </ul>

      <p className="secondary mb-4 text-sm leading-relaxed md:text-lg ">
        In the dynamic world of React, I am more than a coder—I am an architect of digital wonder.
        I craft inclusive, accessible web experiences that blend art with high-end technology. For me,
        every page is a canvas designed to bring people together through storytelling and technical harmony
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="primary text-sm md:text-lg">Contact Me here</p>
      </div>

      <Link
        href="/contact"
        aria-label="Contact Me"
        className={clsx(
          "primary border__gradient",
          "flex items-center gap-3",
          "w-fit rounded-md p-3",
          "text-sm font-bold md:text-lg",
          "lg:mb-[39px]",
        )}
      >
        <SiInstagram />
        Follow Me
      </Link>
      <BreakLine />
    </motion.section>
  );
}
