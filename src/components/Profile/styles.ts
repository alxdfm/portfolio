import styled from 'styled-components';
import { colors } from '../../variables';

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: ${colors.colorFont};
  width: 300px;
  height: 260px;
  justify-content: center;
  align-items: center;
  background: ${colors.backgroundPrimary};
  border-radius: 20px;
`;

type UrlImage = {
  url: string
}

export const Picture = styled.div<UrlImage>(({url}) =>`
  width: 120px;
  height: 120px;
  border-radius: 124px;
  border: 2px solid ${colors.colorFont};
  background-image: url('${url}');
  background-size: cover;
`);

export const Name = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;

export const Description = styled.p`
  margin: 0;
`;
