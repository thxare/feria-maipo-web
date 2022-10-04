import React, { useEffect, useState } from "react";
import { ModalAndBackdrop } from "./ModalAndBackdrop";
import { Productos } from "./Productos";

export const MisProductos = ({
  productos,
  setProductos,
  onDelete,
  onUpdate,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    let scrollLeft;
    if (show == true) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        (window.onscroll = function () {
          window.scrollTo(scrollLeft, scrollTop);
        });
    } else {
      window.onscroll = function () {};
    }
  }, [show]);

  return (
    <>
      {show && (
        <ModalAndBackdrop
          closeModal={handleClick}
          productos={productos}
          setProductos={setProductos}
        />
      )}
      <div className="mx-auto mt-8 h-fit w-11/12">
        <div className="flex flex-row justify-between">
          <div className="text-2xl font-semibold">Mis Productos</div>
          <button
            className="m-2 mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-lg hover:bg-green"
            onClick={handleClick}
          >
            Ingresar Productos
          </button>
        </div>

        <div>
          <ul>
            {productos.map((producto, index) => {
              return (
                <li key={index}>
                  <Productos
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    id={producto.id}
                    nombre={producto.nombre_producto}
                    precio={producto.precio_producto}
                    calidad={producto.calidad_producto}
                    descripcion={producto.descripcion_producto}
                    img={producto.pathImage}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
