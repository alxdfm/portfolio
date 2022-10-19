import styled from 'styled-components';
import { colors } from '../../variables';

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