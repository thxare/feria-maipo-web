import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export const CarritoCompras = () => {
  const valoresTotales = [];
  const productos = [
    {
      nombre: "Pera",
      cantidad: 1000,
      precioU: 1300,
      calidad: "Extra",
      descripcion: "Piña De La Mejor Calidad Para Hacer Jugos",
    },
    {
      nombre: "Manzana",
      cantidad: 100,
      precioU: 1300,
      calidad: "Extra",
      descripcion: "Piña De La Mejor Calidad Para Hacer Jugos",
    },
    {
      nombre: "Piña",
      cantidad: 500,
      precioU: 1700,
      calidad: "Extra",
      descripcion: "Piña De La Mejor Calidad Para Hacer Jugos",
    },
  ];

  const calcularTotal = (cantidad, precioU) => {
    return cantidad * precioU;
  };
  productos.map((producto) => {
    valoresTotales.push(producto.cantidad * producto.precioU);
  });

  let total = 0;
  for (let i = 0; i < valoresTotales.length; i++) {
    total += valoresTotales[i];
  }

  return (
    <div className="mx-auto mt-12 h-auto w-10/12 max-w-4xl">
      {productos.map((producto) => {
        return (
          <div className="mb-3 rounded-sm bg-white shadow-sm">
            <div className="border-b-[1px] border-gray-200 p-2">
              Nombre productor
            </div>
            <div className="flex w-full justify-between p-5">
              <div className="h-40 w-40 bg-slate-300">
                <div className="w-full"></div>
              </div>
              <div className="w-3/4">
                <div className="flex justify-between">
                  <div className="text-2xl font-medium">{producto.nombre}</div>
                  <Button
                    text={"Eliminar"}
                    colorBtn={"bg-red"}
                    hoverBtn={"hover:bg-bordeaux"}
                  />
                </div>
                <div className="infoProducto">
                  <div>
                    <span className="font-bold">Precio:</span> $
                    {producto.precioU} x kg
                  </div>
                  <div>
                    <span className="font-bold">Calidad:</span>{" "}
                    {producto.calidad}
                  </div>
                  <div>
                    <span className="font-bold">Descripción:</span>{" "}
                    {producto.descripcion}
                  </div>
                </div>
                <div className="mx-auto inline-block">
                  <label className="font-semibold">Cantidad: </label>
                  {producto.cantidad} kg
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mb-3 rounded-sm bg-white shadow-sm">
        <div className="p-3">
          <div className="mb-4 text-2xl font-medium">Resumen</div>
          <div className="">
            <div className="grid grid-cols-4 gap-2">
              <div className="inline-block font-bold">Nombre</div>
              <div className="inline-block font-bold">Cantidad</div>
              <div className="inline-block font-bold"> Precio Unitario</div>
              <div className="inline-block font-bold">Total</div>
            </div>
            {productos.map((producto) => {
              return (
                <div className="grid grid-cols-4 gap-2">
                  <div className="inline-block">{producto.nombre}</div>
                  <div className="inline-block">{producto.cantidad} kg</div>
                  <div className="inline-block">${producto.precioU}</div>
                  <div className="inline-block">
                    ${calcularTotal(producto.cantidad, producto.precioU)}
                  </div>
                </div>
              );
            })}

            <div className="mt-7 flex flex-row justify-between border-t-[1px] pt-4">
              <div className="pt-2">
                Total a pagar <span className="font-bold">CLP ${total}</span>
              </div>
              <div>
                <Button
                  text={"Pagar"}
                  colorBtn={"bg-green"}
                  hoverBtn={"hover:bg-darkGreen"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
