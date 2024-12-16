import React from 'react'
import About from "./Components/About/About"
import CircleTrail from "./Components/CircleTrail/CircleTrail"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"


function Landing() {
    return <div className="bg-[#141619] h-auto w-full overflow-hidden">
    <Navbar/>
    {/* <CircleTrail/> */}
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
  </div>
}

export default Landing