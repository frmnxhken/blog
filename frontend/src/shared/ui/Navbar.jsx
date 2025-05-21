import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Article",
      path: "/article",
    },
  ];

  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-full border-b-2 border-zinc-200">
        <div className="container max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-md sm:text-xl font-semibold">Blog Us</h2>
          </div>
          <button
            className="cursor-pointer outline-0"
            onClick={() => setActive(!active)}
          >
            {active ? <HiXMark size={32} /> : <HiBars2 size={32} />}
          </button>
        </div>
      </div>
      <div
        className={`${
          active ? "top-[80px]" : "top-[-100%]"
        } absolute w-full h-fit bg-white border-b-2 border-zinc-200`}
      >
        <div className="container max-w-[1200px] mx-auto p-6">
          <ul className="space-y-6">
            {navigations.map((nav, index) => (
              <li
                onClick={() => setActive(!active)}
                key={index}
                className="text-sm sm:text-md"
              >
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
