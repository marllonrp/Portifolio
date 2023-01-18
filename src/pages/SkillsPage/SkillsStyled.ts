import styled from "styled-components";
import { titleAnimation } from "../../GlobalStyled";
const breakPoint: number = 640;

export const SkillsContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "26px" : "44px")};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 5px;
  animation: ${titleAnimation} 5s ease-in-out infinite;
`;
export const SkillWrapper = styled.article<{ width: number }>`
  width: 80%;
  height: 80%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ width }) => (width < breakPoint ? "60px" : "25px")};
  column-gap: 20px;
  overflow: ${({ width }) => (width < breakPoint ? "auto" : "none")};
  padding-top: ${({ width }) => (width < breakPoint ? "60px" : "10px")};
  padding-bottom: ${({ width }) => (width < breakPoint ? "20px" : "0px")};
`;
