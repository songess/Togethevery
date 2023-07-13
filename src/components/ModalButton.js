import React from "react";
import "./ModalButton.css";

export default function ModalButton({ className, children, ...props }) {
  return (
    <button className={`${className} modal_button`} {...props}>
      {children}
    </button>
  );
}



// 호출시 패딩, 마진, 색 지정
// red : red; #f90000;
// black : rgb(162, 162, 162); rgb(122, 122, 122);