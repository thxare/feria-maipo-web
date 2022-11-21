/**
 * @jest-environment jsdom
 * @testing-library/jest-dom
 */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Cards } from "../../components/cliente-local/Cards";

describe("Tests en <Cards />", () => {
  beforeEach(() => {
    render(<Cards />);
  });

  test("Botón card en Saldos", () => {
    const btnCard = screen.getByRole("button", { name: "Comprar Producto" });
    expect(btnCard.innerHTML).toBe("Comprar Producto");
  });
  test("Botón card en Saldos es color verde", () => {
    const btnCard = screen.getByRole("button", {
      name: "Comprar Producto",
    }).className;
    const clases = btnCard.split(" ");

    expect(clases.includes("bg-green")).toBe(true);
  });
  test("Bóton card en Saldos tiene hover", () => {
    const btnCard = screen.getByRole("button", {
      name: "Comprar Producto",
    }).className;
    const clases = btnCard.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });
});
