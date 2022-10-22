import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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

  return (
    <ProductosContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductosContext.Provider>
  );
};
