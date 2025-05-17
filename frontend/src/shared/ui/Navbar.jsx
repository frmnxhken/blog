import React from "react";
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-zinc-200">
      <div className="container max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Blog Us</h2>
        </div>
        <HiBars2 size={32} />
      </div>
    </div>
  );
};

export default Navbar;
