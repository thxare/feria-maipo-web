import Head from "next/head";
import { Header } from "../../components/header/Header";
import { CardList } from "../../components/transportista/CardList";

export default function Index() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div className="h-full bg-gray-200">
        <Header funciones={funciones} />
        <h1 className="mt-10 mb-2 text-center text-4xl font-bold md:ml-10 md:text-left">
          Subastas
        </h1>
        <CardList />
      </div>
    </>
  );
}
