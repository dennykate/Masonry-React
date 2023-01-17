import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";

import Logo from "../assets/logo.png";
import { navbarData } from "../utils/data";
import Sidebar from "./Sidebar";
import AnimationButton from "./AnimationButton";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200 && window.innerWidth > 768) {
        setShowNavbar(true);
        setShowSidebar(false);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  const toogleNavbar = showNavbar ? "translate-y-0" : "-translate-y-[100%]";

  return (
    <div>
      <div
        className="w-full md:py-[50px] pb-[30px] xl:px-[70px] md:px-[30px] px-[0px]
       "
      >
        <div
          className="w-full h-[100px] md:rounded-[50px] rounded-none bg-white md:border-[1px] border-b-[1px] border-black
         flex justify-between items-center lg:px-[30px] sm:px-[40px] px-[15px] z-[100]"
        >
          <div className="lg:hidden block">
            <RiMenu2Fill color="black" size={32} />
          </div>

          <div
            className="lg:w-[170px] sm:w-[160px] w-[120px] hover:-translate-y-[5px] transition-all duration-200 ease-in-out 
          cursor-pointer"
          >
            <img src={Logo} alt="logo" className="w-full" />
          </div>

          <div className="lg:flex hidden items-center gap-[25px]">
            {navbarData.map(({ path, name }, index) => (
              <h1
                key={index}
                className=" font-outfit text-black text-[15px] font-light cursor-pointer hover:text-[#FF4C60]
             transition-all duration-200 ease-in-out"
              >
                {name}
              </h1>
            ))}
            <div className="flex items-center gap-[4px]">
              <h1
                className=" font-outfit text-black text-[15px] font-light cursor-pointer hover:text-[#FF4C60]
             transition-all duration-200 ease-in-out"
              >
                More
              </h1>
              <IoIosArrowDown size={16} color="black" />
            </div>
            <button
              className=" border-none outline-none text-black hover:text-[#FF4C60] transition-all
             duration-200 ease-in-out"
            >
              <IoSearch size={22} />
            </button>
            <AnimationButton
              data="w-[105px] h-[36px]"
              subData={"bg-black group-hover:text-black text-white text-[14px]"}
            >
              Sign In
            </AnimationButton>
          </div>

          <div className="lg:flex hidden gap-[25px] items-center">
            <FaFacebookF
              size={20}
              className="text-[#175BEB] cursor-pointer hover:-translate-y-[3px] 
             transition-all duration-200 ease-in-out"
            />
            <FaTwitter
              size={20}
              className="text-[#1DA1F2] cursor-pointer hover:-translate-y-[3px] 
             transition-all duration-200 ease-in-out"
            />
            <FaInstagram
              size={20}
              className="text-[#F018A2] cursor-pointer hover:-translate-y-[3px] 
             transition-all duration-200 ease-in-out"
            />
            <FaRss
              size={20}
              className="text-[#F8AD2A] cursor-pointer hover:-translate-y-[3px] 
             transition-all duration-200 ease-in-out"
            />
          </div>

          <div
            className="lg:hidden w-[40px] h-[40px] rounded-full bg-black text-white
           flex justify-center items-center"
          >
            <IoSearch size={20} />
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[80px] bg-white border-b-[1px] border-black lg:px-[50px] px-[20px] md:flex hidden 
        justify-between items-center fixed top-0 ${toogleNavbar} transition-all duration-200 ease-in-out z-[100]`}
      >
        <div className="lg:w-[180px] w-[120px] hover:-translate-y-[5px] transition-all duration-200 ease-in-out cursor-pointer">
          <img src={Logo} alt="logo" className="w-full" />
        </div>

        <div className="flex items-center gap-[25px]">
          {navbarData.map(({ path, name }, index) => (
            <h1
              key={index}
              className=" font-outfit text-black text-[15px] font-light cursor-pointer hover:text-[#FF4C60]
             transition-all duration-200 ease-in-out"
            >
              {name}
            </h1>
          ))}
          <div className="flex items-center gap-[4px]">
            <h1
              className=" font-outfit text-black text-[15px] font-light cursor-pointer hover:text-[#FF4C60]
             transition-all duration-200 ease-in-out"
            >
              More
            </h1>
            <IoIosArrowDown size={16} color="black" />
          </div>
          <button
            className=" border-none outline-none text-black hover:text-[#FF4C60] transition-all
             duration-200 ease-in-out"
          >
            <IoSearch size={22} />
          </button>
          <div className="w-[105px] h-[36px] rounded-full group relative">
            <div className="w-full h-full rounded-full bg-black absolute top-0 left-0 "></div>
            <div
              className="w-full h-full rounded-full bg-black flex justify-center items-center font-outfit font-extrabold text-white
             text-[15px] cursor-pointer group-hover:-translate-y-[3px] group-hover:-translate-x-[3px] transition-all
              duration-200 ease-in-out border-[1px] border-black group-hover:bg-white group-hover:text-black 
               absolute top-0"
            >
              Sign In
            </div>
          </div>
        </div>
      </div>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default Navbar;
