import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Badge from "./Badge";

const Card = ({ title, thumbnail, date }) => {
  return (
    <div className="border border-zinc-200 p-1 rounded-lg hover:bg-zinc-100">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="aspect-video object-cover rounded-md"
      />
      <div className="flex flex-col justify-between p-6 min-h-[250px]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge text="Design" />
            <Badge text="Mobile" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-500">{date}</p>
          <HiArrowUpRight className="cursor-pointer" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
