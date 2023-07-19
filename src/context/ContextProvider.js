import React, { useState } from "react";
import context from "./context";

export default function ContextProvider({ children }) {
  const [loginId, setLoginId] = useState(false);
  const [eunsuList, setEunsuList] = useState([]);
  const [chaewonList, setChaewonList] = useState([]);
  const [eunsuCheckList,setEunsuCheckList]=useState([]);

  return (
    <context.Provider
      value={{
        loginId,
        setLoginId,
        eunsuList,
        setEunsuList,
        chaewonList,
        setChaewonList,
        eunsuCheckList,
        setEunsuCheckList,
      }}
    >
      {children}
    </context.Provider>
  );
}
