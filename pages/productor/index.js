import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { MisProductos } from "../../components/productor/mis-productos/MisProductos";

export default function Index() {
  const funciones = [
    { name: "Mis Productos", link: "/productor/" },
    { name: "Venta Externa", link: "/productor/ventaexterna" },
    { name: "Venta Local", link: "/productor/ventalocal" },
  ];
  const [productos, setProductos] = useState([]);

  useEffect(() => {}, [productos]);
  console.log(productos);

  const onDelete = (id) => {
    setProductos([...productos].filter((producto) => producto.id !== id));
    console.log(id);
  };

  const onUpdate = (id) => {
    const find = [...productos].find((producto) => producto.id === id);
    console.log(find);
  };

  return (
    <>
      <Head>
        <title>Maipo Grande - Productor</title>
      </Head>
      <div className="h-screen bg-gray-200">
        <div className="h-max bg-gray-200">
          <Header funciones={funciones} />
          <MisProductos
            productos={productos}
            setProductos={setProductos}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </>
  );
}
