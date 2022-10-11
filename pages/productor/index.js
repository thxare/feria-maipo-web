import axios from "axios";
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

  useEffect(() => {
    axios
      .get("https://api-feria-web-production.up.railway.app/api/productos")
      .then((res) => setProductos(res.data));
  }, []);

  const onDelete = (id) => {
    axios
      .delete(
        `https://api-feria-web-production.up.railway.app/api/productos/${id}`
      )
      .then((res) => {
        setProductos(
          [...productos].filter((producto) => producto.id_producto !== id)
        );
      });
  };

  const onUpdate = (id, callback) => {
    const valueText = "Actualizar"
    const find = [...productos].find((producto) => producto.id_producto === id);
    callback();
    return valueText, find;


  };

  const onSave = async (output)=>{
    const resp = await axios.post(
      "https://api-feria-web-production.up.railway.app/api/productos",
      output
    );
    closeModal();
  }

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
            onSave={onSave}
          />
        </div>
      </div>
    </>
  );
}
