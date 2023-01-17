import { AboutMePage } from "../../pages/AboutMePage/AboutMePage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";
import { HomePage } from "../../pages/HomePage/Home";
import { ProjectsPage } from "../../pages/ProjectsPage/Projects";
import { SkillsPage } from "../../pages/SkillsPage/SkillsPage";

import { GlobalContext } from "../../context/GlobalContext";
import React, { useContext } from "react";
import {
  LayoutContainer,
  LayoutWrapper,
} from "./LayoutStyled";


export const Main = () => {
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes} = InitialState
    const {darkMode} = constantes

  return (
    <LayoutWrapper darkMode={darkMode}>
      
      <LayoutContainer>
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </LayoutContainer>
    </LayoutWrapper>
  );
};
