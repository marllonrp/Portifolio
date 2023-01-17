import { useContext } from "react";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import { arrayOfSkills } from "../../components/SkillCard/SkillsDocument";
import { GlobalContext } from "../../context/GlobalContext";
import { SkillsContainer, SkillWrapper, Title } from "./SkillsStyled";

export const SkillsPage = () => {
  const { InitialState }: any = useContext(GlobalContext);
  const { constantes } = InitialState;
  const { darkMode, width } = constantes;

  return (
    <SkillsContainer>
      <Title darkMode={darkMode} width={width}>
        Skills
      </Title>
      <SkillWrapper width={width}>
        {arrayOfSkills.map((icon) => (
          <SkillCard icon={icon} key={icon.name} />
        ))}
      </SkillWrapper>
    </SkillsContainer>
  );
};
