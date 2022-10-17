import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { ModalParticipar } from "./ModalParticipar";

export const ModalParticiparBackdrop = ({ closeModal }) => {
  return (
    <div>
      <ModalParticipar closeModal={closeModal} />
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
