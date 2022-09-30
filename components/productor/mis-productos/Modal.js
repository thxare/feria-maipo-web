import React from "react";

export const Modal = () => {
  return (
    <>
      <div className="mx-auto block h-auto w-10/12 rounded-lg bg-white p-6 shadow-lg sm:w-8/12 md:w-6/12 md:p-8 md:pt-4 lg:w-4/12">
        <div className="felx-row flex w-full justify-end">
          <div className="h-8 w-8 hover:rounded-full hover:bg-zinc-100">
            <button className="m-1">
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

        <form>
          <label>Nombre: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          />

          <label>Precio: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          />

          <label>Calidad: </label>
          <input
            type="text"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          />
          <label>Descripción: </label>
          <textarea
            class="
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Tú descripción"
          ></textarea>
        </form>
      </div>
    </>
  );
};
