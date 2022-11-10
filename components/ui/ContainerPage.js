import React from "react";

export const ContainerPage = ({ children, titulo }) => {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="mb-2 px-10 pt-5 text-3xl font-semibold">{titulo}</h1>
      <div className="h-max bg-gray-200">{children}</div>
    </div>
  );
};
