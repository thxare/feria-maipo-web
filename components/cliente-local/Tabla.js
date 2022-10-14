import React from "react";
import axios from 'axios'

export const Tabla = ({
  tablaa,
  setlistaActulizada,
}) => {
  const handleDelete = async (id_peticion) => {
    const requestInit = {
      method: "DELETE",
    };
    await axios.delete(`https://api-feria-web-production.up.railway.app/api/peticion/${id_peticion}`)
    //.then(res => res.text())
    //.then(res => console.log(res))
    setlistaActulizada(true);
  };
  
  return (
    <div className="h-max bg-gray-100 p-10">
      <h1 className="mb-2 text-xl font-bold">Solicitud de compra</h1>
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
          <tbody className="divide-y divide-gray-100">
            {tablaa.map((tabla) => (
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
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {tabla.estado}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(tabla.id_peticion)}
                    className="rounded border border-bordeaux bg-bordeaux py-1 px-2 font-bold text-white hover:bg-amber-600"
                  >
                    Eliminar solicitud
                  </button>
                  {/* <div className=" fixed inset-0 flex items-center justify-center bg-black backdrop:opacity-50">
                    <div className="rounded-lg bg-gray-200">
                      <div className="flex items-center justify-between ">
                        <h4 className="text-lg font-bold">
                          ¿Desea eliminar permanentemente?
                        </h4>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="mt-2">
                        <p>Este producto sera eliminado permanentemente</p>
                      </div>
                      <div className="mt-3 flex justify-end space-x-3">
                        <button className="rounded bg-gray-300 px-3 py-1">
                          Cancelar
                        </button>
                        <button className="rounded bg-bordeaux px-3 py-1">
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

