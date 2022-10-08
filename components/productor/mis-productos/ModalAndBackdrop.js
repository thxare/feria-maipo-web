import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Modal } from "./Modal";

export const ModalAndBackdrop = ({ closeModal, setProductos }) => {
  return (
    <div>
      <Modal closeModal={closeModal} setProductos={setProductos} />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
