import React from "react";

export const StepNumber = ({ step }) => {
  return (
    <p className="flex mb-2 bg-orange rounded-2xl h-fit px-2 font-bold text-white mr-3">
      {step}
    </p>
  );
};
