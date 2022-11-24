import Image from "next/image";
import React, { useState } from "react";
import { ModalUpdateBackdrop } from "./ModalUpdateBackdrop";
import { Button } from "../../ui/Button";
import { ValoresCard } from "../../ui/ValoresCard";
import { Card } from "../../ui/Card";

export const Productos = ({
  id,
  nombreCard,
  calidad,
  precio,
  onDelete,
  onUpdate,
  descripcion,
  user,
  cantidad,
  fechaLimite,
  img = "/feria-logo.png",
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <ModalUpdateBackdrop
          closeModal={() => setShow(!show)}
          onUpdate={onUpdate}
          id={id}
          user={user}
        />
      )}
      <Card
        id={id}
        img={img}
        nombreCard={nombreCard}
        button={
          <>
            <Button
              colorBtn={"bg-green"}
              hoverBtn={"hover:bg-darkGreen"}
              text={"Modificar Producto"}
              margin={"my-2 mx-5"}
              onClickBtn={() => onUpdate(id, () => setShow(!show))}
            />
            <Button
              colorBtn={"bg-red"}
              hoverBtn={"hover:bg-bordeaux"}
              text={"Eliminar Producto"}
              margin={"my-2 mx-5"}
              onClickBtn={() => onDelete(id)}
            />
          </>
        }
        valores={
          <>
            <ValoresCard nombre={"Calidad"} valor={calidad} />
            <ValoresCard nombre={"Precio"} valor={precio + " x kg"} />
            <ValoresCard nombre={"Cantidad"} valor={cantidad + " kg"} />
            <ValoresCard
              nombre={"Descripción"}
              valor={descripcion}
              valoresEstilo={"h-13 overflow-auto"}
            />
            <ValoresCard
              nombre={"Fecha Límite"}
              valor={fechaLimite}
              valoresEstilo={"h-13 overflow-auto"}
            />
          </>
        }
      />
    </>
  );
};
