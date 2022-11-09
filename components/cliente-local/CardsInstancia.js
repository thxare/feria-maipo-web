import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";

export const CardsIntancia = () => {
  return (
    <>
      <div className="mx-auto flex justify-center">
        <div className="grid pb-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Card
            nombreCard={"Platanos"}
            img={"/platano.jpg"}
            button={
              <>
                <Button
                  text={"Ingresar"}
                  colorBtn={"bg-green"}
                  hoverBtn={"hover:bg-darkGreen"}
                />
              </>
            }
            valores={
              <>
                <ValoresCard
                  nombre={"Observaciones"}
                  valor={
                    "Aqui podras encontrar distintos precios, kilogramos, calidad de los platanos que solicitaste"
                  }
                />
              </>
            }
          />
        </div>
      </div>
    </>
  );
};
