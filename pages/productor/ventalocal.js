import Head from "next/head";
import { Header } from "../../components/header/Header";
import { Ventas } from "../../components/productor/Ventas";
import { ProductosContextProvider } from "../../components/productor/Context";

export default function VentaLocal() {
  const funciones = [
    { name: "Mis Productos", link: "/productor/" },
    { name: "Venta Externa", link: "/productor/ventaexterna" },
    { name: "Venta Local", link: "/productor/ventalocal" },
  ];
  return (
    <>
      <ProductosContextProvider>
        <Head>
          <title>Maipo Grande - Productor</title>
        </Head>
        <div className="h-screen bg-gray-200">
          <div className="h-max bg-gray-200">
            <Header funciones={funciones} />
            <Ventas tipo="Local" lugar={"local"} />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}
