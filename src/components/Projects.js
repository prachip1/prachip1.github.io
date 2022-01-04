// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white-main bg-black-light body-font">
     <div className="container px-5 py-30 mx-auto text-center lg:px-40">
    
        <div className="flex flex-col w-full mb-20">
          {/*<CodeIcon className="mx-auto inline-block w-10 mb-4" />*/}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-pink-dark">
           Projects
          </h1>
          <p className="lg:w-2/3 mx-auto text-left leading-relaxed text-pink-light text-base text-lg mt-8">
            Below are mentioned some of the side projects that I have built as I am not allowed to display what I have built during
            I was working with companies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 h-full lg:p-40 -mt-12">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="relative z-10 w-full border-4 border-black-dark bg-black-dark opacity-0 hover:opacity-100 lg:p-10 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-dark mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white-main mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}