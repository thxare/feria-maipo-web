import React, { useState } from "react";
import Link from "next/link";

import { clearPreviewData } from "next/dist/server/api-utils";
import { RightPosition } from "./RightPosition";
import { LeftPosition } from "./LeftPosition";

export const Header = (props) => {
  const [change, setChange] = useState(true);

  let className = `collapse navbar-collapse flex-grow items-center lg:hidden`;

  const handleButton = (e) => {
    setChange(!change);
    e.preventDefault();
  };
  if (change) {
    className += ` hidden`;
  }

  return (
    <>
      <nav
        className="
            navbar
            navbar-expand-lg
            navbar-light relative
            flex
            w-full
            flex-wrap
            items-center
            justify-between
            bg-gray-100
            py-4
            text-gray-500
            shadow-lg hover:text-gray-700 focus:text-gray-700
            "
      >
        <div className="container-fluid flex w-full flex-wrap items-center justify-between px-6">
          <button
            onClick={handleButton}
            id="boton"
            className="navbar-toggler border-0 bg-transparent py-2 px-2.5 text-green hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <LeftPosition funciones={props.funciones} />
          <RightPosition carrito={props.carrito} tipoCliente={props.tipoCliente} cantidad={props.cantidad}/>
        </div>
        <div className={className} id="menu">
          <ul className="navbar-nav list-style-none mr-auto ml-8 mt-2 flex flex-col pl-0 md:flex-row">
            {props.funciones.map((funcion) => {
              return (
                <Link
                  key={funcion.name}
                  className="nav-item p-2"
                  href={funcion.link}
                >
                  <a
                    className="nav-link p-0 font-bold text-gray-500 hover:text-gray-700 hover:underline hover:decoration-gray-700 hover:decoration-2 focus:text-gray-700"
                    href="#"
                  >
                    {funcion.name}
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
