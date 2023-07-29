import ModalForm from "../ModalForm";
import React, { useState } from "react";

const GetAQuoteButton: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };
  return (
    <>
      <button
        className="max-sm:w-full bg-primary text-white p-3 text-xs rounded font-bold uppercase border-2  border-primary mr-2  hover:bg-white hover:text-primary hover:border-primary duration-200"
        onClick={openModal}
      >
        Get a Quote
      </button>
      {isModalOpen && <ModalForm handleClose={closeModal} />}
    </>
  );
}

export default GetAQuoteButton;
