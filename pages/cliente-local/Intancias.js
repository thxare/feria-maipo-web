import Head from "next/head";
import { Header } from "../../components/header/Header";
import { CardsIntancia } from "../../components/cliente-local/CardsInstancia"

export default function Compras() {
  const funciones = [
    { name: "Intancias de Compra", link: "/cliente-local/Intancias" },
    { name: "Solicitudes", link: "/cliente-local/solicitudes" },
    { name: "Mercado", link:"/cliente-local/" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Cliente Local</title>
      </Head>
      <div>
        <Header funciones={funciones} />
        
        <CardsIntancia/>
      </div>
    </>
  );
}
