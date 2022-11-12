/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import MiTransporte from "../../pages/transportista/mitransporte";

const obj = {
  objeto: "esto es un objeto",
};

describe("Test mitransporte de Transportista", () => {
  beforeEach(() => {
    render(<MiTransporte />);
  });

  test("Titulo de página /transportista/mitransporte", () => {
    expect(document.querySelector("h1").innerHTML).toBe("Mis Transportes");
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
});
