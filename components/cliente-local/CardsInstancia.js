import React, { createRef, useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const CardsIntancia = ({ productos }) => {
  const min = 0;
  const [cantidadProducto, setCantidadProducto] = useState("");
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    console.log(productosCarrito);
  }, [productosCarrito]);

  const handleChange = (id, e) => {
    //const { name, value } = e.target;
    productos.filter((producto) => {
      if (producto.id_producto == id) {
        setCantidadProducto(e.target.value);
      }
    });
  };

  const addAmount = (id) => {
    const amountValue = productos.filter(
      (producto) => producto.id_producto == id
    );
    return amountValue;
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    const id_producto = addAmount(id)[0].id_producto;
    const valuesProductoVenta = { id_producto, cantidadProducto };

    setProductosCarrito([...productosCarrito, valuesProductoVenta]);
  };

  return (
    <>
      <CardContainer>
        {productos.map((products, index) => {
          return (
            <Card
              id={products.id_producto}
              key={products.id_producto}
              nombreCard={products.nombre}
              img={products.imagen}
              button={
                <>
                  <Button
                    text={"Agregar"}
                    colorBtn={"bg-green"}
                    hoverBtn={"hover:bg-darkGreen"}
                    margin={"my-2 mx-5"}
                    onClickBtn={(e) => handleClick(e, products.id_producto)}
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
                    nombre={"Kilogramos Disponibles"}
                    valor={products.cantidad + " kg"}
                  />
                  <ValoresCard
                    nombre={"Observaciones"}
                    valor={products.observaciones}
                  />
                  <ValoresCard
                    nombre={"Cantidad de Kg"}
                    valor={
                      <>
                        <input
                          type="number"
                          id={products.id_producto}
                          value={cantidadProducto[products.id]}
                          name="cantidadCompra"
                          onChange={(e) =>
                            handleChange(products.id_producto, e)
                          }
                          placeholder="500 Kg, 1500 Kg"
                          required
                          className="
                  
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
                        />
                      </>
                    }
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
