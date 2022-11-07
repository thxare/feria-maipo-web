import React from "react";
import Image from "next/image";

export const CardInstancia = () => {
  return (
    <div className="flex h-fit flex-col rounded-xl bg-white p-5 shadow-lg">
      <div className="overflow-hidden">
        <Image src="/platano.jpg" alt="" width={300} height={300} />
      </div>
      <h5 className="mt-3 text-2xl font-bold md:text-xl">
        Intancia de compra: Platanos
      </h5>
      <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
      <p className=" mt-3 text-base text-red">
        Aqui podras encontrar distintos precios, kilogramos, calidad de los
        platanos que solicitaste
      </p>
      <a
        href="#"
        className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-darkGreen focus:scale-95"
      >
        Ingresar
      </a>
    </div>
  );
};
