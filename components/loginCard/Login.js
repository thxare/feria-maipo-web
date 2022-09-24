import React from "react";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="flex justify-center bg-gray-200 h-screen">
      <form className="block md:p-8 md:pt-4 p-6 rounded-lg shadow-xl bg-white sm:w-8/12 md:w-6/12 lg:w-4/12 w-10/12 my-auto h-auto">
        <div className="mx-auto w-44 h-44 my-2">
          <Image
            width="200"
            height="200"
            src="/feria-logo.png"
            alt="Logo Feria Maipo Grande"
          />
        </div>
        {/* <h1 className="text-3xl leading-tight font-medium mb-2 text-orange font-sans w-fit mx-auto">
          Bienvenido
        </h1> */}
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm mb-2 font-sans"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline outline-green focus:shadow-outline"
            id="username"
            type="text"
            placeholder="usuario123"
          />
          <span className="text-bordeaux text-xs italic hidden">
            Por favor ingrese un usuario
          </span>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm mb-2 font-sans"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline outline-green focus:shadow-outline"
            id="password"
            type="password"
            placeholder="***********"
          />
          <span className="text-bordeaux text-xs italic hidden">
            Por favor ingrese una contraseña
          </span>
        </div>
        <button
          type="button"
          className="inline-block px-6 py-2.5 mb-3 bg-green shadow-xl tracking-wide text-white text-xs leading-tight uppercase rounded hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkGreen active:shadow-lg transition duration-150 ease-in-out w-full font-sans font-semibold"
        >
          Ingresar
        </button>
        <a
          className="inline-block align-baseline text-sm text-gray-500 hover:text-slate-700 underline open-sans w-fit mx-auto"
          href="#"
        >
          Olvidé la contraseña
        </a>
      </form>
    </div>
  );
};
