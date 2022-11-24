import Head from "next/head";
import { router } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../../components/header/Header";
import { CardsIntancia } from "../../components/cliente-local/CardsInstancia";
import { ContainerPage } from "../../components/ui/ContainerPage";

export default function Compras() {
  const funciones = [
    { name: "Saldos", link: "/cliente-local/" },
    { name: "Productos", link: "/cliente-local/Intancias" },
    /* { name: "Solicitudes", link: "/cliente-local/solicitudes" }, */
  ];
  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-local/Intancias");
    }
  }, []);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get(
        "https://api-feria-web-production.up.railway.app/api/productos/"
      );
      const datos = res.data;
      const filteredDatos = datos.filter(
        (x) =>
          x.saldo === 0 
      );
      setProductos(filteredDatos);
    };
    getProductos();
  }, [productos]);

  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        <ContainerPage titulo={"Productos"}>
          <CardsIntancia productos={productos} />
        </ContainerPage>
      </div>
    </>
  );
}
