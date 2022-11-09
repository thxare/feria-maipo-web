import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";

export const Cards = () => {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <div className="grid pb-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
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
                <ValoresCard
                  nombre={"Observaciones"}
                  valor={"Excelente fruta"}
                />
              </>
            }
          />
        </div>
      </div>
    </>
  );
};
