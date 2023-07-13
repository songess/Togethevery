import React, { useState } from "react";
import context from "./context";

export default function ContextProvider({ children }) {
  const [loginId, setLoginId] = useState(false);
  const [eunsuList, setEunsuList] = useState([]);
  const [ChaewonList, setChaewonList] = useState([]);

  return (
    <context.Provider
      value={{
        loginId,
        setLoginId,
        eunsuList,
        setEunsuList,
        ChaewonList,
        setChaewonList,
      }}
    >
      {children}
    </context.Provider>
  );
}
