import React from "react";

export const TablaTransportes = ({ tabla }) => {
  return (
    <div className="mt-10 h-max bg-gray-100 p-10 md:mx-16">
      <div className="overflow-auto rounded-lg shadow-sm ">
        <table className="mx-auto w-9/12">
          <thead className="border-b-2 border-gray-200 bg-green" data-testid="headerTabla">
            <tr >
              <th
                className="border-x-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white"
                data-testid="thId"
              >
                ID Transporte
              </th>
              <th
                className="border-r-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white"
                data-testid="thPatente"
              >
                Patente
              </th>
              <th
                className="border-r-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white"
                data-testid="thTamano"
              >
                Tamaño
              </th>
              <th
                className="border-r-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white"
                data-testid="thCapacidad"
              >
                Capacidad de Carga
              </th>
              <th className="border-r-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white">
                Refrigeración
              </th>
              <th
                className="border-r-white-800 w-20 border-2 border-t-0 p-3 text-center text-base font-bold tracking-wide text-white"
                data-testid="thIdTipo"
              >
                ID Tipo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100" data-testid="resultTable">
            {tabla?.map((transporte) => (
              <tr key={transporte.id_transporte}>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700" data-testid="resultId">
                  <a className="font-bold text-lime-600 hover:underline">
                    {transporte.id_transporte}
                  </a>
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700" data-testid="resulPatente">
                  {transporte.patente}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {transporte.tamano}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {transporte.capacidad_carga}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {transporte.refrigeracion}
                </td>
                <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                  {transporte.id_tipo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
