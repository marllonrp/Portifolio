import styled from "styled-components";
import { getIn } from "../../GlobalStyled";
const breakPoint: number = 640;

export const BackgroundFixedImage = styled.img`
  width: 100vw;
  height: 110vh;
  opacity: 0.3;
  filter: grayscale(100%);
  position: fixed;
  z-index: -1;
  margin-left: -8%;
  margin-bottom: -7%;
  animation: ${getIn} 4s ease-in-out;
`;
export const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "26px" : "52px")};
  text-transform: uppercase;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 10px;
  margin-top: -12vh;
  transition: 0s !important;
  :hover {
    color: ${({ darkMode }) => (darkMode ? "#f2e6a2" : "#b3110c")};
  }
`;

export const SubTitle = styled.h3<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "12px" : "28px")};
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 5px;
`;
export const Menu = styled.h3<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "23px")};
  text-transform: uppercase;
  font-weight: bolder;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 10px;
  cursor: pointer;
  transition: 0s !important;
  &:hover {
    color: ${({ darkMode }) => (darkMode ? "#f2e6a2" : "#b3110c")};
    :active {
      filter: brightness(50%);
    }
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  padding-top: 7%;
  padding-right: 5%;
`;

export const MenuContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 7%;
  padding-left: 7%;
  :hover {
    ${BackgroundFixedImage} {
      transform: scale(1.1);
      opacity: 0.75;
      filter: grayscale(40%);
      transition: 8s ease-in-out !important;
    }
  }
`;

