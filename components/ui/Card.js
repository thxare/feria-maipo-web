import React from "react";
import Image from "next/image";
import { useState } from "react";

export const Card = ({
  id,
  img,
  button,
  nombreCard,
  valores,
  precio,
  cantidad,
}) => {
  const min = 0;

  const [value, setValue] = useState();

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(cantidad, Number(event.target.value)));
    setValue(value);
  };

  return (
    <>
      <div
        className="mx-auto flex h-full w-full flex-col justify-between rounded-lg bg-white pb-6 shadow-lg"
        id={id}
      >
        <div className="order-1 flex flex-col justify-end">{button}</div>
        <div className="flex flex-col">
          <div className="mx-auto py-6">
            <Image src={img} width="250" height="250" alt="" />
          </div>
          <div className="mb-2 w-full px-4">
            <div className="mb-4 text-2xl capitalize">{nombreCard}</div>
            <div className="mb-4 text-xl capitalize">
              {" "}
              Precio: ${precio} x Kg{" "}
            </div>
            <div className="mb-4 text-2xl capitalize">
              {" "}
              Kilogramos disponibles: {cantidad}{" "}
            </div>
            {valores}
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <label
                  for="exampleNumber0"
                  class="form-label mb-2 inline-block font-bold text-gray-700"
                >
                  Cantidad de Kg:
                </label>
                <input
                  type="number"
                  id="number"
                  value={value}
                  name="amount"
                  onChange={handleChange}
                  placeholder="500 Kg, 1500 Kg"
                  required
                  class="
                  
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
                 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
