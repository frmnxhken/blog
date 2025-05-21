import React from "react";
import { SearchInput } from "@/features/article/ui";

const Hero = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-32">
      <div className="w-[80%] sm:w-3/5 mx-auto text-center">
        <h1 className="font-bold text-4xl sm:text-5xl">
          Upgrade Your Knowledge In The Future
        </h1>
        <div className="mt-12">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Hero;
