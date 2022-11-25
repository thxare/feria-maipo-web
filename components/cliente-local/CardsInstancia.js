import React, { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ValoresCard } from "../ui/ValoresCard";
import { CardContainer } from "../ui/CardContainer";

export const CardsIntancia = ({ productos, setUpdate }) => {
  const initialState = "";
  const [cantidadProducto, setCantidadProducto] = useState(initialState);
  const [productosCarrito, setProductosCarrito] = useState([]);

  const handleChange = (e) => {
    setCantidadProducto(e.target.value);
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
    const nombre = addAmount(id)[0].nombre;
    const cantidadInicial = addAmount(id)[0].cantidad;

    const precio = addAmount(id)[0].precio;
    const imagen = addAmount(id)[0].imagen;
    const observaciones = addAmount(id)[0].observaciones;
    const id_usuario = addAmount(id)[0].id_usuario;
    const cantidad = parseInt(cantidadProducto);
    const valuesProductoVenta = {
      id_producto,
      cantidad,
      nombre,
      precio,
      id_usuario,
      observaciones,
      imagen,
    };
    if (cantidad < 0) {
      alert("La cantidad de kg del producto debe ser mayor a 0 ");
    } else if (cantidad > cantidadInicial) {
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
    setUpdate(false)
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
