import axios from "axios";
import Head from "next/head";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { ProductosContextProvider } from "../../components/productor/ContextProducto";
import { MostrarProductos } from "../../components/productor/mis-productos/MostrarProductos";

export default function Index(props) {
  const funciones = [
    { name: "Mis Productos", link: "/productor/" },
    { name: "Venta Externa", link: "/productor/ventaexterna" },
    { name: "Venta Local", link: "/productor/ventalocal" },
  ];

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
