import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { ProductosContext } from "../Context";
import { ModalUpdate } from "./ModalUpdate";

export const ModalUpdateBackdrop = ({
  closeModal,
  id,
}) => {
  
  
  return (
    <div>
        <ModalUpdate
          closeModal={closeModal}
          id={id}
        />
        <Backdrop closeModal={closeModal} />
      
    </div>
  );
};
