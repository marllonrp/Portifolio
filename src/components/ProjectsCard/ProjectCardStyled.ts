import styled from "styled-components";
const breakPoint = 640;

export const LinkContainer = styled.div<{ isClicked: boolean }>`
  width: 120%;
  height: 90%;
  display: flex;
  margin-top:-2vh;
  align-items: center;
  justify-content: center;
  gap: 10px;
  visibility: ${({ isClicked }) => (isClicked ? "visible" : "hidden")};
  transition: 0s !important;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  transition:0s !important;
`;

export const ProjectText = styled.h3<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "23px")};
  text-transform: uppercase;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  letter-spacing: 10px;
  cursor: pointer;
  font-weight: bold;
  z-index: 3;
  transition: 0s !important;
  :hover {
    color: ${({ darkMode }) => (darkMode ? "#f2e6a2" : "#b3110c")};
  }
  :active {
    filter: brightness(50%);
  }
`;

export const Links = styled.a<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "23px")};
  text-transform: capitalize;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  cursor: pointer;
  letter-spacing: 3px;
  text-decoration: none;
  transition:none !important;
  :hover {
    color: ${({ darkMode }) => (darkMode ? "#f2e6a2" : "#b3110c")};
  }
  :active {
    filter: brightness(50%);
  }
`;

export const InterLinks = styled.p<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "23px")};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  transition: 0s !important;
`;
