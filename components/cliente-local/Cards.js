import React, { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { CardContainer } from "../ui/CardContainer";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";

export const Cards = ({ productos, setUpdate }) => {
  const initialState = "";
  const [cantidadProducto, setCantidadProducto] = useState(initialState);
  const [productosCarrito, setProductosCarrito] = useState([]);

  const handleChange = (e) => {
    setCantidadProducto(e.target.value);
  };

  const filterProduct = (id) => {
    const amountValue = productos.filter(
      (producto) => producto.id_producto == id
    );
    return amountValue;
  };

  const handleClick = (event, idProducto) => {
    event.preventDefault();
    const id = filterProduct(idProducto)[0].id_producto;
    const title = filterProduct(idProducto)[0].nombre;
    const cantidadInicial = filterProduct(id)[0].cantidad;
    const unit_price = filterProduct(idProducto)[0].precio;
    const imagen = filterProduct(idProducto)[0].imagen;
    const description = filterProduct(idProducto)[0].observaciones;
    const id_usuario = filterProduct(idProducto)[0].id_usuario;
    const quantity = parseInt(cantidadProducto);
    const valuesProductoVenta = {
      id,
      quantity,
      title,
      unit_price,
      id_usuario,
      description,
      imagen,
    };
    if (quantity < 0) {
      alert("La cantidad de kg del producto debe ser mayor a 0 ");
    } else if (quantity > cantidadInicial) {
      alert(
        "La cantidad de kg del producto debe ser menos de los kg disponibles"
      );
    } else {
      setProductosCarrito([...productosCarrito, valuesProductoVenta]);
      setUpdate(true);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    setUpdate(false);
  }, [productosCarrito]);

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
                          onChange={(e) => handleChange(e)}
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
