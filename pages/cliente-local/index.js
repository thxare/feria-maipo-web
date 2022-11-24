import Head from "next/head";
import { router } from "next/router";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/cliente-local/");
    }
  }, []);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get(
        "https://api-feria-web-production.up.railway.app/api/productos/"
      );
      const datos = res.data;
      const filteredDatos = datos.filter(
        (x) =>
          x.saldo === 1 
      );
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
        <Header funciones={funciones} />
        <ContainerPage titulo={"Saldos"}>
          <Cards productos={productos}/>
        </ContainerPage>
      </div>
    </>
  );
}
