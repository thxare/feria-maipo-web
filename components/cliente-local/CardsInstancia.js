import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const CardsIntancia = ({productos}) => {
  return (
    <>
      <CardContainer>
        {productos.map((products) => {
          return (
            <Card
              nombreCard={products.nombre}
              precio={products.precio}
              cantidad={products.cantidad}
              img={products.imagen}
              button={
                <>
                  <Button
                    text={"Agregar"}
                    colorBtn={"bg-green"}
                    hoverBtn={"hover:bg-darkGreen"}
                  />
                </>
              }
              valores={
                <>
                  <ValoresCard
                    nombre={"Observaciones"}
                    valor={products.observaciones}
                  />
                </>
              }
            />
          );
        })}   
      </CardContainer>
    </>
  );
};
