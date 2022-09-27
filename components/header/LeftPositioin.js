import React from "react";
import Image from "next/image";

export const LeftPositioin = () => {
  return (
    <div
      className="collapse navbar-collapse flex-grow items-center hidden lg:block"
      id="menu"
    >
      <ul className="navbar-nav flex flex-col sm:flex-row pl-0 list-style-none mr-auto">
        <a
          className="
flex
items-center
text-gray-900
hover:text-gray-900
focus:text-gray-900
mt-2
lg:mt-0
mr-1
"
          href="#"
        >
          <Image
            src="/Feria__3_-removebg-preview.png"
            width="50"
            height="50"
            alt=""
            loading="lazy"
          />
        </a>
        <li className="nav-item p-2">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
            href="#"
          >
            Mis Productos
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
            href="#"
          >
            Venta Externa
          </a>
        </li>
        <li className="nav-item p-2">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
            href="#"
          >
            Venta Local
          </a>
        </li>
      </ul>
    </div>
  );
};
