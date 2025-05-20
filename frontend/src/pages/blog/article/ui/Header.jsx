import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end-safe gap-6">
      <h1 className="text-4xl sm:text-6xl font-bold w-3/4">Articles</h1>
      <p className="text-sm sm:text-md text-zinc-500 text-left w-full sm:w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iusto
        ab vel provident veniam numquam fuga, alias aliquam tempore quia.
      </p>
    </div>
  );
};

export default Header;
