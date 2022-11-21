/**
 * @jest-environment jsdom
 */
import { getByRole, render, screen } from "@testing-library/react";
import React from "react";
import { TablaTransportes } from "../../components/transportista/mis-transportes/TablaTransportes";

describe("Test en el componente <TablaTransportes />", () => {
  beforeEach(() => {
    const tabla = [
      {
        id_transporte: 20,
        patente: "HH-JJ-55",
        tamano: "Extra grande",
        capacidad_carga: "1333",
        refrigeracion: "Si",
        id_tipo: 2,
      },
    ];
    render(<TablaTransportes tabla={tabla} />);
  });

  test("Ortografía header de la tabla de mis transportes ", () => {
    const idT = screen.getByTestId("thId");
    const patenteT = screen.getByTestId("thPatente");
    const tamano = screen.getByTestId("thTamano");
    const capacidad = screen.getByTestId("thCapacidad");
    const idTipo = screen.getByTestId("thIdTipo");

    expect(idT.innerHTML).toBe("ID Transporte");
    expect(patenteT.innerHTML).toBe("Patente");
    expect(tamano.innerHTML).toBe("Tamaño");
    expect(capacidad.innerHTML).toBe("Capacidad de Carga");
    expect(idTipo.innerHTML).toBe("ID Tipo");
  });

  test("Header de tabla Mis Transportes es distinto color a los resultados", () => {
    const header = screen.getByTestId("headerTabla").className;
    const clases = header.split(" ");

    expect(clases.includes("bg-green")).toBe(true);
  });

  test("Los resultados en la tabla se muestran correctamente", () => {
    const resultId = screen.getByRole("cell", { name: 20 });
    const resultPatente = screen.getByRole("cell", { name: "HH-JJ-55" });
    const resultTamano = screen.getByRole("cell", { name: "Extra grande" });
    const resultCapacidad = screen.getByRole("cell", { name: 1333 });
    const resultRefri = screen.getByRole("cell", { name: "Si" });
    const resultIdTipo = screen.getByRole("cell", { name: 2 });

    expect(resultId.querySelector("a").innerHTML).toBe("20");
    expect(resultPatente.innerHTML).toBe("HH-JJ-55");
    expect(resultTamano.innerHTML).toBe("Extra grande");
    expect(resultCapacidad.innerHTML).toBe("1333");
    expect(resultRefri.innerHTML).toBe("Si");
    expect(resultIdTipo.innerHTML).toBe("2");
  });

  test("Ortografía de los resultados de la tabla", () => {
    const resultId = screen.getByRole("cell", { name: 20 });
    const resultPatente = screen.getByRole("cell", { name: "HH-JJ-55" });
    const resultTamano = screen.getByRole("cell", { name: "Extra grande" });
    const resultCapacidad = screen.getByRole("cell", { name: 1333 });
    const resultRefri = screen.getByRole("cell", { name: "Si" });
    const resultIdTipo = screen.getByRole("cell", { name: 2 });

    expect(resultId.querySelector("a").innerHTML).toBe("20");
    expect(resultPatente.innerHTML).toBe("HH-JJ-55");
    expect(resultTamano.innerHTML).toBe("Extra grande");
    expect(resultCapacidad.innerHTML).toBe("1333");
    //expect(resultRefri.innerHTML).toBe("Sí");
    expect(resultIdTipo.innerHTML).toBe("2");
  });

  test('Tabla de "Mis Transportes" es responsiva', () => {
    const tabla = screen.getByTestId("tablaTransporte").className;
    const clases = tabla.split(" ");
    expect(clases.includes("mx-auto")).toBe(true);
    expect(clases.includes("w-9/12")).toBe(true);
  });
});
