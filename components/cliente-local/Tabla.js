import axios from "axios";
import React, { useEffect, useState } from "react";

export const Tabla = ({ tablaa, setlistaActulizada }) => {
  const handleDelete = async (id_peticion) => {
    const requestInit = {
      method: "DELETE",
    };
    await axios.delete(
      `https://api-feria-web-production.up.railway.app/api/peticion/${id_peticion}`
    );
    //.then(res => res.text())
    //.then(res => console.log(res))
    setlistaActulizada(true);
  };
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, [])

  const id_usuario = user?.id_usuario;

  return (
    <div className="h-max bg-gray-100 p-10">
      <h1 className="mb-5 text-3xl font-semibold">Solicitud de compra</h1>
      <h2 className="mb-2 text-xl font-semibold">Frutas solicitadas</h2>
      <div className="overflow-auto rounded-lg shadow-sm ">
        <table className="mx-auto w-full">
          <thead className="border-b-2 border-gray-300 bg-green">
            <tr>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Nro de solicitud
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Tipo de frutas
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Kilogramos de fruta/verdura
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Estado del pedido
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Eliminar solicitud
              </th>
            </tr>
          </thead>
          
            {tablaa.map((tabla) => {
              return (
                <tbody className="divide-y divide-gray-100" key={tabla.id_peticion}>
                  {tabla.id_usuario == id_usuario && (
                    <tr key={tabla.id_peticion}>
                      <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                        <a className="font-bold text-lime-600 hover:underline">
                          {tabla.id_peticion}
                        </a>
                      </td>
                      <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                        {tabla.nombre}
                      </td>
                      <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                        {tabla.kilogramos}
                      </td>
                      <td className=" capitalize whitespace-nowrap p-3 text-sm text-gray-700">
                        {tabla.estado}
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(tabla.id_peticion)}
                          className="rounded border border-bordeaux bg-bordeaux py-1 px-2 font-bold text-white hover:bg-amber-600"
                        >
                          Eliminar solicitud
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};
