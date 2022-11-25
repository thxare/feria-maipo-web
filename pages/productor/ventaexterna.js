import Head from "next/head";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import { Ventas } from "../../components/productor/Ventas";
import { ProductosContextProvider } from "../../components/productor/ContextProducto";
import React, { useEffect } from "react";

export default function VentaExterna() {
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
      router?.push("/productor/ventaexterna");
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
            <Header funciones={funciones} carrito={false} />
            <Ventas tipo="Externa" lugar={"extranjero"} />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}

