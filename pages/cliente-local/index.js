import Head from "next/head";
import { router } from "next/router";
import React, { useEffect } from "react";
import { Header } from "../../components/header/Header";
import { Cards } from "../../components/cliente-local/Cards";
import { ContainerPage } from "../../components/ui/ContainerPage";

export default function Index() {
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
      router?.push("/cliente-local/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        <ContainerPage titulo={"Saldos"}>
          <Cards />
        </ContainerPage>
      </div>
    </>
  );
}
