import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Productos } from "./Productos";

export const Modal = () => {
  return (
    <>

      <Backdrop />
      <div className="z-1 h-1/2 w-1/2 bg-white"></div>
    </>
  );
};
