import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../login/ContextUser";

import { ProductosContext } from "../ContextProducto";
import { ModalAndBackdrop } from "./ModalAndBackdrop";
import { Productos } from "./Productos";

export const MisProductos = ({ onDelete, onUpdate }) => {
  const { productos, setProductos } = useContext(ProductosContext);
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, []);

  const id_usuario = user?.id_usuario;

  return (
    <>
      {show && (
        <ModalAndBackdrop
          user={user}
          closeModal={handleClick}
          productos={productos}
          setProductos={setProductos}
        />
      )}
      <div className="mx-auto mt-8 h-fit w-10/12">
        <div className="mx-3 flex flex-col justify-between sm:mx-0 sm:flex-row">
          <h1 className="text-3xl font-semibold">Mis Productos</h1>
          <button
            className="m-2 mr-1 rounded bg-green py-2 px-4 font-bold text-white shadow-lg hover:bg-darkGreen"
            onClick={handleClick}
          >
            Ingresar Productos
          </button>
        </div>

        <div className="pb-4">
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

              return (
                <li key={index}>
                  {producto.id_usuario == id_usuario && (
                    <Productos
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      user={user}
                      setProductos={setProductos}
                      id={producto.id_producto}
                      nombre={producto.nombre}
                      precio={producto.precio}
                      calidad={valorTxt}
                      descripcion={producto.observaciones}
                      img={producto.imagen}
                      productos={productos}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};