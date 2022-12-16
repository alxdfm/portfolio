import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Title } from '../styles';
import {
  Description,
  Header,
  Language,
  Link,
  Name,
  ProjectContainer,
  Projects,
  SeeAll,
} from './styles';

export type ProjectType = {
  name: string;
  description: string;
  html_url: string;
  language: string;
};

export type Props = {
  title?: string;
  projects: ProjectType[] | null;
  repoLink: string;
};

const MyProjects = (props: Props) => {
  const renderProjects = () => {
    return !props.projects
      ? 'Não há projetos por enquanto!'
      : props.projects.map((project, index) =>
          !project.description ? null : (
            <ProjectContainer key={index}>
              <Name>&#x1F4C2; {project.name}</Name>
              <Language>{project.language}</Language>
              <Description>{project.description} </Description>
              <Link href={project.html_url} target="_blank">
                Acesse o repositório!
              </Link>
            </ProjectContainer>
          )
        );
  };

  return (
    <Container>
      <Header>
        <Title>{props.title || 'Meus projetos'}</Title>
        <SeeAll href={props.repoLink} target="_blank">
          Veja no GitHub
        </SeeAll>
      </Header>
      <Projects>{renderProjects()}</Projects>
    </Container>
  );
};

export default MyProjects;
