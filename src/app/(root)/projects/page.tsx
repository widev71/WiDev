import PageTitle from "@/components/elements/PageTitle";
import { PROJECTCARD_CONTENTS } from "@/constants/projects";
import type { Metadata } from "next";
import VerticalScrollingProjects from "@/components/elements/VerticalScrollingProjects";

export const metadata: Metadata = {
  title: "Projects | Made Wijaya",
  description:
    "Discover my portfolio of frontend development projects, a curated collection showcasing my skills and creativity in web design and development. Immerse yourself in a diverse range of web solutions and innovative designs.",
};

export default function Projects() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <PageTitle
          title="Projects"
          description="Showcase of my works on frontend development."
        />
      </div>

      <VerticalScrollingProjects data={PROJECTCARD_CONTENTS} />
    </div>
  );
}
