import React from 'react'
import { Link } from 'react-router-dom'
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='background-navbar bg-black'>
      <div className='container mx-auto flex justify-between items-center p-4'>
      <Link to="/">
        <div className='text-white text-2xl font-bold p-4'>
            ArnAv AnAnd
        </div>
      </Link>
      
        <div className='gap-4 hidden md:flex ml-8'>
          <Link className='text-white' to="/">Home</Link>
          <Link className='text-white' to="/About">About</Link>
          <Link className='text-white' to="/Projects">Projects</Link>
          <Link to="/Contact"><button className='text-white bg-gradient-to-br from-blue-400 to-purple-400 p-2'>Contact</button></Link>
        </div>
        </div>  
    </nav>
  )
}

export default Navbar
