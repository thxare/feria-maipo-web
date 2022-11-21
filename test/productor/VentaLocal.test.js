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
    expect(clases.includes("text-3xl")).toBe(true);
  });

  test("El titulo de pagina principal es de 'font-semibold'", () => {
    const titulo = document.querySelector("h1").className;
    const clases = titulo.split(" ");
    expect(clases.includes("font-semibold")).toBe(true);
  });

  test("en/productor/ventalocal se listan 3 cards horizontalmente de solicitudes de venta local", () => {
    const container = screen.getByTestId("containerCard").className;
    const clases = container.split(" ");

    expect(clases.includes("grid")).toBe(true);
    expect(clases.includes("sm:grid-cols-2")).toBe(true);
    expect(clases.includes("md:grid-cols-3")).toBe(true);
    expect(clases.includes("grid-cols-1")).toBe(true);
  });
});

describe("Test Card de Venta Local", () => {
  beforeEach(() => {
    render(
      <SolicitudCard
        handleClick={() => true}
        nombre={"Damasco"}
        kilogramos={"600"}
        estado={"Activa"}
      />
    );
  });
  test("Cada card en Venta Local tiene un botón 'Participar'", () => {
    const btnParticipar = screen.getByRole("button");
    expect(btnParticipar).toBeInTheDocument;
    expect(btnParticipar.innerHTML).toBe("Participar");
  });

  test("Botón 'Participar' en Venta Local es de color verde", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("bg-green")).toBe(true);
  });

  test("Botón 'Participar' en Venta Local cambia de color al pasar por encima", () => {
    const btnParticipar = screen.getByRole("button").className;
    const clases = btnParticipar.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });

  test("en/productor/ventalocal se lista la card mostrando los datos correctos ", () => {
    const nombre = screen.getByText(/Damasco/);
    const kilogramos = screen.getByText(/600/);
    const estado = screen.getByText(/Activa/);
    const btnParticipar = screen.getByRole("button");

    expect(nombre.innerHTML).toBe("Damasco");
    expect(kilogramos).toBeInTheDocument();
    expect(estado).toBeInTheDocument();
    expect(btnParticipar.innerHTML).toBe("Participar");
  });
});
