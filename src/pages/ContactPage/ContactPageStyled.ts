import styled from "styled-components";
import { titleAnimation } from "../../GlobalStyled";
const breakPoint = 640;

export const ContactContainer = styled.section<{ darkMode: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const Title = styled.h1<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "26px" : "44px")};
  text-transform: uppercase;
  font-weight: bolder;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 5px;
  animation: ${titleAnimation} 5s ease-in-out infinite;
`;

export const ContactWrapper = styled.article<{ width: number }>`
  width: 50%;
  height: 70%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 60%;
  height: 80%;
`;

export const TextContact = styled.a<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "23px")};
  font-weight: bold;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: ${({ width }) => (width < breakPoint ? "5px" : "10px")};
  cursor: pointer;
  &:hover {
    color: ${({ darkMode }) => (darkMode ? "#f2e6a2" : "#b3110c")};
    :active {
      filter: brightness(50%);
    }
  }
`;

export const Line = styled.hr<{ width: number }>`
  width: 35vw;
`;
