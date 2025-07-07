import Image from "next/image";
import React from "react";

export interface ProjectsProps {
  _id: string;
  image: string;
  title: string;
  desc: string;
  tools: string[];
  url: string;
}

export interface ProjectsData {
  projects: ProjectsProps[];
  className?: string;
}

const Projects = (props: ProjectsData) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-0 px-5 py-8 ${props.className}`}
    >
      {props.projects.map((project, index) => (
        <div
          key={index}
          className="rounded-xl border border-cyan-500/60 hover:border-cyan-400 transition-colors duration-300 p-5  backdrop-blur-md"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={600} // or any width you want
            height={400} // or adjust height appropriately
            className="w-full object-cover rounded-md mb-4"
            priority={index === 0} // Optional: prioritizes first image for LCP
          />
          <h3 className="text-lg font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.desc}</p>
          <div className="pb-5">
            <span>
              <a href={project.url} className="text-cyan-400 hover:underline">
                View Project
              </a>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className={`px-4 py-1 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400 transition duration-300 hover:shadow hover:shadow-cyan-500/20 ${
                  toolIndex % 3 === 0
                    ? "text-cyan-400"
                    : toolIndex % 3 === 1
                    ? "text-blue-400"
                    : "text-purple-400"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
