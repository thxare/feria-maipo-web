import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { ModalUpdate } from "./ModalUpdate";


export const ModalUpdateBackdrop = ({
  closeModal,
  setProductos,
  productos,
  id,
}) => {
  
  return (
    <div>
      <ModalUpdate
        closeModal={closeModal}
        setProductos={setProductos}
        productos={productos}
        id={id}
      />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
