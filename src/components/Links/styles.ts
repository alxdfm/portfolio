import styled from 'styled-components';
import { colors, fontFamily, fontSize } from '../../variables';

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.default};
  font-size: ${fontSize.small};
  width: 300px;
  height: 240px;
  border-radius: 20px;
  background-color: ${colors.backgroundPrimary};
  padding: 20px;
`;

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 100%;
  height: 20px;
  padding: 10px 0;
`;

export const Image = styled.div`
  width: 24px;
  height: 24px;
`;

export const Description = styled.p`
  align-self: center;
  padding-left: 10px;
  margin: 4px 0 0 0;
  color: ${colors.colorFont};
`;