import styled from "styled-components";

export const LayoutWrapper = styled.main<{ darkMode: boolean }>`
  display: flex;
  font-family: "Bodoni Moda", serif;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  z-index: -3;
`;
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  z-index: 2;
`;
