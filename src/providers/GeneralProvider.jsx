import React, { createContext, useState, useContext} from 'react'

const themeContext = createContext()

//to not need to export the context and protect it
export function useThemeContext(){
    return useContext(themeContext);
}

const GeneralProvider = (props) => {
  const [theme,setTheme] = useState(true)
  
  const handleTheme = (e)=>{
    e.target.checked?setTheme(false):setTheme(true)
  }
  const data = {theme,handleTheme}
  return (
    <themeContext.Provider value={data}>
        {props.children}
    </themeContext.Provider>
  );
}

export default GeneralProvider