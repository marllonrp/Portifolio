import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useState } from "react"
import { HeaderContainer, ThemeButton } from "./HeaderStyled"
import { Navigationbar } from "./NavigationBar/NavigationBar"

export const Header = ()=>{
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes, functions} = InitialState
    const {darkMode, width} = constantes
    const {setDarkMode} = functions

    return (
        <HeaderContainer width={width} darkMode={darkMode}>
            <Navigationbar/>
            <ThemeButton onClick={()=>{setDarkMode(!darkMode)}} darkMode={darkMode}/>
        </HeaderContainer>
    )
}