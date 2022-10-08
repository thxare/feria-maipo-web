import Image from "next/image";
import React, { useState } from "react";
import { ModalAndBackdrop } from "./ModalAndBackdrop";

export const Productos = ({
  id,
  nombre,
  calidad,
  precio,
  descripcion,
  img = "/papa.jpg",
  onDelete,
  onUpdate,
  setProductos,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <ModalAndBackdrop
          closeModal={() => setShow(!show)}
          setProductos={setProductos}
        />
      )}
      <div className="m-4 rounded-lg bg-white pb-6 shadow-lg" id={id}>
        <div className="flex flex-row justify-end">
          <button
            className="m-4 mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-md hover:bg-green"
            onClick={() => onUpdate(id, () => setShow(!show))}
          >
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
            <div className="mb-4 text-2xl capitalize">{nombre}</div>
            <div className="capitalize">
              <span className="font-bold">Calidad: </span>
              {calidad}
            </div>
            <div>
              <span className="font-bold">Precio: </span>${precio}
            </div>
            <div className="capitalize">
              <span className="font-bold">Descripción: </span> {descripcion}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
