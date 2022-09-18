import styled from "styled-components";
import { colors, fontFamily, fontSize } from "../../variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily.default};
  width: 300px;
  height: auto;
  border-radius: 20px;
  background-color: ${colors.backgroundPrimary};
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${fontSize.large};
  color: ${colors.colorFont};
  margin: 0 0 20px 0;
`;

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
  font-weight: 400;
  background-color: ${colors.highlightColor};
  border: 1px solid ${colors.colorFont};
  border-radius: 16px;
  padding: 2px;
  margin: 0 0 4px 0;
`;
