import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-950">
      <div className="container max-w-[1200px] mx-auto px-4 h-[80vh] py-24">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-sm sm:text-lg text-zinc-500 w-3/4 sm:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              accusamus quidem, obcaecati architecto quae modi nesciunt sit
              animi quas voluptatem!
            </p>
          </div>
          <div>
            <h1 className="text-4xl sm:text-7xl text-white font-semibold w-1/2">
              Thank You For Visiting
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
