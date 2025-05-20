import React from "react";

const Header = ({ thumbnail, title, created_at }) => {
  return (
    <div className="border-b-2 border-zinc-200 pb-12">
      {thumbnail && (
        <img
          src={"http://127.0.0.1:8000/" + thumbnail}
          alt="thumbnail"
          className="object-cover w-full rounded-xl mb-8"
        />
      )}
      <h1 className="font-bold text-2xl sm:text-5xl w-full mb-8 sm:mb-12">
        {title}
      </h1>
      <p className="text-md text-zinc-500">{created_at}</p>
    </div>
  );
};

export default Header;
