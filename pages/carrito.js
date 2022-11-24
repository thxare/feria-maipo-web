import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { CarritoCompras } from "../components/CarritoCompras";
import { ProductosContextProvider } from "../components/productor/ContextProducto";

export default function Carrito(props) {
  const funciones = [{ name: "Carrito de compras", link: "/carrito/" }];

  return (
    <>
      <ProductosContextProvider>
        <Head>
          <title>Maipo Grande - Productor</title>
        </Head>
        <div className="h-screen bg-gray-200">
          <div className="h-max bg-gray-200">
            <Header funciones={funciones} />
            <h1 className="mt-10 mb-2 text-center text-3xl font-semibold md:ml-10 md:text-left">
              Carrito de compras
            </h1>
            <CarritoCompras />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}
