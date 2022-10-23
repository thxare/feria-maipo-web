import Head from "next/head";
import { useEffect, useState } from "react";
import { router } from "next/router";
import { Header } from "../../components/header/Header";
import { CardList } from "../../components/transportista/CardList";
import axios from "axios";

export default function Index(props) {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const [subastas, setSubastas] = useState([]);

  useEffect(() => {
    setSubastas(props.subastas);
  }, [props.subastas]);

  useEffect(() => {
    const dato = JSON.parse(localStorage.getItem("loggedNoteAppUser"));
    if (typeof dato === "undefined" || Object.entries(dato).length === 0) {
      router?.push("/redireccion/");
    } else if (typeof dato !== "undefined" || dato !== {}) {
      router?.push("/transportista/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div className="h-screen bg-gray-200">
        <div className="h-fit bg-gray-200">
          <Header funciones={funciones} />
          <h1 className="mt-10 mb-2 text-center text-4xl font-bold md:ml-10 md:text-left">
            Subastas
          </h1>
          <CardList subastas={subastas} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await axios.get(
    `https://api-feria-web-production.up.railway.app/api/subastas/`
  );
  //console.log(data.data);
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      subastas: data.data,
    },
  };
};
