import Head from "next/head";
import { router } from "next/router";
import { useEffect } from "react";
import { CardsIntancia } from "../../components/cliente-extranjero/Cards";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Intancias de Compra", link: "/cliente-externo/" },
    { name: "Solicitudes", link: "/cliente-externo/solicitudes" },  
  ];
  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-externo/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Externo</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        <CardsIntancia />
      </div>
    </>
  );
}