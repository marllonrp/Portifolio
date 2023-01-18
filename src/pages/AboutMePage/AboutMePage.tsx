import {
  AboutMeContainer,
  AboutMeText,
  AboutMeTextContainer,
  ContentContainer,
  DownloadButton,
  Iframe,
  ImageContainer,
  ImageWrapper,
  MyImage,
  TextContainer,
  Title,
} from "./AboutMeStyled";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useState } from "react";
import myImage from "../../assets/AboutMePhoto.jpeg";

export const AboutMePage = () => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode, width } = constantes;
  const LinkDownload: string =
    "http://bit.ly/3CUQqaW";
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);

  return (
    <AboutMeContainer id="aboutMe" width={width} darkMode={darkMode}>
      <ContentContainer width={width}>
        <TextContainer darkMode={darkMode}>
          <Title width={width} darkMode={darkMode}>
            About Me
          </Title>
          <AboutMeTextContainer width={width} darkMode={darkMode}>
            <AboutMeText width={width} darkMode={darkMode}>
              Olá,
            </AboutMeText>
            <AboutMeText width={width} darkMode={darkMode}>
              Meu nome é Marllon Rodrigues tenho 27 anos e sou Desenvolvedor
              Front-End.
            </AboutMeText>
            <AboutMeText width={width} darkMode={darkMode}>
              Estou em processo de transição de carreira e ainda não possuo
              experiência na área. Busco minha primeira oportunidade como Júnior
              ou Trainee na modalidade de Home Office.
            </AboutMeText>
            <AboutMeText width={width} darkMode={darkMode}>
              Em minha última experiência profissional como Técnico em
              Enfermagem Militar na Polícia Militar de Minas Gerais desenvolvi
              diversas Soft-Skills, das quais destaco o trabalho em equipe, a
              disciplina, a iniciativa na resolução de problemas e a empatia.
            </AboutMeText>
            <AboutMeText width={width} darkMode={darkMode}>
              Sou uma pessoa determinada que está sempre em busca de seus
              objetivos e sempre trabalha para executar um serviço de qualidade.
              Aberto a novos conhecimentos e aprimoramentos da organizaçaõ e do
              processo de trabalho.
            </AboutMeText>
            <AboutMeText width={width} darkMode={darkMode}>
              Prezo pela constante evolução física, intelectual e espititual.
            </AboutMeText>
          </AboutMeTextContainer>
        </TextContainer>
      </ContentContainer>
      <ImageContainer width={width}>
        {download && <Iframe src={LinkDownload + "?c=" + count} />}
        <ImageWrapper width={width} darkMode={darkMode}>
          <MyImage src={myImage} darkMode={darkMode} />
          <DownloadButton
            onClick={() => {
              setDownload(LinkDownload);
              setCount((old) => old + 1);
            }}
            width={width}
            darkMode={darkMode}
          >
            Currículo
          </DownloadButton>
        </ImageWrapper>
      </ImageContainer>
    </AboutMeContainer>
  );
};
