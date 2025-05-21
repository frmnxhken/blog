import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseButton =
    "px-4 py-2 cursor-pointer rounded font-medium transition-colors duration-200 text-sm";

  const variants = {
    primary: "text-white bg-zinc-800 hover:bg-zinc-700",
    secondary:
      "bg-transparent border border-black text-black hover:bg-zinc-800 hover:text-white",
    light: "text-black bg-white border border-white hover:bg-slate-200",
  };

  return (
    <button
      className={`${baseButton} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
