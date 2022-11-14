// /**
//  * @jest-environment jsdom
//  */
// import axios from "axios";
// import { getByTestId, render, screen, waitFor } from "@testing-library/react";
// import React from "react";
// import dayjs from "dayjs";
// import "@testing-library/jest-dom";
// import { CardList } from "../../components/transportista/CardList";

// const changeFormat = (date) => {
//   return date.format("DD/MM/YYYY");
// };
// // const fechaTer = "6/10/2022";
// // const fechaIni = "8/10/2022";
// // const fechaInicio = changeFormat(fechaIni);
// // const fechaTermino = changeFormat(fechaTer);

// const fakeSubastas = [
//   {
//     key: 1,
//     id: 1,
//     fechaInicio: "2022-10-10T00:00:00.000Z",
//     fechaTermino: "2022-10-10T00:00:00.000Z",
//     estado: "Activo",
//   },
//   {
//     key: 2,
//     id: 2,
//     fechaInicio: "2022-10-09T00:00:00.000Z",
//     fechaTermino: "2022-10-09T00:00:00.000Z",
//     estado: "Finalizada",
//   },
// ];

// describe("Test en componente <DetalleSubasta />", () => {
//   beforeEach(() => {
//     render(<CardList subastas={fakeSubastas} />);
//   });

//   test("Transportista puede ver las subastas que se encuentran disponibles", async () => {
//     const subastasList = screen.getByTestId("cards");
//     const tituloCard = screen.getByTestId("tituloSubasta");
//     console.log(tituloCard);
//     console.log(fechaIni);
//     expect(subastasList.children).toHaveLength(2);
//   });
// });
