import Image from "next/image";
import React from "react";

export const Productos = ({nombre}) => {
  return (
    <div className="m-4 rounded-lg bg-white shadow-lg">
      <div className="flex flex-row justify-end">
        <button className="m-4 mr-1 rounded bg-darkGreen py-2 px-4 font-bold text-white hover:bg-green shadow-md">
          Modificar Producto
        </button>
        <button className="m-4 ml-2 rounded bg-bordeaux py-2 px-4 font-bold text-white hover:bg-red shadow-md">
          Eliminar Producto
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mx-8 pb-6">
          <Image src="/papa.jpg" width="200" height="200" />
        </div>

        <div className="w-9/12 px-4">
          <div className="text-2xl">{nombre}</div>
          <div>
            <span className="font-bold">Cantidad: </span>300 kg.
          </div>
          <div>
            <span className="font-bold">Precio: </span>$200.000
          </div>
          <div>
            <span className="font-bold">Descripción: </span> Lorem ipsum dolor
            sit amet. Quo quasi illo vel libero nemo aut earum dolores vero
            cupiditate aut corporis quis nam culpa illum et molestias culpa. Sed
            tenetur omnis rem aperiam fuga ut quos quasi aut voluptatum nobis ad
            enim aliquid in internos ipsam. Qui fugit iste et Quis aliquam et
            minus quod 33 accusantium voluptatum ea corrupti atque? Et dolorem
            quae et error obcaecati in asperiores dolorem quo esse dolorum sit
            dolorum voluptas et aliquam earum. Qui magnam ipsa et optio enim aut
            Quis ullam non sequi consequatur. Sit officia nihil ut repudiandae
            adipisci eos voluptatem praesentium. Qui quibusdam facilis ut quidem
            labore eos natus voluptatem.
          </div>
        </div>
      </div>
    </div>
  );
};
