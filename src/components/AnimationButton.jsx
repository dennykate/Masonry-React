import React from "react";

const AnimationButton = ({ data, children, subData, notRounded }) => {
  const isNotRounded = !notRounded ? "rounded-full" : "rounded-[5px]";
  return (
    <div className={`${data} group relative ${isNotRounded}`}>
      <div
        className={`w-full h-full  bg-black absolute top-0 left-0 ${isNotRounded}`}
      ></div>
      <div
        className={`w-full h-full flex justify-center items-center font-outfit font-extrabold 
        cursor-pointer group-hover:-translate-y-[3px] group-hover:-translate-x-[3px] transition-all
        duration-200 ease-in-out border-[1px] border-black group-hover:bg-white  
        absolute top-0 ${subData} ${isNotRounded}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimationButton;
