import Head from "next/head";
import { useState, useEffect } from "react";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import { Tabla } from "../../components/cliente-local/Tabla";
import { Form } from "../../components/cliente-local/Form";
import axios from "axios";

<link rel="shortcut icon" href="#"></link>;

export default function Compras() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, []);
  const id_usuario = user?.id_usuario
  const [peticion, setPeticion] = useState({
    nombre: "",
    kilogramos: 0,
    id_usuario: id_usuario,
    estado: "Activo",
    locacion: "local",
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
    { name: "Intancias de Compra", link: "/cliente-local/Intancias" },
    { name: "Solicitudes", link: "/cliente-local/solicitudes" },
  ];
  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-local/solicitudes");
    }
  }, []);
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
