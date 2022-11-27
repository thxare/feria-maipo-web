import React, { createContext, useEffect, useState } from "react";

export const ProductosCarritoContext = createContext();

export const ProductosCarritoContextProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  return (
    <ProductosCarritoContext.Provider
      value={{ productosCarrito, setProductosCarrito }}
    >
      {children}
    </ProductosCarritoContext.Provider>
  );
};
