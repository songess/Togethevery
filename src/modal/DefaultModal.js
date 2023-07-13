import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./DefaultModal.css";

export default function DefaultModal({ isOpen, onClose, children }) {
  const modalRoot = document.querySelector("#modal-root");
  const outside = useRef(null);

  if (!isOpen) return null;

  const modalhandler = (e) => {
    if (outside.current === e.target) onClose();
  };

  return ReactDOM.createPortal(
    <div
      className="defaultModal_background"
      onClick={modalhandler}
      ref={outside}
    >
      <div className="defaultModal">
        <h1 className="defaultModal_title">{children}</h1>
      </div>
    </div>,
    modalRoot
  );
}
