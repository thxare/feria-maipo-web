import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function Subasta() {
    const funciones = [
        { name: "Subastas", link: "/tranportista/" },
        { name: "Mi Transporte", link: "/tranportista/mitransporte"},
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
  