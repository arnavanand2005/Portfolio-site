import React from 'react'
import resume_img from '../assets/resume.png'
import { DiPython, DiJavascript } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { SiMongodb, SiExpress } from "react-icons/si";
import profile from '../assets/profile.jpeg'
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate()

  return (
    <div id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Content Wrapper */}
      <motion.div 
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        {/* Left: Text */}
        <motion.div 
          className="flex-1 text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="text-4xl text-purple-400 md:text-5xl font-extrabold mb-6 tracking-wide">
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

          {/* Buttons */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
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
          </motion.div>
        </motion.div>

        {/* Right: Profile */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.img 
            src={profile} 
            alt="profile-pic" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white/20"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-10">My Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
          {[ 
            {icon: <DiPython />, color: "hover:text-yellow-400"},
            {icon: <FaHtml5 />, color: "hover:text-orange-500"},
            {icon: <FaCss3Alt />, color: "hover:text-blue-400"},
            {icon: <DiJavascript />, color: "hover:text-yellow-300"},
            {icon: <FaReact />, color: "hover:text-cyan-400"},
            {icon: <RiTailwindCssLine />, color: "hover:text-sky-400"},
            {icon: <SiMongodb />, color: "hover:text-green-500"},
            {icon: <SiExpress />, color: "hover:text-gray-300"}
          ].map((tech, i) => (
            <motion.div 
              key={i} 
              className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 transition duration-300 text-5xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`${tech.color}`}>{tech.icon}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About
