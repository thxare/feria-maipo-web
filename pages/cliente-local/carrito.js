import Head from "next/head";
import React, { useEffect, useState } from "react";

import { CarritoCompras } from "../../components/CarritoCompras";
import { ProductosCarritoContextProvider } from "../../components/ContextDetalleVenta";
import { Header } from "../../components/header/Header";
import { UserContextProvider } from "../../components/login/ContextUser";

export default function Carrito(props) {
  const funciones = [
    { name: "Saldos", link: "/cliente-local/" },
    { name: "Productos", link: "/cliente-local/Intancias" },
  ];
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    setProductosCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, []);

  return (
    <>
      <UserContextProvider>
        <ProductosCarritoContextProvider>
          <Head>
            <title>Maipo Grande - Productor</title>
          </Head>
          <div className="h-screen bg-gray-200">
            <div className="h-max bg-gray-200">
              <Header funciones={funciones} />
              <h1 className="mt-10 mb-2 text-center text-3xl font-semibold md:ml-10 md:text-left">
                Carrito de compras
              </h1>
              <CarritoCompras
                productosCarrito={productosCarrito}
                setProductosCarrito={setProductosCarrito}
              />
            </div>
          </div>
        </ProductosCarritoContextProvider>
      </UserContextProvider>
    </>
  );
}
