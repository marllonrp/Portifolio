import styled from "styled-components";
const breakPoint: number = 640;

export const AboutMeContainer = styled.section<{darkMode: boolean; width: number }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  display: flex;
  flex-direction: ${({ width }) =>
    width < breakPoint ? "column-reverse" : "row"};
`;

export const ContentContainer = styled.article<{ width: number }>`
  width: ${({ width }) => (width < breakPoint ? "100%" : "50%")};
  height: ${({ width }) => (width < breakPoint ? "50%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyImage = styled.img<{ darkMode: boolean }>`
  width: 80%;
  height: 80%;
  border: ${({ darkMode }) =>
    darkMode ? "3px solid black" : "3px solid white"};
`;

export const ImageContainer = styled.article<{ width: number }>`
  width: ${({ width }) => (width < breakPoint ? "100%" : "50%")};
  height: ${({ width }) => (width < breakPoint ? "50%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  filter: grayscale(90%);
  :hover {
    filter: grayscale(0%);
    transition: 2.5s !important;
    } 
`;


export const Iframe = styled.iframe`
  width: 50%;
  height: 50%;
  display: none;
`;
export const ImageWrapper = styled.div<{ darkMode: boolean; width: number }>`
  width: 70%;
  height: ${({ width }) => (width < breakPoint ? "85%" : "70%")};
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;


export const TextContainer = styled.div<{ darkMode: boolean }>`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: ${({ darkMode }) =>
    darkMode ? "7px solid white" : "7px solid black"};
`;

export const Title = styled.h1<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "26px" : "44px")};
  text-transform: uppercase;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  letter-spacing: 5px;
`;

export const AboutMeTextContainer = styled.div<{
  darkMode: boolean;
  width: number;
}>`
  width: ${({ width }) => (width < breakPoint ? "90%" : "90%")};
  height: ${({ width }) => (width < breakPoint ? "80%" : "80%")};
  text-align: justify;
  padding: 5px 0px 0px 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

export const AboutMeText = styled.p<{ darkMode: boolean; width: number }>`
  font-size: ${({ width }) => (width < breakPoint ? "12px" : "20px")};
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
`;


export const DownloadButton = styled.button<{
  darkMode: boolean;
  width: number;
}>`
  width: ${({ width }) => (width < breakPoint ? "80px" : "120px")};
  height: ${({ width }) => (width < breakPoint ? "30px" : "30px")};
  font-size: ${({ width }) => (width < breakPoint ? "10px" : "16px")};
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: ${({ darkMode }) =>
    darkMode ? "0px 0px 1px 1px black" : "0px 0px 1px 1px white"};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    box-shadow: ${({ darkMode }) =>
      darkMode ? "0px 0px 1px 1px white" : "0px 0px 1px 1px black"};
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
  :active {
    filter: brightness(50%);
  }
`