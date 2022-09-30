import React from "react";

export const Backdrop = ({ closeModal, children }) => {
  return (
    <div
      className="fixed inset-0 z-10 min-h-full w-full bg-black bg-opacity-75"
      onClick={closeModal}
    />
  );
};
