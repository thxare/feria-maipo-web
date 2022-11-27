/* import Head from "next/head";
import React, { useState, useEffect } from "react";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import { Tabla } from "../../components/cliente-extranjero/Tabla";
import { Form } from "../../components/cliente-extranjero/Form";
import axios from "axios";

<link rel="shortcut icon" href="#"></link>;

export default function Compras() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, []);
  const id_usuario = user?.id_usuario;
  const [peticion, setPeticion] = useState({
    nombre: "",
    kilogramos: 0,
    id_usuario: id_usuario,
    estado: "Activo",
    locacion: "extranjero",
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
    { name: "Intancias de Compra", link: "/cliente-externo/" },
    { name: "Solicitudes", link: "/cliente-externo/solicitudes" },
  ];
  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-externo/solicitudes/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Externo</title>
        <link rel="shortcut icon" href="#"></link>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>

      <div className="h-screen bg-gray-200 p-8">
        <div className="h-max bg-gray-200">
          <Tabla
            peticion={peticion}
            tablaa={tablaa}
            setlistaActulizada={setlistaActulizada}
          />

          <Form peticion={peticion} setPeticion={setPeticion} />
        </div>
      </div>
    </>
  );
}
 */