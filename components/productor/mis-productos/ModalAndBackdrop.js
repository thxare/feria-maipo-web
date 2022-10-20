import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Modal } from "./Modal";

export const ModalAndBackdrop = ({ closeModal }) => {
  return (
    <div>
      <Modal closeModal={closeModal} />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};

