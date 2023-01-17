import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import AnimationButton from "./AnimationButton";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 600) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTopFunc = () => {
    window.scroll({
      top: 1,
      left: 0,
      behavior: "smooth",
    });
  };

  const isShowBtn = showBtn ? "translate-y-0" : "translate-y-[100px]";

  return (
    <div className="fixed sm:bottom-[10px] sm:right-[10px] bottom-[5px] right-[5px] z-[1000]">
      <button
        onClick={scrollToTopFunc}
        className={`${isShowBtn} transition-all duration-200 ease-in-out `}
      >
        <AnimationButton data="w-[45px] h-[45px]" subData="bg-white">
          <IoIosArrowUp size={20} color="black" />
        </AnimationButton>
      </button>
    </div>
  );
};

export default ScrollToTop;
