import styled from "styled-components";
import { titleAnimation } from "../../GlobalStyled";
const breakPoint: number = 640;

export const ProjectsContainer = styled.section<{ darkMode: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "26px" : "44px")};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 5px;
  animation: ${titleAnimation} 5s ease-in-out infinite;
`;

export const ProjectsWrapper = styled.article<{
  changeBackground: string;
  darkMode: boolean;
}>`
  width: 90%;
  height: 80%;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${({ changeBackground }) => changeBackground});
    background-position: top;
    background-size: cover;
    filter: grayscale(60%);
    opacity: 0.25;
    transition: 0.8s !important;
  }
`;
