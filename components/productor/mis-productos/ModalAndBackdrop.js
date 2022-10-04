import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Modal } from "./Modal";

export const ModalAndBackdrop = ({ closeModal, setProductos, productos}) => {
  return (
    <div>
      <Modal
        closeModal={closeModal}
        productos={productos}
        setProductos={setProductos}
       
      />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
