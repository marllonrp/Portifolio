import { AboutMeContainer, AboutMeText, AboutMeTextContainer, ContentContainer, DownloadButton, Iframe, ImageContainer, ImageWrapper, MyImage, TextContainer, Title } from "./AboutMeStyled"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useState } from "react"
import myImage from "../../assets/AboutMePhoto.jpeg"


export const AboutMePage = ()=>{
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes} = InitialState
    const {darkMode, width} = constantes
    const LinkDownload:string = "https://bit.ly/3H4t8lF"
    const [download, setDownload]= useState("")
    const [count, setCount] = useState(0)

console.log(count)
    return(
        <AboutMeContainer width={width} darkMode={darkMode}>
            <ContentContainer width={width}>
                <TextContainer darkMode={darkMode}>
                    <Title width={width} darkMode={darkMode}>About Me</Title>
                    <AboutMeTextContainer width={width} darkMode={darkMode}>
                        <AboutMeText width={width} darkMode={darkMode}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quia? Iusto vel numquam totam, sint delectus maiores est? Id facere ullam reprehenderit veniam minima cumque vitae cum. Cum, iusto labore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi eaque possimus officia, quas libero inventore quae, delectus voluptatibus, fugit quasi natus suscipit molestiae impedit magnam voluptate? Praesentium, molestias provident?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sunt obcaecati nesciunt dicta deleniti modi repellendus nisi magnam enim vero ad qui iste, maiores numquam consequuntur! Numquam ipsa beatae consequuntur?</AboutMeText>

                    </AboutMeTextContainer>

                </TextContainer>

            </ContentContainer>
             <ImageContainer width={width}>
             {download &&<Iframe src={LinkDownload+"?c="+count}/>}
             <ImageWrapper width={width} darkMode={darkMode}>
            <MyImage src={myImage} darkMode={darkMode}/>
             <DownloadButton onClick={()=>{
                    setDownload(LinkDownload)
                    setCount(old=>old+1)}} width={width} darkMode={darkMode}>
                    Currículo
                </DownloadButton>
             </ImageWrapper>
              

            </ImageContainer>
          
        </AboutMeContainer>
    )


}