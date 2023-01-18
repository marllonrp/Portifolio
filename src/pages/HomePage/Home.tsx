import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  HomeContainer,
  Menu,
  MenuContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./HomeStyled";
import { BackgroundFixedImage } from "../../pages/HomePage/HomeStyled";
import backgroundFixedImg from "../../assets/HomePhoto.png";
import { Link } from "react-scroll";

export const HomePage = () => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode, width } = constantes;

  return (
    <HomeContainer id="home">
      <TitleContainer>
        <Title darkMode={darkMode} width={width}>
          Marllon Rodrigues
        </Title>
        <SubTitle darkMode={darkMode} width={width}>
          Front-End Developer
        </SubTitle>
      </TitleContainer>
      <MenuContainer>
        <BackgroundFixedImage src={backgroundFixedImg} />
        <Menu darkMode={darkMode} width={width}>
          <Link to="contact" smooth={true} duration={100}>
            |Contact
          </Link>
        </Menu>
        <Menu darkMode={darkMode} width={width}>
          <Link to="projects" smooth={true} duration={100}>
            |Projects
          </Link>
        </Menu>
        <Menu darkMode={darkMode} width={width}>
          <Link to="skills" smooth={true} duration={100}>
            |Skills
          </Link>
        </Menu>
        <Menu darkMode={darkMode} width={width}>
          <Link to="aboutMe" smooth={true} duration={100}>
            |About Me
          </Link>
        </Menu>
      </MenuContainer>
    </HomeContainer>
  );
};
