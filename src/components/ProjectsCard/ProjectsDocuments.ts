import eeveeProject from "../../assets/ProjectEevee.png";
import spaceLibProject from "../../assets/ProjectSpacelip.png";
import pokedexProject from "../../assets/ProjectPokedex.png";

export type TProjects = {
  name: string;
  image: string;
  link: string;
  repository: string;
};

export const arrayProjects: TProjects[] = [];

const projectEevee: TProjects = {
  name: "Eevee's Evolutions",
  image: eeveeProject,
  link: "https://marllonrp.github.io/projeto-intro-web/",
  repository: "https://github.com/marllonrp/projeto-intro-web",
};

const projectSpaceLip: TProjects = {
  name: "SpaceLip Store",
  image: spaceLibProject,
  link: "https://projeto-frontendreact-chi.vercel.app/",
  repository: "https://github.com/marllonrp/projeto-frontendreact",
};

const projectPokedex: TProjects = {
  name: "Pokédex",
  image: pokedexProject,
  link: "https://projeto-react-apis-green.vercel.app/",
  repository: "https://github.com/marllonrp/projeto-react-apis",
};

arrayProjects.push(projectEevee, projectSpaceLip, projectPokedex);
