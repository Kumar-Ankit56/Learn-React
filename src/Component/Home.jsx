import React from "react";
import Typed from "react-typed";
import siteImage from "./SiteImage/home.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div name="Home" className="h-screen w-full  bg-[#282c34] md:block">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center h-full px-4 md:flex md:items-center md:justify-between md:flex-row">
          <div className="flex md:ml-24 flex-col justify-center text-center md:text-left h-full relative">
            <h2 className="text-6xl mt-10 leading-tight md:text-6xl font-bold text-[#61dafb]">
              Welcome to ReactJS Projects
            </h2>
            <h4 className="text-gray-300 md:mt-6 md:py-6 md:text-left md:text-xl md:w-[70%]">
              React makes it painless to create interactive Uis. Design Simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </h4>
            <div className="px-4 cursor-pointer py-4 w-[7rem] mx-auto md:mx-0 text-base rounded-md bg-[#61dafb] text-[#000000] shadow-xl">
              <span className="">Get Started</span>
            </div>
          </div>
          <div className="w-[100%] animate-bounce">
            <img
              src={siteImage}
              alt="my profile"
              className="rounded-2xl mx-auto mb-8 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
