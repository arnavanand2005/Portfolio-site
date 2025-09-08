import React from "react";
import { ReactTyped } from "react-typed";
import space_bg from "../assets/space_bg.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import astronaut from "../assets/astronaut.png";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${space_bg})` }}
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          className="text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl mb-4 inline-block px-4 py-1 bg-gradient-to-r from-yellow-600 to-blue-600 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to my Portfolio
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hi! I'm <span className="text-blue-400">Arnav Anand</span>
          </motion.h1>

          <ReactTyped
            strings={[
              "Front-end Developer",
              "ML Enthusiast",
              "Exploring Full Stack Development",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mt-4 block"
          />

          <motion.p
            className="mt-6 text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I’m passionate about building interactive websites, exploring AI/ML, 
            and constantly learning new technologies to grow as a developer.
          </motion.p>

          {/* Connect Section */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 text-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Let’s Connect <IoArrowForwardCircleOutline className="text-2xl" />
            </button>

            <div className="flex gap-6 mt-4 text-3xl">
              <a
                href="https://www.linkedin.com/in/arnav-anand-056710315"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 hover:text-blue-400"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/arnavanand2005"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 hover:text-gray-400"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - FLOATING ASTRONAUT */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ y: 0 }} // starting position
          animate={{ y: [0, -20, 0] }} // animate up & down
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img src={astronaut} alt="Astronaut" className="w-64 md:w-96" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
