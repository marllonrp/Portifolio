import { ContactContainer, ContactWrapper, Line, TextContact, TextContainer, Title } from "./ContactPageStyled"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"



export const ContactPage = ()=>{
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes} = InitialState
    const {darkMode, width} = constantes
    
    return(
        <ContactContainer id="contact" darkMode={darkMode}>
            <Title darkMode={darkMode} width={width}>Contact</Title>
            <ContactWrapper width={width}>
            <TextContainer>
            <TextContact href="https://www.linkedin.com/in/marllon-rodrigues-27aa073b/"
            target={"_blank"} darkMode={darkMode} width={width}>|LinkedIn</TextContact>
            <Line width={width}/>
            <TextContact href="https://github.com/marllonrp"
            target={"_blank"} darkMode={darkMode} width={width}>|GitHub</TextContact>
            <Line width={width}/>
            <TextContact href="https://www.instagram.com/rp.marllon/"
            target={"_blank"} darkMode={darkMode} width={width}>|Instagram</TextContact>
            <Line width={width}/>
            <TextContact href="https://github.com/marllonrp/Portifolio"
            target={"_blank"} darkMode={darkMode} width={width}>|Repositório</TextContact>
            <Line width={width}/>
            </TextContainer>
            </ContactWrapper>
        </ContactContainer>
    )


}