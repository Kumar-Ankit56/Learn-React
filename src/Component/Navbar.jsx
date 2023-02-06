import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillMail,
  AiOutlineBulb,
} from "react-icons/ai";
import logo from "./SiteImage/ReactLogo.png";
import logo1 from "./SiteImage/sitewhite.png";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ApiIcon from "@mui/icons-material/Api";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleSadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleSadow);
  }, []);
  return (
    <div>
      <div className="sticky w-full h-20 bg-[#010326] shadow-2xl z-10 md:z-50">
        <div className="flex items-center justify-between px-10 py-4 md:px-40 ">
          <div className="w-[40px] h-[40px] flex items-center ">
            <img
              style={{ borderRadius: "5px" }}
              className="mr-1 animate-spin"
              src={logo1}
              alt="logo"
            />

            <p className="ml-1 text-white font-medium text-3xl">Project</p>
          </div>
          <div className="">
            <ul className="hidden md:flex ">
              <Link to="Home" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-[#00aada] hover:border-b hover:border-b-[#00aada]">
                  Home
                </li>
              </Link>
              <Link to="Project" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-[#00aada] hover:border-b hover:border-b-[#00aada]">
                  Project
                </li>
              </Link>
              <Link to="BasicProject" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-[#00aada] hover:border-b hover:border-b-[#00aada]">
                  Create
                </li>
              </Link>
              <Link to="APIProject">
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-[#00aada] hover:border-b hover:border-b-[#00aada]">
                  Github
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="text-white md:hidden">
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* --BreackPointforsmall-device---- */}
      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-40"
            : " "
        }
      >
        <div
          className={
            !nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%]  md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500 z-50"
              : "fixed left-[-100%] p-5 ease-in duration-500 z-50"
          }
        >
          <div>
            <div
              onClick={handleNav}
              className="flex items-center justify-center float-right shadow-lg h-8 w-8 shadow-gray-600 rounded-full "
            >
              <AiOutlineClose />
            </div>
            <div className="flex items-center justify-center w-full mt-10">
              <img
                style={{ borderRadius: "5px" }}
                src={logo}
                alt="/"
                width="110"
                height="60"
              />
            </div>
            <div className="my-4 border-b text-center border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4 mx-8 text-xl text-[#00aada] font-medium">
                Let's build something together
              </p>
            </div>
            <div className="">
              <ul className="md:hidden block p-8">
                <Link to="Home" smooth={true} duration={500}>
                  <div className="flex justify-start items-center ml-4 font-sans text-gray-800 text-lg py-4 bg-[#00aada] w-full h-12 rounded-md relative">
                    <HomeIcon style={{ margin: "10px", height: "5rem" }} />
                    Home
                  </div>
                </Link>
                <Link to="Project" smooth={true} duration={500}>
                  <div className="mt-5 flex justify-start items-center ml-4 font-sans text-gray-500 hover:text-gray-900 text-lg py-4 hover:bg-[#cdd6d8] w-full h-12 rounded-md relative">
                    <LightbulbIcon
                      style={{
                        margin: "10px",
                        height: "5rem",
                      }}
                    />
                    Idea
                  </div>
                </Link>
                <Link to="BasicProject" smooth={true} duration={500}>
                  <div className="mt-5 flex justify-start items-center ml-4 font-sans text-gray-500 hover:text-gray-900 text-lg py-4 hover:bg-[#cdd6d8] w-full h-12 rounded-md relative">
                    <AddIcon
                      style={{
                        margin: "10px",
                        height: "5rem",
                      }}
                    />
                    Create
                  </div>
                </Link>
                <Link to="APIProject">
                  <div className="mt-5 flex justify-start items-center ml-4 font-sans text-gray-500 hover:text-gray-900 text-lg py-4 hover:bg-[#cdd6d8] w-full h-12 rounded-md relative">
                    <GitHubIcon
                      style={{
                        margin: "10px",
                        height: "5rem",
                      }}
                    />
                    Github
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
