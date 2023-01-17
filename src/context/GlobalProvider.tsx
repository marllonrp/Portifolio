import { GlobalContext } from "./GlobalContext"
import { useEffect, useState } from "react"

interface globalProvaiderProps {
    children:JSX.Element | JSX.Element[]
}

export interface States {
    constantes:{}
    functions:{}
}


export const GlobalProvaider = ({children}:globalProvaiderProps)=>
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)
    const [darkMode, setDarkMode]=useState(false)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }

      useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);


    const InitialState:States={
        constantes: {width, height, darkMode},
        functions: {}
    }

    return (
        <GlobalContext.Provider value={{InitialState}}>
                {children}
        </GlobalContext.Provider>
    )
}