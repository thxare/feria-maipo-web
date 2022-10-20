import Head from "next/head";
import { Header } from "../../components/header/Header";
import { TablaTransportes } from "../../components/transportista/mis-transportes/TablaTransportes";
import axios from "axios";
import { FormularioTransporte } from "../../components/transportista/mis-transportes/FormularioTransporte";
import { useState, useEffect, useCallback } from "react";

var idUsuario = 5;

export default function MiTransporte() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];

  const [transporte, setTransporte] = useState({
    patente: "",
    tamano: "",
    id_usuario: 5,
    capacidad_carga: 0,
    refrigeracion: "",
    id_tipo: 0,
  });
  const [tabla, setTabla] = useState([]);

  const [listaActulizada, setListaActulizada] = useState(true);

  useEffect(() => {
    const listarTabla = async () => {
      const data = await axios.get(
        `https://api-feria-web-production.up.railway.app/api/transportes/`
      );
      const datos = data.data;
      const transportesFiltrados = datos.filter(
        (transportes) => transportes.id_usuario === idUsuario
      );
      setTabla(transportesFiltrados);
    };
    if (listaActulizada) listarTabla();

    setListaActulizada(false);
  }, [tabla, listaActulizada]);

  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>

      <div className="h-screen">
        <div className="h-max bg-gray-200">
          <Header funciones={funciones} />
          <h1 className="mt-10 mb-2 text-center text-4xl font-bold md:ml-10 md:text-left">
            Mis Transportes
          </h1>
          <TablaTransportes
            tabla={tabla}
          />
          <FormularioTransporte
            transporte={transporte}
            setTransporte={setTransporte}
            setListaActulizada={setListaActulizada}
          />
        </div>
      </div>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const data = await axios.get(
//     `https://api-feria-web-production.up.railway.app/api/transportes/`
//   );
//   //console.log(data.data);
//   const transportesFiltrados = data.data.filter((transportes) => {
//     transportes.id_usuario == idUsuario;
//   });
//   if (!transportesFiltrados) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       transportes: transportesFiltrados,
//     },
//   };
// };
