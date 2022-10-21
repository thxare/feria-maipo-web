import React from "react";
import { Backdrop } from "../../ui/Backdrop";
import { Modal } from "./Modal";

export const ModalAndBackdrop = ({ closeModal, user }) => {
  return (
    <div>
      <Modal closeModal={closeModal} user={user}/>
      <Backdrop closeModal={closeModal} />
    </div>
  );
};
