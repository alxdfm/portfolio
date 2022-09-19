import styled from "styled-components";
import { colors, fontFamily, fontSize } from "../../variables";

export const TechTagsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
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
