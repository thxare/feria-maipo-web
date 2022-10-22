import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormularioTransporte } from "./FormularioTransporte";
import { TablaTransportes } from "./TablaTransportes";

export const MostrarTransportes = ({ user }) => {
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
    <div>
      <TablaTransportes tabla={tabla} />
      <FormularioTransporte
        setListaActulizada={setListaActulizada}
        user={user}
      />
    </div>
  );
};
