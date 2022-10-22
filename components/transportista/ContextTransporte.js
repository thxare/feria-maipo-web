import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const TransporteContext = createContext();

export const TransporteContextProvider = ({ children, user }) => {
  const [tabla, setTabla] = useState([]);
  const [listaActulizada, setListaActulizada] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api-feria-web-production.up.railway.app/api/transportes/`)
      .then((res) => {
        const data = res.data;
        const filtrado = data.filter(
          (transportes) => transportes.id_usuario == user?.id_usuario
        );
        setTabla(filtrado);
        setListaActulizada(false);
      });
  }, [listaActulizada]);
  return (
    <TransporteContext.Provider value={{ tabla, setListaActulizada }}>
      {children}
    </TransporteContext.Provider>
  );
};
