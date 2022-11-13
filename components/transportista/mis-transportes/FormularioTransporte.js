import axios from "axios";
import React, { useEffect, useState } from "react";

// Aquí necesito al usuario, por eso se lo mando desde la página mitransporte
// ya que necesito el id_usuario

export const FormularioTransporte = ({ setListaActulizada, user }) => {
  const [transporte, setTransporte] = useState({
    patente: "",
    tamano: "",
    id_usuario: user?.id_usuario,
    capacidad_carga: 0,
    refrigeracion: "",
    id_tipo: 0,
  });

  const handleChange = (e) => {
    setTransporte({
      ...transporte,
      [e.target.name]:
        e.target.name !== "capacidad_carga" && e.target.name !== "id_tipo"
          ? e.target.value
          : parseInt(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      transporte.capacidad_carga === 0 ||
      transporte.id_tipo === 0 ||
      transporte.patente === "" ||
      transporte.refrigeracion === ""
    ) {
      return;
    }

    const respuesta = await axios.post(
      "https://api-feria-web-production.up.railway.app/api/transportes",
      {
        patente: transporte.patente,
        tamano: transporte.tamano,
        id_usuario: user?.id_usuario,
        capacidad_carga: transporte.capacidad_carga,
        refrigeracion: transporte.refrigeracion,
        id_tipo: transporte.id_tipo,
      }
    );

    setTransporte({
      patente: "",
      tamano: "",
      id_usuario: user?.id_usuario,
      capacidad_carga: 0,
      refrigeracion: "",
      id_tipo: 0,
    });
    setListaActulizada(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 bg-gray-100 p-10 md:mx-16" data-testid="formTransporte">
      <div className="-mx-3 mb-3 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            htmlFor="patente"
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            data-testid="lblPatente"
          >
            Patente:
          </label>
          <input
            name="patente"
            value={transporte.patente}
            onChange={handleChange}
            nombre="patente"
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="XX-AA-99, TT-AA-77"
          />
          <p className="hidden text-xs italic text-red">
            Por favor, rellene este campo.
          </p>
          <div />
        </div>
      </div>
      <div className="-mx-3 mb-3 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            data-testid="lblRefrigeracion"
          >
            Refrigeración:
          </label>
          <div className="relative">
            <select
              defaultValue="NADA"
              data-testid="refrigeracion"
              name="refrigeracion"
              onChange={handleChange}
              type="text"
              refrigeracion="refrigeracion"
              className="mb-2 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
            >
              <option value="NADA" hidden disabled></option>
              <option>Sí</option>
              <option>No</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-3 mb-3 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="grid-state mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            data-testid="lblTamano"
          >
            Tamaño:
          </label>
          <div className="relative">
            <select
            data-testid="tamano"
              defaultValue="NADA"
              name="tamano"
              onChange={handleChange}
              type="text"
              tamano="tamano"
              className="mb-2 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-state"
            >
              <option value="NADA" disabled hidden></option>
              <option>Extra grande</option>
              <option>Grande</option>
              <option>Mediano</option>
              <option>Pequeño</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-3 mb-3 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="grid-state mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            data-testid="lblTipoTranporte"
          >
            Tipo transporte:
          </label>
          <div className="relative">
            <select
            data-testid="tipo"
              defaultValue={transporte.id_tipo}
              name="id_tipo"
              onChange={handleChange}
              type="text"
              tipo="id_tipo"
              className="mb-2 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            >
              <option value={0} disabled hidden></option>
              <option value={1}>Terrestre</option>
              <option value={2}>Marítimo</option>
              <option value={3}>Aéreo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            htmlFor="capacidad_carga"
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            data-testid="lblCapacidad"
          >
            Capacidad de carga:
          </label>
          <input
            value={transporte.capacidad_carga.toString()}
            name="capacidad_carga"
            onChange={handleChange}
            kilogramos="capacidad_carga"
            className="border-red-500 mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="number"
            placeholder="800Kg, 1200Kg"
            min={0}
          />
        </div>
      </div>
      <div className="-mx-3 mb-3 flex flex-wrap place-content-center">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <button
            type="submit"
            className="mb-3 inline-block w-full rounded bg-green px-6 py-3 font-sans text-xs font-semibold uppercase leading-tight tracking-wide text-white shadow-xl transition duration-150 ease-in-out hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};
