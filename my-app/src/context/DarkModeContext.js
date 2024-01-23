import { createContext } from "react";
import { useState, useEffect } from "react";
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    // using usestate with inintial value fetched from the local storage with default as false in case the personin coming on the page for the first time.
    // Also JSON.Parse converts the string to boolean
    const[darkMode, SetDarkMode,] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggle= () => {
        SetDarkMode(!darkMode);
    }

    useEffect(() =>{
      localStorage.setItem("darkMode", darkMode)
    },[darkMode])

    return(
        <DarkModeContext.Provider value = {{darkMode, toggle}}>
        {children}
        </DarkModeContext.Provider>
    )
};
