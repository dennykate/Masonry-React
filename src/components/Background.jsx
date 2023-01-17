import React from "react";
import BackgroundImage from "../assets/background-decoration.svg";

const Background = () => {
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen md:px-[50px] px-[5px] select-none bg-primary">
      <div className="w-full h-full relative mr-[30px]">
        <img src={BackgroundImage} alt="background" className=" h-screen" />
        <img
          src={BackgroundImage}
          alt="background"
          className=" h-screen absolute right-0 top-0 md:block hidden"
        />
      </div>
    </div>
  );
};

export default Background;
