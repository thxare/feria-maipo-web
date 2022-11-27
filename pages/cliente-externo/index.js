import Head from "next/head";
import { router } from "next/router";
import React, { useEffect, useState } from "react";
import { CardsIntancia } from "../../components/cliente-extranjero/Cards";
import { Header } from "../../components/header/Header";
import { ContainerPage } from "../../components/ui/ContainerPage";
import axios from "axios";
import { Cards } from "../../components/cliente-extranjero/Cards";
import dayjs from "dayjs";
import { Spinner } from "../../components/ui/Spinner";

export default function Index() {
  const funciones = [
    { name: "Productos", link: "/cliente-externo/" },
    /* { name: "Solicitudes", link: "/cliente-externo/solicitudes" }, */
  ];
  const [productos, setProductos] = useState();
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

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get(
        "https://api-feria-web-production.up.railway.app/api/productos/"
      );
      const datos = res.data;
      const fecha_acutal = dayjs(new Date());
      const dia_actual = fecha_acutal.$D;
      const mes_actual = fecha_acutal.$M + 1;
      const anio_actual = fecha_acutal.$y;

      const filteredDatos = datos.filter((x) => {
        const fechaLimite = dayjs(x.fecha_limite);
        const dia_producto = fechaLimite.$D;
        const mes_producto = fechaLimite.$M + 1;
        const anio_producto = fechaLimite.$y;

        if  (
          (anio_producto >= anio_actual &&
            mes_producto < mes_actual &&
            x.cantidad > 0) ||
          (anio_producto >= anio_actual &&
            mes_producto == mes_actual &&
            dia_producto < dia_actual)
        )  {
          console.log("saldos");
        } else {
          if (x.cantidad > 0) {
            return x;
          }
        }

        return filteredDatos;
      });
      setProductos(filteredDatos);
    };
    getProductos();
  }, []);

  useEffect(() => {
    setProductosCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, [update]);

  if (!productos) return <Spinner />;

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
          cantidad={productosCarrito?.length ? productosCarrito.length : 0}
        />
        <ContainerPage titulo={"Productos"}>
          <Cards productos={productos} setUpdate={setUpdate} />
        </ContainerPage>
      </div>
    </>
  );
}
