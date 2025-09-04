import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-extrabold tracking-wide hover:text-blue-400 transition">
          ArnAv AnAnd
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects"].map((item, idx) => (
            <Link
              key={idx}
              to={`/${item === "Home" ? "" : item}`}
              className="text-gray-300 hover:text-white transition relative group"
            >
              {item}
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/Contact">
            <button className="text-white bg-gradient-to-br from-blue-400 to-purple-500 px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-500/40 transition">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-3xl cursor-pointer p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoMdClose size={28} /> : <CiMenuFries size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col bg-black px-6 py-6 space-y-4 rounded-b-lg shadow-lg"
        >
          {["Home", "About", "Projects"].map((item, idx) => (
            <Link
              key={idx}
              onClick={() => setIsOpen(false)}
              to={`/${item === "Home" ? "" : item}`}
              className="text-gray-300 hover:text-white transition"
            >
              {item}
            </Link>
          ))}
          <Link onClick={() => setIsOpen(false)} to="/Contact">
            <button className="w-full text-white bg-gradient-to-br from-blue-400 to-purple-500 px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-500/40 transition">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
