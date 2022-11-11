import Head from "next/head";
import { router } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { ProductosContextProvider } from "../../components/productor/ContextProducto";
import { MostrarProductos } from "../../components/productor/mis-productos/MostrarProductos";

export default function Index(props) {
  const funciones = [
    { name: "Mis Productos", link: "/productor/" },
    { name: "Venta Externa", link: "/productor/ventaexterna" },
    { name: "Venta Local", link: "/productor/ventalocal" },
  ];

  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/productor/");
    }
  }, []);

  return (
    <>
      <ProductosContextProvider>
        <Head>
          <title>Maipo Grande - Productor</title>
        </Head>
        <div className="h-screen bg-gray-200">
          <div className="h-max bg-gray-200">
            <Header funciones={funciones} />
            <MostrarProductos />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}
