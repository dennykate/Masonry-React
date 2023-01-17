import React from "react";
import Image from "../assets/subscribe-decoration.png";

import AnimationButton from "./AnimationButton";

const Subscribe = () => {
  return (
    <div
      className="w-full pt-[50px] pb-[20px] bg-[#FFFACD] flex justify-center items-center flex-col
    sm:px-0 px-[10px]"
    >
      <div>
        <h1 className="font-jost sm:text-[35px] text-[28px] font-bold text-black text-center">
          Subscribe to our Newsletter
        </h1>
        <div className="py-[16px] relative">
          <div className="w-full h-[50px] bg-white rounded-full border-[1px] border-black overflow-hidden relative">
            <input
              type="text"
              className="w-full h-full border-none outline-none px-[20px] text-[13px] "
            />
            <div className="absolute top-0 right-0 w-[120px] h-full flex justify-center items-center">
              <AnimationButton
                data="w-[100px] h-[35px] "
                subData="bg-[#FF4C60] text-[14px] font-bold"
              >
                Submit
              </AnimationButton>
            </div>
          </div>

          <div className="absolute -top-[20px] -left-[100px] p-[10px] w-[100px] h-[80px] ">
            <img src={Image} alt="image" className="w-full h-full" />
          </div>
        </div>
        <div className="max-w-[380px] mx-auto mb-[60px]">
          <h1 className="text-center text-black font-jost text-[14px]">
            Subscribe to our email newsletter and unlock access to{" "}
            <b>members-only</b>
            content and <b>exclusive updates</b>.
          </h1>
        </div>
      </div>

      <div className="flex justify-center sm:flex-row flex-col items-center gap-[20px] mb-[20px]">
        <h1
          className="text-sm font-normal font-sm text-black cursor-pointer hover:text-[#FF5160] transition-all
        duration-200 ease-in-out font-jost"
        >
          Terms and Conditions
        </h1>
        <h1
          className="text-sm font-normal font-sm text-black cursor-pointer hover:text-[#FF5160] transition-all
        duration-200 ease-in-out font-jost"
        >
          Faq
        </h1>
        <h1
          className="text-sm font-normal font-sm text-black cursor-pointer hover:text-[#FF5160] transition-all
        duration-200 ease-in-out font-jost"
        >
          Privacy Policy
        </h1>
      </div>

      <h1 className="text-center font-jost text-xs ">
        Published with{" "}
        <span
          className="font-extrabold cursor-pointer hover:text-[#FF5160] transition-all
        duration-200 ease-in-out"
        >
          Ghost
        </span>{" "}
        &
        <span
          className=" font-extrabold cursor-pointer hover:text-[#FF5160] transition-all
        duration-200 ease-in-out"
        >
          {" "}
          EstudioPatagon
        </span>
      </h1>
    </div>
  );
};

export default Subscribe;
