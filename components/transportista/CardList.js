import { Card } from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSubastas } from "../../utils/fetching.js";

export const CardList = (props) => {
  const [subastas, setSubastas] = useState([]);

  const cargarDatos = async () => {
    const datos = await getSubastas();
    setSubastas(datos.data);
  };
  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div className="grid grid-cols-8 justify-center gap-10 px-14 py-14">
      {subastas?.map((subasta) => {
        return (
          <Card
            key={subasta.id_subasta}
            id={subasta.id_subasta}
            ganador={subasta.ganador}
            fechaInicio = {subasta.fecha_inicio}
            fechaTermino = {subasta.fecha_ter}
            estado= {subasta.estado}
          />
        );
      })}
    </div>
  );
};

{
  /* <Card title="Hola" />
<Card title="Mundo" />
<Card title="Chao" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" /> 

  const subastas = [
    {
      id: 1,
      title: "Hola",
    },
    {
      id: 2,
      title: "Chao",
    },
    {
      id: 3,
      title: "Chao",
    },
    {
      id: 4,
      title: "Chao",
    },
    {
      id: 5,
      title: "Chao",
    },
  ];*/
}

// Data fetching en el servidor
export async function getServerSideProps(context) {
  // Api en railway
  const api = `https://api-feria-web-production.up.railway.app/api/subastas/`;
  const { params, res } = context;

  const apiResponse = await fetch(api);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    console.log(props);
    return { props: props };
  }
  if (res) {
    res.writeHead(301, { Location: "/transportista" }.end());
  }
}
