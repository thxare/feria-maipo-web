import React, { useState } from "react";
import { ModalParticiparBackdrop } from "./venta/ModalParticiparBackdrop";
import { SolicitudCard } from "./venta/SolicitudCard";

export const Ventas = ({ tipo }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <div className="mx-auto mt-8 h-fit w-10/12">
      <div className="mx-3 flex flex-col justify-between sm:mx-0 sm:flex-row">
        <div className="text-2xl font-semibold">Venta {tipo}</div>
      </div>
      {show && <ModalParticiparBackdrop closeModal={handleClick} />}
      <div className="grid grid-cols-3">
        <SolicitudCard handleClick={handleClick} />
      </div>
    </div>
  );
};
