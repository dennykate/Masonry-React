import React from "react";

import AnimationButton from "./AnimationButton";
import { AboutHeader } from "./StyleComponents";

import Content1 from "../assets/content-1.jpg";
import BgDecoration from "../assets/number-decoration.svg";
import { lastestArticlesData } from "../utils/data";

const LastestArticles = () => {
  return (
    <div className="h-auto">
      <AboutHeader>Lastest Articles</AboutHeader>
      <div className="w-[80%] h-auto flex flex-col gap-[16px]">
        {lastestArticlesData.map(({ image, name, date }, index) => (
          <div key={index} className="w-full flex items-start gap-[10px]">
            <AnimationButton data="w-[80px] h-[80px] relative" notRounded>
              <img
                src={image}
                alt="articles"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-[13px] -left-[13px] w-[30px] h-[30px]">
                <div className="w-full h-full flex justify-center items-center relatve top-0 left-0">
                  <img
                    src={BgDecoration}
                    alt="number-decoration"
                    className="w-full h-full"
                  />
                  <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center">
                    <h1 className=" font-jost text-[13px] font-extrabold text-black">
                      {index + 1}
                    </h1>
                  </div>
                </div>
              </div>
            </AnimationButton>

            <div className="w-[130px]">
              <h1
                className=" font-jost text-[14px] font-bold text-black hover:underline cursor-pointer transition-all
            duration-200 ease-in-out"
              >
                {name}
              </h1>
              <h1 className="font-jost text-[11px] text-gray-600 font-normal mt-[5px]">
                {date}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastestArticles;
