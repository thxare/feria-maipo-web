import Head from "next/head";
import { Header } from "../../components/header/Header";

export default function VentaLocal() {
    const funciones = [
        { name: "Mis Productos", link:"/productor/"},
        { name: "Venta Externa" , link:"/productor/ventaexterna"},
        { name: "Venta Local" , link:"/productor/ventalocal"},
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
