import axios from "axios";
import Head from "next/head";
import { Header } from "../../../components/header/Header";
import { Postulacion } from "../../../components/transportista/Postulacion";

export default function DetalleSubasta({
  id_subasta,
  ganador,
  fecha_ter,
  fecha_inicio,
  cargo,
  total,
  estado,
  id_venta,
}) {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const dateInicio = new Date(fecha_inicio);
  const fechaInicio = dateInicio.toLocaleDateString();
  const dateTermino = new Date(fecha_ter);
  const fechaTermino = dateTermino.toLocaleDateString();
  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div className="h-full min-h-screen bg-gray-200">
        <Header funciones={funciones} />
        <h1 className="mt-10 mb-2 text-center text-2xl font-bold md:text-4xl">
          {`Subasta ${id_subasta} ${fechaInicio}`}
        </h1>
        <div className="mx-auto mt-8 mb-7 grid w-3/4 grid-cols-1 place-content-center rounded-lg bg-slate-100 md:grid-cols-5">
          <div className="col-span-1 p-3 md:col-span-3">
            <h2 className="text-center text-lg font-bold">
              Detalles de la subasta
            </h2>
            <div className="p-4">
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="fechaInicio"
                >
                  Fecha inicio
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fechaInicio}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="fechaTermino"
                >
                  Fecha término
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaTermino"
                  id="fechaTermino"
                  value={fechaTermino}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="fechaInicio"
                >
                  Fecha inicio
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fechaInicio}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="fechaInicio"
                >
                  Fecha inicio
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fechaInicio}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 p-3 md:col-span-2">
            <h2 className="text-center text-lg font-bold">Postulación</h2>
            <Postulacion />
          </div>
        </div>
      </div>
    </>
  );
}

// DetalleSubasta.defaultProps = {
//   id_subasta: 1,
//   ganador: "Luciano",
//   fecha_ter: `03/10/12`,
//   fecha_inicio: `03/10/12`,
//   cargo: 1000,
//   total: 25000,
//   estado: "activo",
//   id_venta: 1,
// };

// Data fetching en tiempo de buildtime, generando páginas staticas ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}

// Data fetching en el servidor
export async function getServerSideProps(context) {
  // Api en railway
  // const api =  https://api-feria-web-production.up.railway.app/api/subastas/
  const { params, res } = context;
  console.log(params)
  const { id } = params;
  const data = await axios.get(
    `https://api-feria-web-production.up.railway.app/api/subastas/${id}`
  );
  console.log(data.data)
  
  if (!data) {
    return {
      redirect: {
        destination: "/transportista",
        permanent: false,
      },
    };
  }
  //const props = data.data;
  
  return { props : data.data };

  // if (res) {
  //   res.writeHead(301, { Location: "/transportista" }).end();
  // }
}

// export async function getServerSideProps(context) {
// const { params, res } = context;
// const { id } = params;

// const apiResponse = await fetch(
// `https://api-feria-web-production.up.railway.app/api/subastas/${id}`
// );
// if (apiResponse.ok) {
// const props = await apiResponse.json();
// return { props };
// }
// if (res) {
// res.writeHead(301, { Location: " /transportista " }).end();
// }
// }
