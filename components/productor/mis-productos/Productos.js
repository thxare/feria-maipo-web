import Image from "next/image";
import React, { useState } from "react";
import { ModalUpdateBackdrop } from "./ModalUpdateBackdrop";

export const Productos = ({
  id,
  nombre,
  calidad,
  precio,
  onDelete,
  onUpdate,
  descripcion,
  user,
  img = "/feria-logo.png",
}) => {
  const [show, setShow] = useState(false);


  return (
    <>
      {show && (
        <ModalUpdateBackdrop
          closeModal={() => setShow(!show)}
          onUpdate={onUpdate}
          id={id}
          user={user}
        />
      )}
      <div
        className="mx-auto flex flex-col rounded-lg bg-white pb-6 shadow-lg h-full justify-between"
        id={id}
      >
        <div className="order-1 flex flex-col justify-end">
          <button
            className="my-2 mx-5 rounded bg-green py-2 px-4 font-bold text-white shadow-md hover:bg-darkGreen"
            onClick={() => onUpdate(id, () => setShow(!show))}
          >
            Modificar Producto
          </button>
          <button
            className="mx-5 mb-2 rounded bg-red py-2 px-4 font-bold text-white shadow-md hover:bg-bordeaux"
            onClick={() => onDelete(id)}
          >
            Eliminar Producto
          </button>
        </div>
        <div className="flex flex-col">
          <div className="py-6 mx-auto">
            <Image src={img} width="250" height="250" alt=""/>
          </div>

          <div className="mb-2 w-full px-4">
            <div className="mb-4 text-2xl capitalize">{nombre}</div>
            <div className="capitalize">
              <span className="font-bold">Calidad: </span>
              {calidad}
            </div>
            <div>
              <span className="font-bold">Precio: </span>${precio} x kg
            </div>
            <div className="capitalize h-13 overflow-auto">
              <span className="font-bold">Descripción: </span> {descripcion}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};