import React from "react";
import { Container, Title, TechTags, TechTagsContainer } from "./styles";

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
