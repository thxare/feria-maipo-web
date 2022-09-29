import { Card } from "./Card";
import { useState, useEffect } from "react";


export const CardList = () => {

    useEffect(()=>{

    })

  return (
    <div className="grid grid-cols-8 justify-center gap-10 px-14 py-14">      
      <Card title="Hola" />
      <Card title="Mundo" />
      <Card title="Chao" />
      <Card title="Todos" />
      <Card title="Todos" />
      <Card title="Todos" />
      <Card title="Todos" />
      <Card title="Todos" />
    </div>
  );
};
