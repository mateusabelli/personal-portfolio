import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const Project = (props) => {
  return (
    <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card">
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3">
            Tech Stack
          </p>
          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            <div className="flex sm:flex-row">
              {props.stack.map((tech, index) => (
                <span
                  key={tech.id}
                  index={index}
                  className="text-dimWhite mr-5 text-[20px] hover:text-teal-200"
                  title="less go"
                >
                  {React.createElement(tech.icon)}
                </span>
              ))}
            </div>
          </p>
        </div>
      </div>

      <p className="mt-5 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.content}
      </p>

      <div className="flex mt-4 -mx-2">
        <a href={props.github}>
          <AiFillGithub size="2rem" className="text-white mr-1"></AiFillGithub>
        </a>
        {props.link ? (
          <a href={props.link}>
            <BsLink45Deg size="2rem" className="text-white"></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
