import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("user", { required: true })}
            aria-invalid={errors.user ? "true" : "false"}
            name="user"
            type="text"
            placeholder="usuario123"
          />
          {errors.user?.type === "required" && (
            <span className="text-bordeaux text-xs italic">
              Por favor ingrese un usuario
            </span>
          )}
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
            {...register("password", { required: true })}
            aria-invalid={errors.user ? "true" : "false"}
            name="password"
            type="password"
            placeholder="***********"
          />
          {errors.password?.type === "required" && (
            <span className="text-bordeaux text-xs italic">
              Por favor ingrese una contraseña
            </span>
          )}
        </div>

        <button
          type="submit"
          className="inline-block px-6 py-2.5 mb-3 bg-green shadow-xl tracking-wide text-white text-xs leading-tight uppercase rounded hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full font-sans font-semibold"
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
    </>
  );
};
