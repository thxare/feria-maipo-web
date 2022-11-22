import React, { useContext, useEffect, useState } from "react";
import { ProductosContext } from "../ContextProducto";

export const ModalProductos = () => {
  const { productos } = useContext(ProductosContext);
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, []);

  const id_usuario = user?.id_usuario;
  return (
    <div>
      {productos.map((producto) => {
        const [checked, setChecked] = useState({
          id: producto.id_producto,
          checked: false,
        });

        let valorTxt = "";
        if (producto.id_calidad == 1) {
          valorTxt = "Extra";
        } else if (producto.id_calidad == 2) {
          valorTxt = "Primera";
        } else {
          valorTxt = "Segunda";
        }
        return (
          <>
            {producto.id_usuario == id_usuario && (
              <div
                className={
                  "mx-auto flex h-16 flex-row items-center gap-1 border-b-2 border-solid bg-gray-50 py-3 px-3 md:grid md:grid-cols-5"
                }
                key={producto.id_producto}
              >
                <div className="capitalize">
                  <span className="font-semibold">Nombre:</span>{" "}
                  {producto.nombre}
                </div>
                <div>
                  <span className="font-semibold">Precio Kg:</span>
                  {producto.precio}
                </div>
                <div className={`${checked ? "col-span-2" : "col-span-1"}`}>
                  <span className="font-semibold">Calidad:</span> {valorTxt}
                </div>
                <div
                  className={`${checked ? "hidden" : "block"}`}
                  id={producto.id_producto}
                >
                  <label className="font-semibold">Cantidad: </label>
                  <input
                    id={producto.id_producto}
                    type="number"
                    min="0"
                    max="9999"
                    placeholder="Kg"
                    className={
                      "focus:shadow-outline w-6/12 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
                    }
                  />
                </div>
                <div className="form-check mx-auto">
                  <input
                    id={producto.id_producto}
                    className={
                      "form-check-input float-left mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none" +
                      `${
                        checked
                          ? " border-gray-500 bg-white"
                          : " border-blue-600 bg-blue-600"
                      }`
                    }
                    type="checkbox"
                    onClick={() => setChecked(!checked)}
                  />
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
