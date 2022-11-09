import React from "react";

export const ValoresCard = ({ nombre, valor, valoresEstilo }) => {
  return (
    <>
      <div className={"capitalize " + valoresEstilo}>
        <span className="font-bold">{nombre}: </span>
        {valor}
      </div>
    </>
  );
};
