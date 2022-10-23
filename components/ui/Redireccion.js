import Link from "next/link";
import React from "react";
import { Alert } from "./Alert";

export const Redireccion = () => {
  return (
    <div>
      <div className="flex h-screen justify-center bg-gray-200">
        <div className="my-auto block h-auto w-10/12 rounded-lg bg-white p-6 shadow-lg sm:w-8/12 md:w-6/12 md:p-8 md:pt-4">
          <Alert text="Usted no esta autorizado, por favor inicie sesión" />
          <Link href="/login">
            <a className="underline"> Clic aquí</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
