import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggle };
}
