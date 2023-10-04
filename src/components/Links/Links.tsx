import React, { ReactNode } from 'react';
import { LinkContainer, Image, Description } from './styles';
import { Container, ContainerFull } from '../styles';
import Github from './assets/Github';
import Linkedin from './assets/Linkedin';
import Mail from './assets/Mail';
import Mapin from './assets/Mapin';
import Twitter from './assets/Twitter';
import Work from './assets/Work';

export type Link = {
  image: ReactNode;
  description: string;
  url?: string;
};

export const linksDataDefault: Array<Link> = [
  {
    image: <Mapin />,
    description: 'Esteio, RS',
    url: '',
  },
  {
    image: <Work />,
    description: 'Vixting',
    url: 'https://vixting.com.br/',
  },
  {
    image: <Github />,
    description: 'alxdfm',
    url: 'https://github.com/alxdfm/',
  },
  {
    image: <Linkedin />,
    description: 'alxdfm',
    url: 'https://www.linkedin.com/in/alxdfm/',
  },
  {
    image: <Twitter />,
    description: 'alxdfm',
    url: 'https://twitter.com/alxdfm/',
  },
  {
    image: <Mail />,
    description: 'alexandre.fragamachado@gmail.com',
    url: 'mailto:alexandre.fragamachado@gmail.com',
  },
];

const Links = (linksData: Array<Link>) => {
  const renderLinks = (arrayLinks: Array<Link>) => {
    return arrayLinks.map((link, index) => (
      <LinkContainer key={index} href={link.url} target={'_blank'}>
        <Image>{link.image}</Image>
        <Description>{link.description}</Description>
      </LinkContainer>
    ));
  };

  return (
    <ContainerFull>
      <Container>
        {Array.isArray(linksData)
          ? renderLinks(linksData)
          : renderLinks(linksDataDefault)}
      </Container>
    </ContainerFull>
  );
};

export default Links;
