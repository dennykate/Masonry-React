import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import AnimationButton from "./AnimationButton";

const AuthorCard = ({ data: { image, name, about } }) => {
  return (
    <div className="">
      <AnimationButton data={"w-full h-[230px] relative"} notRounded>
        <img
          src={image}
          className="w-full h-[228px] object-cover rounded-[5px]"
        />
        <div className=" absolute top-[8px] right-[8px] flex items-center gap-[5px] z-10">
          <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
            <BsTwitter size={14} color="#1DA1F2" />
          </div>
          <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
            <FaFacebookF size={14} color="#175BEB" />
          </div>
        </div>
        <div className="w-full h-[50px] absolute bottom-0 left-0 flex justify-center items-center">
          <div
            className="w-10/12 h-[40px] bg-white text-black text-[15px] font-extrabold text-center
           flex justify-center items-center rounded-full border-[1px] border-black"
          >
            {name}
          </div>
        </div>
      </AnimationButton>
      <div className="mt-[15px] text-center">
        <h1 className=" font-jost text-[13px] font-normal text-gray-700 tracking-[0.5px]">
          {about}
        </h1>
      </div>
    </div>
  );
};

export default AuthorCard;
