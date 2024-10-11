import React from 'react'
import Title from '../layouts/Title'
import { project1, project2, project3 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <a href='https://furniturejqueryproject.netlify.app/' target='_blank'>
          <ProjectsCard
            title="Project 1"
            des=" A responsive E-commerce website built with HTML, CSS and JQuery offering clean design, easy navigation, and optimized layouts for a seamless shopping experience on any device."
            src={project1}
          />
        </a>
        <a href='https://btproject1.netlify.app/' target='_blank'>
          <ProjectsCard
            title="Project 2"
            des=" A responsive plants website built with HTML, CSS, BOOTSTRAP and JQuery offering clean design, easy navigation, and optimized layouts for a seamless shopping experience on any device."
            src={project2}
          />
        </a>
        <a href='https://reactecommerce12.netlify.app/' target='_blank'>
          <ProjectsCard
            title="project 3"
            des=" A dynamic E-commerce website built with React, offering a responsive design, real-time updates, and smooth navigation for an enhanced shopping experience."
            src={project3}
          />
        </a>
      </div>
    </section>
  );
}

export default Projects