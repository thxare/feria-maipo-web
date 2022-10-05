import { Card } from "./Card";
import { useState, useEffect } from "react";

export const CardList = (props) => {
  useEffect(() => {});

  const subastas = [
    {
      id: 1,
      title: "Hola",
    },
    {
      id: 2,
      title: "Chao",
    },
    {
      id: 3,
      title: "Chao",
    },
    {
      id: 4,
      title: "Chao",
    },
    {
      id: 5,
      title: "Chao",
    },
  ];
  return (
    <div className="grid grid-cols-8 justify-center gap-10 px-14 py-14">
      {subastas.map((subasta) => {
        console.log(subasta.id);
        return <Card key={subasta.id} id={subasta.id} title={subasta.title} />;
      })}
    </div>
  );
};

{
  /* <Card title="Hola" />
<Card title="Mundo" />
<Card title="Chao" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" />
<Card title="Todos" /> */
}

// Data fetching en el servidor
// export async function getServerSideProps(context) {
//   // Api en railway
//   // const api =  https://api-feria-web-production.up.railway.app/
//   const { params, res } = context;

//   const apiResponse = await fetch(`https://localhost:3001/api/subastas/`);
//   if (apiResponse.ok) {
//     const props = await apiResponse.json();
//     return { props };
//   }
//   if (res) {
//     res.writeHead(301, { Location: "/transportista" }.end());
//   }
// }
