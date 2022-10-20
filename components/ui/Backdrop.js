import React from "react";

export const Backdrop = ({ closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-40 min-h-full w-full bg-black bg-opacity-75"
      onClick={closeModal}
    />
  );
};
