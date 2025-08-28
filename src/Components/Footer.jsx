import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosMail , IoIosCall} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 py-8 px-6 mt-6 shadow-lg">
      <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
        
        <p className="text-sm md:text-base opacity-80">
          2025 &copy; All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 text-sm md:text-base">
          <p className="flex items-center gap-2 hover:text-blue-400 transition duration-300 cursor-pointer">
            <IoIosMail className="text-lg"/> arnavanand2005@gmail.com
          </p>
          <p className="flex items-center gap-2 hover:text-green-400 transition duration-300 cursor-pointer">
            <IoIosCall className="text-lg"/> +91-9117513766
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a 
            href="https://www.linkedin.com/in/arnav-anand-056710315"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition duration-300 transform hover:-translate-y-1"
          >
            <CiLinkedin />
          </a>
          <a 
            href="https://github.com/arnavanand2005"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition duration-300 transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
