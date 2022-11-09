import React from "react";

import { CardCliente } from "./CardCliente";
export const Cards = () => {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <div className="grid pb-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <CardCliente />
          <CardCliente />
          <CardCliente />
          <CardCliente />
        </div>
      </div>
    </>
  );
};
