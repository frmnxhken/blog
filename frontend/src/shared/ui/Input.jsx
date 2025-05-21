import React from "react";
import Feedback from "./Feedback";

const Input = ({ label, placeholder, className = "", feedback, ...props }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm text-zinc-700 font-medium">{label}</label>
      )}
      <input
        className="w-full bg-slate-100 text-zinc-800 px-4 py-2 rounded-lg text-sm focus:outline-none"
        placeholder={placeholder}
        {...props}
      />
      {feedback && <Feedback text={feedback} />}
    </div>
  );
};

export default Input;
