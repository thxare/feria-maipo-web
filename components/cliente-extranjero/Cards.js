import React from "react";
import { Card } from "../ui/Card";
import { CardContainer } from "../ui/CardContainer";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";

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
                margin={"my-2 mx-5"}
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
