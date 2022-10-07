import React from "react";

export const Tabla = ({ tablaa }) => {
  return (
    <div className="h-max bg-gray-100 p-10">
      <h1 className="mb-2 text-xl font-bold">Solicitud de compra</h1>
      <h2 className="mb-2 text-xl font-semibold">Frutas solicitadas</h2>
      <div className="overflow-auto rounded-lg shadow-sm ">
        <table className="mx-auto w-9/12">
          <thead className="border-b-2 border-gray-200 bg-green">
            <tr>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Nro de solicitud
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Tipo de frutas
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Calidad del producto
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Kilogramos de fruta/verdura
              </th>
              <th className="w-20 p-3 text-left text-base font-bold tracking-wide text-white">
                Estado del pedido
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tablaa.map((tabla) => (
              <tr key={tabla}>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  <a className="font-bold text-lime-600 hover:underline">
                    {tabla.id_peticion}
                  </a>
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {tabla.nombre}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {tabla.calidad}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {tabla.kilogramos}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {tabla.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabla;
