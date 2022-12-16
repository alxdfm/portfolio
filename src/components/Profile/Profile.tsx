import React from 'react';
import { Container, ContainerFull } from '../styles';
import { Description, Name, Picture } from './styles';

export type Props = {
  name: string;
  description: string;
  url: string;
};

const Profile = (profileData: Props) => {
  return (
    <ContainerFull>
      <Container>
        <Picture url={profileData.url} />
        <Name>{profileData.name}</Name>
        <Description>{profileData.description}</Description>
      </Container>
    </ContainerFull>
  );
};

export default Profile;
