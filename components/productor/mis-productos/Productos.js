import Image from "next/image";
import React, { useState } from "react";
import { ModalUpdateBackdrop } from "./ModalUpdateBackdrop";

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
  productos
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <ModalUpdateBackdrop
          closeModal={() => setShow(!show)}
          setProductos={setProductos}
          onUpdate={onUpdate}
          productos={productos}
          id={id}
        />
      )}
      <div className="m-4 rounded-lg bg-white pb-6 shadow-lg flex flex-col mx-auto" id={id}>
        <div className="flex sm:flex-row justify-end flex-col order-1 sm:order-none">
          <button
            className="sm:m-4 my-2 mx-5 sm:mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-md hover:bg-green"
            onClick={() => onUpdate(id, () => setShow(!show))}
          >
            Modificar Producto
          </button>
          <button
            className="sm:m-4 mb-2 mx-5 sm:ml-2 rounded bg-bordeaux py-2 px-4 font-bold text-white shadow-md hover:bg-red"
            onClick={() => onDelete(id)}
          >
            Eliminar Producto
          </button>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="sm:mx-8 py-6 sm:pb-6 sm:py-0 mx-auto">
            <Image src={img} width="250" height="250" />
          </div>

          <div className="sm:w-9/12 px-4 w-full mb-2">
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
