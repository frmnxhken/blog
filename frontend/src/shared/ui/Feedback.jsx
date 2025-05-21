import React from "react";

const Feedback = ({ text, type = "danger" }) => {
  const COLOR_MAP = {
    success: "text-green-500",
    danger: "text-rose-500",
  };
  return (
    <div className="p-2">
      <p className={`text-xs ${COLOR_MAP[type]}`}>{text}</p>
    </div>
  );
};

export default Feedback;
