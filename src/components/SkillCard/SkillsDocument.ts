import Html from "../../assets/IconHtml.png";
import Css from "../../assets/IconCSS.png"
import JS from "../../assets/IconJS.png";
import iconReact from "../../assets/IconReact.png";
import iconNode from "../../assets/Node.png";
import iconTypeScript from "../../assets/Type.png";
import iconChakra from "../../assets/Chakra.png";
import iconGitHub from "../../assets/Github.png";
import iconEnglih from "../../assets/English.png";
import iconSpanish from "../../assets/Spanish.png";

type TSkills = {
  name: string;
  image: string;
  level: number;
  color: string;
};

export const arrayOfSkills: TSkills[] = [];

const html: TSkills = {
  name: "HTML",
  image: `${Html}`,
  level: 5,
  color: "#ff7200",
};

const css: TSkills = {
  name: "CSS",
  image: `${Css}`,
  level: 4,
  color: "#0cb7f2",
};

const javaScript: TSkills = {
  name: "JavaScript",
  image: `${JS}`,
  level: 4,
  color: "#eebb00",
};

const react: TSkills = {
  name: "CSS",
  image: `${iconReact}`,
  level: 4,
  color: "#53d4ff",
};

const node: TSkills = {
  name: "Node",
  image: `${iconNode}`,
  level: 2,
  color: "#32cd32",
};

const typeScript: TSkills = {
  name: "TypeScript",
  image: `${iconTypeScript}`,
  level: 3,
  color: "#000080",
};

const chakra: TSkills = {
  name: "Chakra UI",
  image: `${iconChakra}`,
  level: 3,
  color: "#8fe3ff",
};

const github: TSkills = {
  name: "GitHub",
  image: `${iconGitHub}`,
  level: 3,
  color: "#aaaaaa",
};

const english: TSkills = {
  name: "English",
  image: `${iconEnglih}`,
  level: 3,
  color: "#df2c14",
};

const spanish: TSkills = {
  name: "Spanish",
  image: `${iconSpanish}`,
  level: 4,
  color: "#f3d500",
};

arrayOfSkills.push(
  html,
  css,
  javaScript,
  node,
  typeScript,
  chakra,
  github,
  english,
  spanish
);
