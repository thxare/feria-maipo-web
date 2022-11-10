import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const Cards = () => {
  return (
    <>
      <CardContainer>
        {/* Esto luego ir dentro de un map, y los valores se deben traer del servidor */}
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
      </CardContainer>
    </>
  );
};
