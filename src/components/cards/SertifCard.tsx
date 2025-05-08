"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

export default function SertifCard({
  url,
  image,
  imageAlt,
}: SertifCard) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        "border__color",
        "rounded-md",
        "bg-transparent shadow-lg",
        "transition-transform duration-200",
        "dark:bg-neutral-800 dark:shadow-none",
        "lg:hover:scale-[1.03]",
      )}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("group cursor-pointer", "flex flex-col", "h-full")}
      >
        <div>
          <Image
            className="h-auto w-auto rounded-t-md"
            width={1920}
            height={1080}
            src={image}
            alt={imageAlt}
            loading="lazy"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Link>
    </motion.li>
  );
}


interface SertifCard {
  url: string;
  image: string;
  imageAlt: string;
}