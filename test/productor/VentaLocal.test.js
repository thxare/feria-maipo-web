/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { SolicitudCard } from "../../components/productor/venta/SolicitudCard";
import { Ventas } from "../../components/productor/Ventas";

describe("Test en Venta Local", () => {
  beforeEach(() => {
    render(<Ventas tipo="Local" lugar={"local"} />);
  });
  test("Titulo de página /productor/ventalocal ", () => {
    expect(document.querySelector("h1").innerHTML).toBe("Venta Local");
  });

  test("Tamaño de titulo de pagina principal es de 'text-3xl'", () => {
    const titulo = document.querySelector("h1").className;
    const clases = titulo.split(" ");
    expect(clases.includes("text-3xl")).toBeTruthy;
  });

  test("El titulo de pagina principal es de 'font-semibold'", () => {
    const titulo = document.querySelector("h1").className;
    const clases = titulo.split(" ");
    expect(clases.includes("font-semibold")).toBeTruthy;
  });
});

describe("Test Card de Venta Externa", () => {
  beforeEach(() => {
    render(<SolicitudCard handleClick={() => true} nombre kilogramos estado />);
  });
  test("Cada card en Venta Local tiene un botón 'Participar'", () => {
    const btnParticipar = screen.getByRole("button");
    expect(btnParticipar).toBeInTheDocument;
    expect(btnParticipar.innerHTML).toBe("Participar");
  });

  test("Botón 'Participar' en Venta Local es de color verde", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("bg-green")).toBeTruthy;
  });

  test("Botón 'Participar' en Venta Local cambia de color al pasar por encima", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBeTruthy;
  });
});
