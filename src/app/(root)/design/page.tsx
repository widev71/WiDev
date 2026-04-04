import PageTitle from "@/components/elements/PageTitle";
import {PROJECT_DESIGN} from "@/constants/design"
import { Metadata } from "next";
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
          title="Designer"
          description="Showcase of my works on My Design."
        />
      </div>

      <VerticalScrollingProjects data={PROJECT_DESIGN} />
    </div>
  );
}