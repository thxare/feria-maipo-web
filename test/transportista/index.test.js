/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import Index from "../../pages/transportista";

const obj = {
  objeto: "esto es un objeto",
};

describe("Test Index de Transportista", () => {
  beforeEach(() => {
    render(<Index />);
  });

  test('Titulo de la página principal debe ser "Subastas"', () => {
    expect(document.querySelector("h1").innerHTML).toBe("Subastas");
  });
});
