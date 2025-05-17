import React from "react";

const Tab = () => {
  return (
    <div className="mt-6 border-b-1 border-zinc-200">
      <ul className="flex gap-x-6">
        <li className="text-sm border-b-2 border-black p-2">Published</li>
        <li className="text-sm text-zinc-400 p-2">Drafted</li>
      </ul>
    </div>
  );
};

export default Tab;
