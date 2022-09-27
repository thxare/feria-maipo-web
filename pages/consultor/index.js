import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [
    { name: "Reportes", link:"/consultor/" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Consultor</title>
      </Head>
      <div>
        <Header funciones={funciones} />
      </div>
    </>
  );
}
