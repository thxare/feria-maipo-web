import React from "react";
import Image from 'next/image'

export const Login = () => {
  return (
    <div className="flex justify-center bg-[url('/background.png')] h-screen">
      <form className="block p-6 pt-0 rounded-lg shadow-2xl bg-white/75 sm:w-8/12 md:w-6/12 lg:w-4/12 w-10/12 my-auto h-5/6 md:h-4/5">
          <div className="w-32 h-32 mx-auto sm:w-44 sm:h-44">
              <Image width="200" height="200" src="/feria.png" alt="Logo Feria Maipo Grande" />
          </div>
        <h1 className="text-4xl leading-tight font-medium mb-2 text-orange font-sans font-bold w-fit mx-auto">
          Bienvenido
        </h1>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 font-sans"
            for="username"
          >
            Usuario
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="usuario123"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 font-sans"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-bordeaux rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="***********"
          />
          <p class="text-bordeaux text-xs italic">
            Por favor ingrese una contraseña
          </p>
        </div>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-orange shadow-xl text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red active:shadow-lg transition duration-150 ease-in-out w-full font-sans font-semibold"
        >
          Ingresar
        </button>
        <a
          class="inline-block align-baseline text-sm text-slate-600 hover:text-slate-800 underline open-sans w-fit mx-auto"
          href="#"
        >
          Olvidé la contraseña
        </a>
      </form>
    </div>
  );
};
