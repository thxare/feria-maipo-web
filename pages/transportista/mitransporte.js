import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function MiTransporte() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
    </>
  );
}
