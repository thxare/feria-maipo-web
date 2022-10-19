import { useState } from "react";
import { useForm } from "react-hook-form";

export const Postulacion = () => {
  const transportes = [
    {
      id: 1,
      patente: "RX-TF-23",
      tamaño: "XL",
      capacidad_carga: "10T",
      refrigeracion: "Liquida",
      id_tipo: 2,
      tipo: "Barco",
    },
    {
      id: 2,
      patente: "GH-WE-23",
      tamaño: "L",
      capacidad_carga: "6T",
      refrigeracion: "Liquida",
      id_tipo: 2,
      tipo: "Barco",
    },
    {
      id: 3,
      patente: "UB-NS-23",
      tamaño: "M",
      capacidad_carga: "3T",
      refrigeracion: "Liquida",
      id_tipo: 1,
      tipo: "Camión",
    },
    {
      id: 4,
      patente: "AE-CR-23",
      tamaño: "S",
      capacidad_carga: "2T",
      refrigeracion: "Liquida",
      id_tipo: 1,
      tipo: "Camión",
    },
  ];

  const [transporte, setTransporte] = useState([]);

  const [postulacion, setPostulacion] = useState({});
  
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4">
        <label
          className="mb-2 block font-sans text-sm font-bold text-gray-700"
          htmlFor="cargo"
        >
          Cargo
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
          id="cargo"
          {...register("cargo", { required: true })}
          aria-invalid={errors.cargo ? "true" : "false"}
          name="cargo"
          type="number"
          placeholder="2500"
        />
        {errors.cargo?.type === "required" && (
          <span className="text-xs italic text-bordeaux">
            Por favor, ingrese una cantidad
          </span>
        )}
      </div>
      <div className="my-4">
        <label
          className="mb-2 block font-sans text-sm font-bold text-gray-700"
          htmlFor="cargo"
        >
          Precio
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
          id="precio"
          {...register("precio", { required: true })}
          aria-invalid={errors.precio ? "true" : "false"}
          name="precio"
          type="number"
          placeholder="2500"
        />
        {errors.precio?.type === "required" && (
          <span className="text-xs italic text-bordeaux">
            Por favor, ingrese una cantidad
          </span>
        )}
      </div>

      <div className="my-4">
        <label
          htmlFor="transportes"
          className="mb-2 block font-sans text-sm font-bold text-gray-700"
        >
          Transporte:
        </label>

        <select
          className="focus:shadow-outline w-full rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
          name="transportes"
          id="transportes"
          {...register("transportes", { required: true })}
          aria-invalid={errors.transportes ? "true" : "false"}
        >
          <option defaultValue>Elige un transporte</option>
          {transportes.map((transporte) => (
            <option
              className=""
              key={transporte.id}
              value={`${transporte.id}`}
            >{`${transporte.tipo} ${transporte.patente}`}</option>
          ))}
        </select>
        {errors.transportes?.type === "required" && (
          <span className="text-xs italic text-bordeaux">
            Por favor elija un transporte
          </span>
        )}
      </div>

      <button
        type="submit"
        className="mb-3 inline-block w-full rounded bg-green px-6 py-2.5 font-sans text-xs font-semibold uppercase leading-tight tracking-wide text-white shadow-xl transition duration-150 ease-in-out hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0"
      >
        Postular
      </button>
    </form>
  );
};
