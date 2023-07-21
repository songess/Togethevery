import React, { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ className, ...props }, ref) => {
  return <input className={`${className} login_input`} {...props} ref={ref} />;
});

export default Input;
