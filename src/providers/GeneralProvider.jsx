import React, { createContext, useState } from 'react'

const themeContext = createContext()

const GeneralProvider = (props) => {
  const [theme,setTheme] = useState(null)
  return (
    <themeContext.Provider value={theme}>
        {props.children}
    </themeContext.Provider>
  );
}

export default GeneralProvider