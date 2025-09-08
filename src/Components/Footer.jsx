import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
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
  )
}

export default Footer
