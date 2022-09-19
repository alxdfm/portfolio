import styled from 'styled-components';
import { colors, fontFamily, fontSize } from '../../variables';

type UrlImage = {
  url: string
}

export const Picture = styled.div<UrlImage>(({url}) =>`
  width: 120px;
  height: 120px;
  border-radius: 124px;
  border: 4px solid ${colors.highlightColor};
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
