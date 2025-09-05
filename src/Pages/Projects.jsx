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
    }
  ]
  return (
    <div>
      <h1 className='text-4xl'>Projects</h1>

      
    </div>
  )
}

export default Projects
