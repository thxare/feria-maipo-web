import Head from "next/head";
import { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { Tabla } from "../../components/cliente-local/Tabla";
import { Form } from "../../components/cliente-local/Form";
import axios from "axios";
/* import Dropdown from "../../components/cliente-local/Dropdown"; */

<link rel="shortcut icon" href="#"></link>;

export default function Compras() {
  const [peticion, setPeticion] = useState({
    nombre: "",
    kilogramos: 0,
    id_usuario: 4,
    estado: "activo",
    locacion: "extranjero"
  });

  const [tablaa, setTabla] = useState([]);

  const [listaActulizada, setlistaActulizada] = useState(false);

  useEffect(() => {
    const getTabla = async () => {
      const res = await axios.get(
        "https://api-feria-web-production.up.railway.app/api/peticion"
      );
      const datos = res.data;
      setTabla(datos);
    };
    getTabla();
    setlistaActulizada(false);
  }, [listaActulizada, tablaa]);

  const funciones = [
    { name: "Mercado", link: "/cliente-local/" },
    { name: "Solicitudes", link: "/cliente-local/solicitudes" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
        <link rel="shortcut icon" href="#"></link>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>

      <div>
        <Tabla
          peticion={peticion}
          tablaa={tablaa}
          setlistaActulizada={setlistaActulizada}
        />

        <Form peticion={peticion} setPeticion={setPeticion} />
      </div>
    </>
  );
}
