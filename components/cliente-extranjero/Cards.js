import React from "react";
import Image from "next/image";
export const Cards = () => {
  return (
    <div className="h-max bg-gray-100 ">
      <h1 className="mb-2 text-xl font-bold p-10">Solicitud de compra</h1>
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        <div className="mx-auto grid  w-full grid-cols-2  gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/uva.png" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Mango</p>
              <p className=" mt-3 text-base text-lime-700">$6.990 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Frutilla.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Frutilla</p>
              <p className=" mt-3 text-base text-lime-700">$7.980 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Primera</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta casi Madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Kiwi.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Kiwi</p>
              <p className=" mt-3 text-base text-lime-700">$3.490 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Mango.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Mango</p>
              <p className=" mt-3 text-base text-lime-700">$2.590 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Segunda</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Platano.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Platano</p>
              <p className=" mt-3 text-base text-lime-700">$1.490 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Primera</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta casi Madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Manzana.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Manzana verde</p>
              <p className=" mt-3 text-base text-lime-700">$2.190 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Segunda</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Arandanos.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Arandanos</p>
              <p className=" mt-3 text-base text-lime-700">$15.920 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Datiles.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Datiles</p>
              <p className=" mt-3 text-base text-lime-700">$15.920 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Piña.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Piña</p>
              <p className=" mt-3 text-base text-lime-700">$2.390 x Un</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Kiwi.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Kiwi</p>
              <p className=" mt-3 text-base text-lime-700">$3.490 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Manzana.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Manzana verde</p>
              <p className=" mt-3 text-base text-lime-700">$2.190 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Segunda</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Frutilla.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Frutillas</p>
              <p className=" mt-3 text-base text-lime-700">$7.980 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Primera</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta casi Madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Mango.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Mango</p>
              <p className=" mt-3 text-base text-lime-700">$2.590 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Segunda</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Platano.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Platanos</p>
              <p className=" mt-3 text-base text-lime-700">$1.490 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Primera</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta casi Madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Manzana.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Manzana verde</p>
              <p className=" mt-3 text-base text-lime-700">$2.190 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Segunda</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Fruta madura</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Arandanos.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Arandanos</p>
              <p className=" mt-3 text-base text-lime-700">$15.920 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Datiles.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Datiles</p>
              <p className=" mt-3 text-base text-lime-700">$15.920 x kg</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
              <a
                href="#"
                className="mt-4 rounded-lg bg-green py-2 text-center font-bold text-white transition-all duration-200 ease-out hover:bg-lime-400 focus:scale-95"
              >
                Comprar producto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="flex h-full flex-col p-5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <Image src="/Piña.jpg" alt="" width={300} height={300} />
              </div>
              <h5 className="mt-3 text-2xl font-medium md:text-xl">
                Frutas y Verduras
              </h5>
              <p className=" mt-3 text-base text-black">Piña</p>
              <p className=" mt-3 text-base text-lime-700">$2.390 x Un</p>
              <p className=" mt-3 text-base text-red">Calidad: Extra</p>
              <h5 className=" mt-3 text-base text-black">Observaciones:</h5>
              <p className=" mt-3 text-base text-red">Excelente fruta</p>
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
    </div>
  );
};