import axios from "axios";


export const Form = ({ peticion, setPeticion }) => {
  const handleChange = (e) => {
    setPeticion({
      ...peticion,
      [e.target.name]:
        e.target.name !== "kilogramos"
          ? e.target.value
          : parseInt(e.target.value),
    });
  };

  /* id_usuario, kg, nombre, estado  */
  const { id_peticion, nombre, kilogramos, estado } = peticion;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(peticion);
    kilogramos = parseInt(kilogramos);
    //validación de los datos
    if (
      id_peticion === "" ||
      nombre === "" ||
      kilogramos === 0 ||
      estado === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    //consulta

    /* A solucionar:
    1. Como obtener el id del usuario que está logeado (x el momento se usa un id default). 
    2. Id_Producto. */

    /* let peticionCreada = {
      id_usuario: 7,
      estado: "P",
      nombre: nombre,
      kilogramos: kilogramos,
    };  */

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(peticion),
      /* body: JSON.stringify(peticionCreada),   */
    };
    const respuesta = await axios.post(
      "https://api-feria-web-production.up.railway.app/api/peticion",
      { id_usuario: peticion.id_usuario,
        nombre: peticion.nombre,
        kilogramos: peticion.kilogramos,
        estado: peticion.estado,
        locacion: peticion.locacion
      }
    );
    console.log(respuesta);
    //.then((res) => res.text())
    //.then((res) => console.log(res));

    //reinicio del estado de la solicitud
    setPeticion({
      nombre: "",
      kilogramos: 0,
      estado: "activa",
      locacion: ""
    });
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className=" h-max bg-gray-100 p-10 ">
        <div className="-mx-3 mb-6 flex flex-wrap place-content-center">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              htmlFor="nombre"
              className=" mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            >
              Nombre:
            </label>
            <input
              value={nombre}
              name="nombre"
              onChange={handleChange}
              nombre="nombre"
              className="border-red-500 mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Plantano, Manzana"
            />

            <div />
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap place-content-center">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              htmlFor="kilogramos"
              className='mb-2" grid-first-name block text-xs font-bold uppercase tracking-wide text-gray-700'
            >
              Selecciona cantidad de kilogramos:
            </label>
            <input
              min={0}
              value={kilogramos}
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
        <div className="-mx-3 mb-6 flex flex-wrap place-content-center">
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
