import { createContext } from "react";
import { useState, useEffect } from "react";
import myImage from './shreyas.jpg';
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    // using usestate with inintial value fetched from the local storage with default as false in case the personin coming on the page for the first time.
    // Also JSON.Parse converts the string to boolean
    const[currentUser, SetCurrentUser,] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

    const login = () => {
      // TO DO
      SetCurrentUser({
        id: 1,
        name: "Shreyas Kartikey",
        profilePic: 
        "./shreyas.jpg",

      });

    };

    useEffect(() =>{
      localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser]);

    return(
        <AuthContext.Provider value = {{currentUser, login}}>
        {children}
        </AuthContext.Provider>
    )
};
