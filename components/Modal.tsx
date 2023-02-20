import React, { useState } from "react";
import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";

export default function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => setShowModal(false);
  return (
    <>
      {/* open modal when showModal is true, when closing modal do handleClose */}
      <MuiModal open={showModal} onClose={handleClose}>
        <>MuiModal</>
      </MuiModal>
    </>
  );
}
