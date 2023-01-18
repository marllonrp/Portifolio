import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  InterLinks,
  LinkContainer,
  Links,
  ProjectText,
  TextContainer,
} from "./ProjectCardStyled";

export const ProjectCard = (props: any) => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode, width } = constantes;
  const [isClicked, setIsClicked] = useState(() => false);

  useEffect(() => {
    if (isClicked === true) {
      if (props.changeBackground === props.project.image) {
        setIsClicked(true);
      } else if (props.changeBackground !== props.project.image) {
        props.setChangeBackground(props.project.image);
      }
    }

    if (isClicked === false) {
      if (props.changeBackground !== props.project.image) {
        setIsClicked(false);
      }
    }

    if (isClicked === false && props.changeBackground === props.project.image) {
      props.setChangeBackground("");
    }
  }, [isClicked]);

  useEffect(() => {
    if (props.changeBackground !== props.project.image) {
      setIsClicked(false);
    }
  }, [props.changeBackground]);

  return (
    <TextContainer>
      <ProjectText
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        width={width}
        darkMode={darkMode}
      >
        {props.project.name}
      </ProjectText>
      <LinkContainer isClicked={isClicked}>
        <Links
          href={props.project.link}
          target="_blank"
          width={width}
          darkMode={darkMode}
        >
          Projeto
        </Links>
        <InterLinks width={width} darkMode={darkMode}>
          |
        </InterLinks>
        <Links
          href={props.project.repository}
          target="_blank"
          width={width}
          darkMode={darkMode}
        >
          Repositório
        </Links>
      </LinkContainer>
    </TextContainer>
  );
};
