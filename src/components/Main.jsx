import React from "react";
import { contentData } from "../utils/data";
import AnimationButton from "./AnimationButton";
import ContentCard from "./ContentCard";

const Main = () => {
  return (
    <div className="sm:px-[70px] px-[10px] w-full pt-[20px] pb-[60px]">
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
        {contentData.map((data, index) => (
          <ContentCard key={index} data={data} />
        ))}
      </div>
      <div className="w-full mt-[60px] h-[60px] flex justify-center items-center gap-[20px]">
        <h1 className=" font-jost text-[#353A44] text-[13px] font-normal">
          Page 1 of 2
        </h1>
        <AnimationButton
          data={"w-[100px] h-[40px]"}
          subData="bg-[#FF4C60] text-center text-black text-[15px] font-extrabold"
        >
          Next
        </AnimationButton>
      </div>
    </div>
  );
};

export default Main;
