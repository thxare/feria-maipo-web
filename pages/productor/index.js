import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Mis Productos" },
    { name: "Venta Externa" },
    { name: "Venta Local" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Productor</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
    </>
  );
}
