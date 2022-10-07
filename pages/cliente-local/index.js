import Head from "next/head";
import { Header } from "../../components/header/Header";
import { Cards } from "../../components/cliente-local/Cards";

export default function Index() {
  const funciones = [
    { name: "Mercado", link: "/cliente-local/" },
    { name: "Solicitudes", link: "/cliente-local/solicitudes" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}
