import React from "react";
import { BsFillHexagonFill } from "react-icons/bs";

import AnimationButton from "./AnimationButton";
import { AboutHeader } from "./StyleComponents";

const TagCloud = () => {
  return (
    <div className="h-auto">
      <AboutHeader>Tag Cloud</AboutHeader>
      <div className="w-[80%] h-auto flex flex-col gap-[10px]">
        <AnimationButton
          data="w-[130px] h-[30px]"
          subData="bg-white text-[#333333] text-[12px] font-normal"
        >
          <div className="flex items-center gap-[7px]">
            <BsFillHexagonFill size={10} color="#1DD7C2" />
            Getting Start
          </div>
        </AnimationButton>

        <div className="flex items-center gap-[10px]">
          <AnimationButton
            data="w-[90px] h-[30px]"
            subData="bg-white text-[#333333] text-[12px] font-normal"
          >
            <div className="flex items-center gap-[7px]">
              <BsFillHexagonFill size={10} color="#83EA6C" />
              Health
            </div>
          </AnimationButton>
          <AnimationButton
            data="w-[90px] h-[30px]"
            subData="bg-white text-[#333333] text-[12px] font-normal"
          >
            <div className="flex items-center gap-[7px]">
              <BsFillHexagonFill size={10} color="#FFAEAB" />
              Life Style
            </div>
          </AnimationButton>
        </div>

        <AnimationButton
          data="w-[90px] h-[30px]"
          subData="bg-white text-[#333333] text-[12px] font-normal"
        >
          <div className="flex items-center gap-[7px]">
            <BsFillHexagonFill size={10} color="#FFCF00" />
            Music
          </div>
        </AnimationButton>

        <AnimationButton
          data="w-[120px] h-[30px]"
          subData="bg-white text-[#333333] text-[12px] font-normal"
        >
          <div className="flex items-center gap-[7px]">
            <BsFillHexagonFill size={10} color="#85B2F4" />
            Technology
          </div>
        </AnimationButton>

        <AnimationButton
          data="w-[95px] h-[30px]"
          subData="bg-white text-[#333333] text-[12px] font-normal"
        >
          <div className="flex items-center gap-[7px]">
            <BsFillHexagonFill size={10} color="#C5C5FE" />
            Travel
          </div>
        </AnimationButton>
      </div>
    </div>
  );
};

export default TagCloud;
