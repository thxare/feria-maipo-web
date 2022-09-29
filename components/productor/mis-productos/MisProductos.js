import React from "react";
import { Productos } from "./Productos";

export const MisProductos = () => {
  return (
    <>
      <div className="mx-auto mt-8 h-fit w-11/12">
        <div className="flex flex-row justify-between">
            <div className="text-2xl font-semibold">
                Mis Productos
            </div>
          <button className="m-2 mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white hover:bg-green shadow-lg">
            Ingresar Productos
          </button>
        </div>

        <div>
          <Productos nombre="Papas" />
          <Productos nombre="Tomates" />
          <Productos nombre="Duraznos" />
        </div>
      </div>
    </>
  );
};
