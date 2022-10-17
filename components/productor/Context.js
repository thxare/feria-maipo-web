import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Productos } from "./mis-productos/Productos";

export const ProductosContext = createContext();

export const ProductosContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-feria-web-production.up.railway.app/api/productos")
      .then((res) => {
        const data = res.data;
        const filtrado = data
          .filter((dato) => dato)
          .sort((a, b) => b.id_producto - a.id_producto);
          setProductos(filtrado);
        
      });
  }, []);

  
  console.log(productos)

  return (
    <ProductosContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductosContext.Provider>
  );
};
