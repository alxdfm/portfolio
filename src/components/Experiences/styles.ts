import styled from "styled-components";
import { colors, fontFamily, fontSize } from "../../variables";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 0 8px;
  gap: 12px;
`;

export const ExperienceContainer = styled.div`
  width: 100%;
`;

export const Company = styled.p`
  font-weight: bold;
  font-size: ${fontSize.small};
  margin: 0;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 16px;
`;

export const Role = styled.p`
  margin: 0 0 0 16px;
`;
