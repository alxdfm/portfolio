import React from 'react';
import { Title, Container, ContainerFull } from '../styles';
import {
  Company,
  ContentContainer,
  ExperienceContainer,
  Role,
  TimeContainer,
} from './styles';

export type Experience = {
  company: string;
  start: string;
  end: string | 'Atualmente';
  role: string;
};

export type Props = {
  title?: string;
  experiences: Array<Experience>;
};

const Experiences = (props: Props) => {
  const renderExperiences = (experiences: Array<Experience>) => {
    return experiences.map((experience, index) => (
      <ExperienceContainer key={index}>
        <Company>・{experience.company}</Company>
        <TimeContainer>
          {experience.start}&nbsp;‒&nbsp;{experience.end}
        </TimeContainer>
        <Role>{experience.role}</Role>
      </ExperienceContainer>
    ));
  };

  return (
    <ContainerFull>
      <Container>
        <Title>{props.title}</Title>
        <ContentContainer>
          {renderExperiences(props.experiences)}
        </ContentContainer>
      </Container>
    </ContainerFull>
  );
};

export default Experiences;
