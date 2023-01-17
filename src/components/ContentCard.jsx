import React from "react";
import { BsHexagonFill, BsCircleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

import ContentImage from "../assets/content-1.jpg";
import Profile from "../assets/profile.webp";

import AnimationButton from "./AnimationButton";

const ContentCard = ({
  data: {
    bg,
    thumbnail,
    date,
    minute,
    description,
    author,
    buttonText,
    hexagonColor,
    category,
  },
}) => {
  return (
    <div className={`p-[20px] rounded-[12px] ${bg}`}>
      <div className="w-full h-[300px] rounded-[12px] border-[1px] border-black overflow-hidden relative cursor-pointer">
        <img
          src={thumbnail}
          alt="content-image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[15px] w-full px-[10px] flex justify-between items-center">
          <AnimationButton
            data={"w-[140px] h-[36px]"}
            subData={"bg-white text-black gap-[10px] text-[13px]"}
          >
            <BsHexagonFill size={11} color={hexagonColor} /> {category}
          </AnimationButton>
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-black">
            <AiFillMessage size={16} color="white" />
          </div>
        </div>
        <div className="absolute bottom-[15px] w-full">
          <div className="w-full h-[80px] px-[15px]">
            <AnimationButton
              data={"w-full h-full rounded-[5px]"}
              subData="bg-white text-black text-[16px] text-center px-[10px]"
              notRounded
            >
              {buttonText}
            </AnimationButton>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full py-[15px] flex items-center justify-center gap-[12px]">
          <h1 className=" font-jost font-semibold text-[13px] text-[#424851]">
            {date}
          </h1>
          <BsCircleFill size={6} color="#FF4C60" />
          <h1 className=" font-jost font-semibold text-[13px] text-[#424851]">
            {minute} min read
          </h1>
        </div>
        <div className="w-full px-[20px] text-center">
          <h1 className=" font-jost text-[14px] text-black font-light tracking-wide">
            {description}
          </h1>
        </div>
        <div className=" mt-[30px] w-full flex justify-center items-center flex-col">
          <div className="flex items-center gap-[10px]">
            <AnimationButton data={"w-[40px] h-[40px]"}>
              <img
                src={Profile}
                alt=""
                className="w-[102%] h-[102%] rounded-full "
              />
            </AnimationButton>
            <h1 className=" font-jost font-semibold text-[13px] text-[#424851]">
              {author}
            </h1>
          </div>
          <AnimationButton
            data={"w-[160px] h-[35px]"}
            subData="bg-white text-black text-[14px]"
          >
            Continue Reading
          </AnimationButton>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
