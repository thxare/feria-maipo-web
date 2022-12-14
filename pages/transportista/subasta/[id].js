import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../../components/header/Header";
import { Postulacion } from "../../../components/transportista/Postulacion";
import { Spinner } from "../../../components/ui/Spinner";
import React, { useState, useEffect } from "react";
import { getOneSubasta } from "../../../utils/fetching";
import { TransporteContextProvider } from "../../../components/transportista/ContextTransporte";

export default function DetalleSubasta() {
  const funciones = [
    { name: "Subastas", link: "/transportista/" },
    { name: "Mi Transporte", link: "/transportista/mitransporte" },
  ];
  const [subasta, setSubasta] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("loggedNoteAppUser")));
  }, []);

  const router = useRouter();
  useEffect(() => {
    const fetchingSubasta = async () => {
      const data = await getOneSubasta(router.query.id);
      //console.log(data);
      setSubasta(await data);
      const estado = data?.estado.toLowerCase() !== "activa";
      setIsActive(estado);
    };
    fetchingSubasta();
  }, [router.query.id]);

  if (!subasta) return <Spinner />;

  const dateInicio = new Date(subasta.fecha_inicio);
  const fechaInicio = dateInicio.toLocaleDateString();
  const dateTermino = new Date(subasta.fecha_ter);
  const fechaTermino = dateTermino.toLocaleDateString();

  return (
    <>
      <TransporteContextProvider user={user}>
        <Head>
          <title>Maipo Grande - Transportista</title>
        </Head>
        <div className="h-full min-h-screen bg-gray-200">
          <Header funciones={funciones} />
          <h1 className="mt-10 mb-2 text-center text-2xl font-semibold md:text-3xl">
            {`Subasta ${subasta.id_subasta} ${fechaInicio}`}
          </h1>
          <div
            className="mx-auto mt-8 mb-7 grid w-3/4 grid-cols-1 place-content-center rounded-lg bg-slate-100 md:grid-cols-5"
            data-testid="containerCard"
          >
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
                    Fecha Inicio
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
                    Fecha T??rmino
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
                    className="right-4 w-2/3 rounded-md border border-green px-2 text-center capitalize disabled:bg-white md:w-1/3"
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
                    className="right-4 w-2/3 rounded-md border border-green px-2 text-center capitalize disabled:bg-white md:w-1/3"
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
                <div className="my-2 text-center md:flex">
                  <label
                    className="mr-auto mb-2 block font-semibold"
                    htmlFor="total"
                  >
                    Observaciones
                  </label>
                  <p className="left-3">{subasta.observaciones}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-3 md:col-span-2">
              <h2 className="text-center text-lg font-bold">Postulaci??n</h2>
              <Postulacion estado={isActive} idSubasta={subasta.id_subasta}/>
            </div>
          </div>
        </div>
      </TransporteContextProvider>
    </>
  );
}
