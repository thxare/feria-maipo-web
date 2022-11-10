import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const CardsIntancia = () => {
  return (
    <>
      <CardContainer>
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
      </CardContainer>
    </>
  );
};
