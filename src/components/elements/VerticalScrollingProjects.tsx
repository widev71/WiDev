"use client";
import ProjectCard from "@/components/cards/ProjectCard";
import { motion } from "framer-motion";

export default function VerticalScrollingProjects({ data }: { data: any[] }) {
  const half = Math.ceil(data.length / 2);
  const leftItems = data.slice(0, half);
  const rightItems = data.slice(half);

  // Duplicate arrays for infinite seamless scrolling
  const leftColumn = [...leftItems, ...leftItems];
  const rightColumn = [...rightItems, ...rightItems];

  return (
    <section 
      className="relative w-full h-[70vh] overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
    >
        <div className="flex flex-col sm:flex-row gap-8 h-full">
          {/* Left Column (Scrolls DOWN: starts at -50%, moves to 0%) */}
          <div className="flex-1 w-full overflow-hidden relative">
            <motion.ul
              animate={{ y: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex flex-col gap-8 absolute top-0 left-0 w-full"
            >
              {leftColumn.map((content, index) => (
                <ProjectCard
                  key={`left-${index}`}
                  url={content.url}
                  title={content.name || content.title}
                  description={content.description}
                  techStack={content.techStack}
                  image={content.image}
                  imageAlt={content.imageAlt}
                />
              ))}
            </motion.ul>
          </div>

          {/* Right Column (Scrolls UP: starts at 0%, moves to -50%) */}
          <div className="flex-1 w-full overflow-hidden relative hidden sm:block">
            <motion.ul
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex flex-col gap-8 absolute top-0 left-0 w-full"
            >
              {rightColumn.map((content, index) => (
                <ProjectCard
                  key={`right-${index}`}
                  url={content.url}
                  title={content.name || content.title}
                  description={content.description}
                  techStack={content.techStack}
                  image={content.image}
                  imageAlt={content.imageAlt}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
  );
}
