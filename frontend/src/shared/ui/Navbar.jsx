import React from "react";
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full border-b-2 border-zinc-800">
      <div className="container max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl text-white">Imersa</h2>
        </div>
        <HiBars2 color="white" size={32} />
      </div>
    </div>
  );
};

export default Navbar;
