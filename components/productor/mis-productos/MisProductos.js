import React, { useEffect, useState } from "react";
import { ModalAndBackdrop } from "./ModalAndBackdrop";
import { Productos } from "./Productos";

export const MisProductos = ({
  productos,
  setProductos,
  onDelete,
  onUpdate,
  onSubmit
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
          valueText="Guardar"
          onSubmit={onSubmit}
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
              const valorTxt = "";
              if (producto.id_calidad == 1) {
                valorTxt = "Extra";
              } else if (producto.id_calidad == 2) {
                valorTxt = "Primera";
              } else {
                valorTxt = "Segunda";
              }
              console.log(productos)
              return (
                <li key={index}>
                  <Productos
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    setProductos={setProductos}
                    id={producto.id_producto}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    calidad={valorTxt}
                    descripcion={producto.observaciones}
                    img={producto.imagen}
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
