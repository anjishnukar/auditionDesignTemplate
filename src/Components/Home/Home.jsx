import React from "react";
import Spline from '@splinetool/react-spline'
import avatarImg from "../../assets/7358602-removebg-preview.png";
import ShinyButton from "./ShinyButton";


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 flex-row justify-center items-center">
        <h1 className="bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent text-xl md:text-8xl font-bold flex leading-normal tracking-tight">
          Welcome to EDC Auditions
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
        Best of luck with your club auditions! Stay confident, be yourself, and shine!
        </p>
        <div className="relative">
          {/* <div className="mt-5 md:md-10 absolute inset-0 bg-pink-600 rounded-2xl"></div> */}
          {/* <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
           Register
          </button> */}
          <NeuButton/>         
        </div>
      </div>
      <Spline scene="https://prod.spline.design/u7tzvWFnnOFuyi3f/scene.splinecode"/>
      {/* <Spline scene="https://prod.spline.design/LRXaELYU-Z-GPmeU/scene.splinecode" /> */}
      {/* <Spline scene='https://prod.spline.design/KSEaa9yRPvlJVI-Y/scene.splinecode'/> */}
      {/* <div>
        <img className="" src={avatarImg} alt="" />
        <Spline scene="https://prod.spline.design/LRXaELYU-Z-GPmeU/scene.splinecode" />
          
      </div> */}
    </div>
  );
};

const NeuButton = () => {
  return (
      <button className="mt-5 rounded-2xl md:md-10 px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Register
      </button>
  );
};
{/* <ShinyButton>Register</ShinyButton> */}


export default Home;