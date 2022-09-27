import React from "react";
import Image from "next/image";
import Link from "next/link";

export const LeftPosition = (props) => {
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
        {props.funciones.map((funcion) => {
          return (
            <Link href={funcion.link}>
              <a
                className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-2"
                href="#"
              >
                {funcion.name}
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
