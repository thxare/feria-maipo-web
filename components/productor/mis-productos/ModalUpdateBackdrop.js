import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { ModalUpdate } from "./ModalUpdate";

export const ModalUpdateBackdrop = ({
  closeModal,
  id,
  user
}) => {
  
  
  return (
    <div>
        <ModalUpdate
          closeModal={closeModal}
          id={id}
          user={user}
        />
        <Backdrop closeModal={closeModal} />
      
    </div>
  );
};
