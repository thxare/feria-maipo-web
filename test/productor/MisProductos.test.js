/**
 * @jest-environment jsdom
 * @testing-library/jest-dom
 */
import "@testing-library/jest-dom";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
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
    //const buttonIngresar = document.querySelector("button");
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    //console.log(submitButton);
    //expect(buttonIngresar.type).toBe("submit");
    //expect(buttonIngresar.innerHTML).toBe("Ingresar Productos");
  });

  test("Botón 'Ingresar Productos' es de color verde", () => {
    const buttonIngresar = document.querySelector("button").className;
    const contiene = buttonIngresar.split(" ");
    const background = contiene.includes("bg-green");
    expect(background).toBe(true);
  });

  test("Botón 'Ingresar Productos' cambia de color al pasar por encima", () => {
    const buttonIngresar = document.querySelector("button").className;
    const contiene = buttonIngresar.split(" ");
    const hoverColor = contiene.includes("hover:bg-darkGreen");
    expect(hoverColor).toBe(true);
  });

  test("Abrir modal Productor", async () => {
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const modal = await waitFor(() => screen.getByTestId("modal"));
    expect(modal).toBeCalled;
  });

  test("Ortografía Modal Ingresar productos de Productor", async () => {
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const btnGuardar = await waitFor(() =>
      screen.getByRole("button", { name: "Guardar" })
    );
    const imagen = await waitFor(() => screen.getByTestId("labelImagenModal"));
    const nombre = await waitFor(() => screen.getByTestId("labelNombreModal"));
    const precio = await waitFor(() => screen.getByTestId("labelPrecioModal"));
    const calidad = await waitFor(() => screen.getByTestId("divCalidadModal"));
    const accesCalidad = calidad.innerHTML.split("<");
    const descripcion = await waitFor(() =>
      screen.getByTestId("labelDescModal")
    );
    expect(imagen.innerHTML).toBe("Imagen:");
    expect(nombre.innerHTML).toBe("Nombre:");
    expect(precio.innerHTML).toBe("Precio:");
    expect(accesCalidad.includes("Calidad")).toBe(true);
    expect(descripcion.innerHTML).toBe("Descripción:");
    expect(btnGuardar.innerHTML).toBe("Guardar");
  });

});
