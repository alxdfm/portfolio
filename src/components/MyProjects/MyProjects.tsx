import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Title } from "../styles";
import { Description, Header, Language, Link, Name, ProjectContainer, Projects, SeeAll } from "./styles";

type ProjectType = {
  name: string;
  description: string;
  html_url: string;
  language: string;
};

export type Props = {
  title?: string;
};

const MyProjects = (props: Props) => {
  const [projectsData, setProjectsData] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    axios("https://api.github.com/users/alxdfm/repos")
      .then((response) => {
        setProjectsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderProjects = () => {
    return !projectsData ? "Não há projetos por enquanto!" : projectsData.map((project, index) => (
      !project.description ? null :
      <ProjectContainer key={index}>
        <Name>&#x1F5C1; {project.name}</Name>
        <Language>{project.language}</Language>
        <Description>{project.description}</Description>
        <Link href={project.html_url} target="_blank">Acesse o repositório!</Link>
      </ProjectContainer>
    ));
  }

  return (
    <Container>
      <Header>
        <Title>{props.title || "Meus projetos"}</Title>
        <SeeAll
          href="https://github.com/alxdfm?tab=repositories"
          target="_blank"
        >
          Veja no GitHub
        </SeeAll>
      </Header>
      <Projects>
        {renderProjects()}
      </Projects>
    </Container>
  );
};

export default MyProjects;
