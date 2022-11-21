/**
 * @jest-environment jsdom
 * @testing-library/jest-dom
 */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { CardsIntancia } from "../../components/cliente-local/CardsInstancia";

describe("Tests en <CardsIntancia />", () => {
  beforeEach(() => {
    render(<CardsIntancia />);
  });

  test("Botón card en instancia compra", () => {
    const btnCard = screen.getByRole("button", { name: "Ingresar" });
    expect(btnCard.innerHTML).toBe("Ingresar");
    expect(btnCard).toBeInTheDocument();
  });

  test("Botón card en instancia compra color verde", () => {
    const btnCard = screen.getByRole("button", { name: "Ingresar" }).className;
    const clases = btnCard.split(" ");

    expect(clases.includes("bg-green")).toBe(true);
  });
  test("Bóton card en instancia compra tiene hover", () => {
    const btnCard = screen.getByRole("button", { name: "Ingresar" }).className;
    const clases = btnCard.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });
});
