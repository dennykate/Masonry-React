import React from "react";

import Logo from "../assets/logo.png";
import FollowMe from "./FollowMe";
import LastestArticles from "./LastestArticles";
import { AboutHeader } from "./StyleComponents";
import TagCloud from "./TagCloud";

const About = () => {
  return (
    <div className="w-full bg-[#FFFACD] border-t-[1px] border-black sm:px-[20px] px-[10px]">
      <div className="w-full -translate-y-[20px] border-b-[1px] border-black pb-[50px]">
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[20px] gap-[40px]">
          <div>
            <div className="w-full h-[40px] mb-[30px]"></div>
            <div>
              <img src={Logo} alt="logo" className="w-[130px] mb-[25px]" />
              <h1 className="text-[13px] font-jost text-[#353A51] mb-[22px]">
                A super modern theme following the latest trends with premium
                Membership and fully compatible with <b>Ghost</b> .
              </h1>
              <h1 className="text-[13px] font-jost text-[#353A51] mb-[22px]">
                Check more themes like this on{" "}
                <b
                  className=" hover:text-[#FF4C60] transition-all duration-200
               ease-in-out cursor-pointer"
                >
                  estudiopatagon.com
                </b>
              </h1>
            </div>
          </div>
          <LastestArticles />
          <TagCloud />
          <FollowMe />
        </div>
      </div>
    </div>
  );
};

export default About;
