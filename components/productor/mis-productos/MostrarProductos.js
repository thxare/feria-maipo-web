import axios from "axios";
import React, { useContext } from "react";
import { ProductosContext } from "../ContextProducto";
import { MisProductos } from "./MisProductos";


export const MostrarProductos = () => {
  const { productos, setProductos } = useContext(ProductosContext);

  const onDelete = (id) => {
    axios
      .delete(
        `https://api-feria-web-production.up.railway.app/api/productos/${id}`
      )
      .then((res) => {
        setProductos(
          [...productos].filter((producto) => producto.id_producto !== id)
        );
      });
  };
  const onUpdate = (id, callback) => {
    const find = [...productos].find((producto) => producto.id_producto === id);
    callback();
  };
  return (
    <>
      <MisProductos onDelete={onDelete} onUpdate={onUpdate} />
    </>
  );
};
