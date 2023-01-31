import React from "react";
import Typed from "react-typed";
import siteImage from "./SiteImage/home.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div
        name="Home"
        className="h-screen w-full bg-gradient-to-t from-cyan-400 via-blue-500 to-purple-600 md:block"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <div className="flex md:ml-10 flex-col justify-center text-center md:text-left h-full relative">
            <h2 className="text-7xl md:text-7xl font-bold text-indigo-800">
              Welcome to Javascript Projects
            </h2>
            <h3 className="text-yellow-500 py-8 mt-5 text-3xl sm:text-3xl sm:font-medium"></h3>
            <div className="px-4 py-4 w-[8rem] mx-auto md:mx-0 rounded-md bg-[#3e049b] text-white shadow-xl">
              <span className="">Get Started</span>
            </div>
          </div>

          <div className="w-[70%] animate-bounce">
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
