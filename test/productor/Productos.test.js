/**
 * @jest-environment jsdom
 */

import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Productos } from "../../components/productor/mis-productos/Productos";

describe("Tests en componente <Productos />", () => {
  beforeEach(() => {
    render(
      <Productos
        id="1"
        nombreCard="Manzana"
        calidad="Buena"
        precio="3000"
        onDelete={() => onDelete}
        onUpdate={() => onUpdate}
        descripcion="De buena Clidad"
        user="2"
      />
    );
  });

  test('Se muestra el botón "Modificar Productos"', () => {
    const btn = screen.getByRole("button", { name: "Modificar Producto" });

    expect(btn).toBeInTheDocument();
  });

  test('Botón "Modificar Productos" cambia de color al pasar por encima', () => {
    const btn = screen.getByRole("button", {
      name: "Modificar Producto",
    }).className;
    const clases = btn.split(" ");

    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });

  test('Botón "Eliminar Producto" es de color rojo', () => {
    const btn = screen.getByRole("button", {
      name: "Eliminar Producto",
    }).className;
    const clases = btn.split(" ");

    expect(clases.includes("bg-red")).toBe(true);
  });

  test('Botón "Eliminar Producto" cambia de color al pasar por encima', () => {
    const btn = screen.getByRole("button", {
      name: "Eliminar Producto",
    }).className;
    const clases = btn.split(" ");

    expect(clases.includes("hover:bg-bordeaux")).toBe(true);
  });

  test("Botones en lista de productos de productor", () => {
    const btnModificar = screen.getByRole("button", {
      name: "Modificar Producto",
    });
    const btnEliminar = screen.getByRole("button", {
      name: "Eliminar Producto",
    });

    expect(btnModificar).toBeInTheDocument;
    expect(btnEliminar).toBeInTheDocument;
  });

  test("Ortografía lista de productos", () => {
    const btnModificar = screen.getByRole("button", {
      name: "Modificar Producto",
    });
    const btnEliminar = screen.getByRole("button", {
      name: "Eliminar Producto",
    });

    const calidad = screen.getByText(/Calidad/);
    const precio = screen.getByText(/Precio/);
    const descripcion = screen.getByText(/Descripción/);

    expect(calidad.innerHTML).toBe("Calidad: ");
    expect(precio.innerHTML).toBe("Precio: ");
    expect(descripcion.innerHTML).toBe("Descripción: ");

    expect(btnModificar.innerHTML).toBe("Modificar Producto");
    expect(btnEliminar.innerHTML).toBe("Eliminar Producto");
  });
});
