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
    >
      <h1
        className={clsx(
          "primary",
          "mb-4",
          "text-xl font-bold",
          "min-[347px]:text-2xl md:text-3xl",
        )}
      >
        Call me <span className="gradient__text">Ducky</span>
      </h1>
      <ul className="secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg">
        <li>I am a Front End Developer</li>
        <li>
          I build <span className="gradient__text">websites</span>.
        </li>
      </ul>

      <p className="secondary mb-4 text-sm leading-relaxed md:text-lg ">
        Dalam ekosistem React yang dinamis, saya tidak hanya menghidupkan dunia
        digital saya mentransformasi setiap ide menjadi realitas digital yang
        memukau. Saya menciptakan pengalaman web yang memukau, mudah diakses,
        dan inklusif, memadukan kreativitas dengan teknologi canggih. Setiap
        halaman yang saya bangun adalah sebuah kanvas digital yang membawa
        keajaiban bagi semua pengguna web, menghubungkan orang, ide, dan cerita
        dalam harmoni yang sempurna. Mari bersama-sama menjelajahi kemungkinan
        tanpa batas di dunia digital yang penuh warna ini!
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
