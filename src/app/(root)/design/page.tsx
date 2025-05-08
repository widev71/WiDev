import ProjectCard from "@/components/cards/ProjectCard";
import PageTitle from "@/components/elements/PageTitle";
import {PROJECT_DESIGN} from "@/constants/design"
import { Metadata } from "next";

export const metadata: Metadata = {
       title: "Projects | Made Wijaya",
       description:
         "Discover my portfolio of frontend development projects, a curated collection showcasing my skills and creativity in web design and development. Immerse yourself in a diverse range of web solutions and innovative designs.",
     };
     
     export default function Projects() {
       return (
         <div className="p-8">
           <PageTitle
             title="Designer"
             description="Showcase of my works on My Design."
           />
     
           <section className="lg:mb-20">
             <ul className="grid gap-8 sm:grid-cols-2">
               {PROJECT_DESIGN.map((content, index) => (
                 <ProjectCard
                   key={index}
                   url={content.url}
                   title={content.name}
                   description={content.description}
                   techStack={content.techStack}
                   image={content.image}
                   imageAlt={content.imageAlt}
                 />
               ))}
             </ul>
           </section>
         </div>
       );
     }