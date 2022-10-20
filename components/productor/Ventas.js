import React, { useEffect, useState } from "react";
import axios from "axios";
import { ModalParticiparBackdrop } from "./venta/ModalParticiparBackdrop";
import { SolicitudCard } from "./venta/SolicitudCard";

export const Ventas = ({ tipo, lugar }) => {
  const [show, setShow] = useState(false);
  const [peticion, setPeticion] = useState([]);
  const handleClick = () => {
    setShow(!show);
  };

  const url = "https://api-feria-web-production.up.railway.app/api/peticion";

  useEffect(() => {
    axios.get(url).then((res) => {
      setPeticion(res.data);
    });
  }, []);

  return (
    <div className="mx-auto mt-8 h-fit w-10/12">
      <div className="mx-3 flex flex-col justify-between sm:mx-0 sm:flex-row">
        <div className="text-2xl font-semibold">Venta {tipo}</div>
      </div>
      {show && <ModalParticiparBackdrop closeModal={handleClick} />}
      <div className="grid grid-cols-3">
        {peticion.map((pet, index) => {
        if(pet.locacion === lugar)
          return (
            <li key={index} className="list-none">
              <SolicitudCard
                handleClick={handleClick}
                nombre={pet.nombre}
                kilogramos={pet.kilogramos}
                estado={pet.estado}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};
