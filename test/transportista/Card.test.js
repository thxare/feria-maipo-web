/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import { Card } from "../../components/transportista/Card";

const changeFormat = (date) => {
  return date.format("DD/MM/YYYY");
};
const fechaTer = dayjs(new Date("6-10-2022"));
const fechaIni = dayjs(new Date("8-10-2022"));

describe("Test en componente <Card /> de transportista", () => {
  beforeEach(() => {
    const estado = "Activa";
    const fechaTerFormat = changeFormat(fechaTer);
    const fechaIniFormat = changeFormat(fechaIni);

    render(
      <Card
        fechaTermino={fechaTerFormat}
        fechaInicio={fechaIniFormat}
        id={1}
        estado={estado}
      />
    );
  });
  test("Cada card posee el Link 'ingresar'", () => {
    const btnParticipar = screen.getByRole("link");
    expect(btnParticipar).toBeInTheDocument;
    expect(btnParticipar.innerHTML).toBe("Ingresar");
  });

  test("La ortografía de la card es correcta", () => {
    const fechaIni = screen.getByTestId("fechaInicioTransportista").innerHTML;
    const nameFechaIni = fechaIni.split(":");
    const estado = screen.getByTestId("estadoCard").innerHTML;
    const nameEstado = estado.split(":");
    const fechaTer = screen.getByTestId("fechaTermino").innerHTML;
    const nameFechaTer = fechaTer.split(":");
    const btnParticipar = screen.getByRole("link");

    expect(nameFechaTer.includes("Fecha Término")).toBe(true);
    expect(nameEstado.includes("Estado")).toBe(true);
    expect(nameFechaIni.includes("Fecha Inicio")).toBe(true);
    expect(btnParticipar.innerHTML).toBe("Ingresar");
  });

  test("Titulo de la card es 'Subasta' seguido de su id", () => {
    const tituloCard = screen.getByTestId("tituloSubasta");
    expect(tituloCard.innerHTML).toBe("Subasta 1");
  });

  test("Botón 'Ingresar' en card de subasas cambia de color al pasar por encima", () => {
    const btnParticipar = screen.getByRole("link").className;
    const clases = btnParticipar.split(" ");

    expect(clases.includes("hover:bg-orangeSmooth")).toBe(true);
  });

  test("Card trae la información correcta", () => {
    const tituloSub = screen.getByTestId("tituloSubasta");
    const fechaTermino = screen.getByTestId("fechaTerminospan");
    const fechaInicio = screen.getByTestId("fechaInispan");
    const estado = screen.getByTestId("estadoSpan");

    expect(tituloSub.innerHTML).toBe("Subasta 1");
    expect(fechaTermino.innerHTML).toBe("6/10/2022");
    expect(fechaInicio.innerHTML).toBe("8/10/2022");
    expect(estado.innerHTML).toBe("Activa");
  });

  test("Card muestra Fecha de inicio ", () => {
    const fechaInicio = screen.getByTestId("fechaInispan");
    expect(fechaInicio.innerHTML).toBe("8/10/2022");
  });
  test("Card muestra Fecha de término", () => {
    const fechaTermino = screen.getByTestId("fechaTerminospan");
    expect(fechaTermino.innerHTML).toBe("6/10/2022");
  });
  test("Card muestra el estado de la card", () => {
    const estado = screen.getByTestId("estadoSpan");
    expect(estado.innerHTML).toBe("Activa");
  });
});
