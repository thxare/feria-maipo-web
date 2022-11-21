import Head from "next/head";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import React, { useState, useEffect } from "react";
import { MostrarTransportes } from "../../components/transportista/mis-transportes/MostrarTransportes";
import { TransporteContextProvider } from "../../components/transportista/ContextTransporte";

export default function MiTransporte() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("loggedNoteAppUser")));
  }, []);

  useEffect(() => {
    try {
      const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
      if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
        router?.push("/redireccion/");
      } else if (typeof dato !== "undefined" || dato !== {}) {
        router?.push("/transportista/mitransporte");
      }
    } catch (err) {}
  }, []);

  return (
    <>
      <TransporteContextProvider user={user}>
        <Head>
          <title>Maipo Grande - Transportista</title>
        </Head>

        <div className="h-screen">
          <div className="h-max bg-gray-200">
            <Header funciones={funciones} />
            <h1 className="mt-10 mb-2 text-center text-3xl font-semibold md:ml-10 md:text-left">
              Mis Transportes
            </h1>
            <MostrarTransportes user={user} />
          </div>
        </div>
      </TransporteContextProvider>
    </>
  );
}
