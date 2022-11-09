import React from "react";


export const SolicitudCard = ({handleClick, nombre, kilogramos, estado}) => {

  return (
    <>
      
      <div className="m-4 flex lg:w-11/12 flex-col rounded-lg bg-white pb-6 shadow-lg gap-1 my-2">
        <div className="px-3">
          <div className="flex flex-col md:flex-row">
            <div className="mb-2 w-full px-4">
              <div className="my-4 text-2xl capitalize">{nombre}</div>
              <div className="capitalize">
                <span className="font-bold">Kilogramos: </span>
                {kilogramos}kg
              </div>
              <div className="font-semibold text-darkGreen capitalize">
                <span className="font-bold text-black capitalize">Estado: </span>
                {estado}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="mx-auto w-full rounded bg-green py-2 px-4 font-bold text-white shadow-md hover:bg-darkGreen sm:mr-5"
              onClick={handleClick}
            >
              Participar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
