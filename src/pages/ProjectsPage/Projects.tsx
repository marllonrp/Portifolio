import {  ProjectsContainer, ProjectsWrapper, Title } from "./ProjectsStyled"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { arrayProjects } from "../../components/ProjectsCard/ProjectsDocuments"
import { ProjectCard } from "../../components/ProjectsCard/ProjectCard"




export const ProjectsPage = ()=>{
    const {InitialState}:any = useContext(GlobalContext)
    const {constantes} = InitialState
    const {darkMode, width, height} = constantes
    const [changeBackground, setChangeBackground] = useState("")
  
    
    return(
        <ProjectsContainer darkMode={darkMode}>
          <Title darkMode={darkMode} width={width}>Projects</Title>
          <ProjectsWrapper changeBackground={changeBackground} darkMode={darkMode}>
              {arrayProjects.map(project=><ProjectCard key={project.name} project={project} setChangeBackground = {setChangeBackground}
              changeBackground={changeBackground}/>)}
          </ProjectsWrapper>
        </ProjectsContainer>
    )

}