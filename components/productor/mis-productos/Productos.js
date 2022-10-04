import Image from "next/image";
import React from "react";

export const Productos = ({
  id,
  nombre,
  calidad,
  precio,
  descripcion,
  img = "/papa.jpg",
  onDelete,
}) => {
  return (
    <div className="m-4 rounded-lg bg-white pb-6 shadow-lg" id={id}>
      <div className="flex flex-row justify-end">
        <button className="m-4 mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-md hover:bg-green">
          Modificar Producto
        </button>
        <button
          className="m-4 ml-2 rounded bg-bordeaux py-2 px-4 font-bold text-white shadow-md hover:bg-red"
          onClick={() => onDelete(id)}
        >
          Eliminar Producto
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mx-8 pb-6">
          <Image src={img} width="200" height="200" />
        </div>

        <div className="w-9/12 px-4">
          <div className="text-2xl">{nombre}</div>
          <div>
            <span className="font-bold">Calidad: </span>
            {calidad}
          </div>
          <div>
            <span className="font-bold">Precio: </span>${precio}
          </div>
          <div>
            <span className="font-bold">Descripción: </span> {descripcion}
          </div>
        </div>
      </div>
    </div>
  );
};
