import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";


const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 flex-row justify-center items-center">
        <h1 className="text-xl md:text-8xl font-bold flex leading-normal tracking-tight">
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
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
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



export default Home;