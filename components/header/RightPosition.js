import React, { useEffect, useState } from "react";
import Image from "next/image";
import { router } from "next/router";
import Link from "next/link";

export const RightPosition = ({ carrito, tipoCliente, cantidad }) => {
  const [changeUser, setChangeUser] = useState(true);
  const [url, setUrl] = useState("");

  let classNameUser = `dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0`;

  const handleClickUser = (e) => {
    setChangeUser(!changeUser);
    e.preventDefault();
  };
  if (changeUser) {
    classNameUser += ` hidden`;
  }

  const onSubmit = () => {
    const data = {};
    window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(data));
    router.push("/login/");
  };

  useEffect(() => {
    let urlActual = window.location.href;
    let urlSplit = urlActual.split("/");
    setUrl(urlSplit);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    ///router.push(`/carrito`);
    if (url.includes("Intancias")) {
      router.push(`./carrito`);
    } else {
      router.push(`${tipoCliente}/carrito`);
    }
  };
  return (
    <div className="relative flex items-center">
      <div className="dropdown relative">
        <a
          className={`dropdown-toggle hidden-arrow mr-4 items-center text-green hover:text-darkGreen focus:text-darkGreen ${
            carrito ? "flex" : "hidden"
          }`}
          onClick={handleClick}
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            className="h-6 w-6 fill-green hover:fill-darkGreen focus:fill-darkGreen"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -mt-4 ml-4 rounded-full bg-red py-0 px-1.5 text-xs text-white">
            {cantidad}
          </span>
        </a>
      </div>

      <div className="dropdown relative" id="menu-usuario">
        <a
          className="dropdown-toggle hidden-arrow flex items-center"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          onClick={handleClickUser}
          aria-expanded="false"
        >
          <Image
            src="/iconoUsuario.png"
            className="rounded-full hover:bg-slate-300"
            width="25"
            height="25"
            alt="icono-usuario"
            loading="lazy"
          />
        </a>
        <ul className={classNameUser} aria-labelledby="dropdownMenuButton2">
          <li>
            <a
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
              href="#"
            >
              Mi Perfil
            </a>
          </li>
          <li>
            <a
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
              href="#"
              onClick={onSubmit}
            >
              Cerrar Sesi??n
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
