import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TransporteContext } from "./ContextTransporte";
import axios from "axios";
import { getOnePerson } from "../../utils/fetching";

export const Postulacion = ({ estado, idSubasta }) => {
  const [name, setName] = useState("");

  const { tabla } = useContext(TransporteContext);

  const onSubmit = async (data) => {
    const user = JSON.parse(window.localStorage.getItem("loggedNoteAppUser"));
    const persona = await getOnePerson(user.id_persona);
    const id_transporte = parseInt(data.transportes);
    const detalle = {
      id_transporte,
      id_subasta: idSubasta,
      cargo: parseInt(data.cargo),
      precio: parseInt(data.precio),
      nombre: persona?.nombre,
    };
    console.log(detalle);
    try {
      axios.post(
        "https://api-feria-web-production.up.railway.app/api/detalle-subasta/",
        detalle
      );
    } catch (error) {
      console.log(error);
    }

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
          disabled={estado}
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
          disabled={estado}
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
          disabled={estado}
        >
          <option defaultValue>Elige un transporte</option>
          {tabla.map((transporte) => {
            let tipo = "";
            if (transporte.id_tipo == 1) {
              tipo = "Terrestre";
            } else if (transporte.id_tipo == 2) {
              tipo = "Maritimo";
            } else {
              tipo = "Aereo";
            }

            return (
              <option
                className=""
                key={transporte.id_transporte}
                value={`${transporte.id_transporte}`}
              >{`${tipo} ${transporte.patente}`}</option>
            );
          })}
        </select>
        {errors.transportes?.type === "required" && (
          <span className="text-xs italic text-bordeaux">
            Por favor elija un transporte
          </span>
        )}
      </div>

      <button
        disabled={estado}
        type="submit"
        className="mb-3 inline-block w-full rounded bg-green px-6 py-2.5 font-sans text-xs font-semibold uppercase leading-tight tracking-wide text-white shadow-xl transition duration-150 ease-in-out hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0"
      >
        Postular
      </button>
    </form>
  );
};
