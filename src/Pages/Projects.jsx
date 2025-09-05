import React from 'react'
import skysenseimg from '../assets/skysense.png'
import pizzeriaimg from '../assets/pizzeria.png'
import todoimg from '../assets/todo.png'
import edusityimg from '../assets/edusity.png'
import sqacimg from '../assets/sqac.png'
import mineverse from '../assets/mineverse.png'

const Projects = () => {
  const projects =[
    {
      title : "Sky Sense",
      description:"A responsive weather app that shows live weather, background themes, a grid of cities to choose from and 5-day forecasts.",
      techStack: ["React", "CSS", "OpenWeather API"],
      image: skysenseimg,
      demo:"https://sky-sense-eight.vercel.app",
      github:"https://github.com/arnavanand2005/SkySense"
    },
    {
      title : "Bruno's Pizzeria Website",
      description:"A responsive website for a fictional pizzeria, featuring a menu, contact form, and an about page",
      techStack: ["CSS", "React"],
      image: pizzeriaimg,
      demo:"https://brunos-pizzeria.vercel.app",
      github:"https://github.com/arnavanand2005/Brunos-PIZZERIA"
    },
    {
      title : "ReactJS To Do List",
      description:"A simple and interactive To-Do List application built with ReactJS, allowing users to add, move tasks according to priority, and delete tasks.",
      techStack: ["React", "CSS"],
      image: todoimg,
      demo:"https://reactjs-to-do-list-9jsi.vercel.app",
      github:"https://github.com/arnavanand2005/REACTJS-TO-DO-LIST"
    },
    {
      title : "EduSity Website",
      description:"A responsive educational platform website with sections for courses, testimonials, and a contact form.",
      techStack: ["CSS", "Reactjs"],
      image: edusityimg,
      demo:"https://edusity-website.vercel.app",
      github:"https://github.com/arnavanand2005/EduSity-"
    },
    {
      title : "SQAC Club Website",
      description:"A responsive website for the SQAC Club/Community of SRMIST, featuring sections for events, team members, and projects.",
      techStack: ["Tailwind Css", "Reactjs"],
      image : sqacimg,
      demo:"https://sqac-club-website.vercel.app",
      github:"https://github.com/SQAC-Tech/sqac-website"
    },
    {
      title: "Mineverse Website ",
      description: "A responsive website for the Mineverse Event conducted by SQAC club of SRMIST , a single page application with registration form and event details.",
      techStack: ["Tailwind Css", "Reactjs"],
      image: mineverse,
      demo: "https://mineverse-sqac.vercel.app",
      github:"https://github.com/SQAC-Tech/Event-Mineverse"
    }
  ]
  return (
    <div>
      <h1 className='text-4xl'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {projects.map((project , index) => (
          <div key={index}
          >
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
