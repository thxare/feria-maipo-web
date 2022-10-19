import { Card } from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSubastas } from "../../utils/fetching.js";

export const CardList = ({subastas}) => {
  //const [subastas, setSubastas] = useState([]);
  // const cargarDatos = async () => {
  //   const datos = await getSubastas();
  //   setSubastas(datos.data);
  // };
  // useEffect(() => {
  //   cargarDatos();
  // }, []);

  return (
    <div className="grid grid-cols-8 justify-center gap-5 md:gap-3 px-14 pt-14">
      {subastas?.map((subasta) => {
        return (
          <Card
            key={subasta.id_subasta}
            id={subasta.id_subasta}
            ganador={subasta.ganador}
            fechaInicio={subasta.fecha_inicio}
            fechaTermino={subasta.fecha_ter }
            estado={subasta.estado}
          />
        );
      })}
    </div>
  );
};

// Data fetching en el servidor
// export const getServerSideProps = async () => {
//   // Api en railway
//   // const api =  https://api-feria-web-production.up.railway.app/api/subastas/

//   const data = await axios.get(
//     `https://api-feria-web-production.up.railway.app/api/subastas/`
//   );
//   // console.log(data.data);
//   // if (!data) {
//   //   return {
//   //     redirect: {
//   //       destination: "/transportista",
//   //       permanent: false,
//   //     },
//   //   };
//   // }
//   //const subastas = await data.data;
//   return {
//     props: {
//       subastas: [
//         {
//           id_subasta: 1,
//           ganador: "Luciano",
//           fecha_inicio: "2010-10-10",
//           fecha_ter: "2010-12-10",
//           estado: "activo",
//         },
//       ],
//     },
//   };

//   // if (res) {
//   //   res.writeHead(301, { Location: "/transportista" }).end();
//   // }
// };
