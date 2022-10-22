import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { validacion } from "../../utils/validacion";
import { UserContext } from "./ContextUser";
import { Alert } from "../ui/Alert";

export const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);

  const apiUrl = "https://api-feria-web-production.up.railway.app";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validation = async (userResponse) => {
    if (userResponse.status === 200) {
      return validacion(userResponse.data.id_rol);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const onSubmit = async (data) => {
    try {
      const userResponse = await axios.post(`${apiUrl}/api/auth/login`, data);
      setUser(userResponse.data);
      await validation(userResponse);
    } catch (err) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));
  }, [user]);

  return (
    <>
      {showAlert && <Alert text="Usuario o contraseña incorrecta" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <label
            className="mb-2 block font-sans text-sm text-gray-700"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
            id="username"
            {...register("nombre_usuario", { required: true })}
            aria-invalid={errors.nombre_usuario ? "true" : "false"}
            name="nombre_usuario"
            type="text"
            placeholder="usuario123"
          />
          {errors.nombre_usuario?.type === "required" && (
            <span className="text-xs italic text-bordeaux">
              Por favor ingrese un usuario
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block font-sans text-sm text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
            id="password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            name="password"
            type="password"
            placeholder="***********"
          />
          {errors.password?.type === "required" && (
            <span className="text-xs italic text-bordeaux">
              Por favor ingrese una contraseña
            </span>
          )}
        </div>

        <button
          type="submit"
          className="mb-3 inline-block w-full rounded bg-green px-6 py-2.5 font-sans text-xs font-semibold uppercase leading-tight tracking-wide text-white shadow-xl transition duration-150 ease-in-out hover:bg-darkGreen hover:shadow-lg focus:bg-darkGreen focus:shadow-lg focus:outline-none focus:ring-0"
        >
          Ingresar
        </button>

        <a
          className="open-sans mx-auto inline-block w-fit align-baseline text-sm text-gray-500 underline hover:text-slate-700"
          href="#"
        >
          Olvidé la contraseña
        </a>
      </form>
    </>
  );
};
