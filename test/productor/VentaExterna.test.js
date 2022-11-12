/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { SolicitudCard } from "../../components/productor/venta/SolicitudCard";
import { Ventas } from "../../components/productor/Ventas";

describe("Test en pagina Venta Externa", () => {
  beforeEach(() => {
    render(<Ventas tipo="Externa" lugar={"extranjero"} />);
  });
  test("Titulo de página /productor/ventalocal ", () => {
    expect(document.querySelector("h1").innerHTML).toBe("Venta Externa");
  });
});

describe("Test Card de Venta Externa", () => {
  beforeEach(() => {
    render(<SolicitudCard handleClick={() => true} nombre kilogramos estado />);
  });
  test("Cada card en Venta Externa tiene un botón", () => {
    const btnParticipar = screen.getByRole("button");
    expect(btnParticipar).toBeInTheDocument;
    expect(btnParticipar.innerHTML).toBe("Participar");
  });

  test("Botón 'Participar' en Venta Externa es de color verde", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("bg-green")).toBeTruthy;
  });

  test("Botón 'Participar' en Venta Externa es de color verde", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBeTruthy;
  });
});
