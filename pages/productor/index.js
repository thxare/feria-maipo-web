import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/header/Header";
import { ProductosContextProvider } from "../../components/productor/Context";
import { MostrarProductos } from "../../components/productor/mis-productos/MostrarProductos";

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
      .then((res) => {
        const data = res.data;
        const filtrado = data
          .filter((dato) => dato)
          .sort((a, b) => b.id_producto - a.id_producto);
        setProductos(filtrado)
      });
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
    const find = [...productos].find((producto) => producto.id_producto === id);

    callback();
  };


  return (
    <>
      <ProductosContextProvider>
        <Head>
          <title>Maipo Grande - Productor</title>
        </Head>
        <div className="h-screen bg-gray-200">
          <div className="h-max bg-gray-200">
            <Header funciones={funciones} />
            <MostrarProductos />
          </div>
        </div>
      </ProductosContextProvider>
    </>
  );
}
