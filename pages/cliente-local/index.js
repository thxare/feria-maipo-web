import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Mercado", link:"/cliente-local/" },
    { name: "Compras" , link:"/cliente-local/compras"},
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
