import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";

import Experiences from "../../components/Experiences";
import Links from "../../components/Links";
import Profile from "../../components/Profile";
import Technologies from "../../components/Technologies";
import MyProjects from "../../components/MyProjects";

import { linksDataDefault } from "../../components/Links/Links";

import { MainContent, ScreenContainer, SideContent } from "./styles";

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
        <Technologies techTags={['Javascript', 'Typescript', 'Java', 'ReactJS', 'NodeJS', 'Git', 'HTML', 'CSS', 'Styled-components', 'NestJs', 'GraphQL', 'Rest']} />
        <Experiences title="Experiências" experiences={[
          {company: 'Descomplica', start: 2022, end: 'Atualmente', role: 'Desenvolvedor Fullstack'}, 
          {company: 'AEL Sistemas', start: 2019, end: 2022, role: 'Técnico em Eletrônica'}
        ]}/>
        <Experiences title="Educação" experiences={[
          {company: 'Faculdade UniRitter', start: 2020, end: 2022, role: 'Análise e Desenvolvimento de Sistemas'},
          {company: 'Escola Técnica Parobé', start: 2017, end: 2019, role: 'Curso Técnico em Eletrônica'}
        ]}/>
      </SideContent>
      <MainContent>
        <MyProjects />
      </MainContent>
    </ScreenContainer>
  </React.StrictMode>
);
