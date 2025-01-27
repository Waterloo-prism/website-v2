import ProjectCard from "@/components/ProjectCard";
import { ProjectCardProps } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects - PRISM Collective",
  description:
    "Welcome to PRISM projects - Art Tech at the University of Waterloo",
};

export default function Page() {
  const projects: Array<ProjectCardProps> = [
    {
      title: "MIND GARDEN - 2024-2025",
      image: "/mind-garden.png",
      genres: ["mechanical", "electrical", "embedded"],
      description:
        "Our first piece is a kinetic sculpture is inspired by the human mind… a vibrant, ever-changing ecosystem of thoughts, emotions, and ideas.",
      team: ["Sophie", "Maisha", "Binal", "Olivia"],
      notion:
        "https://prismcollective.notion.site/Mind-Garden-Living-Doc-13d5aba77f188129bd97d9338e06aa5c?pvs=74",
      github: "https://github.com/Waterloo-prism",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-10 py-8 md:py-12 gap-6 md:gap-10">
      {projects.map((project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
}
