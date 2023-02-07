import React from "react";
import ProjectData from "./ProjectData";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { BiDesktop } from "react-icons/bi";

function Project() {
  return (
    <div
      name="APIProject"
      className="bg-gradient-to-b bg-[#fffeff] w-full h-max text-white  md:h-max"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="text-center relative">
          <h3 className=" text-2xl sm:text-3xl md:text-4xl font-medium text-[#3bd5ff] mt-6 tracking-wider">
            OverView Of Project Using React
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 mt-14 md:grid-cols-3 gap-20 place-content-center sm:px-0">
          {ProjectData.map((ProjectD) => (
            <div
              key={ProjectD.id}
              className=" shadow-xl hover:-translate-y-4 bg-white w-[21rem] rounded-lg h-[25rem] overflow-hidden text-center relative"
            >
              <img
                src={ProjectD.src}
                alt=""
                className="group rounded-md h-[100%] bg-contain w-full relative duration-200"
              />
              <div className="hover:-translate-y-60 cursor-pointer absolute bg-white duration-700 -translate-y-14 p-4 text-center flex flex-col">
                <h1 className="text-2xl tracking-wider text-[#3bd5ff] font-medium px-1 py-0">
                  {ProjectD.title}
                </h1>
                <p className="text-base mt-3 text-gray-600 text-left ml-6">
                  {ProjectD.dec}
                </p>
                <div className="flex p-4 justify-between items-center">
                  <a
                    className="w-[4rem] px-4 py-2 rounded-lg text-white bg-[#3bd5ff]"
                    href={ProjectD.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={30} />
                  </a>
                  <a
                    className="w-[4rem] px-4 py-2 rounded-lg text-white bg-[#61dafb]"
                    href={ProjectD.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiDesktop size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-10 flex justify-center items-center">
          <div className="px-4 cursor-pointer font-semibold py-4 w-[10rem] mx-auto md:mx-0 text-2xl text-[#000000] hover:text-[#61dafb]">
            <span className="">View More</span>
            {/* <BsArrowRight /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
