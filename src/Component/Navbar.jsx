import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillMail } from "react-icons/ai";
import logo from "./SiteImage/site.png";
import logo1 from "./SiteImage/sitewhite.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div className="fixed w-full h-20 bg-[#010326] shadow-2xl z-10 md:z-50">
        <div className="flex items-center justify-between px-20 py-4 md:px-40 ">
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
                  Basic
                </li>
              </Link>
              <Link to="APIProject">
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-[#00aada] hover:border-b hover:border-b-[#00aada]">
                  API Based
                </li>
              </Link>
            </ul>
            <div className="text-white md:hidden">
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
