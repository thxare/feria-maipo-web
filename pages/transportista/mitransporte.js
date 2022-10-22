import Head from "next/head";
import { Header } from "../../components/header/Header";
import { TablaTransportes } from "../../components/transportista/mis-transportes/TablaTransportes";
import axios from "axios";
import { FormularioTransporte } from "../../components/transportista/mis-transportes/FormularioTransporte";
import { useState, useEffect } from "react";
import { MostrarTransportes } from "../../components/transportista/mis-transportes/MostrarTransportes";

export default function MiTransporte() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("loggedNoteAppUser")));
  }, []);

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
          <MostrarTransportes user={user}/>
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
