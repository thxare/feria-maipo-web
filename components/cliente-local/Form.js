import React from "react";
import { set } from "react-hook-form";

export const Form = ({ tabli, setTabli }) => {
  const handleChange = (e) => {
    setTabli({
      ...tabli,
      [e.target.name]: e.target.value,
    });
  };

  /* id_usuario, kg, nombre, estado  */
  let { nombre, calidad, kilogramos } = tabli;

  const handleSubmit = () => {
    event.preventDefault();

    kilogramos = parseInt(kilogramos, 10);
    //validación de los datos
    if (nombre === "" || calidad === "" || kilogramos <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }

    //consulta

    /* A solucionar:
    1. Como obtener el id del usuario que está logeado (x el momento se usa un id default). 
    2. Id_Producto. */

    let peticionCreada = {
      id_usuario: 7,
      estado: "P",
      nombre: nombre,
      kilogramos: kilogramos,
    };

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(tabli)
      body: JSON.stringify(peticionCreada),
    };
    fetch("http://localhost:3001/api/peticion", requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res));

    //reinicio del estado de la solicitud
    setTabli({
      nombre: "",
      calidad: "",
      kilogramos: 0,
    });
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className="h-screen bg-gray-100 p-10 ">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              htmlFor="nombre"
              className="for=grid-first-name mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            >
              Nombre:
            </label>
            <input
              name="nombre"
              onChange={handleChange}
              nombre="nombre"
              className="border-red-500 mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Plantano, Manzana"
            />
            <p className="text-red-500 text-xs italic">
              Por favor, rellene este campo.
            </p>
            <div />
          </div>
        </div>
        <div className="-mx-3 mb-2 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
            <label className='mb-2" for=grid-state block text-xs font-bold uppercase tracking-wide text-gray-700'>
              Seleccione calidad:
            </label>
            <div className="relative">
              <select
                name="calidad"
                onChange={handleChange}
                type="text"
                calidad="calidad"
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
              >
                <option>Extra</option>
                <option>Primera</option>
                <option>Segunda</option>
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
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              htmlFor="kilogramos"
              className='mb-2" for=grid-first-name block text-xs font-bold uppercase tracking-wide text-gray-700'
            >
              Selecciona cantidad de kilogramos:
            </label>
            <input
              name="kilogramos"
              onChange={handleChange}
              kilogramos="kilogramos"
              className=" border-red-500 mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="number"
              placeholder="800Kg, 1200Kg"
            />
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <button
              type="submit"
              className="mb-3 inline-block w-full rounded bg-green px-6 py-2.5 font-sans text-xs font-semibold uppercase leading-tight tracking-wide text-white shadow-xl transition duration-150 ease-in-out hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
