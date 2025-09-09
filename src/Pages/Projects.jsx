import React from 'react';
import skysenseimg from '../assets/skysense.png';
import pizzeriaimg from '../assets/pizzeria.png';
import todoimg from '../assets/todo.png';
import edusityimg from '../assets/edusity.png';
import sqacimg from '../assets/sqac.png';
import mineverse from '../assets/mineverse.png';
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: 'Sky Sense',
      description: 'A responsive weather app that shows live weather, background themes, a grid of cities to choose from, and 5-day forecasts.',
      techStack: ['React', 'CSS', 'OpenWeather API'],
      image: skysenseimg,
      demo: 'https://sky-sense-eight.vercel.app',
      github: 'https://github.com/arnavanand2005/SkySense',
    },
    {
      title: "Bruno's Pizzeria Website",
      description: 'A responsive website for a fictional pizzeria, featuring a menu, contact form, and an about page.',
      techStack: ['CSS', 'React'],
      image: pizzeriaimg,
      demo: 'https://brunos-pizzeria.vercel.app',
      github: 'https://github.com/arnavanand2005/Brunos-PIZZERIA',
    },
    {
      title: 'ReactJS To Do List',
      description: 'A simple and interactive To-Do List application built with ReactJS, allowing users to add, move tasks according to priority, and delete tasks.',
      techStack: ['React', 'CSS'],
      image: todoimg,
      demo: 'https://reactjs-to-do-list-9jsi.vercel.app',
      github: 'https://github.com/arnavanand2005/REACTJS-TO-DO-LIST',
    },
    {
      title: 'EduSity Website',
      description: 'A responsive educational platform website with sections for courses, testimonials, and a contact form.',
      techStack: ['CSS', 'Reactjs'],
      image: edusityimg,
      demo: 'https://edusity-website.vercel.app',
      github: 'https://github.com/arnavanand2005/EduSity-',
    },
    {
      title: 'SQAC Club Website',
      description: 'A responsive website for the SQAC Club/Community of SRMIST, featuring sections for events, team members, and projects.',
      techStack: ['Tailwind Css', 'Reactjs'],
      image: sqacimg,
      demo: 'https://sqac-website.vercel.app',
      github: 'https://github.com/SQAC-Tech/sqac-website',
    },
    {
      title: 'Mineverse Website ',
      description: 'A responsive website for the Mineverse Event conducted by SQAC club of SRMIST, a single-page application with a registration form and event details.',
      techStack: ['Tailwind Css', 'Reactjs'],
      image: mineverse,
      demo: 'https://mineverse-sqac.vercel.app',
      github: 'https://github.com/SQAC-Tech/Event-Mineverse',
    },
  ];

  return (
    <div id="projects" className="relative min-h-screen text-white p-6 md:p-8 lg:p-12 overflow-hidden">
      {/* Space Themed Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-purple-950 to-black">
        {/* Stars effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 drop-shadow-lg">
            My Projects
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Here's a collection of my recent work. Each project represents my passion for creating beautiful, functional web experiences.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-md shadow-purple-900/50">
                    Project {index + 1}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-indigo-200 group-hover:text-purple-300 transition-colors drop-shadow-md">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-bubble bg-purple-900/50 text-purple-200 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-700/30 shadow-md cursor-default"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-md hover:shadow-blue-600/40"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-md hover:shadow-gray-500/40"
                  >
                    <span>Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Note */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-gray-700/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-purple-200 text-sm">
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
