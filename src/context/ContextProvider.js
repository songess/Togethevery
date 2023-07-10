import React, {useState} from 'react'
import context from './context'

export default function ContextProvider({children}) {
  const [loginId, setLoginId] = useState(false);

  return (
    <context.Provider value={{loginId,setLoginId}}>
      {children}
    </context.Provider>
  )
}
