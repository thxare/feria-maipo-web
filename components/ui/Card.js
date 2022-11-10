import React from "react";
import Image from "next/image";

export const Card = ({ id, img, button, nombreCard, valores }) => {
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
            {valores}
          </div>
        </div>
      </div>
    </>
  );
};
