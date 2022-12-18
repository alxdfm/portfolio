import styled from 'styled-components';
import { colors, fontSize, screenSize } from '../../variables';

type UrlImage = {
  url: string;
};

export const Picture = styled.div<UrlImage>`
  width: 120px;
  height: 120px;
  border-radius: 124px;
  border: 4px solid ${colors.highlightColor};
  background-image: url(${(props) => props.url});
  background-size: cover;

  @media only screen and (max-width: ${screenSize.smartS}) {
    width: 80px;
    height: 80px;
  }

  @media only screen and (max-width: ${screenSize.smartL}) {
    margin-top: 14px;
  }
`;

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
