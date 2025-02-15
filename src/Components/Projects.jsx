// eslint-disable-next-line no-unused-vars
import React from "react";
import {PROJECTS } from "../constants";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                <img
                  height={200}
                  width={200}
                  className="mb-6 rounded w-3/4 sm:w-[200px] h-auto"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              className="w-full max-w-xl sm:w-3/4 md:w-2/3 lg:w-3/4 text-center sm:text-left">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span onClick={() => window.open(project.projectCode, "_blank", "noopener,noreferrer") } className="cursor-pointer text-medium text-blue-300">View Code</span>
                    <GoArrowUpRight className="cursor-pointer text-blue-300 mt-1"/>
                    <span onClick={() => window.open(project.projectLink)} className="cursor-pointer text-medium text-blue-300">View Project</span>
                    <GoArrowUpRight className="cursor-pointer text-blue-300 mt-1"/>
                  </div>
                
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
