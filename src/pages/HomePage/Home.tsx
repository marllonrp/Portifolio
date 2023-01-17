import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { HomeContainer, Menu, MenuContainer, SubTitle,  Title, TitleContainer } from "./HomeStyled"
import { BackgroundFixedImage } from "../../pages/HomePage/HomeStyled";
import backgroundFixedImg from "../../assets/HomePhoto.png"

export const HomePage = ()=>{
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes} = InitialState
    const {darkMode, width} = constantes 


    return(
        <HomeContainer>
            <TitleContainer>
            <Title  darkMode={darkMode} width={width}>Marllon Rodrigues</Title>
            <SubTitle darkMode={darkMode} width={width}>Front-End Developer</SubTitle>
            </TitleContainer> 
            <MenuContainer>
            <BackgroundFixedImage src={backgroundFixedImg}/>
            <Menu darkMode={darkMode} width={width}>|Contact</Menu>
            <Menu darkMode={darkMode} width={width}>|Projects</Menu>
            <Menu darkMode={darkMode} width={width}>|Skills</Menu>
            <Menu darkMode={darkMode} width={width}>|About Me</Menu>
            </MenuContainer>
        </HomeContainer>
    )


}