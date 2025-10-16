import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { project_data } from "@/constants";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[55px] font-spaceGrotesk font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 py-20">
        My Projects
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-10 px-10">
  {project_data.map((project, index) => (
    <ProjectCard
      key={index}
      src={project.src}
      title={project.title}
      description={project.description}
      githubLink={project.githubLink}
      tags={project.tags}
    />
  ))}
</div>

    </div>
  );
};

export default Projects;
