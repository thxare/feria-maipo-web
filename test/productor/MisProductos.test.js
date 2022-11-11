/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, within } from "@testing-library/react";
import { MisProductos } from "../../components/productor/mis-productos/MisProductos.js";
import { ProductosContextProvider } from "../../components/productor/ContextProducto.js";

describe("<MisProductos />", () => {
  beforeEach(() => {
    render(
      <ProductosContextProvider>
        <MisProductos onDelete onUpdate />
      </ProductosContextProvider>
    );
  });

  test("Titulo en página principal es 'Mis Productos'", () => {
    expect(document.querySelector("h1").innerHTML).toBe("Mis Productos");
  });

  test("Se muestra el botón 'Ingresar Productos'", () => {
    const buttonIngresar = document.querySelector("button");
    expect(buttonIngresar.type).toBe("submit");
    expect(buttonIngresar.innerHTML).toBe("Ingresar Productos");
  });

  test("Botón 'Ingresar Productos' es de color verde", () => {
    const buttonIngresar = document.querySelector("button").className;
    const contiene = buttonIngresar.split(" ");
    const background = contiene.includes("bg-green");
    expect(background).toBeTruthy();
  });

  test("Botón 'Ingresar Productos' cambia de color al pasar por encima", () => {
    const buttonIngresar = document.querySelector("button").className;
    const contiene = buttonIngresar.split(" ");
    const hoverColor = contiene.includes("hover:bg-darkGreen");
    expect(hoverColor).toBeTruthy();
  });

  // test("Productor puede navegar por la barra de navegación", () => {
  //   cy.visit("http://localhost:3000/productor")
  //   cy.get('a[href*=""]')
  // });
});
