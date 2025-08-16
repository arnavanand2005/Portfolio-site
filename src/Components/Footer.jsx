import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosMail , IoIosCall} from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center p-6 md:p-8 items-center gap-6 bg-gradient-to-r from-gray-800 via-black to-gray-800 text-white mt-4 text-xl'>
      <div> 
      <p>2025 &copy; All rights reserved.</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='flex items-center gap-2 pr-3 '><IoIosMail/> : arnavanand2005@gmail.com</p>
        <p className='flex items-center gp-2'><IoIosCall/> : +91-9117513766</p>
      </div>
      <div className='flex justify-center items-center gap-4 text-2xl'>
        <a className='text-grey-200' href="https://github.com/arnavanand2005"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arnav-anand-056710315"><CiLinkedin /></a>
      </div>
    </div>  
  )
}

export default Footer
