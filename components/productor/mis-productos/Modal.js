import React, { useContext, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ProductosContext } from "../Context";

export const Modal = ({ closeModal }) => {
  const [imagen, setImagen] = useState("/feria-logo.png");
  const [active, setActive] = useState(false);
  const [calidad, setCalidad] = useState({ nombreCa: "", id_calidad: 0 });

  const { setProductos } = useContext(ProductosContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setImagen(reader.result);
        };
      } else {
        console.log("No es una imagen");
      }
    }
  };

  const onSubmit = async (data) => {
    const id_calidad = calidad.id_calidad;
    const output = { ...data, imagen, id_calidad, id_usuario: 2 };
    closeModal();
    setProductos((productos) => [output, ...productos]);
    if (!calidad == "" && !id_calidad == 0) {
      const resp = await axios.post(
        "https://api-feria-web-production.up.railway.app/api/productos",
        output
      );
    } else {
      console.log("Ingrese");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto my-auto block h-max w-10/12 rounded-lg border bg-white p-6 shadow-lg sm:w-8/12 md:w-6/12 md:p-8 md:pt-4 lg:w-4/12">
        <div className="flex w-full flex-row justify-end">
          <div className="h-8 w-8 hover:rounded-full hover:bg-zinc-200">
            <button className="m-1" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold">Imagen:</label>
          <div className="flex flex-row">
            <div className="w-2/4">
              <Image src={imagen} width="150" height="150" />
            </div>

            <input
              type="file"
              placeholder="File"
              className="my-auto ml-2 h-full rounded bg-zinc-300 p-2 text-sm font-semibold text-slate-800 shadow-lg"
              aria-label="Archivo"
              onChange={onFileChange}
            />
          </div>

          <label className="font-semibold">Nombre: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
            {...register("nombre", { required: true })}
            aria-invalid={errors.nombre ? "true" : "false"}
          />
          {errors.nombre?.type === "required" && (
            <span className="text-xs italic text-bordeaux">
              Por favor ingrese el nombre del producto
            </span>
          )}
          <label className="font-semibold">Precio: </label>
          <div className="flex flex-col justify-between sm:flex-row">
            <input
              type="number"
              className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline sm:mb-0 sm:w-3/5"
              {...register("precio", { required: true })}
              aria-invalid={errors.precio ? "true" : "false"}
            />
            {errors.precio?.type === "required" && (
              <span className="text-xs italic text-bordeaux">
                Por favor ingrese el precio del producto
              </span>
            )}
            <div className="flex">
              <div className="w-full sm:w-auto">
                <div
                  className="dropdown relative"
                  onClick={() => setActive(!active)}
                >
                  <div
                    className="
                    
          dropdown-toggle
          flex
          items-center
          justify-center
          whitespace-nowrap
          rounded
          bg-darkGreen
          px-8
          py-3
          text-xs
          font-medium
          uppercase
          leading-tight text-white
          shadow-md transition duration-150 ease-in-out
          hover:bg-green hover:shadow-lg focus:bg-green
          focus:shadow-lg
          focus:outline-none
          focus:ring-0
          active:bg-green
          active:text-white
          active:shadow-lg
        "
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {calidad.nombreCa ? calidad.nombreCa : "Calidad"}

                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="ml-2 w-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </div>
                  {active && (
                    <ul
                      className="
          dropdown-menu
          absolute
          z-50
          float-left
          m-0
          mt-1
          w-full
          min-w-max
          list-none
          rounded-lg
          border-none
          bg-white
          bg-clip-padding
          py-2
          text-left
          text-base
          shadow-lg
        "
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <div
                          className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                          onClick={() =>
                            setCalidad({ nombreCa: "Extra", id_calidad: 1 })
                          }
                        >
                          Extra
                        </div>
                      </li>
                      <li>
                        <div
                          className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                          onClick={() =>
                            setCalidad({ nombreCa: "Primera", id_calidad: 2 })
                          }
                        >
                          Primera
                        </div>
                      </li>
                      <li>
                        <div
                          className="
              dropdown-item
              block
              w-full
              whitespace-nowrap
              bg-transparent
              py-2
              px-4
              text-sm
              font-normal
              text-gray-700
              hover:bg-gray-100
            "
                          onClick={() =>
                            setCalidad({ nombreCa: "Segunda", id_calidad: 3 })
                          }
                        >
                          Segunda
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          <label className="font-semibold">Descripción: </label>
          <textarea
            className="
        form-control
        m-0
        block
        w-full
        resize-none
        rounded
        border
        border-solid
        border-gray-300 bg-white
        bg-clip-padding px-3 py-1.5
        text-base
        font-normal
        text-gray-700
        outline-green
        transition
        ease-in-out focus:border-blue-600
        focus:bg-white focus:text-gray-700
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Kilos, uso, etc..."
            {...register("observaciones", { required: true })}
            aria-invalid={errors.observaciones ? "true" : "false"}
          ></textarea>
          {errors.observaciones?.type === "required" && (
            <span className="text-xs italic text-bordeaux">
              Por favor ingrese la descripcion del producto
            </span>
          )}
          <button className="mt-4 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-lg hover:bg-green">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};
