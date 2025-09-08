import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Projects from './Pages/Projects.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ScrollTop from './Components/ScrollTop.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
