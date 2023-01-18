import styled from "styled-components";
import darkImg from "../../assets/dark-icon.png";
import lightImg from "../../assets/light-icon.png";


export const HeaderContainer = styled.header<{
  darkMode: boolean;
  width: number;
}>`
  width: 100vw;
  height: 9vh;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  position: sticky;
  opacity: 1;
  top: 0;
  z-index: 5;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding-inline: 5vw;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

export const ThemeButton = styled.button<{ darkMode: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  background-image: url(${({ darkMode }) => (darkMode ? darkImg : lightImg)});
  background-position: center;
  background-size: contain;
  border: none;
`;
