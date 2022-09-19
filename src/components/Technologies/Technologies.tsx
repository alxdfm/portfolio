import React from "react";
import { TechTags, TechTagsContainer } from "./styles";
import { Container, Title } from "../styles";

export type Props = {
  title?: string,
  techTags: string[]
}

const Technologies = (props:Props) => {

  const renderTechTags = (techTags: string[]) => {
    return techTags.map((tag: string, index: number) => (
      <TechTags key={index}>{tag}</TechTags>
    ))
  }

  return (
    <Container>
      <Title>{props.title || 'Tecnologias'}</Title>
      <TechTagsContainer>
        {renderTechTags(props.techTags)}
      </TechTagsContainer>
    </Container>
  )
}

export default Technologies;
