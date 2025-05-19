import React from "react";
import { LIST_ARTICLE } from "@/shared/data";

const Header = () => {
  return (
    <div className="border-b-2 border-zinc-200 pb-12">
      <img
        src={LIST_ARTICLE[0].thumbnail}
        alt="thumbnail"
        className="object-cover w-full rounded-xl mb-8"
      />
      <h1 className="font-bold text-2xl sm:text-5xl w-full mb-8 sm:mb-12">
        {LIST_ARTICLE[0].title}
      </h1>
      <p className="text-md text-zinc-500">{LIST_ARTICLE[0].date}</p>
    </div>
  );
};

export default Header;
