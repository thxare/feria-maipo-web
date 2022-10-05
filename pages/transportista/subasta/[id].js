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

  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div className="h-full min-h-screen bg-gray-200">
        <Header funciones={funciones} />
        <h1 className="mt-10 mb-2 text-center text-2xl font-bold md:text-4xl">
          {`Subasta ${id_subasta} ${fecha_inicio}`}
        </h1>
        <div className="mx-auto mt-8 mb-7 grid w-3/4 grid-cols-1 place-content-center rounded-lg bg-slate-100 md:grid-cols-5">
          <div className="col-span-1 p-3 md:col-span-3">
            <h2 className="text-center text-lg font-bold">
              Detalles de la subasta
            </h2>
            <div className="p-4">
              <div className="text-center md:flex my-2">
                <label className="mr-auto mb-2 block font-semibold" htmlFor="fechaInicio">
                  Fecha inicio
                </label>
                <input
                  className="mx-auto w-2/3 px-2 rounded-md border border-green text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fecha_inicio}
                />
              </div>
              <div className="text-center md:flex my-2">
                <label className="mr-auto mb-2 block font-semibold" htmlFor="fechaTermino">
                  Fecha término
                </label>
                <input
                  className="mx-auto w-2/3 px-2 rounded-md border border-green text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaTermino"
                  id="fechaTermino"
                  value={fecha_ter}
                />
              </div>
              <div className="text-center md:flex my-2">
                <label className="mr-auto mb-2 block font-semibold" htmlFor="fechaInicio">
                  Fecha inicio
                </label>
                <input
                  className="mx-auto w-2/3 px-2 rounded-md border border-green text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fecha_inicio}
                />
              </div>
              <div className="text-center md:flex my-2">
                <label className="mr-auto mb-2 block font-semibold" htmlFor="fechaInicio">
                  Fecha inicio
                </label>
                <input
                  className="mx-auto w-2/3 px-2 rounded-md border border-green text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fecha_inicio}
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

DetalleSubasta.defaultProps = {
  id_subasta: 1,
  ganador: "Luciano",
  fecha_ter: `03/10/12`,
  fecha_inicio: `03/10/12`,
  cargo: 1000,
  total: 25000,
  estado: "activo",
  id_venta: 1,
};

// Data fetching en tiempo de buildtime, generando páginas staticas ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}

{
  /*// Data fetching en el servidor
export async function getServerSideProps(context) {
  // Api en railway 
  // const api =  https://api-feria-web-production.up.railway.app/api/subastas/
  const { params, res } = context;
  const { id } = params;
  const apiResponse = await fetch(`https://localhost:3001/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return {props}
    ;
  }
  if (res) {
    res.writeHead(301, { Location: "/transportista" }.end());
  }
}
*/
}

{
  /* <h2 className="text-center text-lg font-bold">
              Detalles de la subasta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 grid-rows-4">
              <div className="p-2 col-span-1 md:col-span-2">
                <label
                  className="text-start font-semibold"
                  htmlFor="fechaInicio"
                >
                  Fecha inicio:
                </label>
                <input
                  disabled
                  className="rounded-md border border-green text-center shadow-green disabled:bg-white md:justify-self-start"
                  type="datetime"
                  name="fechaInicio"
                  id="fechaInicio"
                  value={fecha_inicio}
                />
              </div>
              <div className="p-2 col-span-1 md:col-span-2">
                <label className="font-semibold" htmlFor="fechaTermino                                                                                               ">
                  Fecha término:
                </label>
                <input
                  disabled
                  className="rounded-md border border-green text-center shadow-green disabled:bg-white md:justify-self-start"
                  type="datetime"
                  name="fechaTermino"
                  id="fechaTermino"
                  value={fecha_ter}
                />
              </div>
              <div className="p-2 col-span-1 md:col-span-2">
                <label className="font-semibold" htmlFor="ganador">
                  Ganador:
                </label>
                <input
                  disabled
                  className="rounded-md border border-green text-center shadow-green disabled:bg-white md:justify-self-start"
                  type="text"
                  name="ganador"
                  id="ganador"
                  value={ganador}
                />
              </div>
              <div className="p-2 col-span-1 md:col-span-2"></div>
            </div> */
}
