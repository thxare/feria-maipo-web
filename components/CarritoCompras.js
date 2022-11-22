import React from "react";
import { Button } from "./ui/Button";

export const CarritoCompras = () => {
  return (
    <div className="mx-auto mt-12 h-auto w-10/12 max-w-4xl">
      <div className="mb-3 rounded-sm bg-white shadow-sm">
        <div className="border-b-[1px] border-gray-200 p-2">
          Nombre productor
        </div>
        <div className="flex w-full justify-between p-5">
          <div className="h-32 w-32 bg-slate-400">
            <div className="w-full"></div>
          </div>
          <div className="w-3/4">
            <div className="flex justify-between">
              <div className="text-2xl font-medium">Peras</div>

              <Button
                text={"Eliminar"}
                colorBtn={"bg-red"}
                hoverBtn={"hover:bg-bordeaux"}
              />
            </div>
            <div className="infoProducto">
              <div>
                <span className="font-bold">Precio:</span> $3000 x kg
              </div>
              <div>
                <span className="font-bold">Calidad:</span> Extra
              </div>
              <div>
                <span className="font-bold">Descripción:</span> Piña De La Mejor
                Calidad Para Hacer Jugos
              </div>
            </div>

            <div className="mx-auto inline-block">
              <label className="font-semibold">Cantidad: </label>
              300kg
              {/* <input
                type="number"
                min="0"
                max="9999"
                placeholder="Kg"
                className={
                  "focus:shadow-outline w-6/12 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow outline-green focus:outline"
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 rounded-sm bg-white shadow-sm">
        <div className="p-3">
          <div className="mb-4 text-2xl font-medium">Resumen</div>
          <div className="">
            <div>Peras 300 kg x 3000 $900.000</div>
            <div>Manzanas 400 kg x 2000 $800.000</div>
            <div>
              Total a pagar <span className="font-bold">CLP $1.700.000</span>
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
