import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Domains</h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 items-center justify-center">
        <ProjectCard
          title="Event Management"
          main="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis"        
        />
        <ProjectCard
          title="Content Writing"
          main="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis"       
        />
        <ProjectCard
          title="Graphic Designing"
          main="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis"        
        />
        <ProjectCard
          title="Web and App Developer"
          main="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis"
        />
      </div>
    </div>
  );
};

export default Projects;