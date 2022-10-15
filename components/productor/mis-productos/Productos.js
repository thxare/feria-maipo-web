import Image from "next/image";
import React, { useContext, useState } from "react";
import { ProductosContext } from "../Context";
import { ModalUpdateBackdrop } from "./ModalUpdateBackdrop";

export const Productos = ({
  id,
  nombre,
  calidad,
  precio,
  onDelete,
  onUpdate,
  descripcion,
  img = "/papa.jpg",
}) => {
  const [show, setShow] = useState(false);


  return (
    <>
      {show && (
        <ModalUpdateBackdrop
          closeModal={() => setShow(!show)}
          onUpdate={onUpdate}
          id={id}
        />
      )}
      <div
        className="m-4 mx-auto flex flex-col rounded-lg bg-white pb-6 shadow-lg"
        id={id}
      >
        <div className="order-1 flex flex-col justify-end sm:order-none sm:flex-row">
          <button
            className="my-2 mx-5 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-md hover:bg-green sm:m-4 sm:mr-1"
            onClick={() => onUpdate(id, () => setShow(!show))}
          >
            Modificar Producto
          </button>
          <button
            className="mx-5 mb-2 rounded bg-bordeaux py-2 px-4 font-bold text-white shadow-md hover:bg-red sm:m-4 sm:ml-2"
            onClick={() => onDelete(id)}
          >
            Eliminar Producto
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mx-auto py-6 sm:mx-8 sm:py-0 sm:pb-6">
            <Image src={img} width="250" height="250" />
          </div>

          <div className="mb-2 w-full px-4 sm:w-9/12">
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
