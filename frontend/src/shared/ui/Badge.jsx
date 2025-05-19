import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="border border-black text-xs px-2 py-1 rounded-md w-fit">
      {text}
    </div>
  );
};

export default Badge;
