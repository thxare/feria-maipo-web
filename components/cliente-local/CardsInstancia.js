import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const CardsIntancia = ({ productos }) => {
  return (
    <>
      <CardContainer>
        {productos.map((products) => {
          return (
            <Card
              nombreCard={products.nombre}
              img={products.imagen}
              button={
                <>
                  <Button
                    text={"Agregar"}
                    colorBtn={"bg-green"}
                    hoverBtn={"hover:bg-darkGreen"}
                    margin={"my-2 mx-5"}
                  />
                </>
              }
              valores={
                <>
                  <ValoresCard
                    nombre={"Precio"}
                    valor={products.precio + " x kg"}
                  />
                  <ValoresCard
                    nombre={"Cantidad"}
                    valor={products.cantidad + " kg"}
                  />
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
