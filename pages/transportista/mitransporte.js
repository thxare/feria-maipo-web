import Head from "next/head";
import { Header } from "../../components/header/Header";
import { TablaTransportes } from "../../components/transportista/mis-transportes/TablaTransportes";
import axios from "axios";
import { FormularioTransporte } from "../../components/transportista/mis-transportes/FormularioTransporte";
import { useState, useEffect } from "react";

export default function MiTransporte() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];

  const [tabla, setTabla] = useState([]);
  const [user, setUser] = useState();
  const [listaActulizada, setListaActulizada] = useState(true);

  useEffect(() => {
    const listarTabla = async () => {
      setUser(JSON.parse(window.localStorage.getItem("loggedNoteAppUser")));
      const { id_usuario } = user;
      const { data } = await axios.get(
        `https://api-feria-web-production.up.railway.app/api/transportes/`
      );
      const transportesFiltrados = data.filter(
        (transportes) => transportes.id_usuario === id_usuario
      );
      setTabla(transportesFiltrados);
    };
    if (listaActulizada) listarTabla();

    setListaActulizada(false);
  }, [user, tabla, listaActulizada]);

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
          <TablaTransportes tabla={tabla} />
          {/* Aquí en el formulario necesito el id_usuario, en un principio le pasaba el usuario completo,
          pero en realidad basta con el id nada más */}
          <FormularioTransporte
            //transporte={transporte}
            //setTransporte={setTransporte}
            setListaActulizada={setListaActulizada}
            user={user}
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
