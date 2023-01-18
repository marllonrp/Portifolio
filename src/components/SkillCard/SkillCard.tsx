import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  CardTitle,
  IconImage,
  LevelBox1,
  LevelBox2,
  LevelBox3,
  LevelBox4,
  LevelBox5,
  SkillCardContainer,
  SkillLevelContainer,
} from "./SkillCardStyled";

export const SkillCard = ({ icon }: any) => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode, width } = constantes;

  return (
    <SkillCardContainer
      darkMode={darkMode}
      colored={icon.color}
      level={icon.level}
    >
      <IconImage src={icon.image} />
      <CardTitle darkMode={darkMode} width={width}>
        {icon.name}{" "}
      </CardTitle>
      <SkillLevelContainer>
        <LevelBox1 darkMode={darkMode} />
        <LevelBox2 darkMode={darkMode} />
        <LevelBox3 darkMode={darkMode} />
        <LevelBox4 darkMode={darkMode} />
        <LevelBox5 darkMode={darkMode} />
      </SkillLevelContainer>
    </SkillCardContainer>
  );
};
