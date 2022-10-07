import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import Tabla from "../../components/cliente-local/Tabla";
import Form from "../../components/cliente-local/Form";
/* import Dropdown from "../../components/cliente-local/Dropdown"; */

<link rel="shortcut icon" href="#"></link>;

export default function Compras() {
  const [tabli, setTabli] = useState({
    nombre: "",
    calidad: "",
    kilogramos: 0,
  });

  const [tablaa, setTabla] = useState([]);

  useEffect(() => {
    const getTabla = () => {
      fetch("http://localhost:3001/api/peticion")
        .then((res) => res.json())
        .then((res) => setTabla(res));
    };
    getTabla();
  }, []);

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
        <Tabla tablaa={tablaa} />

        <Form tabli={tabli} setTabli={setTabli} />
      </div>
    </>
  );
}
