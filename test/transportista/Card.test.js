/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Card } from "../../components/transportista/Card";

describe("Test en componente <Card /> de transportista", () => {
  beforeEach(() => {
    render(<Card fechaTermino fechaInicio id={1} estado />);
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
});
