import React from "react";
import Image from "next/image";
export const Cards = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col p-5">
            <div className=" overflow-hidden rounded-xl">
              <Image src="/feria-logo.png" alt="" width={300} height={300} />
            </div>
            <h5 className="mt-3 text-2xl font-medium md:text-xl">
              Crear solcitudes de compra
            </h5>
            <p className=" mt-3 text-base text-lime-700">
              Puedes crear y revisar tu historial de pedidos
            </p>
            <a
              href="#"
              className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
            >
              Comprar producto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
