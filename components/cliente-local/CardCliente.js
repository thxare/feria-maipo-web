import React from "react";
import Image from "next/image";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";

export const CardCliente = () => {
  return (
    <Card
      nombreCard={"Mango"}
      img={"/uva.png"}
      button={
        <>
          <Button
            text={"Comprar Producto"}
            colorBtn={"bg-green"}
            hoverBtn={"hover:bg-darkGreen"}
          />
        </>
      }
      valores={
        <>
          <ValoresCard nombre={"Precio"} valor={"$6.990 x kg"} />
          <ValoresCard nombre={"Calidad"} valor={"Extra"} />
          <ValoresCard nombre={"Observaciones"} valor={"Excelente fruta"} />
        </>
      }
    />

    // <div className="flex h-fit flex-col p-5 shadow-lg bg-white rounded-xl">
    //   <div className="overflow-hidden">
    //     <Image src="/uva.png" alt="" width={300} height={300} />
    //   </div>
    //   <h5 className="mt-3 text-2xl font-medium md:text-xl">
    //     Frutas y Verduras
    //   </h5>
    //   <p className=" mt-3 text-base text-black">Mango</p>
    //   <p className=" mt-3 text-base text-lime-700">$6.990 x kg</p>
    //   <p className=" mt-3 text-base text-red">Calidad: Extra</p>
    //   <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
    //   <p className=" mt-3 text-base text-red">Excelente fruta</p>
    //   <a
    //     href="#"
    //     className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-darkGreen focus:scale-95"
    //   >
    //     Comprar producto
    //   </a>
    // </div>
  );
};
