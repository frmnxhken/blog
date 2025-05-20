import React from "react";

const Loading = ({ text = "Loading...", full = false, size = "md" }) => {
  const sizeMap = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-10 w-10 border-[6px]",
  };

  return (
    <div
      className={`flex items-center justify-center py-6  ${
        full ? "h-[60vh]" : ""
      }`}
    >
      <div className="flex flex-col items-center space-y-2">
        <div
          className={`animate-spin rounded-full border-t-transparent border--500 ${sizeMap[size]}`}
        />
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Loading;
