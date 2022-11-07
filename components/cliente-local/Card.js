import React from "react";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="flex h-fit flex-col p-5 shadow-lg bg-white rounded-xl">
      <div className="overflow-hidden">
        <Image src="/uva.png" alt="" width={300} height={300} />
      </div>
      <h5 className="mt-3 text-2xl font-medium md:text-xl">
        Frutas y Verduras
      </h5>
      <p className=" mt-3 text-base text-black">Mango</p>
      <p className=" mt-3 text-base text-lime-700">$6.990 x kg</p>
      <p className=" mt-3 text-base text-red">Calidad: Extra</p>
      <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
      <p className=" mt-3 text-base text-red">Excelente fruta</p>
      <a
        href="#"
        className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-darkGreen focus:scale-95"
      >
        Comprar producto
      </a>
    </div>
  );
};
