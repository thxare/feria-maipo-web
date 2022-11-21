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
  test("en /productor/ventaexterna se listan 3 cards horizontalmente de solicitudes de venta externa ", () => {
    const container = screen.getByTestId("containerCard").className;
    const clases = container.split(" ");

    expect(clases.includes("grid")).toBe(true);
    expect(clases.includes("sm:grid-cols-2")).toBe(true);
    expect(clases.includes("md:grid-cols-3")).toBe(true);
    expect(clases.includes("grid-cols-1")).toBe(true);
  });
});

describe("Test Card de Venta Externa", () => {
  beforeEach(() => {
    render(
      <SolicitudCard
        handleClick={() => true}
        nombre={"Manzana"}
        kilogramos={"1000"}
        estado={"Activo"}
      />
    );
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

  test("en /productor/ventaexterna se lista la card mostrando los datos correctos", () => {
    const nombre = screen.getByText(/Manzana/);
    const kilogramos = screen.getByText(/1000/);
    const estado = screen.getByText(/Activo/);
    const btnParticipar = screen.getByRole("button");

    expect(nombre.innerHTML).toBe("Manzana");
    expect(kilogramos).toBeInTheDocument();
    expect(estado).toBeInTheDocument();
    expect(btnParticipar.innerHTML).toBe("Participar");
  });
});
