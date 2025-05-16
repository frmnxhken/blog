import React from "react";
import { LIST_ARTICLE } from "@/shared/data";

const Header = () => {
  return (
    <div className="py-24">
      <div className="flex justify-between items-end-safe">
        <h1 className="font-semibold text-6xl w-3/4">
          {LIST_ARTICLE[0].title}
        </h1>
        <p className="text-md text-zinc-500">{LIST_ARTICLE[0].date}</p>
      </div>
      <img
        src={LIST_ARTICLE[0].thumbnail}
        alt="thumbnail"
        className="object-cover aspect-4/3 rounded-xl mt-16"
      />
    </div>
  );
};

export default Header;
