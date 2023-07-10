import React from "react";
import ReactDOM from "react-dom";
import MemoModal from "./MemoModal";

const PortalMemoModal = (props) => {
  // 모달이 마운트 될 엘리먼트. 루트 엘리먼트와 다른 곳이다.
  const modalRoot = document.querySelector("#modal-root");
  // 모달 앨리먼트를 modalRoot에 마운트할 것이다.
  return ReactDOM.createPortal(<MemoModal {...props} />, modalRoot);
};

export default PortalMemoModal;
