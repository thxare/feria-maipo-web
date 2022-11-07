import React from "react";

import { Card } from "./Card";
export const Cards = () => {
  return (
    <div className="h-max bg-gray-100 ">
      <h1 className="mb-2 p-10 text-3xl font-semibold">Saldos</h1>
      <div className="container mx-auto flex min-h-screen justify-center">
        <div className="mx-auto grid  w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
