import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-orange px-2 py-1 font-bold tracking-wider text-white hover:bg-deep-orange-100"
      {...props}
    >
      {children}
    </button>
  );
};
