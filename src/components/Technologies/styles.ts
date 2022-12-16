import styled from "styled-components";
import { colors, fontSize, screenSize } from "../../variables";

export const TechTagsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: ${screenSize.smartS}) {
    flex-direction: column;
  }
`;

export const TechTags = styled.h3`
  width: 90px;
  height: fit-content;
  justify-content: center;
  align-self: center;
  text-align: center;
  color: ${colors.backgroundPrimary};
  font-size: ${fontSize.small};
  font-weight: bold;
  background-color: ${colors.highlightColor};
  border: 1px solid ${colors.colorFont};
  border-radius: 16px;
  padding: 2px;
  margin: 0 0 4px 0;
`;
