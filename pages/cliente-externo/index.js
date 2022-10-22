import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Mercado", link:"/cliente-externo/" },
    { name: "Compras" , link:"/cliente-externo/compras"},
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Externo</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
    </>
  );
}
