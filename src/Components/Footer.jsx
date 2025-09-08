import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col items-center justify-center py-8 gap-4 bg-gradient-to-r bg-black text-center">
      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Arnav Anand. All rights reserved.
      </p>

      {/* Quick Links */}
      <div className="flex gap-6 text-sm text-gray-300">
        <button onClick={() => navigate('/about')} className="hover:text-purple-400">About</button>
        <button onClick={() => navigate('/projects')} className="hover:text-purple-400">Projects</button>
        <button onClick={() => navigate('/contact')} className="hover:text-purple-400">Contact</button>
      </div>

      {/* Socials */}
      <div className="flex gap-6 text-3xl mt-4 text-gray-300">
  <a
    href="https://www.linkedin.com/in/arnav-anand-056710315"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:scale-110 transition-transform duration-300 hover:text-blue-400"
  >
    <CiLinkedin />
  </a>
  <a
    href="https://github.com/arnavanand2005"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="hover:scale-110 transition-transform duration-300 hover:text-gray-400"
  >
    <FaGithub />
  </a>
</div>

    </footer>
  )
}

export default Footer
