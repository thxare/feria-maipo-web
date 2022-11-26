import Head from "next/head";
import { router } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Cards } from "../../components/cliente-local/Cards";
import { ContainerPage } from "../../components/ui/ContainerPage";
import axios from "axios";

export default function Index() {
  const funciones = [
    { name: "Saldos", link: "/cliente-local/" },
    { name: "Productos", link: "/cliente-local/Intancias" },
    /* { name: "Solicitudes", link: "/cliente-local/solicitudes" }, */
  ];

  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-local/");
    }
  }, []);
  useEffect(() => {
    setProductosCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, []);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get(
        "https://api-feria-web-production.up.railway.app/api/productos/"
      );
      const datos = res.data;
      const filteredDatos = datos.filter((x) => x.saldo === 1);
      setProductos(filteredDatos);
    };
    getProductos();
  }, [productos]);

  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header
          funciones={funciones}
          carrito={true}
          tipoCliente="cliente-local"
          cantidad={productosCarrito ? productosCarrito.length : 0}
        />
        <ContainerPage titulo={"Saldos"}>
          <Cards productos={productos} />
        </ContainerPage>
      </div>
    </>
  );
}
