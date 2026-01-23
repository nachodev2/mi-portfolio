import { useState } from 'react'
import Navbar from './navbar/Navbar.jsx'
import Home from './home/Home.jsx'
import AboutMe from './about/AboutMe.jsx'
import TechStack from './home/TechStack.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <AboutMe />
    </>
  )
}

export default App
