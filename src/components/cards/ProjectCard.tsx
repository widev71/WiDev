"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";
import Tooltip from "../elements/Tooltip";
import { Pointer } from "../elements/Pointer";

export default function ProjectCard({
  url,
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        "rounded-2xl relative overflow-hidden",
        "bg-white/5 dark:bg-black/10 backdrop-blur-[2px]",
        "border border-white/20 dark:border-white/10",
        "shadow-lg shadow-black/10 dark:shadow-white/10",
        "transition-all duration-300",
        "lg:hover:-translate-y-2 lg:hover:shadow-xl lg:hover:shadow-black/20 dark:hover:shadow-white/20"
      )}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live production demo`}
        className={clsx("group cursor-pointer flex flex-col h-full relative")}
      >
        <Pointer hideDefaultCursor={true}>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600 drop-shadow-md"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </Pointer>
        <div className="relative overflow-hidden overflow-hidden rounded-t-2xl">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width={1920}
            height={1080}
            src={image}
            alt={imageAlt}
            loading="lazy"
            aria-label={`Live ${title} Production Screenshot`}
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <h1 className="flex items-center gap-2 font-semibold text-lg text-neutral-800 dark:text-neutral-100">
              <Ping />
              {title}
            </h1>
            <span
              className={clsx(
                "text-neutral-500 mt-1",
                "transition-transform duration-300",
                "group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-900 dark:group-hover:text-white"
              )}
            >
              <TbArrowUpRight size={20} />
            </span>
          </div>

          <p className="secondary mt-2 text-sm leading-relaxed flex-1 line-clamp-3">
            {description}
          </p>

          <ul className="flex flex-wrap gap-4 mt-5">
            {techStack.map((tech, index) => (
              <li
                className="text-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors duration-200"
                key={index}
              >
                <Tooltip placement="top" label={tech.label}>
                  <div>{tech.icon}</div>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.li>
  );
}

interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: Array<TechStackItem>;
  image: string | StaticImageData;
  imageAlt: string;
}
