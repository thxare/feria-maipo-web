import Head from "next/head";
import { Header } from "../../components/header/Header";
import { Cards } from "../../components/cliente-local/Cards";

export default function Index() {
  const funciones = [
    { name: "Intancias de Compra", link: "/cliente-local/Intancias" },
    { name: "Solicitudes", link: "/cliente-local/solicitudes" },
    { name: "Mercado", link:"/cliente-local/" },
    
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        <Cards />
      </div>
    </>
  );
}
