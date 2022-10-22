import axios from "axios";
import React, { useContext} from "react";
import { TransporteContext } from "../ContextTransporte";
import { FormularioTransporte } from "./FormularioTransporte";
import { TablaTransportes } from "./TablaTransportes";

export const MostrarTransportes = ({ user }) => {
  const { tabla, setListaActulizada } = useContext(TransporteContext);
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
