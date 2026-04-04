"use client";
import StackCard from "@/components/cards/StackCard";
import MarqueeElement from "@/components/elements/Marquee";
import { STACKS } from "@/constants/stacks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

export default function Stacks() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-4 md:p-6 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-[2px] border border-white/20 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-white/10"
    >
      <div
        className={clsx(
          "primary",
          "mb-5",
          "flex items-center gap-2",
          "text-lg md:text-xl",
        )}
      >
        <HiOutlineCode />
        <h2 className="font-bold">Tech & Stacks</h2>
      </div>

      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
        className={clsx(
          "flex flex-col",
          "w-full",
        )}
      >
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], idx) => (
                <StackCard key={idx} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </motion.section>
  );
}
