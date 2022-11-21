import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext();

export const ProductosContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [actulizado, setActulizado] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    axios
      .get("https://api-feria-web-production.up.railway.app/api/productos")
      .then((res) => {
        const data = res.data;
        const filtrado = data
          .filter((dato) => dato)
          .sort((a, b) => b.id_producto - a.id_producto);
        setProductos(filtrado);
        setActulizado(false);
      });
    controller.abort();
  }, [actulizado]);

  return (
    <ProductosContext.Provider
      value={{ productos, setProductos, setActulizado }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
