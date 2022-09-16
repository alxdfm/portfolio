import styled from 'styled-components';
import { colors, fontFamily, fontSize } from '../../variables';

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 260px;
  font-family: ${fontFamily.default};
  color: ${colors.colorFont};
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
  font-size: ${fontSize.default};
`;

export const Description = styled.p`
  margin: 0;
`;
