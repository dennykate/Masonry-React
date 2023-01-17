import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

import { navbarData } from "../utils/data";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const toogleSidebar = showSidebar ? "translate-x-0" : "-translate-x-[100%]";

  return (
    <div
      className={`fixed top-0 w-full h-full bg-black z-50 bg-opacity-10 ${toogleSidebar} transition-all
       duration-100 ease-in-out`}
    >
      <div className="max-w-[500px] h-full bg-white sm:px-[30px] py-[30px] px-[10px]">
        <div className="flex flex-col gap-[30px] relative">
          {navbarData.map(({ path, name }, index) => (
            <h1
              key={index}
              className=" sm:text-xl text-base font-outfit font-normal text-black"
            >
              {name}
            </h1>
          ))}
          <div className="w-full flex justify-between items-center">
            <h1 className=" sm:text-xl text-base font-outfit font-normal text-black">
              More
            </h1>
            <IoIosArrowDown size={22} color="black" />
          </div>
          <div className="w-full flex justify-center items-center">
            <div
              className="w-[120px] h-[40px] rounded-full bg-black font-outfit font-extrabold text-white
            flex justify-center items-center "
            >
              Sign In
            </div>
          </div>

          <div
            className="absolute top-0 right-0 w-[40px] h-[40px] bg-black rounded-full z-10
         flex justify-center items-center"
            onClick={() => setShowSidebar(false)}
          >
            <HiXMark size={20} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
