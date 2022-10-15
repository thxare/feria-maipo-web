import React, { useContext } from "react";
import { ProductosContext } from "../Context";

export const ModalProductos = () => {
  const { productos } = useContext(ProductosContext);
  console.log(productos);
  return (
    <div>
      {productos.map((producto) => {
        const valorTxt = "";
        if (producto.id_calidad == 1) {
          valorTxt = "Extra";
        } else if (producto.id_calidad == 2) {
          valorTxt = "Primera";
        } else {
          valorTxt = "Segunda";
        }
        return (
          <div className="mx-auto grid h-auto grid-cols-4 items-center  gap-2 bg-slate-50 py-3 px-3 shadow">
            <div className="capitalize">
              <span className="font-semibold">Nombre:</span> {producto.nombre}
            </div>
            <div>
              <span className="font-semibold">Precio Kg:</span>
              {producto.precio}
            </div>
            <div>
              <span className="font-semibold">Calidad:</span> {valorTxt}
            </div>
            <div class="">
              <label className="font-semibold">Cantidad: </label>
              <input
                type="number"
                min="0"
                max="9999"
                placeholder="Kg"
                className="focus:shadow-outline w-6/12 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
