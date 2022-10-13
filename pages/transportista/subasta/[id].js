import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../../components/header/Header";
import { Postulacion } from "../../../components/transportista/Postulacion";
import { Spinner } from "../../../components/transportista/Spinner";
import { useState, useEffect } from "react";
import { getOneSubasta } from "../../../utils/fetching";

export default function DetalleSubasta() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const [subasta, setSubasta] = useState(null);
  const router = useRouter();
  //console.log(router.query)
  useEffect(() => {
    const fetchingPost = async () => {
      const data = await getOneSubasta(router.query.id);
      //console.log(data);
      setSubasta(await data);
    };
    fetchingPost();
  }, [router.query.id]);

  if (!subasta) return <Spinner />;

  const dateInicio = new Date(subasta.fecha_inicio);
  const fechaInicio = dateInicio.toLocaleDateString();
  const dateTermino = new Date(subasta.fecha_ter);
  const fechaTermino = dateTermino.toLocaleDateString();

  return (
    <>
      <Head>
        <title>Maipo Grande - Transportista</title>
      </Head>
      <div className="h-full min-h-screen bg-gray-200">
        <Header funciones={funciones} />
        <h1 className="mt-10 mb-2 text-center text-2xl font-bold md:text-4xl">
          {`Subasta ${subasta.id_subasta} ${fechaInicio}`}
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
                  htmlFor="ganador"
                >
                  Ganador
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="text"
                  name="ganador"
                  id="ganador"
                  value={subasta.ganador}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="estado"
                >
                  Estado
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="text"
                  name="estado"
                  id="estado"
                  value={subasta.estado}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="cargo"
                >
                  Cargo
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="text"
                  name="cargo"
                  id="cargo"
                  value={subasta.cargo != 0 ? subasta.cargo : "Por definir"}
                />
              </div>
              <div className="my-2 text-center md:flex">
                <label
                  className="mr-auto mb-2 block font-semibold"
                  htmlFor="total"
                >
                  Total
                </label>
                <input
                  className="right-4 w-2/3 rounded-md border border-green px-2 text-center disabled:bg-white md:w-1/3"
                  disabled
                  type="text"
                  name="total"
                  id="total"
                  value={subasta.total != 0 ? subasta.total : "Por definir"}
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

// Data fetching en tiempo de buildtime, generando páginas staticas 

export const getStaticProps = async (context) => {
  const { params } = context;

  const { id } = params;
  const data = await axios.get(
    `https://api-feria-web-production.up.railway.app/api/subastas/${id}`
  );
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: data.data,
  };
};

export const getStaticPaths = async () => {
  const data = await axios.get(
    `https://api-feria-web-production.up.railway.app/api/subastas/`
  );
  const subastas = data.data;

  return {
    paths: subastas.map((subasta) => {
      return { params: { id: toString(subasta.id_subasta) } };
    }),
    fallback: true,
  };
};

// id_subasta,
// ganador = "Sin definir",
// fecha_ter,
// fecha_inicio,
// cargo = 0,
// total = 0,
// estado = "Pendiente",
// id_venta,
