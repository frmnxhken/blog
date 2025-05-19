import React from "react";
import { LIST_ARTICLE } from "@/shared/data";

const Hero = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-32">
      <div className="w-3/4 sm:w-2/3">
        <h1 className="font-bold text-4xl sm:text-7xl">
          Upgrade Your Knowledge In The Future
        </h1>
      </div>
      <div className="mt-12">
        <img
          className="aspect-4/3 sm:aspect-video object-cover rounded-lg"
          src={LIST_ARTICLE[0].thumbnail}
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

export default Hero;
