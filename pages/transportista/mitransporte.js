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
      <div className="h-max bg-gray-200">
        <Header funciones={funciones} />
        <h1 className="mt-10 mb-2 text-center text-4xl font-bold md:ml-10 md:text-left">
          Mi Transporte
        </h1>
      </div>
    </>
  );
}
