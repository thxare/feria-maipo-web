import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Modal } from "./Modal";

export const ModalAndBackdrop = ({ closeModal, setProductos, valueText, onSave }) => {
  return (
    <div>
      <Modal closeModal={closeModal} setProductos={setProductos} valueText={valueText} onSubmit={onSave} />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
