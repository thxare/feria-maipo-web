import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Index() {
  const funciones = [{ name: "Subastas" }, {name: "Mi Transporte"}];
  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div>
        {" "}
        <Header funciones={funciones} />
      </div>
    </>
  );
}
