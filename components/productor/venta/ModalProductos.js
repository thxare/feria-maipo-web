import React from "react";

export const ModalProductos = () => {
  return (
    <div className="mx-auto grid h-auto grid-cols-4 items-center  gap-2 bg-slate-50 py-3 px-3 shadow">
      <div>
        <span className="font-semibold">Nombre:</span> Manzana
      </div>
      <div>
        <span className="font-semibold">Precio Kg:</span> $12300
      </div>
      <div>
        <span className="font-semibold">Calidad:</span> Extra
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
};
