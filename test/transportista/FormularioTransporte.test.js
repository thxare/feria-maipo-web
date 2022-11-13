/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { FormularioTransporte } from "../../components/transportista/mis-transportes/FormularioTransporte";

const resizeWindow = (x) => {
  window.innerWidth = x;
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });
};

describe("Se realizan test en el componente <FormularioTransporte />", () => {
  beforeEach(() => {
    render(<FormularioTransporte setListaActulizada user />);
  });

  test("Ortografía en formulario de transportes", () => {
    const lblPatente = screen.getByTestId("lblPatente");
    const lblRefrigeracion = screen.getByTestId("lblRefrigeracion");
    const lblTamano = screen.getByTestId("lblTamano");
    const lblTipoTranporte = screen.getByTestId("lblTipoTranporte");
    const lblCapacidad = screen.getByTestId("lblCapacidad");
    const btnEnviar = screen.getByRole("button", { name: "Enviar" });

    expect(lblPatente.innerHTML).toBe("Patente:");
    expect(lblRefrigeracion.innerHTML).toBe("Refrigeración:");
    expect(lblTamano.innerHTML).toBe("Tamaño:");
    //expect(lblTipoTranporte.innerHTML).toBe("Tipo Transporte:");
    expect(lblCapacidad.innerHTML).toBe("Capacidad de carga:");
    expect(btnEnviar.innerHTML).toBe("Enviar");
  });
  test("Combobox Refrigeración", async () => {
    const comboBox = screen.getByTestId("refrigeracion");
    expect(comboBox.length).toBe(3);
  });
  test("Combobox Tamaño", async () => {
    const comboBox = screen.getByTestId("tamano");
    expect(comboBox.length).toBe(5);
  });
  test("Combobox Tipo Transporte", () => {
    const comboBox = screen.getByTestId("tipo");
    expect(comboBox.length).toBe(4);
  });

  test("Ortografía Combobox Refrigeración", () => {
    const comboBox = screen.getByTestId("refrigeracion");
    const values = [];
    for (const child of comboBox) {
      values.push(child.innerHTML);
    }
    expect(values[1]).toBe("Sí");
    expect(values[2]).toBe("No");
  });

  test("Ortografía Combobox Tamaño", () => {
    const comboBox = screen.getByTestId("tamano");
    const values = [];
    for (const child of comboBox) {
      values.push(child.innerHTML);
    }
    expect(values[1]).toBe("Extra grande");
    expect(values[2]).toBe("Grande");
    expect(values[3]).toBe("Mediano");
    expect(values[4]).toBe("Pequeño");
  });

  test("Combobox Tipo Transporte", () => {
    const comboBox = screen.getByTestId("tipo");
    const values = [];
    for (const child of comboBox) {
      values.push(child.innerHTML);
    }
    expect(values[1]).toBe("Terrestre");
    expect(values[2]).toBe("Marítimo");
    expect(values[3]).toBe("Aéreo");
  });

  test("Botón en formulario dice 'Enviar'", () => {
    const btnEnviar = screen.getByRole("button", { name: "Enviar" });
    expect(btnEnviar.innerHTML).toBe("Enviar");
  });

  test("Botón en formulario cambia de color al pasar por encima", () => {
    const btnEnviar = screen.getByRole("button", { name: "Enviar" }).className;
    const clases = btnEnviar.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });

  test("Botón en formulario cambia de color al pasar por encima", () => {
    const btnEnviar = screen.getByRole("button", { name: "Enviar" }).className;
    const clases = btnEnviar.split(" ");
    expect(clases.includes("hover:bg-darkGreen")).toBe(true);
  });

});
 