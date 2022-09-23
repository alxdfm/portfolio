import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import Experiences from "../../components/Experiences";

import Links from "../../components/Links";
import Github from "../../components/Links/assets/Github";
import Linkedin from "../../components/Links/assets/Linkedin";
import Mail from "../../components/Links/assets/Mail";
import Mapin from "../../components/Links/assets/Mapin";
import Twitter from "../../components/Links/assets/Twitter";
import Work from "../../components/Links/assets/Work";
import Profile from "../../components/Profile";
import Technologies from "../../components/Technologies";

import { Link } from "../../components/Links/Links";

import { ScreenContainer, SideContent } from "./styles";

const linksDataDefault: Array<Link> = [
  {
    image: <Mapin />,
    description: "Esteio, RS",
    url: "",
  },
  {
    image: <Work />,
    description: "Descomplica",
    url: "https://descomplica.com.br/",
  },
  {
    image: <Github />,
    description: "alxdfm",
    url: "https://github.com/alxdfm/",
  },
  {
    image: <Linkedin />,
    description: "alxdfm",
    url: "https://www.linkedin.com/in/alxdfm/",
  },
  {
    image: <Twitter />,
    description: "alxdfm",
    url: "https://twitter.com/alxdfm/",
  },
  {
    image: <Mail />,
    description: "alexandre.fragamachado@gmail.com",
    url: "mailto:alexandre.fragamachado@gmail.com",
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScreenContainer>
      <SideContent>
        <Profile
          name={"Alexandre Machado"}
          description={"Full Stack Developer"}
          url={"https://www.github.com/alxdfm.png"}
        />
        <Links {...linksDataDefault} />
        <Technologies techTags={['Javascript', 'Typescript', 'Java', 'ReactJS', 'NodeJS', 'Git', 'HTML', 'CSS', 'Styled-components']} />
        <Experiences title="Experiências" experiences={[
          {company: 'Descomplica', start: 2022, end: 'Atualmente', role: 'Desenvolvedor Fullstack'}, 
          {company: 'AEL Sistemas', start: 2019, end: 2022, role: 'Técnico em Eletrônica'}
        ]}/>
        <Experiences title="Educação" experiences={[
          {company: 'Faculdade UniRitter', start: 2020, end: 2022, role: 'Análise e Desenvolvimento de Sistemas'},
          {company: 'Escola Técnica Parobé', start: 2017, end: 2019, role: 'Curso Técnico em Eletrônica'}
        ]}/>
      </SideContent>
    </ScreenContainer>
  </React.StrictMode>
);
