import About from "./Components/About/About"
import CircleTrail from "./Components/CircleTrail/CircleTrail"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Form from "./Components/LoginSignup/Form"
import Radio from "./Components/FormComponents/Radio"
import Checkbox from "./Components/FormComponents/Checkbox"
import LongAnswer from "./Components/FormComponents/LongAnswer"
import ShortAnswer from "./Components/FormComponents/ShortAnswer"
import QuizPage from "./Pages/QuizPage"
import Landing from "./Pages/Landing"
import {createBrowserRouter, RouterProvider} from "react-router-dom"



function App() {
  // Landing Page
  return <div className="bg-[#141619] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Projects/> 
    <Footer/>
  </div>


  //Login Page
  // return (
  //         <div className='flex w-full h-screen'>
  //           <div className='w-full flex items-center justify-center lg:w-1/2'>
  //             <Form/>
  //           </div>  
  //           <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
  //             <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'></div>
  //             <div className='w-full h-1/2 absolute  bottom-0 bg-white/10 backdrop-blur-lg'></div>
  //           </div>
  //         </div>
  //       )

  //Quiz Page
  // return(
  //   <div className='flex flex-col w-full h-screen justify-center items-center mt-96'>
  //     <Checkbox/>
  //     <LongAnswer/>
  //     <ShortAnswer/>
  //     <Radio/>
  //   </div>
  // )

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Landing/>
  //   },
  //   // {
  //   //   path: "/login",
  //   //   element: 
  //   // }
  //   {
  //     path:"/quiz",
  //     element: <QuizPage/>
  //   }
  // ])
  
}

export default App
