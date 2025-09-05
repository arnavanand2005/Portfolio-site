import React from 'react'


const Projects = () => {
  const projects =[
    {
      title : "Sky Sense",
      description:"A responsive weather app that shows live weather, background themes, a grid of cities to choose from and 5-day forecasts.",
      techStack: ["React", "CSS", "OpenWeather API"],
      image: "../assets/skysense.png",
      demo:"https://sky-sense-eight.vercel.app",
      github:"https://github.com/arnavanand2005/SkySense"
    },
    {
      title : "Bruno's Pizzeria Website",
      description:"A responsive website for a fictional pizzeria, featuring a menu, contact form, and an about page",
      techStack: ["CSS", "React"],
      image: "../assets/pizzeria.png",
      demo:"https://brunos-pizzeria.vercel.app",
      github:"https://github.com/arnavanand2005/Brunos-PIZZERIA"
    },
    {
      title : "ReactJS To Do List",
      description:"A simple and interactive To-Do List application built with ReactJS, allowing users to add, move tasks according to priority, and delete tasks.",
      techStack: ["React", "CSS"],
      image: "../assets/todo.png",
      demo:"https://reactjs-to-do-list-9jsi.vercel.app",
      github:"https://github.com/arnavanand2005/REACTJS-TO-DO-LIST"
    },
    {
      title : "EduSity Website",
      description:"A responsive educational platform website with sections for courses, testimonials, and a contact form.",
      techStack: ["CSS", "Reactjs"],
      image: "../assets/edusity.png",
      demo:"https://edusity-website.vercel.app",
      github:"https://github.com/arnavanand2005/EduSity-"
    }
  ]
  return (
    <div>
      <h1 className='text-4xl'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
      </div>
    </div>
  )
}

export default Projects
