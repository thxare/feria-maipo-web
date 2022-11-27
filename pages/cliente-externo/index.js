import Head from "next/head";
import { router } from "next/router";
import React, { useEffect, useState } from "react";
import { CardsIntancia } from "../../components/cliente-extranjero/Cards";
import { Header } from "../../components/header/Header";
import { ContainerPage } from "../../components/ui/ContainerPage";
import axios from "axios";
import { Cards } from "../../components/cliente-extranjero/Cards";

export default function Index() {
  const funciones = [
    { name: "Productos", link: "/cliente-externo/" },
    /* { name: "Solicitudes", link: "/cliente-externo/solicitudes" }, */
  ];

  const [productosCarrito, setProductosCarrito] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-externo/");
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
      const filteredDatos = datos.filter((x) => x.saldo === 0);
      setProductos(filteredDatos);
    };
    getProductos();
  }, [productos]);

  useEffect(() => {
    setProductosCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, [update]);

  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Externo</title>
      </Head>
      <div>
        <Header
          funciones={funciones}
          carrito={true}
          tipoCliente="cliente-externo"
          cantidad={productosCarrito.length}
        />
        <ContainerPage titulo={"Productos"}>
          <Cards productos={productos} setUpdate={setUpdate} />
        </ContainerPage>
      </div>
    </>
  );
}
