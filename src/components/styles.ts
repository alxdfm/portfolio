import styled from "styled-components";
import { fontSize, colors, fontFamily, screenSize } from "../variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: ${fontFamily.default};
  color: ${colors.colorFont};
  border-radius: 20px;
  background-color: ${colors.backgroundPrimary};
  padding: 20px;
  box-shadow: 2px 2px ${colors.highlightColor};

  @media only screen and (max-width: ${screenSize.smartL}) {
    padding: 10px;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-weight: 700;
  font-size: ${fontSize.large};
  color: ${colors.colorFont};
  margin: 0 0 20px 0;

  @media only screen and (max-width: ${screenSize.smartM}) {
    font-size: ${fontSize.small};
  }
`;
