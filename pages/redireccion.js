import Head from "next/head";
import React, { useEffect } from "react";
import { Redireccion } from "../components/ui/Redireccion";

export default function RedireccionPage() {

  return (
    <>
      <Head>
        <title>Desautorizado</title>
      </Head>
      <div className="h-screen bg-gray-200">
      <Redireccion />
      </div>
    </>
  );
}
