import React from 'react'
import resume_img from '../assets/resume.png'
import { DiPython , DiJavascript } from "react-icons/di";
import { FaHtml5 , FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { SiMongodb , SiExpress } from "react-icons/si";

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Content */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          About Me
        </h1>
        <p className="text-base md:text-lg leading-relaxed opacity-90">
          I’m a passionate and curious learner who enjoys building practical, user-friendly, and creative solutions. 
          With a strong foundation in programming (C, React, Python), I focus on writing clean and simplified code while 
          working on projects like front-end websites, weather apps, and many more.
          <br /><br />
          Currently, I’m also exploring Machine Learning, deepening my understanding of AI-driven solutions and their 
          real-world impact. Along with my technical skills, I bring strong communication abilities, making it easier 
          to collaborate, share ideas, and work effectively in teams.
          <br /><br />
          I combine problem-solving with an eye for design and detail, ensuring my projects are not only functional 
          but also elegant and engaging. I’m always eager to learn, experiment with modern technologies, and turn 
          ideas into impactful solutions.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        <button 
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          View Projects
        </button>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          <img 
            src={resume_img} 
            alt="resume_pic"
            className="w-10 h-10"
          />
          <span className="font-medium">View Resume</span>
        </a>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">My Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 justify-items-center text-5xl">
          <DiPython className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
          <FaHtml5 className="hover:text-orange-500 transition duration-300 cursor-pointer" />
          <FaCss3Alt className="hover:text-blue-400 transition duration-300 cursor-pointer" />
          <DiJavascript className="hover:text-yellow-300 transition duration-300 cursor-pointer" />
          <FaReact className="hover:text-cyan-400 transition duration-300 cursor-pointer" />
          <RiTailwindCssLine className="hover:text-sky-400 transition duration-300 cursor-pointer" />
          <SiMongodb className="hover:text-green-500 transition duration-300 cursor-pointer" />
          <SiExpress className="hover:text-gray-300 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default About
