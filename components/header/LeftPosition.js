import React from "react";
import Image from "next/image";
import Link from "next/link";

export const LeftPosition = (props) => {
  return (
    <div
      className="collapse navbar-collapse hidden flex-grow items-center lg:block"
      id="menu"
    >
      <ul className="navbar-nav list-style-none mr-auto flex flex-col pl-0 md:flex-row">
        <a
          className="
mt-2
mr-1
flex
items-center
text-gray-900
hover:text-gray-900
focus:text-gray-900
lg:mt-0
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
            <Link key={funcion.name} href={funcion.link}>
              <a
                className="nav-link p-2 font-bold text-gray-500 hover:text-gray-700 hover:underline hover:decoration-gray-700 hover:decoration-2"
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
