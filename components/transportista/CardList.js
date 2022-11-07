import { Card } from "./Card";

export const CardList = ({ subastas }) => {
  return (
    <div className="grid grid-cols-8 justify-center gap-5 pt-12 md:gap-3">
      {subastas?.map((subasta) => {
        return (
          <Card
            key={subasta.id_subasta}
            id={subasta.id_subasta}
            ganador={subasta.ganador}
            fechaInicio={subasta.fecha_inicio}
            fechaTermino={subasta.fecha_ter}
            estado={subasta.estado}
          />
        );
      })}
    </div>
  );
};
