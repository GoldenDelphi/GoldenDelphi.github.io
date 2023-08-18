import { useState } from 'react'
import './App.css'
import Intro from './Intro'
import Navbar from './Navbar'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Education from './Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video className='z-0' playsInline autoPlay muted loop>
        <source src='static/particles.mp4' type="video/mp4" />
      </video>

      <Navbar/>
      <Intro/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default App
