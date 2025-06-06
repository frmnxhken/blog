import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";

const Card = ({ title, thumbnail, date, slug, tags }) => {
  const navigate = useNavigate();

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
            {tags.map((tag, index) => (
              <Badge text={tag} key={index} />
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold capitalize">{title}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-zinc-500">{date}</p>
          <HiArrowUpRight
            onClick={() => navigate("/article/" + slug)}
            className="cursor-pointer"
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
