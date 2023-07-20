import React, { useState } from "react";
import context from "./context";

export default function ContextProvider({ children }) {
  const [loginId, setLoginId] = useState(false);
  const [eunsuList, setEunsuList] = useState([]);
  const [chaewonList, setChaewonList] = useState([]);
  const [eunsuCheckList,setEunsuCheckList]=useState([]);
  const [chaewonCheckList,setChaewonCheckList]=useState([]);

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
        chaewonCheckList,
        setChaewonCheckList,
      }}
    >
      {children}
    </context.Provider>
  );
}
