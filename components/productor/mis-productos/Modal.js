import React, { useState } from "react";
import Image from "next/image";

export const Modal = ({ closeModal }) => {
  const [pathImage, setPathImage] = useState("/papa.jpg");
  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPathImage(reader.result);
        };
      }else{
        console.log("No es una imagen")
      }
    }
  };
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-50 mx-auto my-auto block h-max w-10/12 rounded-lg border bg-white p-6 shadow-lg sm:w-8/12 md:w-6/12 md:p-8 md:pt-4 lg:w-4/12">
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

        <form className="flex flex-col">
          <label className="font-semibold">Imagen:</label>
          <div className="flex flex-row">
            <div className="w-2/4">
              <Image src={pathImage} width="150" height="150" />
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
          />
          <label className="font-semibold">Precio: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
          />

          <label className="font-semibold">Calidad: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
          />
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
            placeholder="Tú descripción"
          ></textarea>
          <button className="mt-4 rounded bg-darkGreen py-2 px-4 font-bold text-white shadow-lg hover:bg-green">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};
