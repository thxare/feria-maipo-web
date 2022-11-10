import React from "react";

export const CardContainer = ({ children }) => {
  return (
    <div className="mx-auto mt-8 h-fit w-10/12">
      <div className="grid pb-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
