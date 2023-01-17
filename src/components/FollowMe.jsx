import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

import AnimationButton from "./AnimationButton";
import { AboutHeader } from "./StyleComponents";

const FollowMe = () => {
  return (
    <div className="h-auto">
      <AboutHeader>Follow Me!</AboutHeader>
      <div className="w-[80%] flex flex-col gap-[15px]">
        <div className="flex items-center gap-[10px] group cursor-pointer">
          <AnimationButton
            data="w-[40px] h-[40px]"
            subData="bg-white flex justify-center items-center"
          >
            <FaFacebookF size={15} color="#175BEB" />
          </AnimationButton>
          <h1 className="font-jost font-bold text-[18px]">Facebook</h1>
        </div>

        <div className="flex items-center gap-[10px] group cursor-pointer">
          <AnimationButton
            data="w-[40px] h-[40px]"
            subData="bg-white flex justify-center items-center"
          >
            <FaTwitter size={15} color="#1DA1F2" />
          </AnimationButton>
          <h1 className="font-jost font-bold text-[18px]">Twitter</h1>
        </div>

        <div className="flex items-center gap-[10px] group cursor-pointer">
          <AnimationButton
            data="w-[40px] h-[40px]"
            subData="bg-white flex justify-center items-center"
          >
            <FaInstagram size={15} color="#FF0000" />
          </AnimationButton>
          <h1 className="font-jost font-bold text-[18px]">Instagram</h1>
        </div>

        <div className="flex items-center gap-[10px] group cursor-pointer">
          <AnimationButton
            data="w-[40px] h-[40px]"
            subData="bg-white flex justify-center items-center"
          >
            <FaRss size={15} color="#F59F23" />
          </AnimationButton>
          <h1 className="font-jost font-bold text-[18px]">Rss</h1>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
