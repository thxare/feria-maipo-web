import Head from "next/head";
import { Header } from "../../components/header/Header";
import { MisProductos } from "../../components/productor/mis-productos/MisProductos";

export default function Index() {
  const funciones = [
    { name: "Mis Productos", link: "/productor/" },
    { name: "Venta Externa", link: "/productor/ventaexterna" },
    { name: "Venta Local", link: "/productor/ventalocal" },
  ];
  return (
    <>
      <Head>
        <title>Maipo Grande - Productor</title>
      </Head>
      <div className="h-max bg-gray-200">
        <Header funciones={funciones} />
        <MisProductos />
      </div>
    </>
  );
}
