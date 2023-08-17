import { useState } from 'react'
import './App.css'
import Intro from './Intro'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video className='z-0' playsInline autoPlay muted loop>
        <source src='src/assets/particles.mp4' type="video/mp4" />
      </video>

      <Navbar />
      <Intro />
      
      {/* <Experience/>
      <Skills/>
      <Projects/>
      <ContactMe/> */}
    </>
  )
}

export default App
