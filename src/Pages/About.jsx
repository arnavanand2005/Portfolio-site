import React from 'react'
import resume_img from '../assets/resume.png'
import { DiPython , DiJavascript } from "react-icons/di";
import { FaHtml5 , FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";


const About = () => {
  return (
    <div>
      <div>

      <a href="/resume.pdf" download>
        <img src={resume_img} alt="resume_pic"
          className="w-16 h-16 cursor-pointer hover:opacity-80" 
        />
      </a>
      </div>
      <div>
        <h1>My Tech Stack</h1>
        <div>
          <DiPython />
        </div>
      </div>
    </div>
  )
}

export default About
