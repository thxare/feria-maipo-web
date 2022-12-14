import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({
  ganador,
  fechaTermino,
  fechaInicio,
  id,
  estado,
  observaciones,
}) => {
  const dateInicio = new Date(fechaInicio);
  const dateTermino = new Date(fechaTermino);

  fechaInicio = dateInicio.toLocaleDateString();
  fechaTermino = dateTermino.toLocaleDateString();

  return (
    <div className="col-span-8 mx-auto overflow-hidden rounded-lg bg-white pt-4 text-center shadow-lg md:col-span-4 xl:col-span-2">
      <Image
        className="w-full"
        src="/feria-logo.png"
        alt="Imagen"
        width={200}
        height={200}
      />
      <div className="px-6 py-4">
        <h2 className="mb-2 text-left text-xl font-bold" data-testid="tituloSubasta">Subasta {id}</h2>
        <p
          className="text-justify text-base font-semibold text-gray-700"
          data-testid="fechaInicioTransportista"
        >
          Fecha Inicio:{" "}
          <span className="font-normal"  data-testid="fechaInispan">
            {fechaInicio}
          </span>
        </p>
        <p
          className="text-justify text-base font-semibold text-gray-700"
          data-testid="fechaTermino"
        >
          Fecha Término: <span className="font-normal" data-testid="fechaTerminospan">{fechaTermino}</span>
        </p>
        <p
          className="text-justify text-base font-semibold text-gray-700"
          data-testid="estadoCard"
        >
          Estado:{" "}
          <span
            className={`font-bold capitalize ${
              estado.toString().toLowerCase() === "activa"
                ? "text-green"
                : "text-red"
            }`}
            data-testid="estadoSpan"
          >
            {estado}
          </span>
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 text-center">
        <Link href={`/transportista/subasta/${id}`}>
          <a className="mb-2 rounded-md bg-orange py-2 px-4 font-bold text-white transition duration-150 ease-in-out hover:bg-orangeSmooth">
            Ingresar
          </a>
        </Link>
      </div>
    </div>
  );
};
