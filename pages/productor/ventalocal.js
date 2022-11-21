import Head from "next/head";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import { Ventas } from "../../components/productor/Ventas";
import { ProductosContextProvider } from "../../components/productor/ContextProducto";
import React, { useEffect } from "react";

export default function VentaLocal() {
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
      router?.push("/productor/ventalocal");
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
            <Ventas tipo="Local" lugar={"local"} />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}
