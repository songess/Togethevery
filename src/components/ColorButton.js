import React from "react";
import "./ColorButton.css";

export default function ColorButton({ className, onClick, children }) {
  return (
    <button className={`${className} color_button`} onClick={onClick}>
      {children}
    </button>
  );
}
