import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Mercado" },
    { name: "Compras" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
    </>
  );
}
