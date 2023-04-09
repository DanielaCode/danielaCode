import React, { createContext, useState, useContext, useRef} from 'react'

const refContext = createContext()

//to not need to export the context and protect it
export function useRefContext(){
    return useContext(refContext);
}

const RefProvider = (props) => {
  const about = useRef();
  const stack = useRef();

  const data = {about,stack}
  return (
    <refContext.Provider value={data}>
        {props.children}
    </refContext.Provider>
  );
}

export default RefProvider