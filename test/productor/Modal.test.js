/**
 * @jest-environment jsdom
 * @testing-library/jest-dom
 */
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Modal } from "../../components/productor/mis-productos/Modal";
import { ProductosContextProvider } from "../../components/productor/ContextProducto.js";
import { MisProductos } from "../../components/productor/mis-productos/MisProductos";

describe("Se testea el componente modal", () => {
  MisProductos.handleClick = jest.fn();

  beforeEach(() => {
    render(
      <ProductosContextProvider>
        <Modal closeModal={() => true} user />
      </ProductosContextProvider>
    );
  });
  test("Existe botón para cerrar modal", () => {
    const closeBtn = screen.getByTestId("closeModal");
    expect(closeBtn).toBeInTheDocument;
  });
  test("Cerrar modal Productor", async () => {
    const closeBtn = screen.getByTestId("closeModal");
    fireEvent.click(closeBtn);
    expect(MisProductos.handleClick).toHaveBeenCalled;
  });
});
