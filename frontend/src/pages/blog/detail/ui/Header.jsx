import React from "react";

const Header = ({ thumbnail, title, date }) => {
  return (
    <div className="border-b-2 border-zinc-200 pb-12">
      {thumbnail && (
        <img
          src={thumbnail}
          alt="thumbnail"
          className="object-cover w-full rounded-xl mb-8"
        />
      )}
      <h1 className="font-bold text-2xl sm:text-4xl w-full mb-8 sm:mb-12">
        {title}
      </h1>
      <p className="text-md text-zinc-500">{date}</p>
    </div>
  );
};

export default Header;
