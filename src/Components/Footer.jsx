import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosMail , IoIosCall} from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 bg-black text-white p-4 mt-4'>
      <div> 
      <p>2025 &copy; All rights reserved.</p>
      </div>
      <div>
        <p><IoIosMail/> : arnavanand2005@gmail.com</p>
        <p><IoIosCall/> : +91-9117513766</p>
      </div>
      <div className='flex justify-center items-center gap-4 text-2xl'>
        <a className='text-grey-200' href="https://github.com/arnavanand2005"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arnav-anand-056710315"><CiLinkedin /></a>
      </div>
    </div>  
  )
}

export default Footer
