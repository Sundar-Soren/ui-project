import React from "react";
import { IoMdTrendingUp } from "react-icons/io";

const Card = ({ header }: { header: string }) => {
  return (
    <div className="p-4 border border-gray-100/30 shadow-xl max-w-full md:max-w-52 lg:max-w-60 xl:max-w-80 rounded-xl bg-[#40423F]">
      <p className="text-white/50">Last Practice Linear etc etc 20/6/2023</p>
      <IoMdTrendingUp className="text-5xl md:text-7xl" />
      <h2 className="text-2xl md:text-3xl">{header}</h2>
      <p className="leading-5 md:text-sm">
        a description of the above parameter goes here
      </p>
    </div>
  );
};

export default Card;
