import React from "react";
import { authorData } from "../utils/data";
import AuthorCard from "./AuthorCard";

const Authors = () => {
  return (
    <div className="sm:px-[70px] px-[10px] w-full pb-[100px]">
      <div
        className="w-[200px] h-[45px] flex justify-center items-center font-jost font-extrabold text-[18px]
       text-black bg-white rounded-full border-[1px] border-black mb-[40px]"
      >
        Meet The Authors
      </div>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {authorData.map((data, index) => (
          <AuthorCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
