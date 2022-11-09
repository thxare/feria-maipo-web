import React, { useState } from "react";
import axios from "axios";
import { ModalProductos } from "./ModalProductos";

export const ModalParticipar = ({ closeModal }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto my-auto block h-max md:w-9/12 w-11/12 rounded-lg border bg-white p-6 shadow-lg md:p-8 md:pt-4">
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
        <div className="md:px-4 px-0">
          <h1 className="inline-block text-xl font-semibold">Mis Productos</h1>
          <div className="mx-auto my-5 h-64 w-full overflow-auto rounded">
            <ModalProductos />
          </div>
          <div className="mx-auto w-5/12">
            <button className="mx-auto w-full rounded bg-green py-2 px-4 font-bold text-white shadow-md hover:bg-darkGreen">
              Participar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
