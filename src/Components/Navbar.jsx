import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='background-navbar bg-black'>
      <Link to="/">
        <div className='text-white text-2xl font-bold p-4'>
            ArnAv AnAnd
        </div>
      </Link>
      
        <div className=''>
          <Link className='text-white' to="/">Home</Link>
          <Link className='text-white' to="/About">About</Link>
          <Link className='text-white' to="/Projects">Projects</Link>
          <Link to="/Contact"><button className='text-white bg-gradient-to-br from-blue-400 to-purple-400 p-2'>Contact</button></Link>
        </div>
        
    </div>
  )
}

export default Navbar
