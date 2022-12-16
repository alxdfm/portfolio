import styled from 'styled-components';
import { colors, fontSize, screenSize } from '../../variables';

type UrlImage = {
  url: string;
};

export const Picture = styled.div<UrlImage>(
  ({ url }) => `
  width: 120px;
  height: 120px;
  border-radius: 124px;
  border: 4px solid ${colors.highlightColor};
  background-image: url('${url}');
  background-size: cover;

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 80px;
    height: 80px;
  }
`
);

export const Name = styled.h1`
  font-weight: 700;
  font-size: ${fontSize.default};

  @media only screen and (max-width: ${screenSize.smartS}) {
    font-size: ${fontSize.ultraSmall};
    text-align: center;
  }
`;

export const Description = styled.p`
  margin: 0;
`;
