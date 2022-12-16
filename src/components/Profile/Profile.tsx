import React from 'react';
import { Container } from '../styles';
import { Description, Name, Picture } from './styles';

export type Props = {
  name: string;
  description: string;
  url: string;
};

const Profile = (profileData: Props) => {
  return (
    <Container>
      <Picture url={profileData.url} />
      <Name>{profileData.name}</Name>
      <Description>{profileData.description}</Description>
    </Container>
  );
};

export default Profile;
