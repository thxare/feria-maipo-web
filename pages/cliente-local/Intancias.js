import Head from "next/head";
import { router } from "next/router";
import { useEffect } from "react";
import { Header } from "../../components/header/Header";
import { CardsIntancia } from "../../components/cliente-local/CardsInstancia";

export default function Compras() {
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
      router?.push("/cliente-local/Intancias");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        <CardsIntancia />
      </div>
    </>
  );
}
